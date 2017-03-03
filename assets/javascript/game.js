  console.log("page loads")


// an array of the wordbank
var wordArr = ["blue", "yellow", "purple", "green", "white"];

// console.log(wordArr[2]);

// pick random word using Math.random this will generate a random number b/w 0 and 1 to get a whole number apply Math.floor, which rounds to the nearest whole number
var randomWordArr = wordArr[Math.floor(Math.random() * wordArr.length)];

console.log(randomWordArr);

//created an empty array called answerArr and filled it with underscores (_) this has to match the number of letter in the randomWordArr
var answerArr = [];
for (var i = 0; i < randomWordArr.length; i++) {
    answerArr.push("_ ");
}
document.write(answerArr);


console.log(answerArr);
// console.log("_______")

// prompt user to guess a letter


// var userGuess = document.write("Guess a letter");

document.onkeyup = function(underscores) { //should be end of the document
        // run function until document complete
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        console.log(userGuess);
        //local varible look at scope

        // var userGuess = event.key;

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
        }

       var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

       var remainingLettersArr = [];
          for (var i = 0; i < letters.length; i++) {
            remainingLettersArr.push(letters[i]);
          }

        console.log(remainingLettersArr);







          //             var remainingLettersArr = randomWordArr.length;


          //             //Update the screen with the guessed letter with a for loop on the wordArr and answerArr
          //             for (var i = 0; i < wordArr.length; i++) {


          //                 if (wordArr.length[i] === userGuess) {
          //                 }else{
          //                     answerArr[i] = userGuess;
          //                     remainingLettersArr--;
          //                 }
          //             }
          // }

          //             // 1. Create code that "grabs" the div with the matching id (#drink-options);
          //             //targeting element inside "drink options"
          //             var targetDiv = document.getElementById("drink-options"); // parent div  then for loop is children



          //             // 2. Create a for loop that creates HTML content of all the drinks using JavaScript.

          //             for (var i = 0; i < drinkList.length; i++) {
          //                 //iterate array

          //                 var newDiv = document.createElement("div");
          //                 // creating a new element
          //                 newDiv.innerHTML = drinkList[i]; //reference index of array inside the loop
          //                 //drinkList is the parent
          //                 //append to drinklist text to html
          //                 targetDiv.appendChild(newDiv);


          //             }




          //             //set to length of randomWordArr, every guess players guesses get decremented by 1 letter

          //             //    var remainingLettersArr = randomWordArr.length;

          //             //    while(remainingLettersArr > 0){
          //             //      document.write(answerArr.join(""));





          //             // // for loop 

          //             //  }
          //             //  // an object of questions
          //             // var questions = {
          //             //  q1: ["what color is the sky", (wordArr[0])], 
          //             //  q2: ["what color is the sun", (wordArr[1])], 
          //             //  q3: ["what color are grapes", (wordArr[2])], 
          //             //  q4: ["what color is the grass", (wordArr[3])], 
          //             //  q5: ["what color is milk", (wordArr[4])]
          //             // };

          //             // an array of letters




                var wins = 0
                var losses = 0
                var guesses = 10
                var userGuesses = []
                var guessLeft = ((guesses) - (userGuesses))



                 var html = "<p>Press any key to start playing!</p>" +
                      "<p>Wins: " + wins + "</p>" +
                      "<p>Losses: " + losses + "</p>" +
                       "<p>Guesses Left: " + guessLeft + "</p>" +
                         "<p>User Guesses so far: " + userGuesses + "</p>";

                     // Injecting the HTML we just created into our div and updating the game information on our page.
                 document.querySelector(".targetClass").innerHTML = html;
                

                };  

            
              //document.onkey curley bracket
