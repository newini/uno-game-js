console.log('Uno Start')

import './css/uno-game.css';
import Card from './js/card.js';
import Player from './js/player.js';

let card = new Card(1, 'green');

console.log(card.num)

document.addEventListener('DOMContentLoaded', () => {
  const div = document.getElementById('uno-game');
  div.classList.add('uno-game');

});

const _all_colors = ['red', 'yellow', 'green', 'blue'];
function generateCards() {
  let cards = [];
  for (let i=0; i<7; i++) {
    cards.push({
      num: Math.floor( Math.random() * 14 ),
      color: _all_colors[ Math.floor( Math.random() * 4 ) ],
    });
  }
  const player = new Player(cards);
  player.printCards();

}
generateCards()

console.log('Uno End')
