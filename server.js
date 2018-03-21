/**
 * Created on 03.2018.
 */

'use strict';

const Koa           = require("koa"),
    Router          = require('koa-router'),
    normalizePort   = require('normalize-port');

const app   = new Koa(),
    router  = new Router(),
    port    = normalizePort(process.env.PORT || 3019);

let server = null;

router.get('/', (ctx)=>{
    ctx.body = 'Страница Koa.'
});

app.use(router.routes());

module.exports = app.listen(port);

console.log("Application started. Listening on port:" + port);