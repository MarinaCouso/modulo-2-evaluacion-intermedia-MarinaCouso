// Constantes

// Random number
function getRandomNumber(min, max) {
  return Math.ceil(Math.random() * min * max);
}

const randomNumber = getRandomNumber(1, 100);
console.log(randomNumber);

// Input number
const input = document.querySelector('.js-userNumber');
let inputNumber;

function getInputNumber() {
  inputNumber = parseInt(input.value);
  console.log(inputNumber);
}

getInputNumber();
// Compare random and input number
const submitBtn = document.querySelector('.js-submit');

const pista = document.querySelector('.js-clue');

function compareInputNumber(ev) {
  ev.preventDefault();
  if (inputNumber > 100 || inputNumber < 1) {
    pista.innerHTML = 'El número debe estar entre 1 y 100';
  } else if (randomNumber === inputNumber) {
    pista.innerHTML = 'Has ganado campeona!!!';
  } else if (randomNumber < inputNumber) {
    pista.innerHTML = 'Pista: Demasiado alto';
  } else if (randomNumber > inputNumber) {
    pista.innerHTML = 'Pista: Demasiado bajo';
  }
}

const writeTries = document.querySelector('.js-try');

function numberTries() {
  for (let i = 0; i < 1; i++) {
    writeTries.innerHTML = parseInt(writeTries.innerHTML) + 1;
  }
}

input.addEventListener('change', getInputNumber);

submitBtn.addEventListener('click', compareInputNumber);
submitBtn.addEventListener('click', numberTries);
