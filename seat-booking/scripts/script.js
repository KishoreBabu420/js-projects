'use strict';
//elements

const movieInputEl = document.getElementById('movie');

//querySelectorAll
const seatsList = document.querySelectorAll('.seats-container .seat');

const seatCountEl = document.getElementById('seat-count');

const amountEl = document.getElementById('amount');

function showSummary() {
  const selectedSeats = document.querySelectorAll(
    '.seats-container .seat.selected',
  );
  const movieAmount = movieInputEl.value;
  const seatCount = selectedSeats.length;
  const amount = seatCount * movieAmount;

  seatCountEl.innerText = seatCount;
  amountEl.innerText = amount;
}

//events
movieInputEl.addEventListener('change', function () {
  showSummary();
});

for (let i = 0; i < seatsList.length; i++) {
  if (!seatsList[i].classList.contains('occupied')) {
    seatsList[i].addEventListener('click', function () {
      seatsList[i].classList.toggle('selected');
      showSummary();
    });
  }
}

//initial settings
showSummary();
