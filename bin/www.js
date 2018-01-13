const http = require('http');
const app = require('../app');

const server = http.createServer(app);

// const server = http.createServer(function(req, res){
//     res.writeHead(200, {"Content-type": "text/plain"});
//     res.end("Welcome to GCIT LMS on Node.js");
// })

server.listen(3000);
console.log("Node Server up and running on 3000");