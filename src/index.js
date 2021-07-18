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

  // Add canvas
  canvas.classList.add('uno-game-canv')
  canvas.width = 800;
  canvas.height = 450;
  div.appendChild( canvas );

  // Add game start button
  start_game_box_text = new BoxText(ctx, 300, 300, 200, 100, 'Start Game');

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

/* Game start view */
function startGame() {
  console.info('Game start');

  room.addHuman('newini');
  room.addBot();
  room.addBot();
  room.addBot();

  room.startGame();
}



console.log('Uno End')
