const http = require("http");
const fs = require("fs");
http
  .createServer((req, res) => {
    const url = req.url;
    if (url == "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("Hello I am on the home page");
      res.end();
    } else if (url == "/about") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("Hello I am on the about page");
      res.end();
    } else if (url == "/contact") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("Hello I am on the contact page");
      res.end();
    } else if (url == "/userapi") {
      fs.readFile(`${__dirname}/userApi/userapi.json`, "utf-8", (err, data) => {
        console.log(data);
        res.end("Hello api");
      });
    } else {
      res.writeHead(400, { "Content-Type": "text/html" });
      res.end("404 Error page is not found");
    }
  })
  .listen(8080, () => {
    console.log("Server is listening");
  });
