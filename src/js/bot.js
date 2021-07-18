import Player from './player.js';

export default class Bot extends Player {
  constructor() {
    super('bot');
  }

  playCard(top_card) {
    for (let i=0; i<this._cards.length; i++) {
      const card = this._cards[i];
      if ( top_card.isMatch(card) ) {
        this._cards.splice(i, 1)[0];
        return card;
      }
    }
    return null;
  }
}
