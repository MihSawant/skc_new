/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com','tailwindui.com','opendoodles.s3-us-west-1.amazonaws.com','flowbite.s3.amazonaws.com', 'cdn.foxlo.in']
    },
    eslint : {
        ignoreDuringBuilds: true,
    },
    typescript : {
        ignoreBuildErrors : true
        }
}

module.exports = nextConfig
