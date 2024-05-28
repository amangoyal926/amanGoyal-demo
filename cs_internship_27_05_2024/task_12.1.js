const prompt = require("prompt-sync")({sigint:true});
class area{
    squareArea(){
        let side=prompt("Enter the side of square");
        console.log(side*side)
    }
    triangleArea(){
        let b=prompt("Enter the value of base");
        let h=prompt("Enter the value of height");
        console.log(1/2*b*h);
    }
    rectangleArea(){
        let length=prompt("Enter the value of length");
        let width=prompt("Enter the value of width");
        console.log(length*width);
    }
}

let square = new area();
square.squareArea();

let triange = new area();
triange.triangleArea();

let rectangle = new area();
rectangle.rectangleArea();

