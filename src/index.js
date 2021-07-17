console.log('Uno Start')

import './css/uno-game.css';
import Card from './js/card.js';
import Player from './js/player.js';
import Room from './js/room.js';

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
