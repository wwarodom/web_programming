/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'computing.psu.ac.th',
          port: '',
          pathname: '/**',
        },
      ],
    },
  };

export default nextConfig;
