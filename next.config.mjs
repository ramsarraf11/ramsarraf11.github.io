/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
  // Enable static export
  output: 'export', // This enables static export
  basePath: '/ramsarraf11.github.io', // Replace with your repository name
  assetPrefix: '/ramsarraf11.github.io/', // Replace with your repository name
};

export default nextConfig;