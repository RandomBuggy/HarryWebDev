const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const file = fs.readFileSync('demo.txt', 'utf-8');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-type': 'plain/html'});
  res.end(file);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
