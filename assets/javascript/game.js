//Similar to Hangman - guessing a number 

        // User starts the game with a randomly generated number that is shown
            // This number is between 19-120
    
    $(document).ready(function() {
    var gameNumber =  Math.floor(Math.random() * 102 + 19);
    console.log(gameNumber);

    // There are four crystals displayed as buttons  
            // Each crystal represents a number
                // The number value of these crystals are randomly generated 
                // Number values from 1-12
    
    var crystalOne = Math.floor(Math.random() * 12 + 1);
    var crystalTwo = Math.floor(Math.random() * 12 + 1);
    var crystalThree = Math.floor(Math.random() * 12 + 1);
    var crystalFour = Math.floor(Math.random() * 12 + 1);
    var crystalTotal = 0;
    var win = 0;
    var loss = 0;
    
    $('#gamescore').text(gameNumber);

    $('#one').attr('value', crystalOne);
    $('#two').attr('value', crystalTwo);
    $('#three').attr('value', crystalThree);
    $('#four').attr('value', crystalFour);


    $('.button').on("click", function (){
        var crystal = parseInt($(this).attr('value'));
        console.log(crystal);

        crystalTotal = crystalTotal + crystal;
        $('#total').text(crystalTotal);

        if (crystalTotal === gameNumber) {
        // winning condition code
        alert("You Win!");
        reset();
        
        } else if (crystalTotal > gameNumber) {
        // losing condition code
        alert("You Lose! :(");
        reset();
        }
    });
    function reset(){
        gameNumber =  Math.floor(Math.random() * 102 + 19);
    console.log(gameNumber);
    $('#gamescore').text(gameNumber);

    crystalOne = Math.floor(Math.random() * 12 + 1);
    crystalTwo = Math.floor(Math.random() * 12 + 1);
    crystalThree = Math.floor(Math.random() * 12 + 1);
    crystalFour = Math.floor(Math.random() * 12 + 1);
    crystalTotal = 0;
    $('#one').attr('value', crystalOne);
    $('#two').attr('value', crystalTwo);
    $('#three').attr('value', crystalThree);
    $('#four').attr('value', crystalFour);
    $('#total').text(crystalTotal);

    }
    
    // var crystalArray = [];

    // for (let i = 0; i < 4; i++) {
    //     crystalArray[i] = Math.floor(Math.random() * 12 + 1);;
    //     console.log(crystalArray[i]);
    // }

    // Each time user clicks crystal, it will add a specific amount of points to player's total score
    // The value of each crystal is hidden from user until user clicks crystal 
    // When player clicks one, update the player's score counter

    // var theTotal = 0;
    // $('button').click(function()){
    //     theTotal = Number(theTotal) + Number($(this).val());
    //         $('.total').text('Total: ' + theTotal);
    // });

    // $('.total').text('Total: ' + theTotal);



        

                

        // User wins the game by matching your total score to the random number generated at beginining 
        // User loses the game if users total score goes above the random number
        
        // Game restarts whenever player wins or loses
            // User is notified that user wins or loses
            // The random number changes and shown to player
            // The four new hidden value's of the crystals are changed 
            // User total score and score counter resets to 0
            // You win or loss is saved and displayed
    });