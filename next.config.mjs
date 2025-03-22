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
  // Add this section for GitHub Pages deployment
  basePath: '/ramsarraf11.github.io', // Replace with your repository name
  assetPrefix: '/ramsarraf11.github.io/', // Replace with your repository name
}

export default nextConfig
