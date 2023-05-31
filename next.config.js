/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  images: {
    domains: ['', '192.168.0.33'],
  },
};

module.exports = nextConfig;
