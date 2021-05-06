// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


var alertList = [];
var playerList = [];
var numbersFound = [];
var score = 0;

for (i=0; i<5; i++) {
    alertList.push(Math.floor(Math.random() * 100) +1);
}
alert(alertList)
console.log("Numbers to guess " + alertList);

setTimeout(playerInput, 3000)

// console.log("numbersFound: " + numbersFound);
// console.log("score: " + score);



// ---------------FUNCTIONS-------------


function playerInput () {
    do {
        do {

            var playerNumber = parseInt(prompt("Now, remember the numbers entering them one by one!"));
            
        } while (isNaN(playerNumber) || playerNumber < 1 || playerNumber > 100);
        
        if (isInArray(playerNumber, playerList)) {
            alert("Number already entered, try again!");
            // console.log("questo è dentro la condizione del isinarray: " + playerNumber);
        } else if (isInArray(playerNumber, alertList)) {
            score ++;
            
            playerList.push(playerNumber);

            var numeroTrovato = playerNumber;
            numbersFound.push(numeroTrovato);
            // console.log("numero uguale: " + numeroTrovato + playerNumber);
        } else {
            playerList.push(playerNumber);
            // console.log("numero disuguale: " + playerNumber);
        }

        
    } while (playerList.length < 5);
    console.log("Your numbers are: "+ playerList);

    console.log("Numbers you found: " + numbersFound);
    console.log("Your score is: " + score);
}

function isInArray (element, array) {
    for (var i = 0; i < array.length; i++) {
        if (element == array[i]) {
            return true;
        }
    }
    return false;
}