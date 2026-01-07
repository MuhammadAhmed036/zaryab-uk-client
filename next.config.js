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
};

module.exports = nextConfig;
