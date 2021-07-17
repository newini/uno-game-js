console.log('Uno Start')

/* Class */
import Room from './js/room.js';
/* SCSS */
import './styles/uno-game.scss';
/* Images */
//import green_table from './images/green_table.jpg';


document.addEventListener('DOMContentLoaded', () => {
  const div = document.getElementById('uno-game');
  div.classList.add('uno-game');

});

const room = new Room();
room.addPlayer('newini');
room.printPlayers();
room.initCards();
room.shuffleDeck();

console.log('Uno End')
