// Create an Animal class.
// The class will have name, age, color, legs, superPower attributes
// Create two objects of this class - both with a unique superPower
// create three methods for this class - include one method named userSuperPower()
// Create two objects for this class

class Animal {
  constructor(name, age, color, legs, superPower) {
    this.name=name,
    this.age=age,
    this.color=color,
    this.legs=legs,
    this.superPower=superPower;
  }
  userSuperPower(){
    console.log(`${this.name} used ${this.superPower}! It's Super Effective!`);
  }
  displayAge(){
    console.log(`${this.name} is ${this.age} years old.`);
  }
  displayLegs(){
    console.log(`${this.name} has ${this.legs} legs. That's a normal number of legs.`);
  }
}
const octopus=new Animal('Gary',19,'blue and orange',8,'flight');
const hippo=new Animal('Fiona',4,'purple',4,'super strength');
hippo.userSuperPower();
// Part 2: Create a class name User
// This class with have firstName, lastName, department attributes
// a method name changeDepartment()
// Create three instances of this class
// Change department for two of the instances
// Create three objects for this class
class User {
  constructor(firstName, lastName, department) {
    this.firstName=firstName,
    this.lastName=lastName,
    this.department=department;
  }
  changeDepartment(newDepartment){
    this.department=newDepartment;
  }
}
const userA=new User('Alice', 'Bates', 'English');
userA.changeDepartment('Physics');
const userB=new User('Bob', 'Chapman', 'Psychology');
userB.changeDepartment('English');
const userC=new User('Carol', 'Davies', 'Math');
userC.changeDepartment('Economics');
console.log(userA);
