/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      }
    ]
  },
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  }
}
