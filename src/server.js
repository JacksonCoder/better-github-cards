const fs = require('fs')
const http = require('http')
const url = require('url')

const api_key = fs.readFileSync("api.txt")

http.createServer(function(req,res) {
  handle(req,res)
}).listen(2000,'127.0.0.1')

function handle(req,res) {
  // Parse query
  var parsedUrl = url.parse(req.url,true)
  const query = parsedUrl.query
  const path = parsedUrl.pathname
  if(path === "/get") {
    console.log("asdf")
    res.writeHead(200,{"Content-Type":"text/html","Access-Control-Allow-Origin":"*"});
    res.end(github_fetch())
  }
  else if (path === "/lab/better-github-cards/front-end.js") {
    res.writeHead(200,{"Content-Type":"text/javascript"})
    res.end(fs.readFileSync("frontend.js"))
  }
}

function github_fetch(user) {
  // Fetch user from github API
  return "<span>HELLO</span>"
}
