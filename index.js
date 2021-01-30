var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('nes.min.css', (req, res) => {
  res.sendFile(__dirname + 'nes.min.css');
});

app.get('/screen', (req, res) => {
  res.sendFile(__dirname + '/screen/index.html');
});

app.get('/screen/video_panel1_v2.webm', (req, res) => {
  res.sendFile(__dirname + '/screen/video_panel1_v2.webm');
});

app.get('/screen/video_panel2_v1.webm', (req, res) => {
  res.sendFile(__dirname + '/screen/video_panel2_v1.webm');
});

app.get('/screen/video_panel5_v1.webm', (req, res) => {
  res.sendFile(__dirname + '/screen/video_panel5_v1.webm');
});


io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
  socket.on('delete message', (msg) => {
    io.emit('delete message', msg);
  });
  socket.on('partyon', (msg) => {
    io.emit('partyon', msg);
  });
  socket.on('partyoff', (msg) => {
    io.emit('partyoff', msg);
  });
  socket.on('go left', (msg) => {
    io.emit('go left', msg);
  });
  socket.on('go right', (msg) => {
    io.emit('go right', msg);
  });
  socket.on('go top', (msg) => {
    io.emit('go top', msg);
  });
  socket.on('go down', (msg) => {
    io.emit('go down', msg);
  });
});

http.listen(80, () => {
  console.log('listening on *:80');
});
