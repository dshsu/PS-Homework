//Exercise 1
const horror = ['Freddy', 'Jason', 'Michael', 'Ghostface', 'Chucky'];

// ADD CODE HERE
let fourthItem=horror[3];

// Write a console.log statement below to check your work!
console.log(fourthItem);
//-------------------------------------
const firstNames = ["Jon", "Arya", "Jamie"];
const lastNames = ["Snow", "Stark", "Lannister"];
const places = ["The Wall", "Winterfell", "Kings Landing"];

const bios = [];

// Loop through your arrays and store the following strings in the bios array:
// 'My name is Jon Snow and I am from The Wall'
// 'My name is Arya Stark and I am from Winterfell'
// 'My name is Jamie Lannister and I am from Kings Landing'

// ADD CODE HERE
for(var i=0; i<firstNames.length; i++)
  {
    bios.push(`My name is ${firstNames[i]} ${lastNames[i]} and I am from ${places[i]}`);
  }
//----------------------------------------------
const sumMe = {
  hello: 'there',
  you: 8,
  are: 7,
  almost: '10',
  done: '!'
};
let total = 0;
// ADD CODE HERE
for (var i in sumMe) {
  if (typeof sumMe[i]=='number'){
    total=total+sumMe[i];
  }
}
 console.log(total);
 //-------------------------------------
 const possibleIterable = [4, 3, 9, 6, 23];
const divByThree = {};
// ADD CODE HERE
for(var i=0; i<possibleIterable.length; i++)
  {
    if(possibleIterable[i]%3==0)
   divByThree[possibleIterable[i]] = i;
  }
console.log(divByThree);
