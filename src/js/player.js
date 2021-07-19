export default class Player {
  constructor(name, id) {
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
  }

  isEmpty() {
    return (this._cards.length === 0) ? true : false;
  }
}
