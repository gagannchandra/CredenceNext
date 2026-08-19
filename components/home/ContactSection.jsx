"use client";

import { useState } from "react";
import TextReveal from "../ui/motion/TextReveal";
import FadeUp from "../ui/motion/FadeUp";


export default function ContactSection({ asPage = false }) {
  const Heading = asPage ? "h1" : "h2";
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "loading", message: "Sending your message..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setForm({ name: "", email: "", phone: "", company: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: data.message || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-transparent z-10 text-white px-4 md:px-16 py-12 md:py-24 overflow-hidden"
    >

      <div className="relative z-10 max-w-[1500px] mx-auto">

        {/* TOP */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:items-center mb-20 text-center lg:text-left">

          <div className="flex flex-col items-center lg:items-start mx-auto lg:mx-0">
            <FadeUp delay={0}>
              <p className="uppercase tracking-[0.4em] text-xs text-brand-gold mb-6">
                Contact
              </p>
            </FadeUp>

            <Heading className="text-fluid-h1 font-serif flex flex-wrap justify-center lg:justify-start gap-2">
              <TextReveal text="Let’s Create" />
              <TextReveal text="Something Exceptional" delay={2} className="italic text-brand-gold block mt-2 w-full text-center lg:text-left" />
            </Heading>
          </div>

          <FadeUp delay={4} className="lg:pl-12">
            <p className="max-w-xl text-white/55 leading-[1.8] text-lg mx-auto lg:mx-0">
              We provide services to visionary brands, architects,
              and developers to craft premium lighting experiences
              that elevate atmosphere and redefine spatial identity.
            </p>
          </FadeUp>
        </div>

        {/* MAIN */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-stretch">

          {/* LEFT INFO PANEL */}
          <FadeUp
            delay={2}
            className="relative overflow-hidden rounded-panel border border-border-subtle bg-surface-elevated p-8 md:p-10 flex flex-col justify-between min-h-[520px] md:min-h-[620px]"
          >

            {/* INNER GLOW */}
            <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-brand-gold/10 blur-[40px] md:blur-[120px] rounded-button" />

            <div className="relative z-10">

              <p className="uppercase tracking-[0.3em] text-xs text-brand-gold mb-10">
                Studio Information
              </p>

              <div className="space-y-10">

                <div>
                  <p className="text-white/60 uppercase tracking-[0.25em] text-xs mb-4">
                    Call
                  </p>

                  <div className="space-y-2 text-xl text-white/80">
                    <a href="tel:+971564965660" className="block hover:text-brand-gold transition duration-300">
                      +971 564 965 660
                    </a>
                  </div>
                </div>

                <div>
                  <p className="text-white/60 uppercase tracking-[0.25em] text-xs mb-4">
                    Email
                  </p>

                  <a href="mailto:info@credencelighting.com" className="text-xl text-white/80 hover:text-brand-gold transition duration-300">
                    info@credencelighting.com
                  </a>
                </div>

                <div>
                  <p className="text-white/60 uppercase tracking-[0.25em] text-xs mb-4">
                    Location
                  </p>
                  <a
                    href="https://maps.app.goo.gl/ec2HMCDNXYtYviV7A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white/70 leading-[1.8] hover:text-brand-gold transition-colors duration-300"
                  >
                    <strong className="text-white">Credence Lighting LLC</strong>
                    <br />
                    Unit E77, Arabtec Eastern Model
                    <br />
                    <span className="text-white/40">(Near Al Ramla Supermarket)</span>
                    <br />
                    Dubai Investment Park 1
                    <br />
                    Dubai, United Arab Emirates
                  </a>
                </div>

              </div>

            </div>

            {/* BOTTOM TEXT */}
            <div className="relative z-10 mt-16 pt-8 border-t border-white/10">

              <p className="text-white/40 leading-[1.8]">
                Premium architectural and commercial
                lighting solutions crafted with precision,
                elegance, and innovation.
              </p>

            </div>

          </FadeUp>

          {/* RIGHT FORM */}
          <FadeUp
            delay={4}
            className="relative overflow-hidden rounded-panel border border-border-subtle bg-surface-elevated p-8 md:p-12 min-h-[520px] md:min-h-[620px]"
          >

            <div className="relative z-10">

              <div className="mb-12">

                <p className="uppercase tracking-[0.3em] text-xs text-brand-gold mb-5">
                  Start A Conversation
                </p>

                <h3 className="text-fluid-h1 font-serif mb-4">
                  Tell Us About
                  <span className="italic text-brand-gold">
                    {" "}Your Vision
                  </span>
                </h3>

                <p className="text-white/40 text-sm tracking-wide">
                  Our dedicated team of lighting specialists typically responds within 24 hours.
                </p>

              </div>

              <form onSubmit={handleSubmit} className="space-y-5" suppressHydrationWarning>

                <div className="grid md:grid-cols-2 gap-5" suppressHydrationWarning>

                  <div className="w-full" suppressHydrationWarning>
                    <input
                      type="text"
                      name="name"
                      id="contact-name"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      suppressHydrationWarning
                      className="w-full bg-surface-base border border-border-subtle rounded-panel px-6 py-4 outline-none focus:border-brand-gold transition duration-300 placeholder:text-white/60"
                    />
                  </div>

                  <div className="w-full" suppressHydrationWarning>
                    <input
                      type="email"
                      name="email"
                      id="contact-email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      required
                      suppressHydrationWarning
                      className="w-full bg-surface-base border border-border-subtle rounded-panel px-6 py-4 outline-none focus:border-brand-gold transition duration-300 placeholder:text-white/60"
                    />
                  </div>

                </div>

                <div className="grid md:grid-cols-2 gap-5" suppressHydrationWarning>
                  <div className="w-full" suppressHydrationWarning>
                    <input
                      type="tel"
                      name="phone"
                      id="contact-phone"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      required
                      suppressHydrationWarning
                      className="w-full bg-surface-base border border-border-subtle rounded-panel px-6 py-4 outline-none focus:border-brand-gold transition duration-300 placeholder:text-white/60"
                    />
                  </div>

                  <div className="w-full" suppressHydrationWarning>
                    <input
                      type="text"
                      name="company"
                      id="contact-company"
                      autoComplete="organization"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Company Name"
                      suppressHydrationWarning
                      className="w-full bg-surface-base border border-border-subtle rounded-panel px-6 py-4 outline-none focus:border-brand-gold transition duration-300 placeholder:text-white/60"
                    />
                  </div>
                </div>

                <div className="w-full" suppressHydrationWarning>
                  <textarea
                    name="message"
                    id="contact-message"
                    value={form.message}
                    onChange={handleChange}
                    rows={7}
                    placeholder="Tell us about your project..."
                    required
                    suppressHydrationWarning
                    className="w-full bg-surface-base border border-border-subtle rounded-panel px-6 py-4 outline-none focus:border-brand-gold transition duration-300 placeholder:text-white/60 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  suppressHydrationWarning
                  className="group mt-4 bg-brand-gold hover:opacity-90 text-black px-10 py-5 rounded-button uppercase tracking-[0.25em] text-sm transition duration-300 flex items-center gap-3 cursor-pointer"
                >
                  {status.type === "loading" ? "Sending..." : "Send Message →"}
                </button>

                {status.message && (
                  <p className={`text-sm ${status.type === "success" ? "text-green-400" : status.type === "error" ? "text-red-400" : "text-white/80"}`}>
                    {status.message}
                  </p>
                )}

              </form>

            </div>

          </FadeUp>

        </div>

      </div>

    </section>
  )
}
