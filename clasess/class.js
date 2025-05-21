class rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    area(){
        const area = this.width*this.height;
        return area;
    }
    paint(){
        console.log(`Painting with color ${this.color}`);
    }
     destroy(){
        console.log("Destroying the object");
        }
}
const Reat = new rectangle(10, 20, 'red');
const area = Reat.area();
console.log(area);
Reat.paint();
console.log(Reat.width)