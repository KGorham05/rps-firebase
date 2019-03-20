

// Rock Paper Scissors Game

// When first visiting page, each user must login using firebase authentication or create an account 

// on log in, show find game screen
    // create a button to host a match
        // on click change the color/text of that button
        // update the game list
        // don't allow someone who has a game created to join an open game 
    // create a table of current matches waiting for players
        // add a join game button
            // on click, execute modal that says "2 players connected, game will start in 5...4..."
            // when modal expires, change game state to "started" or "choice phase"
// on game started state/screen - 
    // Display "You have 10 seconds to lock in your choice!" in message box
    // display Rock Paper Scissors - 
        // on click change a state to "x selected"
            // change color of pick by changing image source, use js to increase the size of the selected element 
    // display chat window as sticky footer

    $('#game-start-modal').modal();
    $('#game-start-modal').modal('show');
    // need to stop modal from closing on click, only want it to close when timer reaches 0 
        
var timer;
var count = 10;

const rps = {
    // game variables
    wins: 0,
    losses: 0,

    // game functions
    // function to start the game
    startGame: function () {
        console.log("Game Started");
        // hide game lobby
        $("#game-lobby").empty();
        // reset variables from last game
        // start the countdown
        timer = setInterval(rps.decrement, 1000)
        // listen for user choice 
        // if opponent is computer, generate a computer choice
        // compare to computer choice
        // if opponent is another user, listen for both users input
    

    },

    // func for timer decreasing
    decrement: function () {
        // reduce the count by 1 
        count--;
        // update the html
        $("#count").text(count);
        if (count <= 0) {
            console.log("Count= 0!");
            // if the user was playing the computer, he forefits
            // if the user was vs another human, check for input instances 
        }
            
    }


// End of rps game object
};

rps.startGame();