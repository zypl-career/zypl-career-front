import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/shared/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  swcMinify: false,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.kasbiman.pro',
        port: '',
        pathname: '/**',
      },
    ],
  },
  transpilePackages: ['shiki'],
};

export default withNextIntl(nextConfig);
