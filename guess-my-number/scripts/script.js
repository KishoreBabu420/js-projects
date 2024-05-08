'use strict';
const guessInputEl = document.getElementById('guess');
const btnCheck = document.getElementById('btn-check');
const messageEl = document.getElementById('message');

const randomNumber = Math.trunc(Math.random() * 100 + 1);

btnCheck.addEventListener('click', function () {
  let guess = Number(guessInputEl.value);
  if (!guess || guess < 1 || guess > 100) {
    messageEl.innerText = `Enter a valid number to check`;
  } else {
    if (guess === randomNumber) {
      messageEl.innerText = `You have guessed ${guess}. You have won the game`;
    } else {
      if (guess > randomNumber) {
        messageEl.innerText = `You have guessed ${guess}. You have guessed too high`;
      } else {
        messageEl.innerText = `You have guessed ${guess}. You have guessed too low`;
      }
    }
  }
});

//0  -  1 * 100 //0 - 100 + 1 1 - 101
