var sys = require("sys");
var http = require("http");

var operations = {
  add: function(a,b) {return a + b},
  sub: function(a,b) {return a - b},
  mul: function(a,b) {return a * b},
  div: function(a,b) {return a / b},


}
http.createServer(function(req, res){
  var parts = req.url.split("/"),
      op = operations[parts[1]];
      a = parseInt(parts[2], 10);
      b = parseInt(parts[3], 10);

  var result = op ? op(a,b) : "";

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("" + result)
}).listen(3000, "127.0.0.1");

sys.puts("Server Running..")
