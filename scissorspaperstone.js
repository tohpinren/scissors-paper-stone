// Randomly return either stone, paper or scissors
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

// Plays one round and declaress winner
function playRound(playerSelection){
    let player = playerSelection.toLowerCase();
    let computerSelection = getComputerChoice();
    let comp = computerSelection.toLowerCase();
    if (player === "stone"){
        if (comp === "paper"){
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        } else if (comp === "scissors"){
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        } else {
            return "Draw!";
        }
    } else if (playerSelection === "paper"){
        if (comp === "scissors"){
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        } else if (comp === "stone"){
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        } else {
            return "Draw!";
        }
    } else {
        if (comp === "stone"){
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        } else if (comp === "paper"){
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        } else {
            return "Draw!";
        }
    }
}

// Global variables
let games_count = 0;
let player_wins = 0;
let comp_wins = 0;
let game_ended = 0;

// Abstraction function for event listener
function rpsEventListener(choice){
    if (game_ended !== 1){
        let curr = playRound(choice);

        // div for current round results text
        if (!document.getElementById('results')){
            const result = document.createElement('div');
            result.setAttribute('id', 'results');
            result.textContent = curr;
    
            container.appendChild(result);
        } else {
            const result = document.getElementById('results');
            result.textContent= curr;
        }
    
        // collate current score
        if (curr.slice(0, 8) === "You Win!"){
            player_wins++;
        } else if (curr.slice(0, 9) === "You Lose!"){
            comp_wins++;
        }
    
        // div for current score
        // check if game ended
        if (player_wins >= 5 || comp_wins >= 5){
            // show final scores and result
            const score = document.getElementById('scores');
            const winner = player_wins >= 5 ? "You Won!"
                                            : "Computer Won!";
            score.textContent= `${winner} Player: ${player_wins} Computer: ${comp_wins}`;

            // remove current round div
            const result = document.getElementById('results');
            container.removeChild(result);

            // end game
            game_ended = 1;
        } else {
            if (!document.getElementById('scores')){
                const score = document.createElement('div');
                score.setAttribute('id', 'scores');
                score.textContent = `Player: ${player_wins} Computer: ${comp_wins}`;
        
                container.appendChild(score);
            } else {
                const score = document.getElementById('scores');
                score.textContent= `Player: ${player_wins} Computer: ${comp_wins}`;
            }
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