import BasicCanvas from './basic_canvas.js';

export default class Player extends BasicCanvas {
  constructor(name, id) {
    super();

    this._name = name;
    this._id = id;
    this._cards = [];
    this._type = '';
  }

  get id() {
    return this._id;
  }
  set id(id) {
    this._id = id;
  }

  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }

  get type() {
    return this._type;
  }
  set type(type) {
    this._type = type;
  }

  get cards() {
    return this._cards;
  }
  set cards(cards) {
    this._cards = cards;
  }

  addCard(card) {
    this._cards.push(card);
    this.sortCards();
    if (this.type === 'human') {
      card.flip();
    }
  }

  removeCard(card) {
    this._cards.splice(this._cards.indexOf(card), 1);
  }

  isEmpty() {
    return (this._cards.length === 0) ? true : false;
  }

  refreshCards() {
    for (let i=0; i<this._cards.length; i++) {
      this._cards[i].move(global.uno_game_w*(i+1)/16, global.uno_game_h*(5-this.id-1)/5);
    }
  }

  sortCards() {
    this._cards.sort( (a, b) => (a.num > b.num) ? 1 : -1 );
    this.refreshCards();
  }

}
