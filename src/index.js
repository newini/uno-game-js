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

  // Create UNO title
  const title = document.createElement('h1');
  title.innerHTML = 'UNO Game'
  title.classList.add('uno-game-typewriter')
  title.style.fontSize = global.uno_game_h/6 + 'px';
  title.style.top = global.uno_game_h/3 + 'px';
  title.style.zIndex = global.canvas_count;
  global.canvas_count++;
  global.uno_game_div.appendChild( title );

  // Create room button
  const create_room_box_text = new BoxText(global.uno_game_w*5/12, global.uno_game_h*3/4,
      global.uno_game_w/6, global.uno_game_w/12, 'Create Game');
  create_room_box_text.canvas.addEventListener("click", e => {
    // Remove elements
    title.remove();
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

  await new Promise(resolve => setTimeout(resolve, 1000));

  await( room.dealCards() );

  await new Promise(resolve => setTimeout(resolve, 500));

  await( room.startGame() );
}



console.log('Uno End')
