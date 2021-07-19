/* Class */
import Room from './js/room.js';
import BoxText from './js/box_text.js';
/* SCSS */
import './styles/uno-game.scss';

const canvas = document.createElement("CANVAS");
const ctx = canvas.getContext('2d');
let start_game_box_text;


/* Main view */
document.addEventListener('DOMContentLoaded', () => {
  // Add div class
  const div = document.getElementById('uno-game');
  div.classList.add('uno-game-div');

  const inner_w = window.innerWidth;
  const inner_h = window.innerHeight;
  // Add canvas
  canvas.classList.add('uno-game-canv');
  canvas.width = inner_w;
  canvas.height = inner_h;
  div.appendChild( canvas );

  // Add game start buttono
  const btn_width = inner_w/8;
  start_game_box_text = new BoxText(ctx, inner_w*5/12, inner_h*3/4, inner_w/7, inner_w/8/1.6, 'Start Game');

});

/* Canvas click */
canvas.addEventListener("click", e => {
  const rect = canvas.getBoundingClientRect();
  const point = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };

  console.log(point);
  if ( start_game_box_text.isClicked(point) ) {
    start_game_box_text.clear();
    startGame();
  }
});

const room = new Room('room1', ctx);

/* Game start */
function startGame() {
  console.info('Game start');

  room.addHuman('newini');
  room.addBot();
  room.addBot();
  room.addBot();

  room.startGame();
}



console.log('Uno End')
