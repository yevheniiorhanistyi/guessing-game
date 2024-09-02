class GuessingGame {
  constructor() { }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.currentGues = Math.round((this.min + this.max) / 2);
    return this.currentGues;
  }

  lower() {
    this.max = this.currentGues;
  }

  greater() {
    this.min = this.currentGues;
  }
}

module.exports = GuessingGame;
