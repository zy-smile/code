const http = require("http");
const url = require("url");
const app = http.createServer();
app.on("request", (req, res) => {
  let { query, pathname } = url.parse(req.url, true);
  if (pathname == "/") {
    res.end("welcome");
  }
});
app.listen(3000);
console.log("服务已启动");
