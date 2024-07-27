/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vnevpeyewqsbbniekaxp.supabase.co',
      },
    ],
  },
};

export default nextConfig;
