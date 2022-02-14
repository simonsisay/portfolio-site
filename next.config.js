/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.prismic.io",
      "cdn5.vectorstock.com",
      "media.istockphoto.com",
      "images.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
