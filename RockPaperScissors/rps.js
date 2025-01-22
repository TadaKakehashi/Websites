let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');
let userChoice = '';
let win = 0;
let tie = 0;
let lose = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}
rock.addEventListener('click', ()=>{
    userChoice = 'rock';
    playGame(userChoice);
})

paper.addEventListener('click', ()=>{
    userChoice = 'paper';
    playGame(userChoice);
});

scissors.addEventListener('click',()=>{
    userChoice = 'scissors';
    playGame(userChoice);
})

function check(computerChoice , userChoice){
    if (computerChoice === userChoice){
        tie++;
        document.querySelector('.tie h2').innerHTML = `Tie: ${tie}`
        document.querySelector('.result').style.backgroundColor = "yellow";
    }
    else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        win++;
        document.querySelector('.win h2').innerHTML = `Win: ${win}`;
        document.querySelector('.result').style.backgroundColor = "green"; 
    } else {
        lose++;
        document.querySelector('.lose h2').innerHTML = `Lose: ${lose}`;
        document.querySelector('.result').style.backgroundColor = "red";
    }
}

function playGame(userChoice) {
    const computerChoice = getComputerChoice(); 
    console.log(`User: ${userChoice}, Computer: ${computerChoice}`);
    check(computerChoice, userChoice); 
}
