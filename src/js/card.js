export default class Card {
  constructor(num, color) {
    this._num = num;
    this._color = color;
  }

  get num() {
    return this._num;
  }
  set num(num) {
    this._num = num;
  }
  get color() {
    return this._color;
  }
  set color(color) {
    this._color = color;
  }

  isMatch(card) {
    if ( (this._num === card.num) || (this._color === card.color) ) {
      return true;
    } else {
      return false;
    }
  }
}
