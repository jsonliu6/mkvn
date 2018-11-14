const Koa = require("koa");
const fs = require("fs");
const koaStatic = require("koa-static");

const app = new Koa();

app.use(koaStatic(__dirname + "/dist"));

// 响应
// app.use(async ctx => {
//   ctx.body = "123";
// });

app.listen(7000);
