'use strict';

const userChoiceEl = document.getElementById('user-choice');
const compChoiceEl = document.getElementById('comp-choice');
const resultEl = document.getElementById('result');
const resultContainer = document.querySelector('.result-container');
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
  userScoreEl.innerText = `${userScore}`;
  compScoreEl.innerText = `${compScore}`;

  resultContainer.style.display = 'none';
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
    resultEl.innerText = `User Won`;
    resultEl.style.backgroundColor = '#386641';
  } else if (gameResult === 'lost') {
    compScore++;
    resultEl.innerText = `User Lost`;
    resultEl.style.backgroundColor = '#ff0054';
  } else if (gameResult === 'draw') {
    resultEl.innerText = `Game DRAW`;
    resultEl.style.backgroundColor = '#8d99ae';
  }
  userScoreEl.innerText = `${userScore}`;
  compScoreEl.innerText = `${compScore}`;
}

function check(weapon) {
  if (userScore >= 5 || compScore >= 5) {
    userChoiceEl.innerText = null;
    compChoiceEl.innerText = null;
    resultEl.innerText = 'Game Over';
    btnReset.style.display = 'inline';
  } else {
    resultContainer.style.display = 'flex';
    const userChoice = weapon;
    const compChoice = weapons[generateRandomNumber(weapons.length)];

    userChoiceEl.innerHTML = `User Choose <span class="weapon">${userChoice}</span>`;
    compChoiceEl.innerHTML = `Computer Choose <span class="weapon">${compChoice}</span>`;

    displayResult(compareChoice(userChoice, compChoice));
  }
}

btnReset.addEventListener('click', init);

//initial settings
init();
