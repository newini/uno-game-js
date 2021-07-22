export default class BasicCanvas {
  constructor(x, y, w, h) {
    this._x = x;
    this._y = y;
    this._w = w;
    this._h = h;

    // Create canvas
    this._canvas = document.createElement("CANVAS");
    this._canvas.width = w;
    this._canvas.height = h;
    this._canvas.classList.add('uno-game-canv-default');

    // Canvas style
    this._z_index = global.canvas_count;
    global.canvas_count++;
    this._canvas.style = `left: ${x}px; top: ${y}px; z-index: ${this._z_index};`;

    // Add to div
    global.uno_game_div.appendChild( this._canvas );

    // Get ctx
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

  move(x, y) {
    this._canvas.style.left = x + 'px';
    this._canvas.style.top = y + 'px';
  }

  refresh() {
    this._canvas.style.zIndex = global.canvas_count;
    global.canvas_count++;
  }

  remove() {
    this._canvas.remove();
  }
}
