/*You've been tasked to do this week's grocery shopping. As you arrive at Times Supermarket,
Kanye pings you to get a bottle of Hendricks gin. Add this to the existing shoppingList and console.log it.*/
/*var shoppingList = [
  "cool ranch doritos",
  "kings hawaiian sweet bread",
  "peanut butter oreos",
  "fruit loops cereal"
];
shoppingList.push('Hendricks Gin');
console.log(shoppingList);

/*3.  Use the force, or in this case the reverse method to help Yoda make some sense with his
motivational talk to the young Jedi interns.*/
/*
var yoda = ["try", "no", "is", "there", "not", "do", "or", "do"];
yoda.reverse();
console.log(yoda);
*/
/*4. People been lining up for hours to get the newest iphone release. Help manage
the unruly crowd of privileged customers by serving them one at a time and assiging
 it to a variable named `nowServing`. Console.log this new variable as well as the waitList.*/

var waitList = [ "Chance the Rapper", "Khalid", "Tay-Tay", "Barry Manilow", "Piko Taro" ];
while (waitList.length > 0) {
  var nowServing=waitList[0];
  console.log("Now Serving: "+nowServing);
  waitList.shift();
  if (waitList.length!=0) {
  console.log("Still waiting: "+waitList);
}
else {
    console.log("No more line! Good job!");
  }
}


/* 5. Help Nike sell more overpriced sneakers by changing their slogan from an array
into a string. Convert the shoe array and assign it to a variable named `shoeString`. Console.log this new variable.*/

var shoe = ["just", "do", "it"]; //initial input
var shoeString='';//to establish the new variable as a string
for (var i = 0; i < shoe.length; i++) {
  shoeString+=shoe[i]+" ";//creates the output sentence with a space
}
console.log(shoeString);//outputs final sentence
