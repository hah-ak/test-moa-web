const {createServer} = require('http');
const {parse} = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production'
const hostname = dev ? 'localhost' : ''
const port = 3003

const app = next({dev, hostname, port});
const handle = app.getRequestHandler();

app.prepare().then(() => {
    createServer(async (req,res) => {
        try {
            const {pathname, query} = parse(req.url, true)
            await app.render(req, res, pathname, query)
        } catch (e) {

        }
    })
        .listen(port, () => {
            console.log("listen")
        })
        .once('error', () => {
            process.exit(1)
        })

})