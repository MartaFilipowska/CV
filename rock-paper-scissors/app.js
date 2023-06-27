const playerPointsSpan = document.querySelector('.player-points');
const compPointsSpan = document.querySelector('.comp-points');
const optionsButtons = document.querySelectorAll('.options button');
const playerChoiceSpan = document.querySelector('.player-choice');
const compChoiceSpan = document.querySelector('.comp-choice');
const choices = document.querySelector('.choices');
const resultText = document.querySelector('.result-text');
const resetGameButton = document.querySelector('.reset-game');

let playerPoints = 0;
let playerChoice = '';
let compPoints = 0;
let compChoice = '';

function setGame() {
    playerPointsSpan.innerHTML = playerPoints;
    compPointsSpan.innerHTML = compPoints;
    resultText.innerHTML = 'Choose your weapon!';
}

window.onload = setGame();

function playerSelect(event) {
    optionsButtons.forEach((button) => button.classList.remove('active'));
    playerChoice = event.target.dataset.option;
    event.target.classList.add('active');

    resetGameButton.classList.add('active');
    compSelect();
}

function compSelect() {
    const availableCompChoices = ['FLOKI', 'MARCIN', 'FREJA'];
    const randomIndex = Math.floor(Math.random() * availableCompChoices.length);
    compChoice = availableCompChoices[randomIndex];

    checkResult();
}

function checkResult() {
    if (
        (playerChoice === 'FLOKI' && compChoice === 'FREJA') ||
        (playerChoice === 'FREJA' && compChoice === 'MARCIN') ||
        (playerChoice === 'MARCIN' && compChoice === 'FLOKI')
    ) {
        resultText.innerHTML = 'You won!';
        playerPoints++;
        playerPointsSpan.innerHTML = playerPoints;
    } else if (playerChoice === compChoice) {
        resultText.innerHTML = "Wel... It's a dead-heat. Another round?";
    } else {
        resultText.innerHTML = 'You loose :(';
        compPoints++;
        compPointsSpan.innerHTML = compPoints;
    }

    choices.classList.add('active');
    playerChoiceSpan.innerHTML = playerChoice;
    compChoiceSpan.innerHTML = compChoice;
}

optionsButtons.forEach((button) => 
    button.addEventListener('click', playerSelect)
);



resetGameButton.addEventListener('click', function resetGame() {
    choices.classList.remove('active');
    resultText.innerHTML = 'Choose your weapon!';
    playerPointsSpan.innerHTML = 0;
    compPointsSpan.innerHTML = 0;
    resetGameButton.classList.remove('active');
    optionsButtons.forEach((button) => button.classList.remove('active'));
});