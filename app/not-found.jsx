import NotFound from "@/lib_src/pages/NotFound";

export const metadata = {
  title: "Page Not Found",
  robots: "noindex, nofollow",
};

export default function Page() {
  return <NotFound />;
}
