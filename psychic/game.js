var playerGuess;
var doc_wins = document.getElementById("wins")
var doc_losses = document.getElementById("losses")
var doc_guessesLeft = document.getElementById("guessesLeft")
var doc_guessesString = document.getElementById("guessesString")
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function gameUpdate() {
    doc_wins.innerHTML = wins;
    doc_losses.innerHTML = losses;
    doc_guessesLeft.innerHTML = guessesLeft;
    doc_guessesString.innerHTML = guessesString;
}

var computerChoice = letters[Math.floor(Math.random() * letters.length)];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesString = "";
gameUpdate()

function gameRestart() {
    guessesLeft = 9;
    guessesString = "";
    computerChoice = letters[Math.floor(Math.random() * letters.length)];
    gameUpdate();
}

document.onkeyup = function (event) {
    for (i = 0; i < letters.length; i++) {
        if (letters[i] == event.key) {
            if (event.key == computerChoice) {
                alert("you won! The answer was " + computerChoice + "!");
                wins += 1
                gameRestart();
            } else {
                guessesString = guessesString + event.key + ", ";
                guessesLeft -= 1;
                gameUpdate()
                if (guessesLeft == 0) {
                    alert("you lost :(")
                    losses+=1
                    gameRestart()
                }
            }
        }
    }
}
