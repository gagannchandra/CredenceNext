"use client";

import Link from "next/link";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/ui/motion/PageTransition";
import SEO from "@/components/seo/SEO";

const resources = [
  {
    title: "Company Profile",
    type: "PDF Document",
    description:
      "Learn about Credence Lighting, our global presence, and project expertise.",
    href: "/pdfs/credence-profile.pdf",
    download: true,
    actionLabel: "Download PDF ↗",
  },
  {
    title: "Project Album",
    type: "PDF Document",
    description:
      "A visual album showcasing our completed lighting and architectural projects.",
    href: "/pdfs/album.pdf",
    download: true,
    actionLabel: "Download PDF ↗",
  },
  {
    title: "Product Catalogue",
    type: "On-Demand Consultation",
    description:
      "Request our complete technical catalogue and fixture specifications tailored to your project requirements.",
    href: "/contact",
    download: false,
    actionLabel: "Request Catalogue ↗",
  },
];

export default function Downloads() {
  return (
    <PageTransition>
      <div className="bg-transparent text-white min-h-screen">
        <SEO 
          title="Lighting Catalogues & Downloads | Credence Lighting" 
          description="Download our latest product catalogues, technical specifications, and brochures for premium lighting solutions in the UAE." 
          schema={[{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.credencelighting.com/" },
            { "@type": "ListItem", "position": 2, "name": "Downloads & Catalogs", "item": "https://www.credencelighting.com/downloads" }
          ]
        }, {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Downloads & Resources · Credence Lighting",
            "description": "Download Credence Lighting's product catalogues, company profile, and project albums.",
            "url": "https://www.credencelighting.com/downloads"
          }]}
        />
        <section className="relative pt-40 px-6 md:px-16 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-brand-gold/10 blur-[60px] md:blur-[160px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="uppercase tracking-[0.4em] text-xs text-brand-gold mb-6">
            Downloads
          </p>

          <h1 className="text-fluid-h1 font-serif ">
            Company
            <span className="italic text-brand-gold"> Resources</span>
          </h1>

          <p className="mt-8 text-white/50 max-w-2xl text-lg leading-[1.8]">
            Access catalogues, company profiles, and technical documents
            for your next commercial lighting project.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
            {resources.map((item) => {
              const cardContent = (
                <>
                  <p className="uppercase tracking-[0.3em] text-xs text-brand-gold mb-6">
                    {item.type}
                  </p>

                  <h2 className="text-2xl md:text-3xl font-serif mb-4">{item.title}</h2>

                  <p className="text-white/50 leading-7 text-sm">{item.description}</p>

                  <div className="mt-10 text-sm uppercase tracking-[0.3em] text-white/70 group-hover:text-brand-gold transition duration-300">
                    {item.actionLabel}
                  </div>
                </>
              );

              return item.download ? (
                <a
                  key={item.title}
                  href={item.href}
                  download={true}
                  className="group border border-white/10 bg-white/5 backdrop-blur-md md:backdrop-blur-xl p-8 hover:border-brand-gold transition duration-500 rounded-[1.5rem] flex flex-col justify-between"
                >
                  {cardContent}
                </a>
              ) : (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group border border-white/10 bg-white/5 backdrop-blur-md md:backdrop-blur-xl p-8 hover:border-brand-gold transition duration-500 rounded-[1.5rem] flex flex-col justify-between"
                >
                  {cardContent}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </PageTransition>
  );
}
