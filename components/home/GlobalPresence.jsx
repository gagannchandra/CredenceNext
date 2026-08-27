"use client";

import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import TextReveal from "../ui/motion/TextReveal";
import FadeUp from "../ui/motion/FadeUp";
import { ease, duration } from "../../utils/motion";

// react-globe.gl reaches for `window`/WebGL at import time, so it can only
// ever run on the client. Splitting it into its own chunk also means the
// three.js + globe bundle never ships to visitors who never scroll far
// enough to see it (see the in-view gate below).
//
// three itself is imported the same way, lower down, rather than at module
// scope: a static `import * as THREE from "three"` here put the whole engine
// (83kB gzipped, a third of the homepage's total script weight) on the
// critical path of every first visit, which defeated the point of splitting
// the globe out at all.
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

// Served from public/ rather than raw.githubusercontent.com: the remote copy
// was a single point of failure - any rate-limit, offline dev session or
// strict CSP left the globe as a featureless dark sphere with no continents.
const GEOJSON_URL = "/data/ne_110m_admin_0_countries.geojson";
const GEOJSON_CACHE_KEY = "credence:globe-geojson:v2";

const DUBAI = { lat: 25.2048, lng: 55.2708 };

const POINTS = [
  // --- RIGHT SIDE (dx > 0) ---
  { lat: 25.7895, lng: 55.9432, city: "Ras Al Khaimah", country: "UAE", dx: 140, dy: -135 },
  { lat: 25.5647, lng: 55.5552, city: "Umm Al Quwain", country: "UAE", dx: 180, dy: -90 },
  { lat: 25.4052, lng: 55.5136, city: "Ajman", country: "UAE", dx: 210, dy: -45 },
  { lat: 25.3573, lng: 55.4033, city: "Sharjah", country: "UAE", dx: 230, dy: 0 },
  { lat: 25.2048, lng: 55.2708, city: "Dubai", country: "UAE", dx: 210, dy: 45 },
  { lat: 25.1288, lng: 56.3265, city: "Fujairah", country: "UAE", dx: 180, dy: 90 },
  { lat: 23.5859, lng: 58.4059, city: "Muscat", country: "Oman", dx: 140, dy: 135 },
  { lat: 19.0760, lng: 72.8777, city: "Mumbai", country: "India", dx: 180, dy: 180 },

  // --- LEFT SIDE (dx < 0) ---
  { lat: 43.6532, lng: -79.3832, city: "Toronto", country: "Canada", dx: -220, dy: -135 },
  { lat: 41.9028, lng: 12.4964, city: "Rome", country: "Italy", dx: -180, dy: -90 },
  { lat: 29.3759, lng: 47.9774, city: "Kuwait City", country: "Kuwait", dx: -160, dy: -45 },
  { lat: 25.2854, lng: 51.5310, city: "Doha", country: "Qatar", dx: -120, dy: 0 },
  { lat: 26.2235, lng: 50.5822, city: "Manama", country: "Bahrain", dx: -160, dy: 45 },
  { lat: 24.4539, lng: 54.3773, city: "Abu Dhabi", country: "UAE", dx: -150, dy: 90 },
  { lat: 24.7136, lng: 46.6753, city: "Riyadh", country: "Saudi Arabia", dx: -180, dy: 135 },
];

const ARCS_DATA = POINTS.filter((p) => p.city !== "Dubai").map((p) => ({
  startLat: DUBAI.lat,
  startLng: DUBAI.lng,
  endLat: p.lat,
  endLng: p.lng,
}));

/** Fires once the target is within `rootMargin` of the viewport, then disconnects. */
function useInView(ref, rootMargin = "400px") {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (inView || !ref.current || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, inView, rootMargin]);

  return inView;
}

export default function GlobalPresence() {
  const globeRef = useRef();
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  // The rAF loop below is created once and never re-created, so it must read
  // these through refs - a captured state value would be frozen at init time
  // and the "pause when hidden" / reduced-motion checks would never fire.
  const prefersReducedMotionRef = useRef(false);
  const isTabVisibleRef = useRef(true);
  const teardownRef = useRef({ renderer: null, scene: null });

  const prefersReducedMotion = useReducedMotion();
  const shouldRender = useInView(sectionRef); // gate: fetch + mount only near viewport
  const [isGlobeReady, setIsGlobeReady] = useState(false); // gate: reveal once painted
  const [isGlobeMounted, setIsGlobeMounted] = useState(false); // gate: instance exists
  const [isLowPower, setIsLowPower] = useState(false);
  const [three, setThree] = useState(null); // gate: three.js chunk resolved

  const [globeSize, setGlobeSize] = useState({
    width: typeof window !== "undefined" ? Math.min(window.innerWidth - 32, 1000) : 1000,
    height: typeof window !== "undefined" ? Math.min(window.innerWidth - 32, 1000) : 1000,
  });
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  const [hexData, setHexData] = useState([]);

  const customGlobeMaterial = useMemo(() => {
    if (!three) return null;
    const mat = new three.MeshPhongMaterial();
    mat.color = new three.Color("#030408");
    mat.transparent = true;
    mat.opacity = 0.9;
    mat.shininess = 1;
    return mat;
  }, [three]);

  // Pull three in on the same trigger as the globe chunk. Both resolve to the
  // same module instance, so the material built here is the very one
  // react-globe.gl's renderer expects.
  useEffect(() => {
    if (!shouldRender || three) return;

    let cancelled = false;
    import("three")
      .then((mod) => {
        if (!cancelled) setThree(mod);
      })
      .catch((err) => console.error("Globe: three.js failed to load", err));

    return () => {
      cancelled = true;
    };
  }, [shouldRender, three]);

  // Low-end devices already get a `perf-low` class from the hardware
  // sniffer in the root layout - reuse that signal so the heaviest 3D
  // element on the site scales itself down instead of tanking the frame rate.
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.documentElement.classList.contains("perf-low")) {
      queueMicrotask(() => setIsLowPower(true));
    }
  }, []);

  // Pause all rendering work (rAF loop + auto-rotate) when the tab isn't
  // visible - a backgrounded tab has no business spinning a WebGL globe.
  useEffect(() => {
    // Ref only - flipping React state here would re-render the whole section
    // (and the globe) on every tab switch for no visual benefit.
    const handleVisibility = () => {
      isTabVisibleRef.current = document.visibilityState === "visible";
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  useEffect(() => {
    prefersReducedMotionRef.current = Boolean(prefersReducedMotion);
  }, [prefersReducedMotion]);

  // Fetch the countries geojson once we're actually about to show the
  // globe, and cache it in sessionStorage so client-side navigation back to
  // the homepage later in the same session is instant and network-free.
  useEffect(() => {
    if (!shouldRender) return;

    const controller = new AbortController();

    const cached = (() => {
      try {
        const raw = sessionStorage.getItem(GEOJSON_CACHE_KEY);
        return raw ? JSON.parse(raw) : null;
      } catch {
        return null;
      }
    })();

    if (cached) {
      queueMicrotask(() => setHexData(cached));
      return;
    }

    fetch(GEOJSON_URL, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`Globe geojson: HTTP ${res.status}`);
        return res.json();
      })
      .then((countries) => {
        setHexData(countries.features);
        try {
          sessionStorage.setItem(GEOJSON_CACHE_KEY, JSON.stringify(countries.features));
        } catch {
          // sessionStorage can throw in private-browsing / quota-exceeded cases - non-fatal
        }
      })
      .catch((err) => {
        if (err.name !== "AbortError") console.error(err);
      });

    return () => controller.abort();
  }, [shouldRender]);

  // Fired by react-globe.gl once the instance is constructed and the ref is
  // populated. Previously initialisation was kicked off by a bare 150ms
  // setTimeout, which raced the `next/dynamic` chunk load: on the very first
  // visit the globe module had not resolved yet, so `globeRef.current` was
  // still null, the effect bailed out early and - because none of its
  // dependencies ever changed again - never retried. The result was a globe
  // that was configured, lit and revealed on exactly nobody's machine: the
  // section sat on its "Mapping Our Global Reach" skeleton forever. Keying
  // off the instance's own ready callback removes the race entirely.
  const handleGlobeMounted = useCallback(() => {
    setIsGlobeMounted(true);
  }, []);

  const isSectionVisibleRef = useRef(true);

  const applyPointOfView = useCallback(() => {
    const globe = globeRef.current;
    if (!globe) return;
    globe.pointOfView({
      lat: 25,
      lng: 55,
      altitude: window.innerWidth < 768 ? 3.8 : 2.9,
    });
  }, []);

  useEffect(() => {
    if (!sectionRef.current || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isSectionVisibleRef.current = entry.isIntersecting;
        const controls = globeRef.current?.controls?.();
        if (controls) {
          controls.autoRotate = entry.isIntersecting && !prefersReducedMotion;
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  // Scene setup: renderer tuning, camera framing and studio lighting.
  // Re-runs only if the power profile changes, and its cleanup removes just
  // the lights it added - GPU resources are released once, on unmount, by the
  // teardown effect below. (Disposing geometries/materials here used to run on
  // every re-run and could leave the memoised globe material disposed but
  // still mounted.)
  useEffect(() => {
    if (!isGlobeMounted || !three) return;
    const globe = globeRef.current;
    if (!globe) return;

    const renderer = globe.renderer();
    if (renderer) {
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isLowPower ? 1.5 : 2));
      renderer.toneMapping = three.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.3;
      renderer.outputColorSpace = three.SRGBColorSpace;
    }

    const controls = globe.controls();
    if (controls) {
      controls.autoRotate = !prefersReducedMotion && isSectionVisibleRef.current;
      controls.autoRotateSpeed = 0.5;
      controls.enableZoom = false;
      controls.enablePan = false;
    }

    // Cinematic angle (matched to the oversized canvas so the globe keeps its
    // intended on-screen size).
    applyPointOfView();

    const scene = globe.scene();
    if (!scene) return;

    teardownRef.current = { renderer, scene };

    // Drop react-globe.gl's default lighting in favour of the studio rig.
    const defaultLights = scene.children.filter((obj) => obj.isLight);
    defaultLights.forEach((light) => scene.remove(light));

    const keyLight = new three.DirectionalLight("#D4AF37", 5);
    keyLight.position.set(-200, 100, 200);

    const fillLight = new three.DirectionalLight("#3e4e68", 3);
    fillLight.position.set(200, -50, 100);

    const rimLight = new three.DirectionalLight("#F3E5AB", 8);
    rimLight.position.set(-200, 150, -250);

    const ambientLight = new three.AmbientLight("#ffffff", 0.2);

    const addedLights = [keyLight, fillLight, rimLight, ambientLight];
    addedLights.forEach((light) => scene.add(light));

    setIsGlobeReady(true);

    return () => {
      addedLights.forEach((light) => {
        scene.remove(light);
        light.dispose?.();
      });
    };
  }, [isGlobeMounted, isLowPower, prefersReducedMotion, applyPointOfView, three]);

  // Bespoke idle motion. Created once and left running; the guards inside read
  // live values through refs so the loop genuinely idles when the tab is
  // backgrounded or the section scrolls away.
  useEffect(() => {
    if (!isGlobeMounted) return;
    const scene = globeRef.current?.scene?.();
    if (!scene) return;

    let animationFrameId;
    let time = 0;

    const animate = () => {
      if (
        !prefersReducedMotionRef.current &&
        isTabVisibleRef.current &&
        isSectionVisibleRef.current
      ) {
        time += 0.002;
        scene.position.y = Math.sin(time) * 0.3; // imperceptible float
        scene.scale.setScalar(1.0 + Math.sin(time * 0.5) * 0.002); // slow breath
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [isGlobeMounted]);

  // Release GPU resources exactly once, when the section leaves the tree.
  useEffect(() => {
    return () => {
      const { renderer, scene } = teardownRef.current;
      scene?.traverse((object) => {
        if (!object.isMesh) return;
        object.geometry?.dispose();
        const material = object.material;
        if (Array.isArray(material)) material.forEach((m) => m.dispose());
        else material?.dispose();
      });
      renderer?.dispose();
    };
  }, []);

  useEffect(() => {
    const updateSize = () => {
      setWindowWidth((prev) => (prev === window.innerWidth ? prev : window.innerWidth));
      if (!containerRef.current) return;
      const width = containerRef.current.offsetWidth;
      const isMobile = window.innerWidth < 768;

      // Much larger canvas scale to prevent label clipping, altitude adjusted to match
      const scale = isMobile ? 1.6 : 1.8;
      const size = Math.min(width * scale, 1800);

      setGlobeSize((prev) => {
        if (prev.width === size && prev.height === size) return prev;
        return { width: size, height: size };
      });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const setAutoRotateSpeed = (speed) => {
    if (prefersReducedMotion) return;
    const controls = globeRef.current?.controls?.();
    if (controls) controls.autoRotateSpeed = speed;
  };

  const handleMouseEnter = () => setAutoRotateSpeed(0.05);
  const handleMouseLeave = () => setAutoRotateSpeed(0.5);

  const isMobile = windowWidth < 768;
  const labelScale = isMobile ? Math.max(windowWidth / 768, 0.45) : 1;

  // Scale dx and dy to fit nicely on mobile screens
  const scaledPoints = POINTS.map((p) => ({
    ...p,
    scaledDx: p.dx * labelScale,
    scaledDy: p.dy * (isMobile ? 0.85 : 1), // Keep vertical spacing large enough to prevent overlap
  }));

  // Low-end devices get a coarser hex grid and fewer/slower-animating arcs
  // so the frame rate holds up on the very hardware that needs it most.
  const hexPolygonResolution = isLowPower ? 2 : 3;
  const arcDashAnimateTime = prefersReducedMotion ? 0 : isLowPower ? 4500 : 3000;

  return (
    <section
      ref={sectionRef}
      className="relative bg-transparent z-10 py-20 md:py-32 overflow-hidden flex items-center min-h-screen md:min-h-[90vh]"
    >
      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 md:px-16">
        <div className="grid md:grid-cols-12 gap-8 items-center">

          {/* LEFT */}
          <div className="md:col-span-5 relative z-20 xl:pl-8 flex flex-col items-center md:items-start text-center md:text-left mb-12 md:mb-0">
            <FadeUp delay={0}>
              <p className="uppercase tracking-[0.4em] text-xs text-brand-gold mb-6 font-medium">
                Worldwide Reach
              </p>
            </FadeUp>

            <h2 className="text-fluid-h1 font-serif text-content-primary leading-[1.05] tracking-tight mb-2 flex flex-col gap-2">
              <TextReveal text="Global" />
              <TextReveal text="Presence" delay={2} className="italic text-brand-gold" />
            </h2>
            
            <div className="w-16 h-[1px] bg-brand-gold/30 my-6 md:my-8"></div>

            <FadeUp delay={4}>
              <p className="text-content-primary/60 max-w-[420px] leading-relaxed font-light text-base md:text-lg mb-0 md:mb-10">
                We engineer bespoke architectural lighting solutions and deliver transformative visual experiences for the world&rsquo;s most exclusive commercial and hospitality destinations.
              </p>
            </FadeUp>
            
            {/* DESKTOP ONLY BOTTOM CONTENT */}
            <div className="hidden md:block w-full">
              <FadeUp delay={6}>
                <p className="text-xs md:text-xs tracking-[0.25em] leading-[2.2] text-brand-gold/90 uppercase font-medium max-w-[420px]">
                  UAE &nbsp;&bull;&nbsp; Saudi Arabia &nbsp;&bull;&nbsp; Bahrain &nbsp;&bull;&nbsp; Qatar &nbsp;&bull;&nbsp; Kuwait &nbsp;&bull;&nbsp; Oman &nbsp;&bull;&nbsp; India &nbsp;&bull;&nbsp; Italy &nbsp;&bull;&nbsp; Canada
                </p>
              </FadeUp>
              
              <FadeUp delay={8}>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-6 text-xs tracking-[0.2em] text-brand-gold border-b border-brand-gold/30 pb-3 mt-10 md:mt-14 uppercase hover:text-white transition-all font-medium group"
                >
                  Explore Our Projects
                  <span className="text-sm leading-none font-light group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </FadeUp>
            </div>
          </div>

          {/* RIGHT */}
          <div className="md:col-span-7 flex items-center justify-center w-full min-w-0 relative z-10 md:translate-x-[5%]">
            <div
              ref={containerRef}
              className="relative w-full aspect-square flex items-center justify-center cursor-pointer group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Ambient halo behind the globe - premium glow that also
                  masks the pop-in the moment the canvas finishes painting */}
              <div
                aria-hidden="true"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-button bg-brand-gold/10 blur-[80px] md:blur-[120px] pointer-events-none"
              />

              {/* Skeleton state: shown until the globe scrolls into view
                  and finishes its first paint. Keeps the same footprint so
                  there's zero layout shift when the real canvas appears. */}
              <AnimatePresence>
                {!isGlobeReady && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: duration.standard, ease: ease.standard }}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-4 pointer-events-none"
                  >
                    <div className="relative w-[45%] aspect-square rounded-button border border-brand-gold/20">
                      <div className="absolute inset-0 rounded-button border-t-2 border-brand-gold/60 animate-spin [animation-duration:2.4s]" />
                      <div className="absolute inset-[15%] rounded-button bg-brand-gold/5" />
                    </div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-brand-gold/50 font-medium">
                      Mapping Our Global Reach
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={
                  isGlobeReady
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.92 }
                }
                transition={{ duration: duration.slow, ease: ease.slow }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-transform duration-[800ms] ease-out group-hover:scale-105 pointer-events-auto"
              >
                {shouldRender && customGlobeMaterial && (
                  <Globe
                    ref={globeRef}
                    onGlobeReady={handleGlobeMounted}
                    globeMaterial={customGlobeMaterial}
                    backgroundColor="rgba(0,0,0,0)"
                    showGlobe={true}
                    showAtmosphere={true}
                    atmosphereColor="#C8A46A"
                    atmosphereAltitude={0.15}
                    
                    // Hex Polygons for Stripe's Dotted Continents
                    hexPolygonsData={hexData}
                    hexPolygonResolution={hexPolygonResolution}
                    hexPolygonMargin={0.7} // Sharper, smaller dots
                    hexPolygonColor={() => 'rgba(230, 210, 180, 0.55)'} // Warmer, more visible dots
                    
                    arcsData={ARCS_DATA}
                    arcColor={() => ['rgba(200, 164, 106, 0.1)', 'rgba(212, 175, 55, 1)']} // Brighter gold finish
                    arcDashLength={0.6}
                    arcDashGap={2.5}
                    arcDashInitialGap={() => Math.random()}
                    arcDashAnimateTime={arcDashAnimateTime} // Faster energy (0 = static dashes for reduced-motion)
                    arcAltitude={0.12}
                    arcStroke={0.7}
                    
                    htmlElementsData={scaledPoints}
                    htmlElement={d => {
                      const el = document.createElement('div');
                      el.style.pointerEvents = 'none';
                      
                      const isRight = d.scaledDx > 0;
                      const angleX = isRight ? 35 * labelScale : -35 * labelScale;
                      
                      el.innerHTML = `
                        <div style="position: relative; display: flex; align-items: center; justify-content: center;">
                          <div style="position: relative; width: 4px; height: 4px; display: flex; align-items: center; justify-content: center; mix-blend-mode: screen;">
                            <div style="position: absolute; width: 2px; height: 2px; background: #FFF; border-radius: 50%;"></div>
                            <div style="position: absolute; width: 6px; height: 6px; background: #C8A46A; border-radius: 50%; box-shadow: 0 0 12px 2px rgba(200, 164, 106, 0.8); animation: luxuryBreatheScale 3s ease-in-out infinite;"></div>
                          </div>
  
                          <svg width="0" height="0" style="position: absolute; top: 0; left: 0; overflow: visible;">
                            <polyline points="0,0 ${angleX},${d.scaledDy} ${d.scaledDx},${d.scaledDy}" fill="none" stroke="rgba(0,0,0,0.6)" stroke-width="1.5" />
                            <polyline points="0,0 ${angleX},${d.scaledDy} ${d.scaledDx},${d.scaledDy}" fill="none" stroke="rgba(200, 164, 106, 0.5)" stroke-width="0.5" />
                          </svg>
                          
                          <div style="position: absolute; left: ${isRight ? d.scaledDx + 10 + 'px' : 'auto'}; right: ${!isRight ? Math.abs(d.scaledDx) + 10 + 'px' : 'auto'}; top: ${d.scaledDy}px; transform: translateY(-50%); display: flex; flex-direction: column; align-items: ${isRight ? 'flex-start' : 'flex-end'}; gap: 2px; background: rgba(10, 10, 15, 0.85); border: 1px solid rgba(200, 164, 106, 0.2); border-radius: 4px; padding: 4px 8px; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">
                            <div style="color: #FFF; font-family: 'Inter', sans-serif; font-size: ${isMobile ? '9px' : '11px'}; font-weight: 500; text-transform: uppercase; letter-spacing: 0.25em; white-space: nowrap;">
                              ${d.city}
                            </div>
                            <div style="color: rgba(200, 164, 106, 0.9); font-family: 'Inter', sans-serif; font-size: 6px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.2em; white-space: nowrap;">
                              ${d.country}
                            </div>
                          </div>
                        </div>
                      `;
                      return el;
                    }}
                    
                    width={globeSize.width}
                    height={globeSize.height}
                  />
                )}
              </motion.div>
            </div>
          </div>
        </div>

        {/* BOTTOM CONTENT (MOBILE ONLY) */}
        <div className="md:hidden mt-12 flex flex-col items-center text-center relative z-20">
          <FadeUp delay={6}>
            <p className="text-xs md:text-xs tracking-[0.25em] leading-[2.2] text-brand-gold/90 uppercase font-medium max-w-[600px]">
              UAE &nbsp;&bull;&nbsp; Saudi Arabia &nbsp;&bull;&nbsp; Bahrain &nbsp;&bull;&nbsp; Qatar &nbsp;&bull;&nbsp; Kuwait &nbsp;&bull;&nbsp; Oman &nbsp;&bull;&nbsp; India &nbsp;&bull;&nbsp; Italy &nbsp;&bull;&nbsp; Canada
            </p>
          </FadeUp>
          
          <FadeUp delay={8}>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-6 text-xs tracking-[0.2em] text-brand-gold border-b border-brand-gold/30 pb-3 mt-8 md:mt-10 uppercase hover:text-white transition-all font-medium group"
            >
              Explore Our Projects
              <span className="text-sm leading-none font-light group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
