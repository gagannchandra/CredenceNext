"use client";

import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import * as THREE from "three";
import TextReveal from "../ui/motion/TextReveal";
import FadeUp from "../ui/motion/FadeUp";
import { ease, duration } from "../../utils/motion";

// react-globe.gl reaches for `window`/WebGL at import time, so it can only
// ever run on the client. Splitting it into its own chunk also means the
// ~250kb three.js + globe bundle never ships to visitors who never scroll
// far enough to see it (see the in-view gate below).
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

const GEOJSON_URL =
  "https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson";
const GEOJSON_CACHE_KEY = "credence:globe-geojson:v1";

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

  const prefersReducedMotion = useReducedMotion();
  const shouldRender = useInView(sectionRef); // gate: fetch + mount only near viewport
  const [isGlobeReady, setIsGlobeReady] = useState(false); // gate: reveal once painted
  const [isLowPower, setIsLowPower] = useState(false);
  const [isTabVisible, setIsTabVisible] = useState(true);

  const [globeSize, setGlobeSize] = useState({
    width: typeof window !== "undefined" ? Math.min(window.innerWidth - 32, 1000) : 1000,
    height: typeof window !== "undefined" ? Math.min(window.innerWidth - 32, 1000) : 1000,
  });
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  const [hexData, setHexData] = useState([]);

  const customGlobeMaterial = useMemo(() => {
    const mat = new THREE.MeshPhongMaterial();
    mat.color = new THREE.Color("#030408");
    mat.transparent = true;
    mat.opacity = 0.9;
    mat.shininess = 1;
    return mat;
  }, []);

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
    const handleVisibility = () => setIsTabVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

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
      .then((res) => res.json())
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

  const handleGlobeReady = useCallback(() => {
    setIsGlobeReady(true);
  }, []);

  const isSectionVisibleRef = useRef(true);

  useEffect(() => {
    if (!sectionRef.current || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isSectionVisibleRef.current = entry.isIntersecting;
        if (globeRef.current && globeRef.current.controls()) {
          globeRef.current.controls().autoRotate = entry.isIntersecting && !prefersReducedMotion;
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (!shouldRender) return;
    const currentGlobe = globeRef.current;
    if (!currentGlobe) return;

    let animationFrameId;
    let time = 0;

    const initCinematicRender = () => {
      if (!globeRef.current) return;

      const renderer = globeRef.current.renderer();
      if (renderer) {
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isLowPower ? 1.5 : 2));
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.3; // Slightly brighter exposure
        renderer.outputColorSpace = THREE.SRGBColorSpace;
      }

      const controls = globeRef.current.controls();
      controls.autoRotate = !prefersReducedMotion && isSectionVisibleRef.current;
      controls.autoRotateSpeed = 0.5; // Smoother, slightly faster
      controls.enableZoom = false;
      controls.enablePan = false;

      // Cinematic angle (adjusted for larger canvas scale to keep globe same visual size)
      const alt = window.innerWidth < 768 ? 3.8 : 2.9;
      globeRef.current.pointOfView({ lat: 25, lng: 55, altitude: alt });

      const scene = globeRef.current.scene();

      // Clear default lighting safely
      if (scene && scene.children) {
        const lights = scene.children.filter((obj) => obj.isLight);
        lights.forEach((light) => scene.remove(light));
      }

      // Studio Lighting
      const keyLight = new THREE.DirectionalLight("#D4AF37", 5);
      keyLight.position.set(-200, 100, 200);
      scene.add(keyLight);

      const fillLight = new THREE.DirectionalLight("#3e4e68", 3); // Cool fill
      fillLight.position.set(200, -50, 100);
      scene.add(fillLight);

      const rimLight = new THREE.DirectionalLight("#F3E5AB", 8);
      rimLight.position.set(-200, 150, -250);
      scene.add(rimLight);

      const ambientLight = new THREE.AmbientLight("#ffffff", 0.2);
      scene.add(ambientLight);

      // Bespoke Motion - skipped entirely for reduced-motion users, and
      // paused whenever the tab is hidden or the globe scrolls out of view.
      const animate = () => {
        if (!prefersReducedMotion && isTabVisible && isSectionVisibleRef.current) {
          time += 0.002;

          // Imperceptible floating
          scene.position.y = Math.sin(time) * 0.3;

          // Slow breathing
          const scale = 1.0 + Math.sin(time * 0.5) * 0.002;
          scene.scale.set(scale, scale, scale);
        }

        animationFrameId = requestAnimationFrame(animate);
      };

      animate();
      handleGlobeReady();
    };

    // Small delay ensures textures and geometries are initialized
    const initTimer = setTimeout(() => {
      initCinematicRender();
    }, 150);

    return () => {
      clearTimeout(initTimer);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);

      if (currentGlobe) {
        const scene = currentGlobe.scene();
        const renderer = currentGlobe.renderer();

        if (scene) {
          scene.traverse((object) => {
            if (object.isMesh) {
              if (object.geometry) object.geometry.dispose();
              if (object.material) {
                if (Array.isArray(object.material)) {
                  object.material.forEach((m) => m.dispose());
                } else {
                  object.material.dispose();
                }
              }
            }
            if (object.isLight && object.dispose) {
              object.dispose();
            }
          });
        }

        if (renderer) {
          renderer.dispose();
        }
      }
    };
    // isTabVisible/prefersReducedMotion are read inside the rAF closure via
    // ref-stable values already captured each frame, so they don't need to
    // retrigger this whole effect (which would tear down & reinit the scene).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldRender, isLowPower, handleGlobeReady]);

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

  const handleMouseEnter = () => {
    if (globeRef.current && !prefersReducedMotion) globeRef.current.controls().autoRotateSpeed = 0.05;
  };

  const handleMouseLeave = () => {
    if (globeRef.current && !prefersReducedMotion) globeRef.current.controls().autoRotateSpeed = 0.5;
  };

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
                {shouldRender && (
                  <Globe
                    ref={globeRef}
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
