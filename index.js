const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Square, Circle} = require('./lib/shapes.js');

const questions = [
    {
        type: "input",
        message: "Enter logo text (up to three letters)",
        name: "text",
    },
    {
        type: "input",
        message: "What color would you like the text to be? (Enter color name or hexadecimal number)",
        name: "textColor",
    },
    {
        type: "list",
        message: "What shape would you like your logo to be?",
        choices: ["Triangle", "Square", "Circle"],
        name: "shape",
    },
    {
        type: "input",
        message: "What color would you like the shape to be? (Enter color name or hexadecimal number)",
        name: "shapeColor",
    },
]

