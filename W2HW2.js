//this is the second homework and first commit from Atam
//Part 1: maxOfTwoNumbers function
/*
function maxOfTwoNumbers(x, y){
  var x;
  var y;
  if (x>y) {
    return (x+" is bigger");
  }
  else {
    return(y+" is bigger");
  }
}
console.log(maxOfTwoNumbers(6,2));
*/
//Part 2: maxOfThree
/*function maxOfThree(x, y, z) {
  if (x>y && x>z) {
    return(x);
  }
  else if (y>x && y>z) {
    return(y);
  }
  else if (z>x && z>y) {
    return(z);
  }
  else {
    return("These numbers are all equal");
  }
}*/
//Part 3: isCharacterAVowel
/*function isCharacterAVowel(char) {
  if (char==='a'||char==='i'||char==='o'||char==='e'||char==='u') {
    return true;
  }
  else {
    return false;
  }
}*/
//Part 4: sumArray and multiplyArray
/*var sum=[]
function sumArray(sum) {
  let sumfinal=0
for (var i = 0; i < sum.length; i++) {
  sumfinal+=sum[i];
}
return sumfinal;
}
var mult=[]
function multiplyArray(mult) {
let multfinal=1;
for (var i = 0; i < mult.length; i++) {
  multfinal*= mult[i];
}
return multfinal;
}
console.log(sumArray([1,2,3,4])+" and "+ multiplyArray([1,2,3,4]));*/
//Part 5: Write a function that returns the number of arguments passed to the function when called.

function manyFunction(input) {
var args=input.trim().split(" ");
return args.length;
}
console.log(manyFunction("1 2 3 4 5 6"));
//part 6: Define a function reverseString that computes the reversal of a string.
// For example, reverseString("jag testar") should return the string "ratset gaj".
function reverseString(string) {
  
}

//part 7:Write a function findLongestWord that takes an array of words and
//returns the length of the longest one.

//Part 8: Write a function filterLongWords that takes an array of words and a
//number i and returns the array of words that are longer than i characters long.
