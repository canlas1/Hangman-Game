	



      // an array of the wordbank
      	var wordArr = ["blue", "yellow", "purple", "green", "white"];
      
      // pick random word using Math.random this will generate a random number b/w 0 and 1 to get a whole number apply Math.floor, which rounds to the nearest whole number
      	var randomWordArr = wordArr[Math.floor(Math.random() * wordArr.length)];

      //created an empty array called answerArr and filled it with underscores (_) this has to match the number of letter in the randomWordArr
      	var answerArr =[];
      	for (var i = 0; i < randomWordArr.length; i++) {
      	answerArr[i] = "_";
      	}
       	
       	// prompt user to guess a letter

       	document.onkeyup = function(event){

       		var userGuess = document.write("Guess a letter");
       		var userGuess = event.key;



       		if(userGuess === null){
       			prompt(answerArr);
       		}else if(userGuess.length !==1){

       			document.write("Please enter a single letter");
       		}else
   		//Update the screen with the guessed letter with a for loop on the wordArr and answerArr
   			for (var i = 0; i < wordArr.length; i++) {
		

      			if(wordArr[i]===userGuess){
      				answerArr[i] = userGuess;
      				remainingLettersArr--;}
       		}
       	
      

  		//set to length of randomWordArr, every guess players guesses get decremented by 1 letter

       	var remainingLettersArr = randomWordArr.length;

       	while(remainingLettersArr > 0){
       		document.write(answerArr.join(""));

   	



      // for loop 
      	
      	}
      	// an object of questions
      var questions = {
      	q1: ["what color is the sky", (wordArr[0])], 
      	q2: ["what color is the sun", (wordArr[1])], 
      	q3: ["what color are grapes", (wordArr[2])], 
      	q4: ["what color is the grass", (wordArr[3])], 
      	q5: ["what color is milk", (wordArr[4])]
      };

      // an array of letters
      

		





		var html = "<p>Press any key to start playing!</p>" +
         "<p>Wins: " + wins + "</p>" +
           "<p>Losses: " + losses + "</p>" +
           "<p>Guesses Left: " + guessLeft + "</p>" +
           "<p>User Guesses so far: " + userGuess + "</p>" ;

          // Injecting the HTML we just created into our div and updating the game information on our page.
          document.querySelector("#letterGame").innerHTML = html;

      	}; //document.onkey curley bracket
        