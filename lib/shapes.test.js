const { Triangle, Square, Circle } = require('./shapes')

describe('Triangle Test', () => {
    test('Should create a triangle and set background color to blue', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />')
    });
});

describe('Square Test', () => {
    test('Should render a square and set background color to green', () => {
        const shape = new Square();
        shape.setColor("green");
        expect(shape.render()).toEqual('<rect x="73" y="40" width="160" height="160" fill="green" />')
    });
});

describe('Circle Test', () => {
    test('Should render a circle and set background color to pink', () => {
        const shape = new Circle();
        shape.setColor("pink");
        expect(shape.render()).toEqual('<circle cx="150" cy="115" r="80" fill="pink" />')
    });
});

