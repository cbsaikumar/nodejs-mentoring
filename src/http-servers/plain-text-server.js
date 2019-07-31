import http from 'http';
const { log } = console;

const port = process.env.port || 3000;
//create a server object:
http.createServer((req, res) => {
   
    res.writeHead(200, {'Content-Type': 'text/plain'});

    res.end('Hello World');

}).listen(port, ()=>log(`Server started and listening on port ${port}.`));