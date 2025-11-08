/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@workspace/ui'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'menand.fr',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
