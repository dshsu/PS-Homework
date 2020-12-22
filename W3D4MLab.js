/* Create a class called Fish
Define a method Swim( )
Create a class Nemo that inherits from Fish
Define an attribute color
Create a Nemo object. Can it swim?
Find the difference between abstract class and an interface
Which of the two can have implementation of a method in the class?*/

class Fish {
  constructor(name) {
this.name=name;
  }
   swim(fins) {
    console.log(`${name} can swim`);
  }
}

class Nemo extends Fish{
  constructor(name,color) {
    super();
this.name=name;
this.color=color;
  }
}
let nemo = new Nemo('Nemo','orange');
nemo.swim();
