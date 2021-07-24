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
      card.drawImageFront();
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
      let x0, y0, dx, dy;
      if (this._id === 0) {
        x0 = global.uno_game_w/4;
        dx = global.uno_game_w/2 / (this._cards.length+1);
        y0 = global.uno_game_h*4/5;
        dy = 0;
        this._cards[i].move(x0 + dx*(i+1), y0 + dy*(i+1));
      } else {
        x0 = global.uno_game_w*(this._id-1)/3;
        dx = global.uno_game_w/3 / (this._cards.length+2);
        this._cards[i].move(x0 + dx*(i+1), this.ellipticalFormula(x0 + dx*(i+1), global.uno_game_w/2, global.uno_game_h));
      }
    }
  }

  sortCards() {
    this._cards.sort( (a, b) => (a.num > b.num) ? 1 : -1 );
    this.refreshCards();
  }


  ellipticalFormula(x, a, b) {
    return b * ( 1 - Math.sqrt( 1 - (x/a - 1)**2 ) );
  }

}
