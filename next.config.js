/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: (width, src, quality) =>
      `/preprocessed-images/${filename}-${width}.jpg`,
  },
};

module.exports = nextConfig;
