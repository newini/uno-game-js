export default class BasicCanvas {
  constructor() {
    this._canvas = document.createElement("CANVAS");
    global.uno_game_div.appendChild( this._canvas );
    global.canvas_count++;
    console.debug(global.canvas_count);
    this._canvas.width = global.uno_game_w;
    this._canvas.height = global.uno_game_h;
    this._canvas.classList.add('uno-game-canv-default');
    this._canvas.style += 'z-index: ' + global.canvas_count + ';';
    this._ctx = this._canvas.getContext('2d');
  }

  get canvas() {
    return this._canvas;
  }
  set canvas(canvas) {
    this._canvas = canvas;
  }

  get ctx() {
    return this._ctx;
  }
  set ctx(ctx) {
    this._ctx = ctx;
  }

  clear() {
    this._ctx.clearRect(0, 0, global.uno_game_w, global.uno_game_h);
  }
}
