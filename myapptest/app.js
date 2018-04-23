const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3003;

fs.readFile('AR.html', (err,html) => {
    if (err){
        throw err;
    }

    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        res.write(html);
        res.end('Helloworld');
    });

    server.listen(port, hostname, () => {
        console.log('server started on port ' + port)
    });

});

