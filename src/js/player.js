import Card from './card.js';

export default class Player {
  constructor(name) {
    this._name = name;
    this._cards = [];
  }
  addCard(card) {
    this._cards.push(card);
  }
  printCards() {
    console.log(this._cards);
  }
}
