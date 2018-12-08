// Global Variables
// =======================================================================

// Array of words
var words = ["queen", "journey", "jackson", "madonna", "toto", "loggins", "poison", "lauper", "jett", "whitesnake", "benatar", "vanilla", "springfield"];
// Randomly chooses word
var wordChoice = words[Math.floor(Math.random() * words.length)];
// Empty array for underscores
var underscore = [];
// Blank variable to add the string of underscores to
var underscoreString;
// Empty array for user's guesses
var guesses = [];
// Boolean game over
var gameOver = false;
// Boolean win or loose
var win;

var wins = 0;
document.getElementById("wins").textContent = wins;
var remainingGuesses = 5
document.getElementById("remainingGuesses").textContent = remainingGuesses;

console.log("Comp Choice:" + wordChoice);

// =======================================================================

game();

// Create underscores based on word length
function makeUnderscore() {
    for (var i = 0; i < wordChoice.length; i++) {
        // Creates an underscore for every letter of the chosen word
        underscore.push("_");
    }

    // Concatenates underscore array
    underscoreString = underscore.join(" ");
    
    document.getElementById("underscores").textContent = underscoreString;
    // Returns each underscore to the underscore array
    return underscore;
};

function game() {

    console.log(makeUnderscore());
    console.log(underscoreString);


// =======================================================================


    document.onkeyup = function(event) {
        // Get user's guess
        var userGuess = event.key;

        // Pushes the guess into guesses array
        // guesses.push(userGuess);

        // Checks if the guess has already been guessed
        if ((guesses.indexOf(userGuess) < 0) && (event.keyCode >= 65) && (event.keyCode <= 90)) {

            // addes guess to the guesses array
            guesses.push(userGuess);
            
            console.log(userGuess);
            console.log(guesses);

            // add to letters guessed
            document.getElementById("lettersGuessed").textContent = guesses;

            // gets the index of the guess in relation to the word
            var indexOfGuess = wordChoice.indexOf(userGuess);
            
            // if the guess is correct
            if (indexOfGuess > -1) {
                // loop through the word and get every instance of the guess
                for (var i = 0; i < underscoreString.length; i++) {
                    if (wordChoice[i] === userGuess) {
                        underscore[i] = userGuess;
                        underscoreString = underscore.join(" ");
                        document.getElementById("underscores").textContent = underscoreString;
                    }
                }

                if (wordChoice == underscore.join("")) {
                    console.log("You Win!")
                    wins++;
                    document.getElementById("wins").textContent = wins;
                    gameOver = true;
                    win = true;
                }

                console.log("It's there :)");
                console.log(underscore);
            }

            else {
                remainingGuesses--;
                document.getElementById("remainingGuesses").textContent = remainingGuesses;
                console.log("It's not there :(");

                if (remainingGuesses === 0) {
                    gameOver = true;
                    console.log("You Lose!")
                    win = false;
                }
            }            
        }

        if (gameOver === true) {
            resetGame();
            game();
            alertWin();
        }
    }
}

function alertWin() {
    if (win) {
        alert("You Win!");
    }
    else {
        alert("You Lose!");
    }
}

function resetGame() {
    for (var i = 0; i < wordChoice.length; i++) {
        // clears the underscores
        underscore.pop();
    }
    guesses.length = 0;
    document.getElementById("lettersGuessed").textContent = guesses;
    gameOver = false;
    remainingGuesses = 5;

    wordChoice = words[Math.floor(Math.random() * words.length)];
}

// =======================================================================

// If word is guessed

    // Alert 'You win'

    // Update wins

    // Display picture

    // Play song

// If word is not guessed

    // Display 'You loose'