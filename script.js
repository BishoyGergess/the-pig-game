'use strict';

let tempScore = 0;
let CurrentPlayer = 0;
/*Selecting Queries*/
//Score elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
//current score
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
//dice
const Dice = document.querySelector('.dice');
//game buttons
const newGameButton = document.querySelector('#new--game');
const holdGameButton = document.querySelector('#new--hold');
const rollGameButton = document.querySelector('#new--roll');
const playerNum1 = document.querySelector('player--0');
const playerNum2 = document.querySelector('player--1');

/*Functions*/
//new game reset
const newGame = (function () {
  Dice.classList.add('hidden');

  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;

  //() to run it once the script is started
})();
//switching players//not functioning yet
// const playersSwitcher = function (CurrentPlayer) {
//   if (CurrentPlayer) {
//     playerNum1.classList.remove('player--active');
//     playerNum2.classList.add('player--active');
//   } else {
//   }
// };

/*Actions*/
//new game function is exactly the reset
newGameButton.addEventListener('click', newGame);
rollGameButton.addEventListener('click', function () {
  //1- Randomize the dice
  const diceRolling = Math.floor(Math.random() * 6 + 1);
  console.log(diceRolling);
  //2- Show the dice
  Dice.classList.remove('hidden');
  Dice.src = 'dice-' + diceRolling + '.png';
  //3- See if The dice equals 1,
  if (diceRolling === 1) {
    score0El.textContent = 0;
    currentScore0.textContent = 0;
    // CurrentPlayer = 1;
    // playersSwitcher(CurrentPlayer);
  } else {
    tempScore += diceRolling;
    currentScore0.textContent = tempScore; // fix it letter
  }
});
//player--active
