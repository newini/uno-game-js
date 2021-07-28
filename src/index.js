// index.js

/* Class */
import BasicCanvas from './js/basic_canvas.js';
import Room from './js/room.js';
/* SCSS */
import './styles/uno-game.scss';

// Global variables
global.canvas_count = 0; // increment number to avoid the same canvas id

// uno-game-div must be found
global.uno_game_div;
global.uno_game_w = window.innerWidth-1;
global.uno_game_h = window.innerHeight-1;


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
  title.innerHTML = 'UNO Game';
  title.classList.add('uno-game-title');
  title.style.fontSize = global.uno_game_h/6 + 'px';
  title.style.top = global.uno_game_h/3 + 'px';
  title.style.zIndex = global.canvas_count;
  global.canvas_count++;
  global.uno_game_div.appendChild( title );

  // Create div for button group
  const btn_group = document.createElement('div');
  btn_group.classList.add('uno-game-btn-div');
  btn_group.style.top = global.uno_game_h*2/3 + 'px';
  btn_group.style.zIndex = global.canvas_count;
  global.canvas_count++;
  global.uno_game_div.appendChild( btn_group );

  // Create single player button
  const sp_btn = document.createElement('button');
  sp_btn.classList.add('uno-game-btn');
  sp_btn.innerHTML = 'Single Player';
  sp_btn.style.fontSize = global.uno_game_h/16 + 'px';
  btn_group.appendChild( sp_btn );

  // Create multi player button
  const mp_btn = document.createElement('button');
  mp_btn.classList.add('uno-game-btn');
  mp_btn.innerHTML = 'Multi Player (not work)';
  mp_btn.style.fontSize = global.uno_game_h/16 + 'px';
  btn_group.appendChild( mp_btn );

  // Add event
  sp_btn.addEventListener("click", e => {
    // Remove elements
    title.remove();
    sp_btn.remove();
    btn_group.remove();
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
