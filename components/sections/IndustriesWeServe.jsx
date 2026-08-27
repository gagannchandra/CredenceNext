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
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6 max-w-2xl">
            Industries we serve
          </h2>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mb-12">
            From hotel lobbies to explosion-proof plant rooms, each sector sets
            its own performance and compliance requirements.
          </p>
        </FadeUp>

        {/* Nine short category links. As a 4-column card grid this left three
            empty cells on the last row and read as a third identical card wall
            two sections after the last one. A flowing chip list has no cell
            count to get wrong and gives the page a different texture. */}
        <FadeUp delay={1}>
          <nav aria-label="Industries we serve">
            <ul className="flex flex-wrap gap-3 list-none m-0 p-0">
              {industries.map((industry) => {
                const isActive = pathname === industry.link;

                return (
                  <li key={industry.name}>
                    <Link
                      href={industry.link}
                      aria-current={isActive ? "page" : undefined}
                      className={`inline-flex items-center rounded-button border px-5 py-3 text-sm transition-colors duration-300 ${
                        isActive
                          ? "border-brand-gold/60 bg-brand-gold/10 text-brand-gold"
                          : "border-white/10 bg-white/[0.02] text-white/80 hover:border-brand-gold/30 hover:bg-white/[0.05] hover:text-brand-gold"
                      }`}
                    >
                      {industry.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </FadeUp>
      </div>
    </section>
  );
}
