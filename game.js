let computerCount =0;
let playerCount=0;
let playerSelection;



function computerPlay() {
    let moves= ['rock','paper','scissor'];
    return moves [Math.floor(Math.random()*moves.length)];
}



let rockButton=document.getElementById("rock-btn");
rockButton.addEventListener('click',()=> {
    singleResult.innerHTML=playRound("rock");
})


let paperButton=document.getElementById("paper-btn");
paperButton.addEventListener('click',()=> {
    singleResult.innerHTML=playRound("paper");
})


let scissorButton=document.getElementById("scissor-btn");
scissorButton.addEventListener('click',()=> {
    singleResult.innerHTML=playRound("scissor");
})


function playRound(playerSelection){
    const computerSelection=computerPlay();
    let result;
    if (playerSelection=="rock" && computerSelection=="scissor"){
        playerCount++;
        result="you win!"
        playerScore.innerHTML="your Score= " + playerCount
        document.body.appendChild(playerScore);
    }else if (playerSelection == "scissors" && computerSelection == "paper"){
        playerCount++;
        result = "You Win! " + playerSelection + " beats " + computerSelection + "!";
        playerScore.innerHTML = "Your Score = " + playerCount;
        document.body.appendChild(playerScore);
    } else if (playerSelection === computerSelection){
        result = "Draw! Try again!";
    } else {
        computerCount++;
        result = "You Lose! " + computerSelection + " beats " + playerSelection + "!";
        computerScore.innerHTML = "Computer Score = " + computerCount;
        document.body.appendChild(computerScore);
    }if (computerCount === 5) alert("Computer Wins!");
    if (playerCount === 5) alert("You Win!");
    return result;
    
}

let computerScore = document.createElement('div');
computerScore.id = "computerScore";

let playerScore = document.createElement('div');
playerScore.id = "playerScore";

let singleResult = document.createElement('div');
singleResult.id = "singleResult";
document.body.appendChild(singleResult);
