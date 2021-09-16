//connecting server and client side multiple pages

// const http = require("http");
// const fs = require("fs");

// let path;

// const server = http.createServer((req,res)=>{
//     path = "./views/"
//     console.log(req.url);
//     switch(req.url){
//         case '/':
//             path += "index.html"
//             break;
//         case '/html5':
//             path =+ "html5.html"
//             break;
//     }
//     fs.readFile(path,(err,data)=>{
//         if(err) throw err;
//         res.setHeader("Content-Type","text/html");
//         res.write(data);
//         res.end();
//     });
// });
// server.listen(4000);

//connecting server and client side

//const http = require("http");
// const fs = require("fs");
// let path = "./views/";
// const server = http.createServer((req,res)=>{
//    console.log("request received");
//    fs.readFile("./views/index.html",(err,data)=>{
//         res.setHeader("Content-Type","text/html");
//        res.write(data);
//         res.end();
//    });
//  });
//  server.listen(4000);

//redirecting and 404 error
    const http = require("http");
    const server = http.createServer(function (req, res) {
    const url = req.url;
  
    if (url === "/") {
      // do a 200 response
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Hello World!<h1>");
      res.end();
    } else if (url === "/google") {
      // do a 302 redirect
      res.writeHead(302, {
        location: "https://google.com",
      });
      res.end();
    } else {
      // do a 404 redirect
      res.writeHead(404);
      res.write("<h1>Sorry nothing found!<h1>");
      res.end();
    }
  });
  server.listen(5000);

