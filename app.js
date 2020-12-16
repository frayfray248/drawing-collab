// imports
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');

// objects
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// server static files
app.use(express.static(path.join(__dirname, "public")));

// GET request
app.get('/', (req, res) => {
    res.render("index");
})

// drawing data
var lines = [];

// sockets
io.on('connection', (socket) => {
    console.log(`Client ${socket.id} connected`);

    // send drawing data
    for (var line of lines) {
        socket.emit('drawLine', { line : line})
    }

    // disconnect event
    socket.on('disconnect', () => {
        console.log(`Client ${socket.id} disconnected`)
    })

    // drawing event
    socket.on('draw', (data) => {
        lines.push(data.line);
        io.emit('drawLine', { line : data.line})
    })
});

// start server
server.listen(3000, () => {
    console.log('listening on port 3000');
})