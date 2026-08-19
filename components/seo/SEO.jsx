// Title, description, canonical, Open Graph, and Twitter tags are handled
// server-side per-route via Next's native `metadata` / `generateMetadata`
// API (see each app/**/page.jsx). This component only injects JSON-LD
// structured data, which Next's metadata API doesn't cover.
//
// Deliberately NOT "use client" + react-helmet-async: Helmet only commits
// tags to <head> from a client-side effect after hydration, so crawlers or
// tools that don't execute JS (and even ones that do, for the brief window
// before hydration) never see the structured data in the first response.
// A plain <script> tag, by contrast, is ordinary JSX - Next.js still
// server-renders it into the initial HTML even though the page components
// that use SEO are "use client" (SSR renders client components too; "use
// client" only affects hydration/bundling, not whether the first render is
// server-rendered). Google explicitly allows JSON-LD anywhere in the
// document, not just <head>, so no hoisting is needed here.
export default function SEO({ schema = null }) {
  if (!schema) return null;

  const schemas = Array.isArray(schema) ? schema : [schema];

  return schemas.map((s, i) => (
    <script
      key={s?.["@id"] || `${s?.["@type"] || "schema"}-${i}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
    />
  ));
}
