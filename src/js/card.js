import BasicCanvas from './basic_canvas.js';
/* Images */
import cards_img from '../images/cards.svg';
import card_back from '../images/card_back.svg';

export default class Card extends BasicCanvas {
  constructor(x, y, num, color_n) {
    super(x, y, global.uno_game_w/16, global.uno_game_w/16*360/240);

    this._c_w = 240;
    this._c_h = 360;

    this._num = num;
    this._color_n = color_n;
    this._event_is_set = false;

    this._cards_img = new Image();
    this._cards_img.src = cards_img;
    this._card_back_img = new Image();
    this._card_back_img.src = card_back;

    // Add border
    this._canvas.style.border = '1px solid #000000';

    // Add transition
    this._canvas.style.transition = '0.5s';

    // Fill
    this._card_back_img.addEventListener('load', () => {
      this._ctx.drawImage(this._card_back_img, 0, 0, this._w, this._h);
      this._is_front = false;
    });
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

  get event_is_set() {
    return this._event_is_set;
  }
  set event_is_set(event_is_set) {
    this._event_is_set = event_is_set;
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

  flip() {
    this.clear();
    if (this._is_front) {
      this._ctx.drawImage(this._card_back_img, 0, 0, this._w, this._h);
      this._is_front = false;
    } else {
      this._cards_img.addEventListener('load', () => {
        this._ctx.drawImage(this._cards_img, 1+this._c_w*this._num, 1+this._c_h*this._color_n, this._c_w, this._c_h,
            0, 0, this._w, this._h);
        this._is_front = true;
      });
    }
  }

  drawImageFront(x, y) {
    this._canvas.style.left = x + 'px';
    this._canvas.style.top = y + 'px';
    this.clear();
    this._ctx.drawImage(this._cards_img, 1+this._c_w*this._num, 1+this._c_h*this._color_n, this._c_w, this._c_h,
        0, 0, this._w, this._h);
  }

  drawImageBack(x, y) {
    this._canvas.style.left = x + 'px';
    this._canvas.style.top = y + 'px';
    this.clear();
    this._ctx.drawImage(this._card_back_img, 0, 0, this._w, this._h);
  }

}
