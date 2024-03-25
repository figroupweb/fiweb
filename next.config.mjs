/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
            },
        ],
    },
    // async rewrites() {
    //     return [
    //         {
    //             source: '/en/about',
    //             destination: '/es/nosotros',
    //         },
    //     ]
    // },
};

export default nextConfig;
