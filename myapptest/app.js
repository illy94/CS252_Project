const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3002;

fs.readFile('index.html', (err,html) => {
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

(function() {
  const config = {
  apiKey: "AIzaSyDWgofB00cK2UVeEN8EPf3ltTCPlrEMBKw",
  authDomain: "cs252-ar.firebaseapp.com",
  databaseURL: "https://cs252-ar.firebaseio.com",
  storageBucket: "cs252-ar.appspot.com",
};
firebase.initializeApp(config);

//Get Elements
const preObject = documnet.getElementById('object');

//Create references
const dbRefObject = firebase.database().ref().child('object');

//sync object changes
dbRefObject.on('value', snap => console.log(snap.val()));
}());
