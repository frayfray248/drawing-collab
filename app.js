// imports
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

// objects
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// GET request
app.get('/', (req, res) => {
    res.send("<h1>Hello World!<h2>");
})

// start server
server.listen(3000, () => {
    console.log('listening on port 3000');
})