var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/nes.min.css', (req, res) => {
  res.sendFile(__dirname + '/nes.min.css');
});

app.get('/screen', (req, res) => {
  res.sendFile(__dirname + '/screen/index.html');
});

app.get('/screen/panel2_v1.mp4', (req, res) => {
  res.sendFile(__dirname + '/screen/panel2_v1.mp4');
});

app.get('/screen/panel3_v1.mp4', (req, res) => {
  res.sendFile(__dirname + '/screen/panel3_v1.mp4');
});

app.get('/screen/panel4_v1.mp4', (req, res) => {
  res.sendFile(__dirname + '/screen/panel4_v1.mp4');
});


io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
  socket.on('chat message part', (msg) => {
    io.emit('chat message part', msg);
  });
  socket.on('partyon', (msg) => {
    io.emit('partyon', msg);
  });
  socket.on('partyoff', (msg) => {
    io.emit('partyoff', msg);
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
