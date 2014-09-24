var http = require('http'),
  fs = require('fs'),
  port = 8888,
  filename = process.argv[2] || 'large.txt';

console.log('Using filename: %s', filename);

http.createServer(function (req, res) {
  fs.readFile(filename, function (err, file) {
    res.end(file);
  });
}).listen(port, function () {
  console.log('Server listening on port %d', port);
});