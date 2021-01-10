// const personStore = {
//   greet: function() {
//     console.log('hello');
//   }
// }
//
// function personFromPersonStore(name, age) {
// 	// add code here
// let newPerson = Object.create(personStore);
// newPerson.name=name;
//   newPerson.age=age;
// return newPerson;
// }
//
// const sandra = personFromPersonStore('Sandra', 26);
//
// // Uncomment these lines to check your work!
// console.log(sandra.name); // -> Logs 'Sandra'
// console.log(sandra.age); // -> Logs 26
// sandra.greet(); // -> Logs 'hello'
// ------------------------
const personStore = {
  greet: function() {
    console.log('hello');
  }
}

function personFromPersonStore(name, age) {
	const person = Object.create(personStore);
  person.name = name;
  person.age = age;
  return person;
}

const sandra = personFromPersonStore('Sandra', 26);

// add code here
personStore.introduce()
{
  console.log('Hi, my name is '+ personFromPersonStore.name +'.');
}
----------------------------------------
function PersonConstructor() {
	// add code here
this.greet=function()
{
  console.log("hello");
}
}

const simon = new PersonConstructor();

// Uncomment this line to check your work!
simon.greet(); // -> Logs 'hello'
-----------------------------
function PersonConstructor() {
  this.greet = function() {
    console.log('hello');
  }
}

function personFromConstructor(name, age) {
	// add code here
const newPerson= new PersonConstructor;
  newPerson.name=name;
    newPerson.age=age;
  return newPerson;
}



const mike = personFromConstructor('Mike', 30);

// Uncomment these lines to check your work!
 console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); // -> Logs 30
mike.greet(); // -> Logs 'hello'
-------------------------------------
function PersonConstructor() {
  this.greet = function() {
    console.log('hello');
  }
}

function personFromConstructor(name, age) {
  const person = new PersonConstructor();
  person.name = name;
  person.age = age;
  return person;
}

const mike = personFromConstructor('Mike', 30);

// add code here
PersonConstructor.prototype.introduce = function() {
    console.log(`Hi, my name is ${this.name}`);
  }

// Uncomment this line to check your work!
 mike.introduce(); // -> Logs 'Hi, my name is Mike'
 --------------------------------------
 class PersonClass {
	constructor(name) {
    // add code here
this.name=name;


	}

	// add code here
greet()
  {console.log('hello');}
}

const george = new PersonClass('George');

// Uncomment this line to check your work!
george.greet(); // -> Logs 'hello'
-----------------------------------------
class PersonClass {
	constructor(name) {
    this.name = name;
	}

	greet() {
    console.log('hello');
  }
}

// add code here
class DeveloperClass extends PersonClass{
  introduce(){
    console.log(`Hello World, my name is ${this.name}`);
  }
}
const thai = new DeveloperClass('Thai', 32);

// Uncomment these lines to check your work!
console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); // -> Logs 'Hello World, my name is Thai'
