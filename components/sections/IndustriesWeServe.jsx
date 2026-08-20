"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import FadeUp from "../ui/motion/FadeUp";

const industries = [
  { name: "Hotels & Resorts", link: "/hotel-lighting" },
  { name: "Retail & Showrooms", link: "/retail-lighting" },
  { name: "Offices & Commercial", link: "/office-lighting" },
  { name: "Entertainment Venues", link: "/entertainment-lighting" },
  { name: "Restaurants & Cafés", link: "/restaurant-lighting" },
  { name: "Residential Villas", link: "/residential-lighting" },
  { name: "Building Facades", link: "/facade-lighting" },
  { name: "Audio Solutions", link: "/audio-solutions" },
  { name: "Explosion Proof", link: "/explosion-proof-lights" },
];

export default function IndustriesWeServe() {
  const pathname = usePathname();

  return (
    <section className="py-24 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
              Industries We Serve
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              From luxury hotel lobbies to high-energy entertainment venues, our solutions are designed for the specific demands of each industry.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((industry, index) => {
            // Using includes allows highlighting even if there are nested routes or hash params
            const isActive = pathname.includes(industry.link);
            
            return (
              <FadeUp key={industry.name} delay={index * 0.1}>
                <Link href={industry.link}
                  className={`group relative rounded-panel p-6 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 text-center block border ${
                    isActive 
                      ? "border-brand-gold shadow-[0_0_30px_rgba(212,175,55,0.15)]" 
                      : "border-white/10 hover:border-brand-gold/30"
                  }`}
                >

                  <h3 className={`text-base font-medium transition-colors duration-300 ${
                    isActive ? "text-brand-gold" : "text-white group-hover:text-brand-gold"
                  }`}>
                    {industry.name}
                  </h3>
                </Link>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
