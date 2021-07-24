import Player from './player.js';
import BasicCanvas from './basic_canvas.js';

export default class Human extends Player {
  constructor(name, id) {
    super(name, id);

    this._type = 'human';
  }


  playCard(top_card) {
    return this._cards.splice(0, 1)[0];
  }

}
