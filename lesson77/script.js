
class Rectangle { // Always start from UpperCase
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }

}

class ColoredRectangleWithText  extends Rectangle{
    constructor (height, width, text, bgColor) {
        super(height, width);// Викликає теж саме що і у наслідуючого конструктора
        this.text = text;
        this.bgColor = bgColor;
    }
    showMyProps() {
        console.log(`Текст: ${this.text}, ColoR:${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25,10,'Hello World', 'red');

div.showMyProps();
console.log(div.calcArea());


const square = new Rectangle (10, 10);
const long = new Rectangle(20, 100);


console.log(square.calcArea());
console.log(long.calcArea());

