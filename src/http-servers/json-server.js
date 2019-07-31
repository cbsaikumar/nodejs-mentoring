import http from 'http';
const { log } = console;

const port = process.env.port || 3000;
//create a server object:
http.createServer((req, res) => {
   
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
    res.end(JSON.stringify(product));
    
}).listen(port, ()=>log(`Server started and listening on port ${port}.`));