export default class Player {
  constructor(name) {
    this._name = name;
    this._cards = [];
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  addCard(card) {
    this._cards.push(card);
  }

  isEmpty() {
    return (this._cards.length === 0) ? true : false;
  }
}
