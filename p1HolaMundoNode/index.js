console.log('Hello World');
const http = require('http');

const host = '0.0.0.0';
const port = 3000;

const server = http.createServer((req,res) => {
  res.statusCode = 200
});