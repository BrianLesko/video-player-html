const express = require('express');
const WebSocket = require('ws');
const { NodeMediaServer } = require('node-media-server');

const app = express();
const port = 3000;

// Serve your HTML page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

const wsServer = new WebSocket.Server({ server });

wsServer.on('connection', (ws) => {
  console.log('Client connected for video stream');

  ws.on('message', (message) => {
    // You could potentially do something with incoming messages here
  });

  ws.on('close', () => {
    console.log('Client has disconnected');
  });
});

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 60,
    ping_timeout: 30
  },
  http: {
    port: 8000,
    allow_origin: '*'
  }
};

const nms = new NodeMediaServer(config);
nms.run();
