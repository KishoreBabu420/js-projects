'use strict';

const userChoiceEl = document.getElementById('user-choice');
const compChoiceEl = document.getElementById('comp-choice');
const resultEl = document.getElementById('result');
const userScoreEl = document.getElementById('user-score');
const compScoreEl = document.getElementById('comp-score');

const btnReset = document.getElementById('btn-reset');

//helper variables
const weapons = ['rock', 'paper', 'scissors'];
let userScore;
let compScore;

//functions

function init() {
  userScore = 0;
  compScore = 0;
  userScoreEl.innerText = `User Score: ${userScore}`;
  compScoreEl.innerText = `Computer Score: ${compScore}`;

  btnReset.style.display = 'none';
}

function generateRandomNumber(n) {
  return Math.trunc(Math.random() * n);
}

function compareChoice(userChoice, compChoice) {
  let result = '';
  if (userChoice === compChoice) {
    result = 'draw';
  } else if (userChoice === 'rock') {
    if (compChoice === 'paper') {
      result = 'lost';
    } else {
      result = 'won';
    }
  } else if (userChoice === 'paper') {
    if (compChoice === 'rock') {
      result = 'lost';
    } else {
      result = 'won';
    }
  } else if (userChoice === 'scissors') {
    if (compChoice === 'rock') {
      result = 'lost';
    } else {
      result = 'won';
    }
  }

  return result;
}

function displayResult(gameResult) {
  if (gameResult === 'won') {
    userScore++;
    userScoreEl.innerText = `User Score: ${userScore}`;
    compScoreEl.innerText = `Computer Score: ${compScore}`;
    resultEl.innerText = `User Won`;
  } else if (gameResult === 'lost') {
    compScore++;
    userScoreEl.innerText = `User Score: ${userScore}`;
    compScoreEl.innerText = `Computer Score: ${compScore}`;
    resultEl.innerText = `User Lost`;
  } else if (gameResult === 'draw') {
    userScoreEl.innerText = `User Score: ${userScore}`;
    compScoreEl.innerText = `Computer Score: ${compScore}`;
    resultEl.innerText = `Game DRAW`;
  }
}

function check(weapon) {
  if (userScore > 10 || compScore > 10) {
    btnReset.style.display = 'inline';
  } else {
    const userChoice = weapon;
    const compChoice = weapons[generateRandomNumber(weapons.length)];

    userChoiceEl.innerText = `User Choose ${userChoice}`;
    compChoiceEl.innerText = `Computer Choose ${compChoice}`;

    displayResult(compareChoice(userChoice, compChoice));
  }
}

btnReset.addEventListener('click', init);

//initial settings
init();
