/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["demo-bucket-kap.s3.amazonaws.com"],
  },
};

module.exports = nextConfig;
