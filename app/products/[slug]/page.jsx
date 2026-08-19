import products from "@/data/products";
import { slugify } from "@/utils/routeUtils";
import ProductDetails from "@/lib_src/pages/ProductDetails";

const SITE_URL = "https://credencelighting.com";
const FALLBACK_IMAGE = `${SITE_URL}/meta.png`;

const categoriesList = [
  "Indoor", "Outdoor", "Hospitality", "Facade", "Entertainment",
  "LED Screen", "Stretch Ceiling", "Automation", "Retail", "Audio",
];

export function generateStaticParams() {
  return categoriesList.map((c) => ({ slug: slugify(c) }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const matchedCategory = categoriesList.find((c) => slugify(c) === slug);

  if (!matchedCategory) {
    return { title: "Products | Credence Lighting" };
  }

  const categoryProducts = products.filter((p) => p.category === matchedCategory);
  const sample = categoryProducts[0];

  const title = `${matchedCategory} Lighting Collection · Credence Lighting`;
  const description = sample
    ? `Explore our premium ${matchedCategory.toLowerCase()} lighting collection. Discover luxury ${sample.title.toLowerCase()}s engineered for uncompromised performance and aesthetic excellence.`
    : `Explore our premium ${matchedCategory.toLowerCase()} lighting collection from Credence Lighting.`;
  const image = sample?.image ? `${SITE_URL}${sample.image}` : FALLBACK_IMAGE;
  const url = `${SITE_URL}/products/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Credence Lighting",
      images: [image],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default function Page() {
  return <ProductDetails />;
}
