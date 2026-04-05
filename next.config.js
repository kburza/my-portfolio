/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "demo-bucket-kap.s3.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
