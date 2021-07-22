import BasicCanvas from './basic_canvas.js';

export default class BoxText extends BasicCanvas {
  constructor(x, y, w, h, text) {
    super(x, y, w, h);

    this._text = text;

    this._ctx.lineWidth = 4;
    this._ctx.fillStyle = "#abc";
    this._ctx.fillRect(0, 0, w, h);
    this._ctx.font = Math.floor(h/3)+"px Arial";
    this._ctx.textAlign="center";
    this._ctx.textBaseline = "middle";
    this._ctx.fillStyle = "#000000";
    this._ctx.fillText(text, w/2, h/2);
  }
}
