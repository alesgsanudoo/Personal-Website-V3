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
};


const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
