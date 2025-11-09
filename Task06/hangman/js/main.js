import Game from './Game.js';
import View from './View.js';

const words = ['planet', 'silver', 'castle', 'garden', 'bridge', 'school'];

let game;
let view;

function startGame() {
  const randomWord = words[Math.floor(Math.random() * words.length)];
  game = new Game(randomWord);
  view = new View(handleGuess, startGame);
  view.renderWord(game.getMaskedWord());
  view.renderHangman(game.getWrongCount());
  view.showMessage('Start guessing!');
}

function handleGuess(letter, btn) {
  const result = game.guess(letter);
  view.disableLetter(btn);
  view.renderWord(game.getMaskedWord());
  view.renderHangman(game.getWrongCount());

  if (result === 'ok') {
    view.showMessage(`Good job! '${letter}' is in the word.`);
  } else if (result === 'miss') {
    view.showMessage(`Sorry, '${letter}' is not in the word.`);
  } else {
    view.showMessage(`You already tried '${letter}'.`);
  }

  if (game.isWon()) {
    view.showMessage(`🎉 You guessed it! The word was '${game.getWord()}'`);
    disableAllLetters();
  } else if (game.isLost()) {
    view.showMessage(`💀 You lost! The word was '${game.getWord()}'`);
    disableAllLetters();
  }
}

function disableAllLetters() {
  document.querySelectorAll('#letters button').forEach(b => (b.disabled = true));
}

startGame();
