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
}
