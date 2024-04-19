/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['robohash.org']
    },
    redirects: () => {
        return [
            { source: '/', destination: '/users', permanent: true }
        ];
    }
};

export default nextConfig;
