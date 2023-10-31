class Shape {
    constructor() {
        this.color = "";
    };
    setColor(myColor) {
        this.color = myColor;
    };
};

class Triangle extends Shape {
   create() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
   };
};

class Square extends Shape {
    create() {
        return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    };
};

class Circle extends Shape {
    create() {
        return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    };
};

module.exports = { Triangle, Square, Circle };