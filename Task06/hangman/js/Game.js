export default class Game {
  constructor(word) {
    this.word = word.toLowerCase();
    this.maxWrong = 6;
    this.wrong = 0;
    this.guessed = [];
  }

  guess(letter) {
    letter = letter.toLowerCase();

    if (this.guessed.includes(letter)) {
      return 'repeat';
    }

    this.guessed.push(letter);

    if (this.word.includes(letter)) {
      return 'ok';
    } else {
      this.wrong++;
      return 'miss';
    }
  }

  getMaskedWord() {
    return [...this.word]
      .map(c => (this.guessed.includes(c) ? c : '_'))
      .join('');
  }

  getWrongCount() {
    return this.wrong;
  }

  isWon() {
    return !this.getMaskedWord().includes('_');
  }

  isLost() {
    return this.wrong >= this.maxWrong;
  }

  getWord() {
    return this.word;
  }
}
