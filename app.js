var express = require('express');
var app = express();
//setup my ocket server
var io = require('socket.io')(http);

io.on('connection', function(socket) {
  console.log('new connection');

  //calles when client calls socekt.emit('move')
  socket.on('move', function(msg){
    socket.broadcast.emit('move', msg);
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
