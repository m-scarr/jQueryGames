function gameReset() {
    alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    guessesRemaining = 8;
    prevQuestion = questionNumber;
    while (prevQuestion == questionNumber) {
        questionNumber = Math.floor(Math.random() * answerArray.length)
    }
    passphrase = answerArray[questionNumber]
    question = questionArray[questionNumber]
    passphraseArray = passphrase.split('');
    obscuredString = passphrase.replace(/a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z/gi, "_");
    obscuredStringarray = obscuredString.split('');
    guessCorrect = false;
    lettersGuessed = "Guesses: ";
    won = false;
    gameUpdate()
}
function gameUpdate() {
    doc_question.innerHTML = question;
    doc_currentString.innerHTML = obscuredString;
    doc_guesses.innerHTML = lettersGuessed;
    $("#hangman").attr("src", "hangman" + Math.max(guessesRemaining, 0) + ".png")
}

var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
var questionArray = ["New York City was originally known by which Dutch name?", "Which animal was incorrectly rumored to bury its head in the sand when frightened?", "Who painted a late 15th-century mural known as the Last Supper?"]
var answerArray = ["New Amsterdam", "Ostrich", "Leonardo da Vinci"]
var guessesRemaining = 8;
var questionNumber = Math.floor(Math.random() * answerArray.length)
var passphrase = answerArray[questionNumber]
var question = questionArray[questionNumber]
var passphraseArray = passphrase.split('');
var obscuredString = passphrase.replace(/a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z/gi, "_");
var obscuredStringarray = obscuredString.split('');
var guessCorrect = false;
var lettersGuessed = "Guesses: ";
var won = false;
var doc_question = document.getElementById("question")
var doc_currentString = document.getElementById("currentString")
var doc_guesses = document.getElementById("guesses")
gameUpdate();

document.onkeyup = function (event) {
    for (var i = 0; i < alphabet.length; i++) {
        if (event.key.toUpperCase() == alphabet[i].toUpperCase()) {
            for (var k = 0; k < passphraseArray.length; k++) {
                if (alphabet[i].toUpperCase() == passphraseArray[k].toUpperCase()) {
                    obscuredStringarray[k] = passphraseArray[k];
                    obscuredString = obscuredStringarray.join('');
                    guessCorrect = true;
                }
                if (k == passphraseArray.length - 1) {
                    if (guessCorrect == false) {
                        guessesRemaining--;
                        lettersGuessed = lettersGuessed + event.key + ", ";
                        if (guessesRemaining == 0 && won == false) {
                            //gameUpdate();
                            setTimeout(function () { alert("You lost! The answer was " + passphrase); gameReset(); }, 100);
                        }
                    } else {
                        if (obscuredString == passphrase) {
                            //alert("You won! The answer was "+ passphrase);
                            obscuredString = obscuredStringarray.join('');
                            won = true;
                            setTimeout(function () { alert("You won! The answer was " + passphrase); gameReset(); }, 100);
                        }
                        guessCorrect = false;
                    }
                }
            }
            alphabet[i] = ""
            gameUpdate();
        }
    }

}