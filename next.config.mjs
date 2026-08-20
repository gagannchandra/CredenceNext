/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  poweredByHeader: false,
  compress: true,

  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },

  // Static content pages (product/project/location/blog data doesn't change
  // per-request) - let CDNs and browsers hold onto them, but always
  // revalidate in the background so an update still reaches users quickly.
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=2592000" },
        ],
      },
      {
        source: "/brands/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=2592000" },
        ],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
        ],
      },
    ];
  },

  // Ported 1:1 from the original vercel.json "redirects" block.
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/advertising-2", destination: "/", permanent: true },
      { source: "/home-automation-control-system", destination: "/products", permanent: true },
      { source: "/posts-7", destination: "/blog", permanent: true },
      { source: "/services", destination: "/solutions", permanent: true },
      { source: "/commercial-lighting", destination: "/solutions", permanent: true },
      {
        source:
          "/blog/top-5-lighting-companies-in-dubai-for-2025-brighten-your-space-with-quality-style",
        destination: "/lighting-company-dubai",
        permanent: true,
      },
      {
        source:
          "/2025/10/01/top-5-lighting-companies-in-dubai-for-2025-brighten-your-space-with-quality-style",
        destination: "/lighting-company-dubai",
        permanent: true,
      },
      {
        source: "/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug",
        destination: "/blog/:slug",
        permanent: true,
      },
      { source: "/products/strech-ceiling", destination: "/products/stretch-ceiling", permanent: true },
    ];
  },
};

export default nextConfig;
