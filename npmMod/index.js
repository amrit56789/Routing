const http = require("http");

http
  .createServer((req, res) => {
    if (req.url == "/") {
      res.write("Hey How are you? home");
      res.end();
    } else if (req.url == "/about") {
      res.write("Hey How are you? about");
      res.end();
    } else if (req.url == "/contact") {
      res.write("Hey How are you? contact");
      res.end();
    } else {
      res.writeHead(400, { "Content-Type": "text/html" });
      res.end("<h1>404 Error page, Page does not exit</h1>");
    }
  })
  .listen(8000, () => {
    console.log("Port is listening");
  });
