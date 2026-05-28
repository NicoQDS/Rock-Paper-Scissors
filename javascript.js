let humanScore = 0
let computerScore = 0
let draws = 0
let roundNum = 0
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissor = document.querySelector("#scissor");

// Read which button is pressed and returning the player choice
btnRock.addEventListener("click", function (e) {
  playRound(e.target.id)
});
btnPaper.addEventListener("click", function (e) {
  playRound(e.target.id)
});
btnScissor.addEventListener("click", function (e) {
  playRound(e.target.id)
});


// Get the player choice
function get_pc_choice() {  // create a random choice for the PC 
    rndNumber = Math.random()
    if (rndNumber<0.3333) {
        return 'rock'
    }else if (rndNumber<0.6666) {
        return 'paper'
    }else{
        return 'scissor'
    }
}

// Play a single round, print the result at the end
function playRound(playerChoice) { // compare user and pc choice to determin the winner
    pc_Selec = get_pc_choice()
    player_Selec = playerChoice.toLowerCase() // get palyer choice and make lowercase

    game_result = "\nInvalid player input"
    win_text = "\nYou won this round, good job!"
    loose_text = "\nYou lost this round, try again!"

    if (pc_Selec == player_Selec) {
        game_result = ("\nIt's a DRAW!!!")
        draws ++
    } else if (player_Selec=='paper') {
        switch (pc_Selec) {
            case 'rock':
                game_result = win_text
                humanScore ++
                break;
            case 'scissor':
                game_result = loose_text
                computerScore ++
                break;        
            default:
                break;
        }
    } else if (player_Selec=='rock') {
        switch (pc_Selec) {
            case 'scissor':
                game_result = win_text
                humanScore ++
                break;
            case 'paper':
                game_result = loose_text
                computerScore ++
                break;        
            default:
                break;
        }
    } else if (player_Selec=='scissor') {
        switch (pc_Selec) {
            case 'paper':
                game_result = win_text
                humanScore ++
                break;
            case 'rock':
                game_result = loose_text
                computerScore ++
                break;        
            default:
                break;
        }
    }

    console.log(game_result, '\n' ,"\nPlayer choice: ".concat(player_Selec), "\nPC choice: ".concat(pc_Selec), '\n ','\nYour score: '.concat(humanScore),'\nComputer score: '.concat(computerScore),'\nDraws number: '.concat(draws) )
}

//Play 5 consecutive rounds, keeps track of the score, print the game result at the end
function playGame() {
    while (roundNum<5) {
        playRound()
        roundNum ++
    }

    if (humanScore>computerScore) {
        console.log("\nYou won the GAME! You are the champion!")
    } else if (humanScore<computerScore) {
        console.log("\nYou lost the GAME! Shame on you!")
    }
    
}