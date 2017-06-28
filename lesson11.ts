let displayColors = function (...colors: string[]) {
    console.log(colors);
}
let message = "Hello";
displayColors(message, 'Red');
displayColors(message, 'Red', 'Green');
displayColors(message, 'Red', 'Green', 'Blue');