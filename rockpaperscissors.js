// Randomly return either rock, paper or scissors
function getComputerChoice(){
    let random_num = Math.floor(Math.random() * 3);
    switch(random_num){
        case 0:
            return "Rock";
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
    if (player === "rock"){
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
        } else if (comp === "rock"){
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        } else {
            return "Draw!";
        }
    } else {
        if (comp === "rock"){
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        } else if (comp === "paper"){
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        } else {
            return "Draw!";
        }
    }
}

// Play 5 round game that keeps score and reports winner or loser at the end
/*
function game(){
    let player_score = 0;
    let comp_score = 0;

    for (let i = 0; i < 5; i++) {
        let player = prompt("What's your move?");
        let curr = playRound(player);
        console.log(curr);
        if (curr.slice(0, 8) === "You Win!"){
            player_score++;
        } else if (curr.slice(0, 9) === "You Lose!"){
            comp_score++;
        }
    }
    
    if (player_score > comp_score){
        console.log(`You win! Final score: ${player_score} to ${comp_score}`);
    } else if (comp_score > player_score){
        console.log(`You lose! Final score: ${player_score} to ${comp_score}`);
    } else {
        console.log(`It's a draw! Final score: ${player_score} to ${comp_score}`);
    }
}

game();
*/

// Event listeners for buttons
const container = document.querySelector('#container');

const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () => {
    if (!document.getElementById('results')){
        const result = document.createElement('div');
        result.setAttribute('id', 'results');
        result.textContent = playRound('Rock');

        container.appendChild(result);
    } else {
        const result = document.getElementById('results');
        result.textContent= playRound('Rock');
    }
});

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => {
    if (!document.getElementById('results')){
        const result = document.createElement('div');
        result.setAttribute('id', 'results');
        result.textContent = playRound('Paper');

        container.appendChild(result);
    } else {
        const result = document.getElementById('results');
        result.textContent= playRound('Paper');
    }
});

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', () => {
    if (!document.getElementById('results')){
        const result = document.createElement('div');
        result.setAttribute('id', 'results');
        result.textContent = playRound('Scissors');

        container.appendChild(result);
    } else {
        const result = document.getElementById('results');
        result.textContent= playRound('Scissors');
    }
});