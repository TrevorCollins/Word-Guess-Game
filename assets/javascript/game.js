// Global Variables
// =======================================================================

// Array of words
var words = ["queen", "journey", "jackson", "madonna", "toto"];
// Randomly chooses word
var wordChoice = words[Math.floor(Math.random() * words.length)];
// Empty array for underscores
var underscore = [];
// Blank variable to add the string of underscores to
var underscoreString;
// Empty array for user's guesses
var guesses = [];

// Variable that references HTML id wins
var wins = document.getElementById("wins");
// Variable that references HTML id remainingGuesses
var remainingGuesses = document.getElementById("remainingGuesses");

console.log("Comp Choice:" + wordChoice)

// =======================================================================

// Create underscores based on word length
var makeUnderscore = function() {
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

console.log(makeUnderscore());
console.log(underscoreString);

// =======================================================================

document.onkeyup = function(event) {
    // Get user's guess
    var userGuess = event.key;

    // Pushes the guess into guesses array
    guesses.push(" " + userGuess);

    console.log(userGuess);
    console.log(guesses);

    // add to letters guessed
    document.getElementById("lettersGuessed").textContent = guesses;

    var indexOfGuess = wordChoice.indexOf(userGuess);
    
    if (indexOfGuess > -1) {
        for (var i = 0; i < wordChoice.length; i++) {
            underscore[indexOfGuess] = userGuess;
            underscoreString = underscore.join(" ");
            document.getElementById("underscores").textContent = underscoreString;
        }
        console.log("It's there :)");
        console.log(underscore);
    }

    else {
        console.log("It's not there :(");
    }


}

// =======================================================================

// If word is guessed

    // Alert 'You win'

    // Update wins

    // Display picture

    // Play song

// If word is not guessed

    // Display 'You loose'