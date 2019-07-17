import http from 'http';
const log = console.log;

//create a server object:
http.createServer((req, res) => {
    log('Server started and listening on port 8080.');    
    res.writeHead(200, {'content-type': 'application/json'});

    const product = {
        id: 1,
        name: 'Supreme T-Shirt',
        brand: 'Supreme',
        price: 99.99,
        options: [
            { color: 'blue' },
            { size: 'XL' }
        ]
    };
    res.write(JSON.stringify(product));

    res.end();
}).listen(8080);