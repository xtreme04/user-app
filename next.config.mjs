/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: () => {
        return [
            { source: '/', destination: '/users', permanent: true }
        ];
    }
};

export default nextConfig;
