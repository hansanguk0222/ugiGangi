/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.ytimg.com'],
    formats: ['image/webp'],
  },
};

module.exports = nextConfig;
