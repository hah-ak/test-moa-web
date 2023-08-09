const path = require('path')
const isDev = process.env.NODE_ENV !== 'product'

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, context) => {
        return config
    },
    swcMinify : true,
    compiler: {
        removeConsole : {
            exclude : isDev ? ['error','warn','info','debug','log'] : ['error','warn']
        }
    },
    modularizeImports : {
        lodash : {
            preventFullImport : true,
            transform : '{{member}}'
        }
    },
    serverRuntimeConfig : {
        DEV : isDev,
        PORT : isDev ? 3003 : 3000,
        HOST_NAME : isDev ? 'localhost' : '',
    },
    sassOptions : {
        includePaths: [path.join(__dirname, 'styles')]
    },
    experimental : {
        serverActions : true
    },
    // 개발서버 프록시 설정
    async rewrites(){
        return [
            {
                source: '/:path*',
                destination: 'http://localhost:8083/:path*',
            }
        ]
    }
}

module.exports = nextConfig
