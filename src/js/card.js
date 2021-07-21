import BasicCanvas from './basic_canvas.js';
/* Images */
import cards_img from '../images/cards.svg';
import card_back from '../images/card_back.svg';

export default class Card extends BasicCanvas {
  constructor(num, color_n) {
    super();

    this._num = num;
    this._color_n = color_n;

    this._c_w = 240;
    this._c_h = 360;

    this._cards_img = new Image();
    this._cards_img.src = cards_img;
    this._card_back_img = new Image();
    this._card_back_img.src = card_back;
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
    if ( (this._num <= 12 && this._num === card.num)
      || (this._num >= 13)
      || (this._color_n === card.color_n) ) {
      return true;
    } else {
      return false;
    }
  }

  drawImageFront(x, y) {
    this.clear();
    this._x = x;
    this._y = y;
    this._w = global.uno_game_w/16;
    this._h = this._w * this._c_h / this._c_w;
    this._ctx.drawImage(this._cards_img, 1+this._c_w*this._num, 1+this._c_h*this._color_n, this._c_w, this._c_h,
        x, y, this._w, this._h);
  }

  drawImageBack(x, y) {
    this.clear();
    this._x = x;
    this._y = y;
    this._w = global.uno_game_w/16;
    this._h = this._w * this._c_h / this._c_w;
    this._ctx.drawImage(this._card_back_img, x, y, this._w, this._h);
  }
}
