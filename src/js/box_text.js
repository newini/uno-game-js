export default class BoxText {
  constructor(ctx, x, y, w, h, text) {
    this._ctx = ctx;
    this._x = x;
    this._y = y;
    this._w = w;
    this._h = h;
    this._text = text;

    ctx.lineWidth = 4;
    ctx.fillStyle = "#abc";
    ctx.fillRect(x, y, w, h);
    ctx.font = "30px Arial";
    ctx.textAlign="center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#000000";
    ctx.fillText(text, x+w/2, y+h/2);
  }

  isClicked(point) {
    return ( (this._x <= point.x && point.x <= this._x + this._w)
        && (this._y <= point.y && point.y <= this._y + this._h) )
  }

  clear() {
    this._ctx.clearRect(this._x, this._y, this._w, this._h);
  }
}
