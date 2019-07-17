import http from 'http';
import fs from 'fs';
import path from 'path';

const log = console.log;

//create a server object:
http.createServer((req, res) => {
    log('Server started and listening on port 8080.');    
    res.writeHead(200, {'content-type': 'text/html'});

    let fsContent = fs.readFileSync(path.join(__dirname, 'index.html'));
    
    res.write(fsContent);

    res.end();
}).listen(8080);