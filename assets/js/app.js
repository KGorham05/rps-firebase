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

$('#game-start-modal').modal();
$('#game-start-modal').modal('show');
// need to stop modal from closing on click, only want it to close when timer reaches 0 

var timer;
var count = 10;

const rps = {
    // game variables
    wins: 0,
    losses: 0,
    ties: 0,
    randomNum: 0,
    playerChoice: '',
    computerChoice: '',
    opponentChoice: '',
    versusComputer: true,
    // versusHuman: false,


    // game functions
    // function to start the game
    startGame: function () {
        console.log("Game Started");
        // hide game lobby
        $("#game-lobby").empty();
        // reset variables from last game
        // start the countdown
        timer = setInterval(rps.decrement, 1000)
        // generate computer choice
        rps.generateComputerChoice();
        // listen for user choice
        $(document).on("click", ".choice", function () {
            playerChoice = (this.id);
            console.log("playerChoice: " + playerChoice);
            if (rps.versusComputer) {
                // compare vs computer
                console.log(rps.compare(playerChoice, computerChoice));
                // update scoreboard
            } else {
                // call func to compare vs opponent's choice 
            }
        })

        // if opponent is computer, generate a computer choice
        // compare to computer choice
        // if opponent is another user, listen for both users input

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
            count--;
            // update the html
            $("#count").text(count);
            if (count <= 0) {
                console.log("Count= 0!");
                clearInterval(timer);
                // if the user was playing the computer, display a modal saying you must select an answer!
                // if the user was vs another human, check for input instances 
                    // if user had an answer selected an opponent did not, user wins
                    // if opponent had selected an answer but user did not, user loses
            }

        },
        compare: function(choice1, choice2){
            if(choice1===choice2){
                rps.ties++;
                return "The result is a tie!";
                
            }
            if(choice1==="rock"){
                if(choice2==="scissors"){
                    rps.wins++;
                    return "You win! Rock crushes scissors!";
                }
                else{
                    rps.losses++;
                    return "Oh no, you lost! Paper covers rock!";
                }
            }
            if(choice1==="paper"){
                if(choice2==="rock"){
                    rps.wins++;
                    return "You win! Paper covers rock!";
                }
                else{
                    rps.losses++;
                    return "Oh no, you lost! Scissors cut paper!";
                }
            }
            if(choice1==="scissors"){
                if(choice2==="rock"){
                    rps.losses++
                    return "Oh no, you lost! Rock  crushes scissors!";
                }
                else{
                    rps.wins++
                    return "You win! Scissors cut paper!";
                }
            }
        },
        


        // End of rps game object
    };

    rps.startGame();