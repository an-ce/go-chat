const Koa = require('koa')
const koaStatic = require('koa-static')
const {historyApiFallback} = require('koa2-connect-history-api-fallback')
const koaServerHttpProxy = require('koa-server-http-proxy')
const path = require("node:path");

const app = new Koa()

app.use(async (ctx, next) => {
    const start = Date.now()
    await next()
    const ms = Date.now() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}`)
})

app.use(koaServerHttpProxy('/api/', {
    target: 'http://127.0.0.1:3000',
    pathRewrite: {'^/api': ''},
}))

app.use(koaServerHttpProxy('/ws/', {
    target: 'http://127.0.0.1:3000',
    ws: true,
    changeOrigin: true,
}))

app.use(historyApiFallback())
app.use(koaStatic(path.join(__dirname, './dist')))

app.listen(80)