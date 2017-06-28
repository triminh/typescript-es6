"use strict";
var isDone = false;
console.log(isDone);
var decimal = 6;
console.log(decimal);
var color = "blue";
console.log(color);
var fullName = "TEDU";
var age = 10;
var sentense = "Hello Hello, my name is " + fullName + ". Age is " + (age + 1);
console.log(sentense);
var Color;
(function (Color) {
    Color[Color["Green"] = 0] = "Green";
    Color[Color["Blue"] = 1] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
//# sourceMappingURL=lesson7.js.map