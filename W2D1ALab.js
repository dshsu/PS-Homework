//Part 1
/*for (var i = 1; i < 10; i+=2) {
    console.log(i);
}
for (var i = 2; i <= 11; i+=2) {
  console.log(i);
}
//part 1 variant 1
for (var i = 1; i <= 10; i++) {
  if(i%2==0){
      console.log("This is even "+i);
    }
  else {
    console.log("This is odd "+i);
  }
}
*/

//Part 2
/*for (var i = 0; i <10; i++) {
  if (i%2===0) {
    console.log(i);
  }
}*/

//Part 3
for (var i = 1; i <=20; i++) {
  if (i===5||i===7||i===11||i===13||i===17||i===19) {
    console.log("Prime");
    }
    else if (i%2===0) {
      console.log("Even");
    }
    else {
      console.log("Odd");
    }
}
