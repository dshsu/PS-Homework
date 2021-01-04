class spaceShip {
    constructor(name, hull, firepower, accuracy){
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    receiveAttack(attackingShip) {
		const attackRoll = Math.random();
		if (attackingShip.accuracy > attackRoll) {
			this.hull -= attackingShip.firepower;
        }
        else{
            console.log ("The attack missed!");
        }
	}
}

//create new player ship
let player = new spaceShip('USS Schwarzenegger', 20, 5, .7)
//confirms new player
console.log(`Welcome, Captain of the ${player.name}.`);

//create array of aliens
const alienFleet = []
for(let i = 1; i <= 6; i++){
    let alienHull =  Math.floor(Math.random() * (6 - 3) + 3);
    let alienFirePower = Math.floor(Math.random() * (4 - 2) + 2);
    let alienAccuracy = Math.round(10*(Math.random() * (.8 - .6) + .6))/10;
    let Alien = new spaceShip('UFOs', alienHull, alienFirePower, alienAccuracy)
    alienFleet.push(Alien);
};
//confirms array
console.log(alienFleet);

//loops through the array and fights each ship
let replay = true;
while (alienFleet.length > 0 && replay == true) {
    let activeAlien = alienFleet.pop();
    console.log("The battle begins....");
    while (activeAlien.hull>0 && player.hull>0){
        activeAlien.receiveAttack(player);
        console.log(`Direct hit! The alien ship's hull is now at ${activeAlien.hull}.`)
        if (activeAlien.hull>0){
            player.receiveAttack(activeAlien);
            console.log(`Direct Hit! Your ship's hull is now at ${player.hull}.`)
            if (player.hull<=0){
                console.log(`HULL BREACH! You have been defeated.`);
                break;
                }
            }
        else if (activeAlien.hull<=0){
            console.log(`You defeated the alien ship! Congratulations, Captain!`)
            console.log(`${alienFleet.length} ships remain.`);
            replay = confirm("Do you wish to continue? Press OK to continue the attack and Cancel to retreat.");
            if (replay == false) {
              console.log("You have chosen to retreat. GAME OVER.");
              break;
            }
            else
            continue;
        }
        }

    }

if (player.hull > 0 && alienFleet.length == 0) {
    console.log("You did it! You saved the day!");
}

/*send an alert saying how many alien ships there are (starting at 6)
Send an alert asking if you want to attack or retreat using buttons
if attack, run the attack function (you attack, it attacks, continues until one is defeated)
THIS IS A LOOP: Use (playerShip as limiting factor - break if alienShip.hull reaches zero)
alert which one is defeated with number of ships remaining, ask if you want to continue
if yes, run alert cycle again
if no  more ships available, you win
if your ship is destroyed, you lose
retreat is automatic loss

randomly generate alien ship stats
populate an array of aliens with these stats - array should function like a stack, so pop them off*/
