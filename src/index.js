/* Class */
import BasicCanvas from './js/basic_canvas.js';
import Room from './js/room.js';
import BoxText from './js/box_text.js';
/* SCSS */
import './styles/uno-game.scss';

// Global variables
global.canvas_count = 0; // increment number to avoid the same canvas id

// uno-game-div must be found
global.uno_game_div;
global.uno_game_w = window.innerWidth;
global.uno_game_h = window.innerHeight;

/* Main view */
document.addEventListener('DOMContentLoaded', () => {
  // Get uno-game-div
  global.uno_game_div = document.getElementById('uno-game');
  global.uno_game_div.classList.add('uno-game-div');

  // Create canvas
  const basic_canvas = new BasicCanvas();

  // Set canvas
  basic_canvas.canvas.classList.add('uno-game-canv-main');

  // Add game start button with bitmap
  const btn_width = global.uno_game_w/8;
  const start_game_box_text = new BoxText(basic_canvas.ctx, global.uno_game_w*5/12, global.uno_game_h*3/4,
      global.uno_game_w/7, global.uno_game_w/8/1.6, 'Start Game');

  /* Canvas click */
  basic_canvas.canvas.addEventListener("click", e => {
    const rect = basic_canvas.canvas.getBoundingClientRect();
    const point = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };

    console.log(point);
    if ( start_game_box_text.isClicked(point) ) {
      basic_canvas.clear();
      startGame();
    }
  });

});


/* Game start */
function startGame() {
  console.info('Game start');

  const room = new Room('room1');

  room.addHuman('newini');
  room.addBot();
  room.addBot();
  room.addBot();

  room.startGame();
}



console.log('Uno End')
