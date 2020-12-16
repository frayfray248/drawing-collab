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

// sockets
io.on('connection', (socket) => {
    console.log(`Client ${socket.id} connected`);

    // disconnect event
    socket.on('disconnect', () => {
        console.log(`Client ${socket.id} disconnected`)
    })
});

// start server
server.listen(3000, () => {
    console.log('listening on port 3000');
})