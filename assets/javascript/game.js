  console.log("page loads")

  //GLOBAL VARIABLES

  // an array of the wordbank
  var wordArr = ["blue", "yellow", "purple", "green", "white"];
  console.log(wordArr[2]);

  // an array of letters
  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var categories = { 
    blue: "What color is the Sky?",
    yellow: "What color is the Sun?",
    purple: "What color are grapes?",
    green: "What color is grass?",
    white:  "What color is paper?"

  };


 // array of topics
  var word = wordArr[i]; // selected word
  var guessesLeft = 10; // number of guess by user stored
  var lives = 7; // lives remaining for user
  var userGuesses = 0; //count correct guesses
  var space = answerArr; // number of spaces in word
  var wins = 0; // number of wins for user
  var losses = 0; //number of losses for user

  // pick random word using Math.random this will generate a random number b/w 0 and 1 to get a whole number apply Math.floor, which rounds to the nearest whole number
  var randomWordArr = wordArr[Math.floor(Math.random() * wordArr.length)];
  console.log(randomWordArr);

  var categoryArr = Object.keys(categories);
    console.log(categoryArr);

  //created an empty array called answerArr and filled it with underscores (_) this has to match the number of letter in the randomWordArr
  var answerArr = [];
  console.log(answerArr);

  //create a for loop to replace randomWordArr with underscores
  for (var i = 0; i < randomWordArr.length; i++) {
      answerArr.push("_ ");
  }
  console.log(answerArr);

  // prompt user to guess a letter
  // run onkeyup function until document complete
  document.onkeyup = function(underscores) { //should be end of the document
      //toLowercase if userGuess uses CAPS
      var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
      console.log(userGuess);
      //local varible look at scope

      var userGuess = event.key;

      //displace "_" of the randomWordArr
      if (userGuess === null) {
          answerArr.join();
      } else if (userGuess.length !== 1) {}
      console.log(randomWordArr);


      var possibleIndex = randomWordArr.split
      if (randomWordArr.toLowerCase().indexOf(userGuess) >= 0) {
          console.log("found it")

      } else {
          console.log("didnt find it")
      };

      var html = "<p>Press any key to start playing!</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses Left: " + guessesLeft + "</p>" +
          "<p>User Guesses so far: " + userGuesses + "</p>";

      // Injecting the HTML we just created into our div and updating the game information on our page.
      document.querySelector(".targetClass").innerHTML = html;





  }; //document.onkey curley bracket
