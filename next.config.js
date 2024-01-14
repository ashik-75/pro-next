/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.dog.ceo",
      },
      {
        protocol: "https",
        hostname: "rickandmortyapi.com",
      },
    ],
  },
};

module.exports = nextConfig;
