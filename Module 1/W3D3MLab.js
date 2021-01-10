// When we wanted to access snacks within our object we had to put the
// name of the object in it to access the snacks
//
// a vending machine is an object
// it has an array of snacks (make 3 snacks)
// snacks are objects that have a name and a price
// a vending machine has a function vend that allows user to enter the array position
// (a number) of the snack and then that snack will be returned
// Be able to call vendingMachine.vend() with a valid integer to return a snack
class vendingMachine {
  constructor(snackPrice,snackName) {
    this.snackPrice=snackPrice;
    this.snackName=snackName;
  }
  vend(x){
    return `You just bought ${this.snackName[x]} `+`for $${this.snackPrice[x]}.`;
  }
}

var snackSupply=[snack1={brand:butterfinger, price:4}, snack2={brand:reeses, price:6}, snack3{brand:kitkats, price:1}]
// class Snack{
//   constructor(cost, brand){
//     this.cost=cost;
//     this.brand=brand;
//   }
//   [Snack1(brand:butterfinger, price:4), snack2(brand:reeses, price:6), snack3(brand:kitkats, price:1)]
// }
let snackBox = new vendingMachine
(
  [3,1,6],
  ['Butterfinger', 'Reeses', 'KitKats']
);

console.log(snackBox.vend(0));
