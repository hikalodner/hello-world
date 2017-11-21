express = require('express')

var message = 'Hello World!';

var server_app = express();
server_app.get('/', function(req, res){
    res.end(message);
});

server_app.listen(8080);
console.log("Hello World app listening on port 8080");
