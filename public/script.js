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
    })

    // canvas mouse up
    canvas.mouseup(function () {
        mouse.down = false;
    })

    // canvas mouse move
    canvas.mousemove(function (event) {
        mouse.position.x = event.clientX / width;
        mouse.position.y = event.clientY / height;
        mouse.move = true;
    });

    var socket = io();
    
});