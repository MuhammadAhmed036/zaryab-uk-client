/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    unoptimized: false,
  },
  // Enable experimental features for better animations
  experimental: {
    scrollRestoration: true,
  },
  // Disable ESLint warnings for img elements
  eslint: {
    ignoreDuringBuilds: false,
  },
};

module.exports = nextConfig;
