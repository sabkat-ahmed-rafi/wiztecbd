/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
                port: "3000",
                pathname: "/**",
            },
            {
                protocol: "http",
                hostname: "127.0.0.1",
                port: "3000",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "backend.wiztecbd.com",
                pathname: "/uploads/**",
            },
            {
                protocol: "http",
                hostname: "localhost",
                port: "5000",
                pathname: "/uploads/**",
            },
        ],
    },
};

export default nextConfig;