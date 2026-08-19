import projects from "@/data/projects";
import ProjectDetails from "@/lib_src/pages/ProjectDetails";

const SITE_URL = "https://credencelighting.com";
const FALLBACK_IMAGE = `${SITE_URL}/meta.png`;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Projects | Credence Lighting" };
  }

  const title = `${project.name} · Luxury Lighting Project | Credence`;
  const description = `Explore the architectural lighting design of ${project.name} in ${project.location} (${project.year}). Discover our bespoke ${project.category.toLowerCase()} solutions.`;
  const image = project.hero ? `${SITE_URL}${project.hero}` : FALLBACK_IMAGE;
  const url = `${SITE_URL}/projects/${project.slug}`;

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
  return <ProjectDetails />;
}
