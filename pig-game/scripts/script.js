'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//global variables
let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

function switchPlayer() {
  currentScore = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');

  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
}

//Event Listener
// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `./assets/dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

//holding score
btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).innerText =
      scores[activePlayer];

    if (scores[activePlayer] >= 50) {
      //active player wins
      const currentPlayerEl = document.querySelector(
        `.player--${activePlayer}`,
      );
      currentPlayerEl.classList.remove('player--active');
      currentPlayerEl.classList.add('player--winner');
      playing = false;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

//Reset button
btnNew.addEventListener('click', init);

//initial settings
init();
