import { projectSlugs, blogSlugs, productCategories } from "@/data/routes";

const slugify = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

const staticRoutes = [
  "/about", "/projects", "/products", "/solutions", "/downloads", "/brands",
  "/gallery", "/contact", "/blog", "/faq",
  "/lighting-company-dubai", "/lighting-showroom-dubai", "/ceiling-lights-dubai",
  "/outdoor-lighting-dubai", "/pendant-lights-dubai", "/led-strip-lights-dubai",
  "/hotel-lighting", "/residential-lighting", "/office-lighting", "/retail-lighting",
  "/restaurant-lighting", "/entertainment-lighting", "/audio-solutions", "/facade-lighting",
  "/lighting-suppliers-abu-dhabi", "/lighting-companies-sharjah", "/lighting-solutions-ajman",
  "/lighting-solutions-rak", "/lighting-companies-uae", "/lighting-companies-saudi-arabia",
  "/lighting-companies-bahrain", "/explosion-proof-lights", "/explosion-proof-lights-dubai",
];

export default function sitemap() {
  const hostname = "https://credencelighting.com";

  const dynamicRoutes = [
    ...projectSlugs.map((slug) => `/projects/${slug}`),
    ...blogSlugs.map((slug) => `/blog/${slug}`),
    ...productCategories.map((cat) => `/products/${slugify(cat)}`),
  ];

  const allRoutes = ["", ...staticRoutes, ...dynamicRoutes];

  return allRoutes.map((route) => ({
    url: `${hostname}${route}`,
    lastModified: new Date(),
  }));
}
