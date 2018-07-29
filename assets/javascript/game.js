//variables
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessedLetter = [];
var lettertoguess = null;
var computerChoice = "";
var userGuess;




//Function




//updates the total amount of wins per game
function updatewins() {
    document.getElementById("Wins").innerHTML = "Wins: " + wins;
};


//updates the total amount of losses per game.
function updatelosses() {
    document.getElementById("losses").innerHTML = "Losses: " + losses;
};

function correctanswer() {
    document.getElementById("answer").innerHTML = "The correct answer was: " + computerChoice;
}

function updatecorrectanswer() {
    document.getElementById("answer").innerHTML = "";
}


//updates the number of guess that you hvae remaining.
function updateguessesLeft(){
    console.log(guessesLeft);
    document.getElementById("guessesLeft").innerHTML = "Guesses left: " + guessesLeft;

};


//updates the remaining letter to be guessed.
var updatelettertoguess = function(){
    this.lettertoguess = this.computerChoice[Math.floor(Math.random() * this.computerChoice.length)];
};


//Guess so far being shown on screen.
var updateguessSoFar = function(){
    document.getElementById('leftr').innerHTML =  guessedLetter.join(', ');
};

function reloadfunction() {
    location.reload();
};


//supposed to reset the game, still working on this one
var reset = function(){
      totalGuesses = 10;
      guessesLeft = 10;
      guessedLetter = [];
      
      
      //updatelettertoGuess();
      computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerChoice);
      updateguessSoFar();
      updateguessesLeft();
      updatecorrectanswer();
      
      
      //Computer randomly chooses letter

  };


  //Calling Functions

updateguessesLeft();
updatelettertoguess(); 



  //When key is pressed this produces the user's guess

  
  reset();
document.onkeydown = function(event) {
    // choice that the computer randomly chooses.    
   var userGuess = event.key.toLowerCase();

   //var letters = /^[A-Aa-z]+$/;  Do not need anymore    
    if (alphabet.indexOf(userGuess) >= 0){
        if (guessesLeft > 0){
            if (userGuess === computerChoice){
                wins++;
                updatewins();
                alert("You have won. The correct answer was " + computerChoice);
                reset();
            }else{
                if (guessedLetter.indexOf(userGuess) < 0) {
                    // if it is a new letter then decrease remaining guesses by 1
                    guessesLeft--;
                    guessedLetter.push(userGuess);
                    updateguessSoFar();
                    updateguessesLeft();
                }else{
                    alert("Letter has been chosen");
                }
            }
        }
    if (guessesLeft === 0) {
        losses++;
        updatelosses();
        alert("You have lost. The correct answer was " + computerChoice);
        correctanswer();       
        reset();
    }
    
    }else{
        alert("Please choose valid character");
    }
    
}
  
  

