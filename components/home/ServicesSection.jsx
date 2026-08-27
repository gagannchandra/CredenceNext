"use client";

import { Wrench, Monitor, ClipboardList, Settings, Headset, Briefcase } from "lucide-react";
import TextReveal from "../ui/motion/TextReveal";
import FadeUp from "../ui/motion/FadeUp";

export default function ServicesSection() {
  const services = [
    {
      title: "Requirement Analysis",
      description: "Understanding project objectives, technical needs, and design intent.",
      icon: ClipboardList,
    },
    {
      title: "Design & Planning",
      description: "Lighting layouts, technical coordination, and value-engineered solutions.",
      icon: Monitor,
    },
    {
      title: "Product Selection & Supply",
      description: "Certified high-quality, and energy-efficient lighting products.",
      icon: Briefcase,
    },
    {
      title: "Installation & Execution",
      description: "Skilled installation with strict safety and quality control.",
      icon: Wrench,
    },
    {
      title: "Testing & Commissioning",
      description: "Complete system testing for performance, safety, and compliance.",
      icon: Settings,
    },
    {
      title: "Project Handover & Support",
      description: "Documentation, training, warranty support, and after-sales service.",
      icon: Headset,
    },
  ];

  return (
    <section id="services" className="relative pb-24 text-white flex flex-col items-center px-6">
      <div className="relative z-10 max-w-[1400px] w-full mx-auto">
        
        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-16 pt-10 border-t border-white/10">
          <h2 className="text-fluid-h2 font-serif text-white flex flex-wrap justify-center gap-2">
            <TextReveal text="How We" /> <TextReveal text="Deliver Excellence" delay={2} className="italic gold-gradient-text" />
          </h2>

          <FadeUp delay={4}>
            <p className="text-white/60 text-lg leading-relaxed text-center mt-8">
              End-to-end delivery from design to commissioning.{" "}
              <span className="text-white/80 font-medium">Complete system validation and documentation.</span>{" "}
              Strong after-sales support, including{" "}
              <span className="text-white/80 font-medium">maintenance, warranty, and AMC</span>.{" "}
              Powered by advanced lighting technology and LED screens. Proven projects across the{" "}
              <span className="text-white/80 font-medium">UAE and GCC</span>.
            </p>
          </FadeUp>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeUp
                key={service.title}
                delay={index * 2}
                className="group relative overflow-hidden border border-white/10 rounded-panel p-8 bg-white/[0.02] backdrop-blur-md md:backdrop-blur-xl hover:bg-white/[0.05] transition-all duration-500"
              >
                {/* HOVER GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-brand-gold/10 via-transparent to-transparent pointer-events-none" />

                <div className="flex flex-col items-center text-center space-y-6 relative z-10">
                  {/* ICON CONTAINER */}
                  <div className="w-20 h-20 rounded-button bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <Icon className="w-10 h-10 text-black" strokeWidth={1.5} />
                  </div>
                  
                  <div>
                    <h3 className="text-xl md:text-2xl font-serif text-white mb-3 group-hover:text-brand-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-white/60 text-base leading-[1.8]">
                      {service.description}
                    </p>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>

      </div>
    </section>
  );
}
