/* Let's create shaped objects

Define a new class called Circle with appropriate attributes and instantiate a
few Circle objects.
Write a function called circle_area that returns the area of the object.
Write a function total_sides that returns the number of sides of the object.
Define a new class called Rectangle with appropriate attributes and instantiate a few Rectangle objects.
Write a function called rectangle_area that returns the area of the given object.
Write a function total_sides that returns the number of sides of the object.
Define a new class called Square with appropriate attributes and instantiate a few Square objects.
Write a function called square_area that returns the area of the given object.
Write a function total_sides that returns the number of sides of the object.*/

class Circle {
  constructor(radius,sides) {
this.radius = radius;
this.sides = sides;
}
circle_area(radius){
  let area=(Math.pi)*(Math.pow(this.radius,2));
  return area;
    }
circleSides(sides){
  return this.sides;
}
}
let circle1= new Circle(3,0);
console.log(circle1.circle_area());
let circle2 = new Circle(6,0);

class Rectangle {
  constructor(length,width) {
this.length=length;
this.width=width;
  }
  rectangle_area(length,width){
    let area=this.length*this.width;
    return area;
  }
  rectangleSides(length,width){
    return '4';
  }
}
let rect1=new Rectangle(4,2);
let rect2=new Rectangle (6,1);

class Square {
  constructor(sidelength) {
    this.sidelength=sidelength;
  }
  square_area(sidelength){
    let area=Math.pow(this.sidelength,2);
    return area;
  }
  squareSides(sidelength){
    return '4';
  }
}
let sq1=new Square(4);
let sq2=new Square(6);
