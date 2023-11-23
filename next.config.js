// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
  // eslint: {
  //   // Warning: This allows production builds to successfully complete even if
  //   // your project has ESLint errors.
  //   ignoreDuringBuilds: true,
  // },
//   // images: {
//   //   domains: ["firebasestorage.googleapis.com"],
//   //   unoptimized: true,
//   // },
//   // Add basePath
//   basePath: '/github-pages',
// };

// module.exports = nextConfig;

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  basePath: '/github-pages',
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}
 
module.exports = nextConfig;
