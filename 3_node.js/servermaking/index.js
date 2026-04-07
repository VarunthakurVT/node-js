const http = require("http");
const Port = 3000;
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    console.log("home page");
  } else if (req.url == "/contact") {
    console.log("contact page");
  } else if (req.url == "/hi") {
    console.log("hi");
  } else {
    console.log("404:page not found");
  }
});
server.listen(Port, () => {
  console.log("server started on port 3000..");
});
