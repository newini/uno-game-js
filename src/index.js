console.log('Uno Start')

import './css/uno-game.css';
import Card from './js/card.js';

let card = new Card();

console.log(card.num)

document.addEventListener('DOMContentLoaded', () => {
  const div = document.getElementById('uno-game');
  div.classList.add('uno-game');

});

console.log('Uno End')
