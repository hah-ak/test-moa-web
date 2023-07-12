const {createServer} = require('http');
const {parse} = require('url');
const next = require('next');
const nextConfig = require('./next.config')

const {DEV, PORT, HOST_NAME} = nextConfig.serverRuntimeConfig

const app = next({dev:DEV, hostname:HOST_NAME, port:PORT});
const handle = app.getRequestHandler();

app.prepare().then(() => {
    createServer(async (req,res) => {
        try {
            const {pathname, query} = parse(req.url, true)
            await app.render(req, res, pathname, query)
        } catch (e) {

        }
    })
        .listen(PORT, () => {
            console.log("listen")
        })
        .once('error', () => {
            process.exit(1)
        })

})