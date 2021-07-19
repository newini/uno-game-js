
export default class Card {
  constructor(num, color_n) {
    this._num = num;
    this._color_n = color_n;

    this._card_w = 240;
    this._card_h = 360;
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

  drawImageFront(ctx, img, x, y) {
    this._x = x;
    this._y = y;
    this._w = ctx.canvas.width/16;
    this._h = this._w * this._card_h / this._card_w;
    ctx.drawImage(img, 1+this._card_w*this._num, 1+this._card_h*this._color_n, this._card_w, this._card_h,
        x, y, this._w, this._h);
  }

  drawImageBack(ctx, img, x, y) {
    this._x = x;
    this._y = y;
    this._w = ctx.canvas.width/16;
    this._h = this._w * this._card_h / this._card_w;
    ctx.drawImage(img, x, y, this._w, this._h);
  }

  eraseImage(ctx) {
    ctx.clearRect(this._x, this._y, this._w, this._h);
  }
}
