import Human from './human.js';
import Bot from './bot.js';
import Card from './card.js';
import cards_img from '../images/cards.svg';

export default class Room {
  constructor(name, ctx) {
    this._name = name;
    this._players = [];
    this._cards = [];
    this._ctx = ctx;

    this._ctx.font = "32px Arial";
    this._ctx.fillText(name, 50, 50);
    //this._ctx.drawImage(back, canvas.width-cdWidth/2-60, canvas.height/2-cdHeight/4, cdWidth/2, cdHeight/2);
    //this._ctx.fillText(playerName, 100, 390);

    this._cdWidth = 240;
    this._cdHeight = 360;

    this._cards_img = new Image();
    this._cards_img.src = cards_img;
    this._back_img = new Image();
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
    for (let x=0; x<14; x++) {
      for (let y=0; y<8; y++) {
        if ( (x === 0) && (y >= 4) ) { // Skip blank card
          continue;
        }
        if ( (x === 13) && (y >= 4) ) { // +4 cards
          x = 14;
        }
        const card = new Card(x, y%4);
        this._cards.push(card);
      }
    }
    console.log(this._cards);
  }

  shuffleDeck() {
    this._players.forEach( (player) => {
      for (let i=0; i<7; i++) {
        const card = this.draw();
        const cdWidth = this._cdWidth;
        const cdHeight = this._cdHeight;
        this._ctx.drawImage(this._cards_img, 1+cdWidth*card.num, 1+cdHeight*card.color_n, cdWidth, cdHeight,
            1+cdWidth*i/10, 100, cdWidth/10, cdHeight/10);
          //(hand.length/112)*(cdWidth/3)+(canvas.width/(2+(hand.length-1)))*(i+1)-(cdWidth/4), 400, cdWidth/2, cdHeight/2);
        player.addCard(card);
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

    console.log('Game start');

    while (true) {
      console.log('count: ' + count + ', current player: ' + this._players[current_turn].name);
      const player = this._players[current_turn];

      const card = await( player.playCard(top_card) );
      if (card) {
        console.log('player: ' + player.name + ' played card num: ' + card.num + ', color: ' + card.color_n);
        top_card = card;
      } else {
        const card = this.draw();
        console.log('player: ' + player.name + ' drawed card num: ' + card.num + ', color: ' + card.color_n);
        player.addCard(card);
      }

      if (player.isEmpty()) {
        console.log('player: ' + player.name + ' has no card left. Game end');
        break
      }
      current_turn = (current_turn >= this._players.length-1) ? 0 : ++current_turn;
      count++;
    }
  }
}
