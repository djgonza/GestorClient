var express = require('express');
const fs = require('fs');
var app = express();

app.use(express.static('.'));

var cache = {};
cache['index'] = fs.readFileSync('./index.html');

app.get('/login', function(req, res){    
    res.setHeader('Content-Type', 'text/html');
    res.send( cache['index'] );                                
});
app.get('/register', function(req, res){    
    res.setHeader('Content-Type', 'text/html');
    res.send( cache['index'] );                                
});
app.get('/library', function(req, res){    
    res.setHeader('Content-Type', 'text/html');
    res.send( cache['index'] );                                
});

// start server
let port = process.env.PORT ? process.env.PORT : 3000
var server = app.listen(port, function () {
	console.log('Server listening on port ' + port);
});
