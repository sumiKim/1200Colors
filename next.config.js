/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

module.exports = nextConfig;
