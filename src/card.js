export default class Card {
  constructor() {
    this._num = 0;
    this._color = 'red';
  }
  get num() {
    return this._num;
  }
  set num(num) {
    this._num = num;
  }
}
