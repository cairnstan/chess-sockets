var express = require('express');
var app = express();
var io = require('socket.io')(http);

io.on('connection', function(socket) {
  console.log('new connection');

  socket.on('message', function(msg){
    console.log('Got message from client: ' + msg);
  });
});

app.use(express.static('public'));

var http = require('http').Server(app);
var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

http.listen(port, function() {
    console.log('listening on *: ' + port);
});
