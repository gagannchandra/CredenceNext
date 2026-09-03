"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import TextReveal from "../ui/motion/TextReveal";
import FadeUp from "../ui/motion/FadeUp";

const emptySubscribe = () => () => {};
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

const inputClass =
  "w-full bg-surface-base border rounded-card px-5 py-3.5 text-white outline-none transition-colors duration-300 placeholder:text-white/60 focus:border-brand-gold";

/**
 * Label above, hint under the label, error below the control (Section 4.6).
 * The previous form used placeholders as its only labels, so the field name
 * disappeared the moment anyone started typing and screen readers had nothing
 * to announce.
 */
function Field({
  id,
  name,
  label,
  hint,
  type = "text",
  value,
  onChange,
  error,
  required = false,
  autoComplete,
  multiline = false,
}) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  const shared = {
    id,
    name,
    value,
    onChange,
    required,
    autoComplete,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": describedBy,
    suppressHydrationWarning: true,
    className: `${inputClass} ${
      error ? "border-state-error" : "border-border-subtle"
    }`,
  };

  return (
    <div className="w-full flex flex-col gap-2" suppressHydrationWarning>
      <label htmlFor={id} className="text-sm text-white/80">
        {label}
        {!required && (
          <span className="text-white/55"> (optional)</span>
        )}
      </label>

      {hint && !error && (
        <p id={hintId} className="text-xs text-white/50 -mt-1">
          {hint}
        </p>
      )}

      {multiline ? (
        <textarea {...shared} rows={6} className={`${shared.className} resize-none`} />
      ) : (
        <input {...shared} type={type} />
      )}

      {error && (
        <p id={errorId} className="text-xs text-state-error">
          {error}
        </p>
      )}
    </div>
  );
}

function validate(values) {
  const next = {};
  if (!values.name.trim()) next.name = "Please enter your name.";
  if (!values.email.trim()) {
    next.email = "Please enter an email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    next.email = "That email address does not look right.";
  }
  if (!values.phone.trim()) next.phone = "Please enter a phone number.";
  if (!values.message.trim()) next.message = "Tell us a little about the project.";
  return next;
}

export default function ContactSection({ asPage = false }) {
  const Heading = asPage ? "h1" : "h2";
  // One level below whatever the section heading is, so the document outline
  // never skips a level (h1 -> h2 on /contact, h2 -> h3 on the homepage).
  const PanelHeading = asPage ? "h2" : "h3";
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    website: "", // honeypot — left blank by real visitors
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [errors, setErrors] = useState({});
  const isSending = status.type === "loading";
  // Timestamp the form rendered, not the first keystroke, so a bot that
  // fetches the page and posts within a second or two gets caught.
  const renderedAtRef = useRef(0);
  const [turnstileToken, setTurnstileToken] = useState("");

  useEffect(() => {
    renderedAtRef.current = Date.now();
  }, []);

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY || typeof window === "undefined") return;
    if (window.turnstile || document.getElementById("cf-turnstile-script")) return;

    const script = document.createElement("script");
    script.id = "cf-turnstile-script";
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY || typeof window === "undefined" || !mounted) return;

    let widgetId;
    const render = () => {
      if (!window.turnstile) return;
      const el = document.getElementById("cf-turnstile-widget");
      if (!el || el.childElementCount > 0) return;
      widgetId = window.turnstile.render(el, {
        sitekey: TURNSTILE_SITE_KEY,
        theme: "dark",
        callback: (token) => setTurnstileToken(token),
        "expired-callback": () => setTurnstileToken(""),
      });
    };

    if (window.turnstile) {
      render();
    } else {
      const interval = setInterval(() => {
        if (window.turnstile) {
          clearInterval(interval);
          render();
        }
      }, 200);
      return () => clearInterval(interval);
    }

    return () => {
      if (widgetId && window.turnstile) window.turnstile.remove(widgetId);
    };
  }, [mounted]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear a field's error as soon as the visitor starts fixing it.
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = validate(form);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus({
        type: "error",
        message: "Please check the highlighted fields.",
      });
      document.getElementById(`contact-${Object.keys(nextErrors)[0]}`)?.focus();
      return;
    }

    if (TURNSTILE_SITE_KEY && !turnstileToken) {
      setStatus({ type: "error", message: "Please complete the verification check." });
      return;
    }

    setErrors({});
    setStatus({ type: "loading", message: "Sending your message." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          // Honeypot: real visitors never see or fill this field.
          website: form.website || "",
          formRenderedAt: renderedAtRef.current,
          turnstileToken,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({ type: "success", message: "Thanks. Your message is on its way and we will reply within one business day." });
        setForm({ name: "", email: "", phone: "", company: "", message: "", website: "" });
        setTurnstileToken("");
        renderedAtRef.current = Date.now();
        if (window.turnstile) window.turnstile.reset();
      } else {
        setStatus({
          type: "error",
          message: data.message || "We could not send that. Please try again, or email info@credencelighting.com.",
        });
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus({
        type: "error",
        message: "We could not send that. Please try again, or email info@credencelighting.com.",
      });
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-transparent z-10 text-white px-4 md:px-16 py-8 md:py-16 overflow-hidden"
    >

      <div className="relative z-10 max-w-[1500px] mx-auto">

        {/* TOP */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:items-center mb-10 text-center lg:text-left">

          <div className="flex flex-col items-center lg:items-start mx-auto lg:mx-0">
            <Heading className="text-fluid-h1 font-serif flex flex-wrap justify-center lg:justify-start gap-2">
              <TextReveal text="Let’s Create" />
              <TextReveal text="Something Exceptional" delay={2} className="italic text-brand-gold block mt-2 w-full text-center lg:text-left" />
            </Heading>
          </div>

          <FadeUp delay={4} className="lg:pl-12">
            <p className="max-w-xl text-white/55 leading-[1.8] text-lg mx-auto lg:mx-0">
              We work with architects, consultants, developers, and contractors
              on lighting and audio for commercial, hospitality, and residential
              projects across the GCC.
            </p>
          </FadeUp>
        </div>

        {/* MAIN */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-stretch">

          {/* LEFT INFO PANEL */}
          <FadeUp
            delay={2}
            className="relative overflow-hidden rounded-panel border border-border-subtle bg-surface-elevated p-8 md:p-10 flex flex-col gap-12"
          >

            {/* INNER GLOW */}
            <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-brand-gold/10 blur-[40px] md:blur-[120px] rounded-button" />

            <div className="relative z-10">

              <PanelHeading className="font-serif text-2xl text-white mb-10">
                Talk to us directly
              </PanelHeading>

              <div className="space-y-10">

                <div>
                  <p className="text-white/50 text-sm mb-3">Call</p>

                  <div className="space-y-2 text-xl text-white/80">
                    <a href="tel:+971564965660" className="block hover:text-brand-gold transition duration-300">
                      +971 564 965 660
                    </a>
                  </div>
                </div>

                <div>
                  <p className="text-white/50 text-sm mb-3">Email</p>

                  <a href="mailto:info@credencelighting.com" className="text-xl text-white/80 hover:text-brand-gold transition duration-300">
                    info@credencelighting.com
                  </a>
                </div>

                <div>
                  <p className="text-white/50 text-sm mb-3">Location</p>
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
                    <span className="text-white/60">(Near Al Ramla Supermarket)</span>
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

              <p className="text-white/50 leading-[1.8]">
                Showroom visits are by appointment. Bring drawings or a fixture
                schedule and we will walk through options on the floor.
              </p>

            </div>

          </FadeUp>

          {/* RIGHT FORM */}
          <FadeUp
            delay={4}
            className="relative overflow-hidden rounded-panel border border-border-subtle bg-surface-elevated p-8 md:p-12"
          >

            <div className="relative z-10">

              <div className="mb-12">

                <PanelHeading className="text-3xl md:text-4xl font-serif mb-4">
                  Tell us about{" "}
                  <span className="italic text-brand-gold leading-[1.1] pb-1 inline-block">
                    your project
                  </span>
                </PanelHeading>

                <p className="text-white/50 text-sm">
                  We typically reply within one business day.
                </p>

              </div>

              {mounted ? (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate suppressHydrationWarning>

                  {/* Honeypot: hidden from sighted and screen-reader users alike,
                      but visible to most form-filling bots. Any fill-in fails
                      the request server-side. */}
                  <div
                    aria-hidden="true"
                    style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}
                  >
                    <label htmlFor="contact-website">Website</label>
                    <input
                      id="contact-website"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.website}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5" suppressHydrationWarning>
                    <Field
                      id="contact-name"
                      name="name"
                      label="Name"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      error={errors.name}
                      required
                    />
                    <Field
                      id="contact-email"
                      name="email"
                      type="email"
                      label="Email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      error={errors.email}
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5" suppressHydrationWarning>
                    <Field
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      label="Phone"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={handleChange}
                      error={errors.phone}
                      required
                    />
                    <Field
                      id="contact-company"
                      name="company"
                      label="Company"
                      autoComplete="organization"
                      value={form.company}
                      onChange={handleChange}
                      error={errors.company}
                    />
                  </div>

                  <Field
                    id="contact-message"
                    name="message"
                    label="Project details"
                    hint="Space type, scope, and timeline help us reply usefully"
                    multiline
                    value={form.message}
                    onChange={handleChange}
                    error={errors.message}
                    required
                  />

                  {TURNSTILE_SITE_KEY && (
                    <div id="cf-turnstile-widget" className="mt-2" />
                  )}

                  <button
                    type="submit"
                    disabled={isSending}
                    suppressHydrationWarning
                    className="group mt-4 inline-flex items-center gap-3 bg-brand-gold text-black px-10 py-5 rounded-button uppercase tracking-[0.2em] text-sm font-semibold hover:bg-white active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition-[background-color,transform,opacity] duration-300 cursor-pointer"
                  >
                    {isSending ? "Sending" : "Send Message"}
                    {isSending ? (
                      <Loader2 size={16} aria-hidden="true" className="animate-spin" />
                    ) : (
                      <ArrowRight size={16} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" />
                    )}
                  </button>

                  {/* Announced to screen readers as it changes, and coloured
                      with tokens that clear AA against the panel. */}
                  <p
                    role="status"
                    aria-live="polite"
                    className={`text-sm min-h-[1.25rem] ${
                      status.type === "success"
                        ? "text-state-success"
                        : status.type === "error"
                        ? "text-state-error"
                        : "text-white/70"
                    }`}
                  >
                    {status.message}
                  </p>

                </form>
              ) : (
                <div className="space-y-5" aria-hidden="true">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="w-full h-[74px] bg-surface-base/60 border border-border-subtle rounded-card" />
                    <div className="w-full h-[74px] bg-surface-base/60 border border-border-subtle rounded-card" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="w-full h-[74px] bg-surface-base/60 border border-border-subtle rounded-card" />
                    <div className="w-full h-[74px] bg-surface-base/60 border border-border-subtle rounded-card" />
                  </div>
                  <div className="w-full h-[200px] bg-surface-base/60 border border-border-subtle rounded-card" />
                  <div className="w-52 h-[58px] bg-brand-gold/60 rounded-button mt-4" />
                </div>
              )}

            </div>

          </FadeUp>

        </div>

      </div>

    </section>
  )
}
