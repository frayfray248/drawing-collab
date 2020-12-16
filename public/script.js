$(document).ready(function() {

    // mouse
    var mouse = {
        down: false,
        move: false,
        position: { x : 0, y : 0},
        position_previous : false
    }

    // canvas
    var canvas = $('#drawingCanvas');
    var context = canvas[0].getContext('2d');
    var width = window.innerWidth;
    var height = window.innerHeight;

    // set canvas dimensions to browser dimensions
    canvas[0].width = width;
    canvas[0].height = height;

    // canvas mouse down
    canvas.mousedown(function () {
        mouse.down = true;
    });

    // canvas mouse up
    canvas.mouseup(function () {
        mouse.down = false;
    });

    // canvas mouse move
    canvas.mousemove(function (event) {
        mouse.position.x = event.clientX / width;
        mouse.position.y = event.clientY / height;
        mouse.move = true;
    });

    // socket connection
    var socket = io();

    // on draw line event
    socket.on('drawLine', function(data) {
        const line = data.line;
        context.beginPath();
        context.lineWidth = 2;
        context.moveTo(line[0].x * width, line[0].y * height);
        context.lineTo(line[1].x * width, line[1].y * height);
        context.stroke();
    });

    // main loop
    function appLoop() {
        if (mouse.down && mouse.move && mouse.position_previous) {
            const drawing = { line: [ mouse.position, mouse.position_previous ] };
            socket.emit('draw', drawing);
            mouse.move = false;
        }

        mouse.position_previous = {x: mouse.position.x, y: mouse.position.y};

        setTimeout(appLoop);
    }

    appLoop();
    
});