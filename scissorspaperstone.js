// Randomly return either scissors, paper or stone
function getComputerChoice(){
    let random_num = Math.floor(Math.random() * 3);
    switch(random_num){
        case 0:
            return "Stone";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}

// Plays one round and return string with result
function playRound(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase();
    let comp = computerSelection.toLowerCase();
    if (player === "stone" && comp === "paper"
        || player === "paper" && comp === "scissors"
        || player === "scissors" && comp === "stone"){
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (player === "stone" && comp === "scissors"
                || player === "paper" && comp === "stone"
                || player === "scissors" && comp === "paper"){
                    return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return "Draw!";
    }
}

// Convert string to sign
function stringToSign(signString){
    let lower = signString.toLowerCase();
    if (lower === "scissors"){
        return '✌';
    } else if (lower === "paper"){
        return '✋';
    } else {
        return '✊';
    }
}

// Global variables
let player_wins = 0;
let comp_wins = 0;
let game_ended = 0;

// Abstraction function for event listener
function rpsEventListener(choice){
    if (game_ended !== 1){
        let computerSelection = getComputerChoice();
        let curr = playRound(choice, computerSelection);

        // text div
        const result = document.getElementById('result');
        result.textContent= curr;
    
        // collate current score
        if (curr.slice(0, 8) === "You Win!"){
            player_wins++;
        } else if (curr.slice(0, 9) === "You Lose!"){
            comp_wins++;
        }

        // score div, show current score
        const player_score = document.getElementById('player_score');
        const computer_score = document.getElementById('computer_score');
        
        player_score.textContent = `Player:${player_wins}`;
        computer_score.textContent = `Computer:${comp_wins}`;

        // show current round signs
        const player_sign = document.getElementById('player_sign');
        const computer_sign = document.getElementById('computer_sign');
        player_sign.textContent = stringToSign(choice);
        computer_sign.textContent = stringToSign(computerSelection);
    
        // div for current score
        // check if game ended
        if (player_wins >= 5 || comp_wins >= 5){
            // show winner text
            const winner = player_wins >= 5 ? "Game over! You Won!"
                                            : "Game over! Computer Won!";
            result.textContent= winner;

            // end game
            game_ended = 1;

            // show play again button
            const playAgain = document.createElement('div');
            playAgain.setAttribute('id', 'play_again');
            playAgain.innerHTML = '<h1>Play again?</h1><button id="play_again_btn">YES</button>';
            container.appendChild(playAgain);
        }
    }
}

// Event listeners for buttons
const container = document.querySelector('#container');

const stoneBtn = document.querySelector('#stone');
stoneBtn.addEventListener('click', () => {
    rpsEventListener("Stone");
});

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => {
    rpsEventListener("Paper");
});

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', () => {
    rpsEventListener("Scissors");
});


document.addEventListener("click", function(e){
    const target = e.target.closest("#play_again_btn");
    if(target){
        // reset globals
        player_wins = 0;
        comp_wins = 0;
        game_ended = 0;

        // reset text
        const result = document.getElementById('result');
        result.textContent = 'First to 5 wins!';

        // reset score
        const player_score = document.getElementById('player_score');
        const computer_score = document.getElementById('computer_score');
        player_score.textContent = `Player:${player_wins}`;
        computer_score.textContent = `Computer:${comp_wins}`;
        
        // reset current sign
        const player_sign = document.getElementById('player_sign');
        const computer_sign = document.getElementById('computer_sign');
        player_sign.textContent = '?';
        computer_sign.textContent = '?';

        // remove play again div
        const playAgain = document.getElementById('play_again');
        container.removeChild(playAgain);
    }
  });