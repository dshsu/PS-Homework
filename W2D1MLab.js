//part 1
var num1=6;
var num2=-7;
if (num1>num2) {
  console.log(`the bigger number is ${num1}.`);
}
else if (num2>num1) {
  console.log(`The bigger number is ${num2}.`);
} else {
  console.log("The numbers are equal.");
}
//part 2
var grade=75;
if (grade>=90 && grade<=100) {
  console.log("You got an A!");
}
else if (grade>=80 && grade<90) {
  console.log("You got a B!");
}
else if (grade>=70 && grade<80) {
  console.log("You got a C!");
}
else if (grade>=55 && grade<70) {
  console.log("You got a D!");
}
else {
  console.log("You got an F.");
}
//Part 3
var time=1330;
if (time>=0500 && time<=1159) {
  console.log("Good morning!");
}
else if (time>=1200 && time<=1600) {
  console.log("Good Afternoon!");
}
else if (time>2359) {
  console.log("That's not a valid time");
}
else {
  console.log("Hey There");
}
