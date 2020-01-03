//naming all of the variables
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;

var userGuess = "";
var computerGuess = "";
var lettersGuessed = "";
var resetGame;

//defining the function for computer guesses
function computerGuess() {
var letter = letters[Math.floor(Math.random() * letters.length) * 26];
}

//listing all letters guessed under lettersGuessed
function updatelettersGuessed() {
document.querySelector("guessesLeft").innerHTML = lettersGuessed.join(", ");
}

//user's guess 
var userGuess = document.getElementById("letters");
    
/*when the user presses a letter key, a comparason is run. The user's guess is compared to the computer's guess. Then, tallies the wins, losses, and letters guessed.*/
document.onkeydown = function(event)  {
var userGuess = event.key;
}

    if (userGuess === computerGuess) {
        alert("Congratulations! You've won that one!");
        wins++;
    }

    while (userGuess != "computerGuess") {
        guessesLeft--;
    }

//After no guesses are left, the game ends and resets.
    if (guessesLeft == 0) {
        document.reset() = "Bloop! Out of Guesses! I'll reset the game.";
        losses--;
    }

    else if (!letters) {
        alert("That is not a letter -___-");
     }