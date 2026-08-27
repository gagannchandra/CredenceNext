"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "@/components/ui/Lightbox";
import SEO from "@/components/seo/SEO";
import PageTransition from "@/components/ui/motion/PageTransition";

import projects from "@/data/projects";

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [lightboxOpen]);

  const openLightbox = (images, index) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <PageTransition>
      <SEO 
        title="Lighting Gallery | Inspiration & Installations" 
        description="View our gallery of premium lighting installations and architectural lighting inspiration across Dubai and the UAE." 
        schema={[{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.credencelighting.com/" },
            { "@type": "ListItem", "position": 2, "name": "Project Gallery", "item": "https://www.credencelighting.com/gallery" }
          ]
        }, {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Lighting Gallery · Credence Lighting Dubai",
          "description": "Browse photos of premium lighting installations by Credence Lighting.",
          "url": "https://www.credencelighting.com/gallery"
        }]}
      />
      <section className="min-h-screen bg-transparent py-20 md:py-32 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <p className="uppercase tracking-[0.4em] text-xs text-brand-gold mb-4">
            Gallery
          </p>
          <h1 className="text-fluid-h1 font-serif text-white">
            All Projects
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-24 md:space-y-32"
        >
          {projects.map((project, projectIndex) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="border-t border-white/10 pt-12 md:pt-16"
            >
              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start">
                <div className="space-y-6">
                  <p className="uppercase tracking-[0.2em] text-xs text-brand-gold mb-3">
                    {project.category}
                  </p>
                  <h2 className="text-fluid-h1 font-serif text-white ">
                    {project.name}
                  </h2>
                  <p className="text-white/60 max-w-2xl">
                    {project.location} • {project.year}
                  </p>
                  <p className="text-white/70 max-w-2xl leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {project.gallery.map((image, imgIndex) => (
                    <div key={imgIndex} className="overflow-hidden rounded-panel group relative h-72 sm:h-80">
                      <button
                        type="button"
                        onClick={() => openLightbox(project.gallery, imgIndex)}
                        className="absolute inset-0 z-10"
                        aria-label={`Open ${project.name} image ${imgIndex + 1}`}
                      >
                        <span className="sr-only">Open {project.name} image {imgIndex + 1}</span>
                      </button>
                      {/* The tiles sit in the right-hand 1.1fr column of a
                          two-column grid and split it three ways, so a desktop
                          tile is ~15vw wide - not the 33vw the old `sizes`
                          claimed, which had every one of the 80-odd images on
                          this page fetched at roughly twice the pixels it
                          could show. */}
                      <Image
                        src={image}
                        alt={`${project.name} lighting project installation ${imgIndex + 1}`}
                        fill
                        sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 20vw"
                        {...(projectIndex === 0 && imgIndex < 3
                          ? { priority: true }
                          : { loading: "lazy" })}
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-scrim/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {lightboxOpen && (
        <Lightbox
          images={lightboxImages}
          index={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={() => {
            if (lightboxImages.length === 0) return;
            setLightboxIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
          }}
          onNext={() => {
            if (lightboxImages.length === 0) return;
            setLightboxIndex((prev) => (prev + 1) % lightboxImages.length);
          }}
        />
      )}
    </section>
    </PageTransition>
  );
}
