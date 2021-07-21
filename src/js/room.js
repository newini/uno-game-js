import BasicCanvas from './basic_canvas.js';
import Human from './human.js';
import Bot from './bot.js';
import Card from './card.js';
/* Images */

export default class Room extends BasicCanvas {
  constructor(name) {
    super();

    this._name = name;
    this._players = [];
    this._cards = [];
    this._used_cards = [];

    // Fill room name
    this._ctx.font = "32px Arial";
    this._ctx.fillText(name, 10, 10);
  }

  addHuman(name) {
    this._players.push( new Human(name, this._players.length) );
    console.log(this._players);
  }

  addBot() {
    this._players.push( new Bot('bot', this._players.length) );
    console.log(this._players);
  }

  initDeck() {
    for (let x=0; x<14; x++) {
      for (let y=0; y<8; y++) {
        if ( (x === 0) && (y >= 4) ) { // Skip blank card
          continue;
        }
        if ( (x === 13) && (y >= 4) ) { // +4 cards
          x = 14;
        }
        this._cards.push( new Card(x, y%4) );
      }
    }
    console.log(this._cards);
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

  updateView() {
    const inner_w = window.innerWidth;
    const inner_h = window.innerHeight;

    // Drw top card
    this._top_card.drawImageFront(inner_w/2, inner_h/2);

    // Draw players card
    this._players.forEach( (player) => {
      for (let i=0; i<player.cards.length; i++) {
        const card = player.cards[i];
        card.clear();
        if (player.type == 'bot') {
          card.drawImageBack(inner_w*(i+1)/16, inner_h*player.id/5);
        } else {
          card.drawImageFront(inner_w*(i+1)/16, inner_h*4/5);
        }
      }
    });
  }

  async startGame() {
    await( this.initDeck() );
    await( this.shuffleDeck() );

    let count = 0;
    let current_turn = 0;
    this._top_card = this.draw();

    console.log('Game start');

    while (true) {
      console.log('count: ' + count + ', current player: ' + this._players[current_turn].name);
      const player = this._players[current_turn];

      const card = await( player.playCard(this._top_card) );
      if (card) {
        console.log('player: ' + player.name + ' played card num: ' + card.num + ', color: ' + card.color_n);
        card.clear();
        this._used_cards.push(this._top_card);
        this._top_card = card;
      } else {
        const card = this.draw();
        console.log('player: ' + player.name + ' drawed card num: ' + card.num + ', color: ' + card.color_n);
        player.addCard(card);
      }

      this.updateView();
      //await Promise.all([
      //    timeout(1000)
      //]);
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (player.isEmpty()) {
        console.log('player: ' + player.name + ' has no card left. Game end');
        break
      }

      current_turn = (current_turn >= this._players.length-1) ? 0 : ++current_turn;
      count++;
    }
  }
}
