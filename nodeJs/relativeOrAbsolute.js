const fs = require("fs");
const path = require("path");
fs.readFile(path.join(__dirname, "helloworld.js"), "utf8", (err, doc) => {
  console.log(doc);
  console.log(err);
});
const path1 = path.join("public", "images", "a.png");
console.log(path1);
