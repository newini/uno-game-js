//ws_server.js
//
// WebSocket Server in JavaScript



// Create an HTTP server
const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';

const express = require('express');
const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

// Create a WebSocket server
const { Server } = require('ws');

const wss = new Server({ server });


// Handle connections
wss.on('connection', (ws) => {
  console.log('Client connected');

  // Handle when received data
  // Brige data to all clients
  ws.onmessage = function(evt) {
    console.log(evt.data);
    wss.clients.forEach((client) => {
      client.send(evt.data);
    });
  }

  // Handle when closed
  //ws.on('close', () => console.log('Client disconnected'));
  ws.onclose = function() {
    console.log('Client disconnected')
  }
});


// Broadcast updates
//setInterval(() => {
//  wss.clients.forEach((client) => {
//    client.send(new Date().toTimeString());
//  });
//}, 1000);
