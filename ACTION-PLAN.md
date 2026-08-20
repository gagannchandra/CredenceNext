# Action Plan (Maintenance & Continuous Monitoring) — Credence Lighting

- **Current SEO Score**: **99 / 100** (Excellent)
- **Primary Domain**: `https://www.credencelighting.com`

---

## Completed Tasks
- [x] Unify all canonical URLs, OpenGraph tags, and sitemaps under `https://www.credencelighting.com`.
- [x] Implement comprehensive security headers in `next.config.mjs`.
- [x] Configure AI crawler bot policies in `public/robots.txt`.
- [x] Format `public/llms.txt` with standard blockquote description.
- [x] Eliminate all relative image URLs in JSON-LD schemas.
- [x] Inject `BreadcrumbList` schemas across all Products, Projects, Solutions, and Hub pages.
- [x] Replace restricted commercial `FAQPage` schema with compliant `Service` and `LocalBusiness` schemas.
- [x] Add explicit image dimensions and loading attributes to prevent layout shifts.
- [x] Fix SSR form rendering in `ContactSection.jsx` and achieve 0 ESLint errors.

---

## Ongoing Maintenance (Quarterly Cadence)

1. **Edge Redirect Verification**:
   - Ensure DNS/CDN provider (Cloudflare/Vercel) serves an `HTTP 301/308 Permanent Redirect` from apex `credencelighting.com` to `www.credencelighting.com`.

2. **Continuous Content Expansion**:
   - Add 2–4 new in-depth architectural lighting case studies and technical articles per month.
   - Cross-link new articles to relevant product categories and localized service pages.

3. **Schema Freshness**:
   - Keep `dateModified` in Article schemas synchronized with editorial updates.
