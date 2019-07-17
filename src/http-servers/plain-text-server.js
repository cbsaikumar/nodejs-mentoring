import http from 'http';
const log = console.log;

//create a server object:
http.createServer((req, res) => {
    log('Server started and listening on port 8080.');    
    res.writeHead(200, {'Content-Type': 'text/plain'});

    res.write('Hello World');

    res.end();
}).listen(8080);