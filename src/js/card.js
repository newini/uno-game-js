export default class Card {
  constructor(num, color_n) {
    this._num = num;
    this._color_n = color_n;
  }

  get num() {
    return this._num;
  }
  set num(num) {
    this._num = num;
  }
  get color_n() {
    return this._color_n;
  }
  set color_n(color_n) {
    this._color_n = color_n;
  }

  isMatch(card) {
    if ( (this._num === card.num) || (this._color_n === card.color_n) ) {
      return true;
    } else {
      return false;
    }
  }
}
