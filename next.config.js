/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "demo-bucket-kap.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "demo-bucket-kap.s3.us-east-1.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
