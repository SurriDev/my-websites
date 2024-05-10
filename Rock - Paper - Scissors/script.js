const choices = ['tosh', "qog'oz", 'qaychi'];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');
let playerScore = 0;
let computerScore = 0;
const tie = 'DURRANG!';
const win = 'SIZ YUTDINGIZ!';
const lose = 'SIZ YUTQAZDINGIZ!';

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = '';

    if(playerChoice === computerChoice){
        result = tie;
    }
    else {
        switch(playerChoice){
            case 'tosh':
                result = (computerChoice === 'qaychi') ? win : lose;
                break;
            case "qog'oz":
                result = (computerChoice === 'tosh') ? win : lose;
                break;
            case 'qaychi':
                result = (computerChoice === "qog'oz") ? win : lose;
                break;
        }
    }

    playerDisplay.textContent = `SIZ: ${playerChoice}`;
    computerDisplay.textContent = `KOMPYUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove('greenText', 'redText', 'wheatText');

    switch(result){
        case win:
            resultDisplay.classList.add('greenText');
            break;
        case lose:
            resultDisplay.classList.add('redText');
            break;
        case tie:
            resultDisplay.classList.add('wheatText');
            break;
    }

    playerScoreDisplay.textContent = Number(playerScoreDisplay.textContent);
    computerScoreDisplay.textContent = Number(computerScoreDisplay.textContent);

    if(result === win){
        playerScore += 1;
    }
    else if(result === lose){
        computerScore += 1;
    }

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;



}