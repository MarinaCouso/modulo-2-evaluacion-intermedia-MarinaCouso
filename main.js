// Constantes

const userNumber = document.querySelector('.js-userNumber');

const clue = document.querySelector('.js-clue');

const tryBtn = document.querySelector('.js-submit');

const randomNumber = getRandomNumber();

// Funciones
function getRandomNumber(max) {
  return Math.ceil(Math.random() * 100);
}

function getUserNumber() {
  console.log(userNumber.value);
}

function winNumber() {
  if (randomNumber === userNumber.value) {
    clue.innerHTML = 'Has ganado';
    clue.classList.add('success');
  } else {
    clue.innerHTML = 'Sigue probando';
  }
}

function isValid() {
  if (userNumber.value > 1 && userNumber.value < 100) {
    winNumber();
  } else if (userNumber.value < randomNumber) {
    clue.innerHTML = 'El número es demasiado bajo';
    clue.classList.add('warning');
  } else if (userNumber.value > randomNumber) {
    clue.innerHTML = 'El número es demasiado alto';
    clue.classList.add('warning');
  }
}

function isEntero() {
  event.preventDefault();
  if (userNumber.value % 1 === 0) {
    isValid();
  } else {
    clue.innerHTML = 'Pista: El número debe estar entre 1 y 100';
    clue.classList.add('warning');
  }
}

// Listeners

userNumber.addEventListener('keyup', getUserNumber);

tryBtn.addEventListener('click', isEntero);

// Consola
console.log(getRandomNumber());
