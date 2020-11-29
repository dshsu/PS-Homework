//Part 1: Create function maxOfTwoNumbers. use if-then to take 2 numbers
//and return the bigger one.
/*function maxOfTwoNumbers(x, y) {
  if (x>y) {
    return(x);
  }
  else if (y>x) {
    return(y);
  }
  else {
    return("These are equal");
  }
  }
  console.log(maxOfTwoNumbers (7,7));*/
//Part 2: Create function maxOfThree that does the same with 3 numbers
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
  }
  console.log(maxOfThree (6,8,-7));
*/
/*Part 3: Create function isCharacterAVowel that takes a character and is
true if it's a vowel*/
function isCharacterAVowel(char) {
  if (char==='a'||char==='i'||char==='o'||char==='e'||char==='u') {
    return true;
  }
  else {
    return false;
  }
}

//part 4: Function charCount that returns the length of a string
/*function charCount(string) {
return string.length;
}
console.log(charCount("Hey!"));*/

/*part 5: function vowelCount that takes string and returns the number of vowels in
it. Check to make sure it's less than 10 chars long.*/
function vowelCount(input) {
//checks length of string
  var strlong=input.length;
  if (strlong>=10) {
    console.log("This string is too long");
  }
  else {
//turns the string into an array to examine
    var string = Array.from(input);
    var vCount=0;
    for (var i = 0; i < strlong; i++) {
//checks to see if each character in the array is a vowel
      isCharacterAVowel(string[i]);
      if (true)
//counts the vowels
        vCount++;
      }
    }
  console.log(vCount);
  }
console.log(vowelCount("bbbb"));
