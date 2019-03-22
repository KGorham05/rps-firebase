// RPS solution 
// https://www.codecademy.com/en/forum_questions/50be9a6f9f1fcd5cb60000dc

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

// need to stop modal from closing on click, only want it to close when timer reaches 0 

var timer;


const rps = {
    // game variables
    wins: 0,
    losses: 0,
    ties: 0,
    count: '',
    randomNum: '',
    playerChoice: '',
    computerChoice: '',
    // opponentChoice: '',
    winner: '',
    twoPlayersHaveJoined: '',



    // game functions
    // function to start the game
    startGame: function () {
        console.log("Game Started");
       
        // generate computer choice
        rps.generateComputerChoice();
        // if 2 players have joined the game, OR
        if (rps.twoPlayersHaveJoined) {

        };
        // if the player has clicked the CHALLENGE THE MACHINE button DO THAT
        // switch this to use a declared function that can also be called in the above if statement
        $(document).on("click", "#challenge-btn", () => {
            // DO THIS
            // hide game lobby
            $("#game-lobby").empty();
            $('#game-start-modal').modal({
                keyboard: false,
                backdrop: 'static'
              });
            // start the countdown
            rps.count = 5; 
            timer = setInterval(rps.modalDecrement, 1000);                
            setTimeout(function() {
                rps.count=10;
                setInterval(rps.decrement, 1000);
            }, 5200);
              
            // listen for user choice
            $(document).on("click", ".choice", function () {
                // store the users choice into a database with firebase so the computer can make smart choices in the future
                // ideally 1 large array of all users answers, and individuall arrays of each user 

                playerChoice = (this.id);
                console.log("playerChoice: " + playerChoice);

                // compare vs computer
                let result = rps.compare(playerChoice, computerChoice);
                // if player wins show winner model
                if (rps.winner === '') {
                    console.log("its a tie!")
                    rps.startGame();
                } else if (rps.winner) {
                    // update game variables
                    rps.wins++;
                    // display the updated variables on the page
                    $("#wins-count").text(rps.wins);
                    // show you win modal
                    $('#you-win-modal').modal();
                    
                    // restart the game 
                    rps.startGame();
                } else {
                    rps.losses++;
                    $("#losses-count").text(rps.losses)
                    rps.startGame();
                }
                
                console.log(result);
                console.log("Winner: " + rps.winner);

                
                
            })

            // if opponent is computer, generate a computer choice
            // compare to computer choice
            // if opponent is another user, listen for both users input    
        })



    },

    generateComputerChoice: function () {
        randomNum = Math.floor((Math.random() * 3) + 1);
        console.log("random num: " + randomNum);
        if (randomNum === 1) {
            computerChoice = "rock";
            console.log("Comp choice: " + computerChoice);
        } else if (randomNum === 2) {
            computerChoice = "paper";
            console.log("Comp choice: " + computerChoice);
        } else {
            computerChoice = "scissors";
            console.log("Comp choice: " + computerChoice);
        }
    },

    // func for timer decreasing
    decrement: function () {
        // reduce the count by 1 
        rps.count--;
        // update the html
        $(".count").text(rps.count);
        if (rps.count <= 0) {
            clearInterval(timer);
        }
    },

    modalDecrement: function () {
        // reduce the count by 1 
        rps.count--;
        // update the html
        $('.modal-count').text(rps.count);
        if (rps.count <= 0) {
            clearInterval(timer);
            $('#game-start-modal').modal('hide');
        }
    },

    compare: function (choice1, choice2) {
        if (choice1 === choice2) {
            rps.winner = '';
            return "The result is a tie!";
        }
        if (choice1 === "rock") {
            if (choice2 === "scissors") {
                rps.winner = true;
                return "You win! Rock crushes scissors!";
            }
            else {
                rps.winner = false;
                return "Oh no, you lost! Paper covers rock!";
            }
        }
        if (choice1 === "paper") {
            if (choice2 === "rock") {
                rps.winner = true;
                return "You win! Paper covers rock!";
            }
            else {
                rps.winner = false;
                return "Oh no, you lost! Scissors cut paper!";
            }
        }
        if (choice1 === "scissors") {
            if (choice2 === "rock") {
                rps.winner = false;
                return "Oh no, you lost! Rock  crushes scissors!";
            }
            else {
                rps.winner = true;
                return "You win! Scissors cut paper!";
            }
        }
    },

    // add on hover effects 

    // End of rps game object
};

rps.startGame();