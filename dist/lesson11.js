"use strict";
var displayColors = function () {
    var colors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        colors[_i] = arguments[_i];
    }
    console.log(colors);
};
var message = "Hello";
displayColors(message, 'Red');
displayColors(message, 'Red', 'Green');
displayColors(message, 'Red', 'Green', 'Blue');
//# sourceMappingURL=lesson11.js.map