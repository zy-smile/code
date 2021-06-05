const fs = require("fs");
fs.writeFile("./readText.txt", "你好呀", (err) => {
  console.log(err);
  if (!err) {
    console.log("写入成功");
  }
});
fs.readFile("./readText.txt", "utf8", (err, doc) => {
  console.log(err);
  console.log(doc);
});
