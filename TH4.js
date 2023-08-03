class Mouse { // tạo đối tượng chuột với các thuộc tính weight và speed
    constructor(weight, speed) {
        this.weight = weight;
        this.speed = speed;
        this.alive = true;
    }
}
class Cat {
    constructor(name, weight, speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.meow = () => {
            console.log(`${this.name} meo meo`);
        }
        this.catchMouse = (mouse) => {
            if (this.speed > mouse.speed) {
                console.log(`${this.name} bắt chuột!`);
                mouse.alive = false;
            } else {
                console.log(`${this.name} không bắt đucợ chuột...`);
            }
        }
        this.eatMouse = (mouse) => {
            if (mouse.alive) {
                console.log(`${this.name} không thể ăn được chuột...`);
            } else {
                console.log(`${this.name} đã ăn được chuột`);
                this.weight += mouse.weight;
            }
        }
    }
}
const cat = new Cat("Tom", 5, 20);
const mouse = new Mouse(1, 10);
cat.meow();
cat.catchMouse(mouse);
console.log(`${cat.name}'s weight: ${cat.weight}`);