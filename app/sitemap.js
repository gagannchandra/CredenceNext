import { projectSlugs, blogSlugs, productCategories } from "@/data/routes";

const slugify = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

const highPriorityRoutes = [
  "/products",
  "/solutions",
  "/projects",
  "/lighting-company-dubai",
  "/lighting-showroom-dubai",
  "/ceiling-lights-dubai",
  "/outdoor-lighting-dubai",
  "/pendant-lights-dubai",
  "/led-strip-lights-dubai",
  "/explosion-proof-lights-dubai",
  "/explosion-proof-lights",
  "/lighting-companies-uae",
  "/lighting-suppliers-abu-dhabi",
  "/lighting-companies-saudi-arabia",
  "/lighting-companies-bahrain",
  "/lighting-companies-sharjah",
  "/lighting-solutions-ajman",
  "/lighting-solutions-rak",
  "/hotel-lighting",
  "/residential-lighting",
  "/office-lighting",
  "/retail-lighting",
  "/restaurant-lighting",
  "/entertainment-lighting",
  "/audio-solutions",
  "/facade-lighting",
];

const standardRoutes = [
  "/about",
  "/brands",
  "/downloads",
  "/gallery",
  "/contact",
  "/blog",
  "/faq",
];

export default function sitemap() {
  const hostname = "https://www.credencelighting.com";
  const lastModDate = new Date("2026-08-19");

  const homeEntry = {
    url: `${hostname}/`,
    lastModified: lastModDate,
    changeFrequency: "weekly",
    priority: 1.0,
  };

  const highPriorityEntries = highPriorityRoutes.map((route) => ({
    url: `${hostname}${route}`,
    lastModified: lastModDate,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const standardEntries = standardRoutes.map((route) => ({
    url: `${hostname}${route}`,
    lastModified: lastModDate,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const productEntries = productCategories.map((cat) => ({
    url: `${hostname}/products/${slugify(cat)}`,
    lastModified: lastModDate,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const projectEntries = projectSlugs.map((slug) => ({
    url: `${hostname}/projects/${slug}`,
    lastModified: lastModDate,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const blogEntries = blogSlugs.map((slug) => ({
    url: `${hostname}/blog/${slug}`,
    lastModified: lastModDate,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    homeEntry,
    ...highPriorityEntries,
    ...productEntries,
    ...projectEntries,
    ...blogEntries,
    ...standardEntries,
  ];
}

