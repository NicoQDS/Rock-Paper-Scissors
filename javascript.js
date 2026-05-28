let humanScore = 0
let computerScore = 0
let draws = 0
let roundNum = 0
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissor = document.querySelector("#scissor");
const scorePlayer = document.querySelector("#player-score")
const scorePc = document.querySelector("#pc-score")
const scoreDraw = document.querySelector("#draw-score")
const resultLabel = document.querySelector("#result-label")
const choicePlayer = document.querySelector("#player-choice")
const choicePC = document.querySelector("#pc-choice")
const resultGame = document.querySelector("#game-result")

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
        resultLabel.textContent = game_result
        choicePlayer.textContent = "Player: ".concat(player_Selec)
        choicePC.textContent = "PC: ".concat(pc_Selec)
        draws ++
        scoreDraw.textContent = draws
        checkGameFinished(draws, computerScore, humanScore)

    } else if (player_Selec=='paper') {
        switch (pc_Selec) {
            case 'rock':
                game_result = win_text
                humanScore ++
                scorePlayer.textContent = humanScore
                resultLabel.textContent = game_result
                choicePlayer.textContent = "Player: ".concat(player_Selec)
                choicePC.textContent = "PC: ".concat(pc_Selec)
                checkGameFinished(draws, computerScore, humanScore)
                break;
            case 'scissor':
                game_result = loose_text
                computerScore ++
                scorePc.textContent = computerScore
                resultLabel.textContent = game_result
                choicePlayer.textContent = "Player: ".concat(player_Selec)
                choicePC.textContent = "PC: ".concat(pc_Selec)
                checkGameFinished(draws, computerScore, humanScore)
                break;        
            default:
                break;
        }
    } else if (player_Selec=='rock') {
        switch (pc_Selec) {
            case 'scissor':
                game_result = win_text
                humanScore ++
                scorePlayer.textContent = humanScore
                resultLabel.textContent = game_result
                choicePlayer.textContent = "Player: ".concat(player_Selec)
                choicePC.textContent = "PC: ".concat(pc_Selec)
                checkGameFinished(draws, computerScore, humanScore)
                break;
            case 'paper':
                game_result = loose_text
                computerScore ++
                scorePc.textContent = computerScore
                resultLabel.textContent = game_result
                choicePlayer.textContent = "Player: ".concat(player_Selec)
                choicePC.textContent = "PC: ".concat(pc_Selec)
                checkGameFinished(draws, computerScore, humanScore)
                break;        
            default:
                break;
        }
    } else if (player_Selec=='scissor') {
        switch (pc_Selec) {
            case 'paper':
                game_result = win_text
                humanScore ++
                scorePlayer.textContent = humanScore
                resultLabel.textContent = game_result
                choicePlayer.textContent = "Player: ".concat(player_Selec)
                choicePC.textContent = "PC: ".concat(pc_Selec)
                checkGameFinished(draws, computerScore, humanScore)
                break;
            case 'rock':
                game_result = loose_text
                computerScore ++
                scorePc.textContent = computerScore
                resultLabel.textContent = game_result
                choicePlayer.textContent = "Player: ".concat(player_Selec)
                choicePC.textContent = "PC: ".concat(pc_Selec)
                checkGameFinished(draws, computerScore, humanScore)
                break;        
            default:
                break;
        }
    }
}

function checkGameFinished(draws, computerScore, humanScore) {

    if (draws + computerScore + humanScore == 5) {
        if (humanScore ==  Math.max(draws, computerScore, humanScore)){
            result_output = "!! YOU WON THE GAME !!";
        } else if (computerScore ==  Math.max(draws, computerScore, humanScore)){
            result_output = "OH NOOOO, you lost...";
        } else if (draws ==  Math.max(draws, computerScore, humanScore)){
            result_output = "It's a DRAW";
        }
        
        resultGame.textContent = result_output
        btnRock.disabled = true
        btnPaper.disabled = true
        btnScissor.disabled = true
    }
}

