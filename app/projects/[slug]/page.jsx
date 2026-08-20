import projects from "@/data/projects";
import ProjectDetails from "@/lib_src/pages/ProjectDetails";

const SITE_URL = "https://www.credencelighting.com";
const FALLBACK_IMAGE = `${SITE_URL}/meta.png`;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  const title = `${project.name} · ${project.location}`;
  const fullTitle = `${project.name} · ${project.location} · Credence Lighting`;
  const description = `Explore the architectural lighting design of ${project.name} in ${project.location} (${project.year}). Discover bespoke ${project.category.toLowerCase()} illumination solutions by Credence Lighting.`;
  const image = project.hero ? `${SITE_URL}${project.hero}` : FALLBACK_IMAGE;
  const url = `${SITE_URL}/projects/${project.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "Credence Lighting",
      images: [image],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

export default function Page() {
  return <ProjectDetails />;
}
