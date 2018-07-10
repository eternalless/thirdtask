'use strict';

const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    ctx.body = 'Hello World!!!!koa2';
});

app.listen(8081, () => {
    console.log(`success8081`);
});