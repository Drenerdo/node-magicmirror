var http = require("http"),
  mustache = require("mustache"),
  crypto = require("crypto"),
  fs = require('fs'),
  static = require('node-static'),
  url = require('url'),
  rq = require('request');

var view = {
  title: "Magic Mirror",
  random_hash: function () {
    return crypto.createHash('md5').update("" + (new Date()).getTime()).digest("hex");
  }
};

var file = new static.Server('./');


function onRequest(request, response) {
  console.log("Request received.");
  var pathname = url.parse(request.url).pathname;
  console.log("Pathname: "+pathname);
  if (pathname === "/") {
    fs.readFile('index.html', 'utf8', function (err, template) {
      if (err) {
        return console.log(err);
      }
      response.writeHead(200, {"Content-Type": "text/html"});
      var output = mustache.render(template, view);
      response.end(output);
    });
  }
  else if (pathname === "/cal") {
    var query = url.parse(request.url,true).query;
    if (query.url !== undefined) {
      rq.get(query.url, function (error, res, body) {
        if (!error && res.statusCode == 200) {
          response.end(body);
        }
        else {
          console.log(error);
        }
      });
    } else {
      console("/cal missing url parameter.");
    }
  }
  else {
    file.serve(request, response);
  }
  console.log("Response ended.");
}

http.createServer(onRequest).listen(8888);
console.log("Server has started.");