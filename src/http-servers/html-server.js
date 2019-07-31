import http from 'http';
import fs from 'fs';
import path from 'path';
import through2 from 'through2';

const { log } = console;

const port = process.env.port || 3000;
//create a server object:
http.createServer((req, res) => {
   
    res.writeHead(200, {'content-type': 'text/html'});

    let stream = fs.createReadStream(path.join(__dirname, 'index.html'));

    stream.pipe(through2(function(chunk, enc, cb){
        const str = chunk.toString().replace('{message}', 'Hello World!');
        this.push(str);
        cb();
    })).pipe(res);

}).listen(port, ()=>log(`Server started and listening on port ${port}.`));