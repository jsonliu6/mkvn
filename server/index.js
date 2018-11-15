const Koa = require("koa");
const serve = require("koa-static");
const historyFallback = require("koa2-history-api-fallback");

const app = new Koa();

app.use(historyFallback());
app.use(serve(__dirname + "/public/"));

app.listen(7000);
