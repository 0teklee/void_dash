/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["res.cloudinary.com"],
    minimumCacheTTL: 300000,
  },
  webpack: (config) => {
    config.externals = [...config.externals, "canvas", "jsdom"];
    return config;
  },
  reactStrictMode: false,
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
    URL: process.env.URL,
    NEXT_PUBLIC_SECRET: process.env.NEXT_PUBLIC_SECRET,
    CLOUDINARY_URL: process.env.CLOUDINARY_URL,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
    NEXT_APP_GITHUB_ID: process.env.NEXT_APP_GITHUB_ID,
    NEXT_APP_GITHUB_SECRET: process.env.NEXT_APP_GITHUB_SECRET,
    NEXT_MASTER_ID: process.env.NEXT_MASTER_ID,
    NEXT_APP_GOOGLE_CLIENT_ID: process.env.NEXT_APP_GOOGLE_CLIENT_ID,
    NEXT_APP_GOOGLE_CLIENT_SECRET: process.env.NEXT_APP_GOOGLE_CLIENT_SECRET,
    NEXT_CLOUDINARY: process.env.NEXT_CLOUDINARY,
  },
  swcMinify: true,
  compress: true,
};

module.exports = nextConfig;
