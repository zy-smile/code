const http = require("http");
const url = require("url");
const querystring = require("querystring");
const fs = require("fs");
const path = require("path");
const app = http.createServer();
app.on("request", (req, res) => {
  let method = req.method.toLowerCase();
  let { query, pathname } = url.parse(req.url, true);
  res.writeHead("200", {
    "content-type": "text/html;charset=utf8",
  });
  var postdata = "";
  if (method == "post") {
    req.on("data", (params) => {
      postdata += params;
    });
    req.on("end", () => {
      var params = querystring.parse(postdata);
    });
    res.end("数据接收完毕");
  } else if (method == "get") {
    if (pathname == "/form") {
      let pathbase = path.join(__dirname, "public", pathname + ".html");
      console.log(pathbase);
      fs.readFile(pathbase, "utf-8", (err, result) => {
        if (!err) {
          console.log(err);
          console.log(result);
          res.end(result);
        } else {
          res.end("文件读取失败");
        }
      });
    }
  }
});
app.listen(3000);
console.log("网站服务启动成功");
