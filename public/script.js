$(document).ready(function() {

    // mouse
    var mouse = {
        click: false,
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

    // canvas mouse event handlers
    canvas.mousedown(function () {
        console.log("mouse down on canvas");
    })

    canvas.mouseup(function () {
        console.log("mouse up on canvas");
    })

    var socket = io();
    
});