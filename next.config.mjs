import createNextIntlPlugin from "next-intl/plugin";
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'github.com',
                port: '',
            }]
    },
    webpack: (config) => {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            canvas: false,
        }
        return config
    },
};


const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
