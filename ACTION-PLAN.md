# Action Plan — Credence Lighting (`credence-next`)

See `FULL-AUDIT-REPORT.md` for evidence behind every item below.

---

## 🔴 Do this first — outside the codebase

- [ ] **Reconnect `www.credencelighting.com` to this repository's
      deployment.** The live domain currently serves a completely different
      build (different title, non-`www` sitemap/robots host) than anything
      in this repo's git history. Every fix below is real and verified in
      the build output, but has **zero live effect** until this is
      resolved. This is a hosting/DNS/Vercel-project decision, not
      something fixable by editing code.

## ✅ Completed this session (verified via `npm run build` + `npm run lint`)

- [x] Fixed `eslint.config.mjs` ignore globs so lint stops scanning stale
      `.next` output from sibling worktrees (was reporting 1,168 fake
      errors; now 0 errors, 0 warnings).
- [x] Removed restricted `FAQPage` JSON-LD from `/faq` (commercial sites
      lost eligibility for this rich result in Aug 2023); kept
      `BreadcrumbList` + `WebPage` schema.
- [x] Fixed broken hreflang reciprocity: Next.js 16 shallow-merges
      metadata, so every page's own `alternates.canonical` was silently
      deleting the root layout's hreflang `languages` map. Added the full
      reciprocal hreflang set to the Saudi Arabia and Bahrain pages (the
      only two besides home that have country-level, hreflang-eligible
      alternates).
- [x] Fixed 8 page titles under the 30-character minimum (no primary
      keyword): About, Blog, FAQ, Gallery, Products, Projects, Guides,
      Solutions/Sectors.
- [x] Fixed 2 meta descriptions outside the 120-160 char range (Bahrain,
      Guides).
- [x] Finished the in-progress "Solutions" → "Sectors" rename consistently
      across page titles, breadcrumb schema, and `llms.txt`/`llms-full.txt`
      (the nav and footer had already made this switch; page-level metadata
      hadn't caught up).
- [x] Confirmed image `alt` coverage is complete and JSON-LD is
      server-rendered correctly (no changes needed, verified not assumed).

## Ongoing maintenance (quarterly cadence)

1. **Content freshness**: keep `dateModified` in article/case-study schema
   synced with real edits; add 2-4 new case studies or technical articles
   per month with genuine internal links back into the relevant service
   page.
2. **Hreflang cluster discipline**: if a new country-level page is added
   (a real hreflang-eligible addition, unlike the emirate-level pages),
   add it to the `languages` map on **all three** existing cluster pages
   (home, Saudi Arabia, Bahrain) plus itself — Next 16's shallow merge
   means this can't be centralized without a shared constant; consider
   extracting the cluster into a single exported object in
   `data/` or `lib/` so all four files import the same source instead of
   four hand-maintained copies drifting apart again.
3. **Re-run this audit against the actual live domain** once the
   deployment mismatch in §0 above is resolved, since Core Web Vitals,
   Lighthouse, and PageSpeed scores were not verifiable against a domain
   running unrelated code this round.
