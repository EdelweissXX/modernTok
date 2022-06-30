/** @type {import('next').NextConfig} */

let path = require("path");


const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        resource:[
            'styles/globals.scss'
        ]
    }

    // typescript:
    //     // !! WARN !!
    //     // Dangerously allow production builds to successfully complete even if
    //     // your project has type errors.
    //     // !! WARN !!
    //     ignoreBuildErrors: true,
    // },

}

module.exports = nextConfig

