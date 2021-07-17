import Card from './card.js';

export default class Player {
  constructor(cards) {
    this._n = cards.length;
    this._cards = [];
    cards.forEach( (card) => {
      this._cards.push( new Card( card['num'], card['color'] ) );
    });
  }
  printCards() {
    this._cards.forEach( (card) => {
      console.log(card.num)
    });
  }
}
