const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Square, Circle } = require('./lib/shapes.js');

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

function writeSVG(fileName, answer) {
    let svg;
    let shape;
    if (answer.shape === 'Triangle'){
        shape = new Triangle();
        shape.setColor(answer.shapeColor);
        svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        ${shape.render()}
      
        <text x="150" y="140" font-size="60" text-anchor="middle" fill="${answer.textColor}">${answer.text}</text>
      
      </svg>`
    } else if (answer.shape === 'Square') {
        shape = new Square();
        shape.setColor(answer.shapeColor);
        svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        ${shape.render()}
      
        <text x="150" y="135" font-size="60" text-anchor="middle" fill="${answer.textColor}">${answer.text}</text>
      
      </svg>`
    } else {
        shape = new Circle();
        shape.setColor(answer.shapeColor);
        svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        ${shape.render()}
      
        <text x="150" y="135" font-size="60" text-anchor="middle" fill="${answer.textColor}">${answer.text}</text>
      
      </svg>`
    };
    fs.writeFile(fileName, svg, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg");
    });
};

function init() {
    inquirer.prompt(questions)
        .then((data) => {
            if (data.text.length > 3) {
                console.log("Logo text cannot contain more than 3 characters");
                promptUser();
            } else {
                writeSVG(`./examples/logo_${data.text}_${data.shape}.svg`, data);
            };
        });
};

init();