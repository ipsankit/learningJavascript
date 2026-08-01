class Rectangle {
    constructor (width,height) {
        this.width=width;
        this.height=height;
    }

calculateArea() {
    
    return this.width * this.height;
}
calculatePerimeter() {
    return (2 * (this.width + this.height));
}
}

const rectangle1 =new Rectangle(5,3);

console.log("Area:",rectangle1.calculateArea());
console.log("Perimeter:",rectangle1.calculatePerimeter());
