function getRandomNumber(max) {
  return Math.ceil(Math.random() * 100);
}

console.log(getRandomNumber());

const userNumber = document.querySelector('.js-userNumber');

function getUserNumber() {
  console.log(userNumber.value);
}

userNumber.addEventListener('change', getUserNumber);
userNumber.addEventListener('change', isValid);

const clue = document.querySelector('.js-clue');

function isValid() {
  if (userNumber.value < 1 || userNumber.value > 100) {
    clue.innerHTML = 'Pista: El número debe estar entre 1 y 100';
    clue.classList.add('warning');
    return 'true';
  } else {
    return 'false';
  }
}
console.log(isValid());

function winNumber() {
  if (userName.value === getRandomNumber) {
    clue.innerHTML = 'Has ganado';
    clue.classList.add('success');
  }
}

userNumber.addEventListener('change', isValid);
