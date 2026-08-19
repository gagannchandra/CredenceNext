import { blogPosts } from "@/data/blog";
import BlogDetail from "@/lib_src/pages/BlogDetail";

const SITE_URL = "https://credencelighting.com";
const FALLBACK_IMAGE = `${SITE_URL}/meta.png`;

// Pre-render metadata (and static params) for every known blog slug at
// build time, so crawlers get real per-post titles/descriptions/OG tags
// in the initial HTML instead of a generic fallback.
export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Blog | Credence Lighting" };
  }

  const title = post.seoMetadata?.title || `${post.title} · Credence Lighting`;
  const description = post.seoMetadata?.description || post.excerpt;
  const image = post.image ? `${SITE_URL}${post.image}` : FALLBACK_IMAGE;
  const url = `${SITE_URL}/blog/${post.slug}`;

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
      type: "article",
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
  return <BlogDetail />;
}
