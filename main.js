var bridgetCore = require('./src/bridgedCore');
var utils = require('./src/utils');
var Arduino = require('node-arduino');
var boardService = require('./src/services/board.service');
var config = require('./src/config/main');

let board = new Arduino.connect(config.lightBoard);

boardService.add(board);

board.sp.open(() => {
    console.log("Starting HAP...");

    bridgetCore();

    utils.printPincode(config.pincode);
});
