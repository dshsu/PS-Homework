//Part 1 - Using a while loop, print out all prime numbers between 0 - 20
let count = 0;
while (count <= 20)
if (count<4) {
  console.log(count);
  count++;
}
else {
  if (count%2!=0)
  if (count%3!=0)
    console.log(count);
    count++;
}
//Part 2- Use a while loop to add up the numbers 1 to 20 into one variable.
//Print out the sum at the end
/*let count=1;
let sum=0
while (count<=20) {
  sum+=count;
  count++;
}
console.log(sum);*/
//Part 3 - Use a while loop to print out the even number from 1 to 20.
/*let count=0;
while (count%2==0 && count<=18) {
  count+=2;
  console.log(count);
}*/
