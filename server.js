const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello Node!!!!</h1>");
});

server.listen(5000, () => {
  console.log("Mr Yemi ur Server is  running on port 5000");
});
