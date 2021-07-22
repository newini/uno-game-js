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

  // Create background canv
  const bkg = new BasicCanvas(0, 0, global.uno_game_w, global.uno_game_h);
  bkg.canvas.classList.add('uno-game-canv-bkg');

  // Create room button
  const create_room_box_text = new BoxText(global.uno_game_w*5/12, global.uno_game_h*3/4,
      global.uno_game_w/6, global.uno_game_w/12, 'Create Game');

  /* Canvas click */
  create_room_box_text.canvas.addEventListener("click", e => {
    create_room_box_text.remove();
    createRoom();
  });
});


/* Game start */
async function createRoom() {
  console.info('Game start');

  const room = new Room('room1');

  room.addHuman('newini');
  room.addBot();
  room.addBot();
  room.addBot();

  await( room.initCards() );

  //setTimeout( ()=>{ room.dealCards(); }, 2000 );
  await( room.dealCards() );

  await( room.startGame() );
}



console.log('Uno End')
