import Player from './player.js';
import Card from './card.js';

export default class Room {
  constructor(id) {
    this._id = (typeof id === 'number') ? id : 0;
    this._n_players = 0;
    this._players = [];
    this._cards = [];
    this.ALL_COLORS = ['red', 'yellow', 'green', 'blue'];
  }
  addPlayer(player_name) {
    const player = new Player(player_name);
    this._players.push(player);
  }
  printPlayers() {
    console.log(this._players);
  }
  initCards() {
    this.ALL_COLORS.forEach( (color) => {
      for (let num=0; num<=12; num++) {
        const card = new Card(num, color);
        this._cards.push( card );
      }
    });
    this.ALL_COLORS.forEach( (color) => {
      for (let num=1; num<=12; num++) {
        const card = new Card(num, color);
        this._cards.push( card );
      }
    });
    for (let i=0; i<4; i++) {
      for (let num=13; num<=14; num++) {
        const card = new Card(num, 'none');
        this._cards.push( card );
      }
    }
    console.log( this._cards );
  }
  shuffleDeck() {
    this._players.forEach( (player) => {
      for (let i=0; i<7; i++) {
        let j = Math.floor( Math.random() * this._cards.length );
        const card = this._cards.splice(j, 1);
        player.addCard(card);
      }
      player.printCards();
    });
  }
}
