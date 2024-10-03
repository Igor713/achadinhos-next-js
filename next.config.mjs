/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.ciflimpadores.com.br',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
