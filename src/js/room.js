import Human from './human.js';
import Bot from './bot.js';
import Card from './card.js';

export default class Room {
  constructor(id) {
    this._id = (typeof id === 'number') ? id : 0;
    this._players = [];
    this._cards = [];
    this.ALL_COLORS = ['red', 'yellow', 'green', 'blue'];
  }

  addHuman(name) {
    this._players.push( new Human(name) );
    console.log(this._players);
  }

  addBot() {
    this._players.push( new Bot() );
    console.log(this._players);
  }

  initDeck() {
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
  }
  shuffleDeck() {
    this._players.forEach( (player) => {
      for (let i=0; i<7; i++) {
        player.addCard( this.draw() );
      }
    });
    console.log(this._players);
  }
  draw() {
    /* Draw randomly */
    const card_i = Math.floor( Math.random() * this._cards.length );
    return this._cards.splice(card_i, 1)[0];
  }

  async startGame() {
    await( this.initDeck() );
    await( this.shuffleDeck() );

    let count = 0;
    let current_turn = 0;
    let top_card = this.draw();

    while (true) {
      console.log('count: ' + count + ', current_turn: ' + current_turn);
      const player = this._players[current_turn];

      const card = await( player.playCard(top_card) );
      if (card) {
        console.log('player: ' + player.name + ' played card num: ' + card.num + ', color: ' + card.color);
        top_card = card;
      } else {
        player.addCard( this.draw() );
      }

      if (player.isEmpty()) {
        console.log('game end')
        break
      }
      current_turn = (current_turn >= this._players.length-1) ? 0 : ++current_turn;
      count++;
    }
  }
}
