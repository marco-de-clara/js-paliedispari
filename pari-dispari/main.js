// chiedere all'utente un numero tra 1 e 5 e generare un numero random tra 1 e 5. Chiedere all'utente se sceglie pari o dispari, quindi fare la somma dei due numeri (giocata utente + giocata pc), quindi valutare se il risultato è pari o dispari e comunicare all'utente se ha vinto o meno


// initializing minimum value in range
var min = 1;

// initializing maximum value in range
var max = 5;

// ask for winning condition
var winCond = prompt("Please type either \"even\" or \"odd\": ");

// ask for a number between 1 and 5
var playerNum = parseInt(prompt("Please enter a whole number between 1 and 5: "));

// get a random integer in range
var cpuNum = getRandomInRange(min, max);

// check if winning condition is achieved
if ( isEven( reminderSum() ) == winCond ) {
    console.log("Player: " + playerNum + " Cpu: " + cpuNum + ". You win!");
} else {
    console.log("Player: " + playerNum + " Cpu: " + cpuNum + ". You lose!");
}

// function to calculate a random number between 1 and 5
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// sum of two numbers
function sum(a, b) {
    return a + b;
}

// sum mod 2, returns either 0 or 1
function reminderSum() {
    return sum( playerNum, cpuNum ) % 2;
}

// get result from reminderSum()
//returns "even" if reminderSum() = 0, else "odd" if reminderSum() = 1
function isEven(int) {
    if (int == 0) {
        return "even";
    } else {
        return "odd";
    }
}
