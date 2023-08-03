class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.area = Math.PI * (this.radius * this.radius) //dien tich
    }
}
let Circle1 = new Circle(2, "red");
console.log(Circle1);