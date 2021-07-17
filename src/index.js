console.log('Uno Start')

/* Class */
import Room from './js/room.js';
/* SCSS */
import './styles/uno-game.scss';
/* Images */
//import green_table from './images/green_table.jpg';



document.addEventListener('DOMContentLoaded', () => {
  const div = document.getElementById('uno-game');
  div.classList.add('uno-game-div');

  const canvas = document.createElement("CANVAS");
  canvas.width = 800;
  canvas.height = 450;
  div.appendChild( canvas );

  const ctx = canvas.getContext('2d');

  const room = new Room('room1', ctx);
  room.addHuman('newini');
  room.addBot();

  setTimeout( () => { room.startGame(); }, 1000);

});



console.log('Uno End')
