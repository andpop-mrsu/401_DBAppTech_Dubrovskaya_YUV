export default class View {
  constructor(onGuess, onRestart) {
    this.hangman = document.getElementById('hangman');
    this.wordEl = document.getElementById('word');
    this.message = document.getElementById('message');
    this.letters = document.getElementById('letters');
    this.restartBtn = document.getElementById('restart');

    this.restartBtn.addEventListener('click', onRestart);
    this.renderLetters(onGuess);
  }

  renderLetters(onGuess) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    this.letters.innerHTML = '';
    for (const letter of alphabet) {
      const btn = document.createElement('button');
      btn.textContent = letter;
      btn.addEventListener('click', () => onGuess(letter, btn));
      this.letters.appendChild(btn);
    }
  }

    renderWord(masked) {
    this.wordEl.innerHTML = '';
    for (const c of masked) {
            const box = document.createElement('div');
            box.className = 'letter-box';
            box.textContent = c !== '_' ? c : '';
            this.wordEl.appendChild(box);
        }
    }


renderHangman(wrong) {
  const pics = [
    `  +---+\n      |\n      |\n      |\n   =====`,
    `  +---+\n  0   |\n      |\n      |\n   =====`,
    `  +---+\n  0   |\n  |   |\n      |\n   =====`,
    `  +---+\n  0   |\n /|   |\n      |\n   =====`,
    `  +---+\n  0   |\n /|\\  |\n      |\n   =====`,
    `  +---+\n  0   |\n /|\\  |\n /    |\n   =====`,
    `  +---+\n  0   |\n /|\\  |\n / \\  |\n   =====`
  ];

  const pic = pics[Math.min(wrong, pics.length - 1)];
  this.hangman.textContent = pic;
}


  showMessage(text) {
    this.message.textContent = text;
  }

  disableLetter(button) {
    button.disabled = true;
  }
}
