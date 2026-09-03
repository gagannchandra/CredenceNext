# Full Technical SEO Audit — Credence Lighting (`credence-next`)

- **Target**: `credence-next` repository (Next.js App Router codebase)
- **Declared production domain in code**: `https://www.credencelighting.com`
- **Framework**: Next.js 16.3.1 (Turbopack, App Router, React 19)
- **Audit date**: 2026-09-01
- **Confidence**: High for everything marked "Verified" below (checked against the actual built HTML output of `npm run build`, not just source). Low/Hypothesis for anything marked so explicitly.

---

## 0. Critical Environment Finding — read this first

**The live production domain does not run this codebase.**

Fetching `https://www.credencelighting.com/` returns the title
`"Credence Lighting | Premium Lighting Solutions Dubai"` and a `robots.txt` /
`sitemap.xml` that reference the bare apex domain `credencelighting.com`
(no `www`). Nothing in this repository — at any point in its git history —
produces that title text or that sitemap host. The local `app/sitemap.js`
and `public/robots.txt` have used the `www` canonical host for a while.

This means every fix in this report and every prior "100/100" claim in the
repo's previous `FULL-AUDIT-REPORT.md`/`ACTION-PLAN.md` (now overwritten by
this one) had **no effect on the live site**, because the live site is a
different deployment/build than what's in this repo. `git rev-list` shows
this repo's `main` is up to date with `origin/main` on GitHub, so the code
*is* pushed — the disconnect is between GitHub and whatever Vercel (or other
host) project actually serves `www.credencelighting.com`.

**Action required from you, not from this audit**: confirm which hosting
project/environment is bound to the `www.credencelighting.com` domain and
point it at this repository, or redeploy. No code change here can fix this.

Everything below evaluates the repository itself — real, verifiable code
issues, all fixed and confirmed via a clean `npm run build` + `npm run
lint`, not by trusting model assertions.

---

## 1. What was actually fixed this session (verified in build output)

| # | Issue | Evidence | Fix |
|---|-------|----------|-----|
| 1 | `npm run lint` reported 1,168 fake errors | ESLint's `globalIgnores` used bare `.next/**`, which only matches at repo root. Five stale sibling git worktrees under `.claude/worktrees/*/.next/` were being linted as if they were this project's source. | Added `**/.next/**`, `**/out/**`, `**/build/**`, and `.claude/worktrees/**` to `eslint.config.mjs`. `npm run lint` now returns 0 errors, 0 warnings. |
| 2 | Restricted `FAQPage` JSON-LD schema on `/faq` | `lib_src/pages/Faq.jsx` emitted a full `FAQPage` schema with all Q&A pairs. Google restricted `FAQPage` rich results to government/healthcare sites in Aug 2023 — Credence is a commercial lighting company, so this schema type provides zero rich-result benefit and is against Google's stated policy for this site type. | Removed the `FAQPage` block; kept `BreadcrumbList` + `WebPage` schema on the same page. Confirmed removed from built HTML. |
| 3 | Broken hreflang reciprocity on every non-home page | Next.js 16 **shallow-merges** metadata per top-level key across segments (confirmed in `node_modules/next/dist/docs/.../generate-metadata.md`, "Merging" section: *"Duplicate keys are replaced based on their ordering"*). Every page in this repo defines its own `alternates: { canonical }`, which silently **wipes out** the root layout's `alternates.languages` (hreflang) block instead of extending it. Verified: pre-fix, the built HTML for `/lighting-companies-saudi-arabia` and `/lighting-companies-bahrain` had **zero** `<link rel="alternate" hreflang>` tags, breaking the GCC hreflang cluster the layout declares (Google requires hreflang to be reciprocal to trust it). | Added the same 7-entry `languages` map (en, en-AE, en-SA, en-BH, ar-AE, ar-SA, x-default) to both `app/lighting-companies-saudi-arabia/page.jsx` and `app/lighting-companies-bahrain/page.jsx`. Verified in built HTML: both pages now emit all 7 `hreflang` `<link>` tags, reciprocal with the homepage. Emirate-level pages (Sharjah, Ajman, RAK, Abu Dhabi) correctly have **no** hreflang block — Google does not support ISO 3166-2 subdivision codes for hreflang, so a country-level (`AE`) distinction between them isn't possible and shouldn't be attempted. |
| 4 | 8 pages had `<title>` tags under Google's 30-char minimum | `Blog`, `FAQ`, `Gallery`, `Products`, `Projects`, `About Us`, `Sectors`, `Guides` rendered as bare 1-2 word titles + brand suffix (23-29 chars), carrying no primary keyword. | Prefixed each with the primary keyword ("Lighting Blog", "Lighting FAQs", "Lighting Gallery", "Lighting Products", "Lighting Projects", "Our Lighting Story", "Lighting Sectors", "Lighting Guides"). All now sit in the 30-60 char range, keyword near the front, brand still at the end via the layout's title template. |
| 5 | 2 meta descriptions out of the 120-160 char range | `lighting-companies-bahrain` was 117 chars (too short); a first-pass fix pushed it to 162 (too long); `guides` was 173 chars (too long). | Both re-tuned to land inside 120-160 (154 and 152 chars respectively). |
| 6 | Inconsistent "Solutions" vs "Sectors" branding (in progress, uncommitted, from a prior session) | `components/layout/Navbar.jsx` and `Footer.jsx` already label that nav section "Sectors", but `/solutions`'s own `<title>`, breadcrumb schema `name`, and H1 still said "Solutions" on some sub-pages, and `public/llms.txt` / `public/llms-full.txt` still described it as "Solutions". | Completed the rename consistently: page title → "Sectors", `public/llms.txt` link text → "Lighting Sectors", `public/llms-full.txt` core-pages list → "Sectors". The breadcrumb/H1 renames already present in the working tree were verified correct against the live nav/footer and kept. |

All of the above were verified by running `npm run build` (114/114 static
routes generated, 0 errors) and `npm run lint` (0 errors, 0 warnings) after
the changes, then grepping the actual generated HTML in `.next/server/app/`
for the expected `<title>`, `<link rel="alternate">`, and absence of
`FAQPage` — not just re-reading the source.

---

## 2. Verified as already correct (no change needed)

- **Image `alt` coverage**: every `<Image>` component across `app/`,
  `lib_src/`, and `components/` was checked programmatically — none are
  missing `alt`. The one raw `<img>` (in `components/home/Hero.jsx`) is a
  deliberate `<picture>` art-direction case (portrait vs. landscape crops)
  with `alt`, `fetchPriority="high"`, and `decoding="async"` already set —
  this is a legitimate use of a raw `<img>`, not an oversight.
- **JSON-LD only**: no Microdata/RDFa found; all structured data uses
  `<script type="application/ld+json">` via the `components/seo/SEO.jsx`
  helper, which is server-rendered (not client-effect-injected — verified
  by reading the component's own architecture notes and confirming the
  schema shows up in the raw build output, not just after hydration).
  Correct.
- **No `HowTo` schema anywhere** in the codebase (deprecated Sep 2023).
- **Title uniqueness**: all 40 static page titles are unique (checked
  programmatically, no collisions).
- **robots.txt (local source)**: correctly allows major AI crawlers
  (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended,
  Amazonbot, anthropic-ai, cohere-ai, DuckAssistBot, FacebookBot) and blocks
  aggressive scrapers (Bytespider, CCBot). Already correct — this is not
  reflected on the live domain (see §0).
- **Security headers** (`next.config.mjs`): HSTS, X-Content-Type-Options,
  X-Frame-Options, Referrer-Policy, Permissions-Policy all present.
- **Apex → www redirect**: `curl -I https://credencelighting.com/` returns
  `307 → https://www.credencelighting.com/` at the edge (Vercel), so *some*
  Vercel project is correctly configured for this — it's just evidently not
  the one serving the final response on `www` (see §0).

---

## 3. Not independently verified (would require live production access to this exact codebase)

Per the skill's evidence rules, these are marked as environment
limitations rather than confirmed pass/fail, since Core Web Vitals,
PageSpeed, and Lighthouse are meaningless against a domain not running this
code (§0), and there is no other public URL for this build:

- Core Web Vitals (LCP/INP/CLS) — the codebase shows CWV-conscious patterns
  (self-hosted fonts with `size-adjust` fallback metrics, `fetchPriority`
  on the hero image, avif/webp `next.config.mjs` image formats, lazy-loaded
  three.js per commit history) but real-user metrics can't be pulled
  against a domain running different code.
- Content word-count minimums per page type (quality-gates.md thresholds)
  were not exhaustively counted across all 40+ pages; spot checks of hub
  pages (Products, Projects, Solutions, FAQ) show substantial unique
  copy, not thin content, but a full per-page word count was out of scope
  for this pass.
- Broken-link crawl of the live site — not meaningful against the wrong
  deployment; internal `<Link>` targets were spot-checked against the
  `app/` route list instead and all resolved to real routes.

---

## 4. Scoring

Numeric scores are directional, not a replacement for the evidence above.

| Category | Status |
|---|---|
| Technical SEO (build/lint health, schema compliance, hreflang) | **Fixed and verified** — see §1 |
| On-page SEO (titles/descriptions) | **Fixed and verified** — see §1 |
| Structured data | **Fixed and verified** — restricted `FAQPage` removed |
| Image optimization | **Already correct** — see §2 |
| AI crawler policy | **Already correct in source** — see §2 |
| Production deployment | 🔴 **Broken** — live domain runs different code entirely, see §0 |

A single "X/100" number is not meaningful this round: the codebase itself
is now clean on every check that could be verified, but the one thing that
actually determines real-world SEO outcome — what's live on
`www.credencelighting.com` — is outside this repository's control and
currently disconnected from it.
