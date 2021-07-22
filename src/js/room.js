import BasicCanvas from './basic_canvas.js';
import Human from './human.js';
import Bot from './bot.js';
import Card from './card.js';
/* Images */

export default class Room extends BasicCanvas {
  constructor(name) {
    super(0, 0, global.uno_game_w, global.uno_game_h/10);

    this._name = name;
    this._players = [];
    this._cards = [];
    this._used_cards = [];

    // Fill room name
    this._ctx.font = Math.floor(this._h/3) + "px Arial";
    this._ctx.fillText(name, 10, 50);
  }

  addHuman(name) {
    this._players.push( new Human(name, this._players.length) );
    console.log(this._players);
  }

  addBot() {
    this._players.push( new Bot('bot', this._players.length) );
    console.log(this._players);
  }

  initCards() {
    console.log('Init')
    const index_arr = [...Array(108).keys()];
    let cnt = 0;
    for (let num=0; num<14; num++) {
      for (let color_n=0; color_n<8; color_n++) {
        if ( (num === 0) && (color_n >= 4) ) { // Skip blank card
          continue;
        }
        if ( (num === 13) && (color_n >= 4) ) { // +4 cards
          num = 14;
        }
        const card_index = index_arr.splice(Math.floor( Math.random() * index_arr.length), 1)[0];
        this._cards[ card_index ] = new Card(global.uno_game_w*6/16+card_index, global.uno_game_h/2, num, color_n%4);
        cnt++;
      }
    }
    for (let i=0; i<this._cards.length; i++) {
      this._cards[i].refresh();
    }
    console.log(this._cards);
  }

  dealCards() {
    console.log('Deal cards')
    this._players.forEach( (player) => {
      for (let i=0; i<7; i++) {
        player.addCard( this._cards.pop() );
      }
    });
    console.log(this._players);
  }

  async startGame() {
    console.log('Game start');

    this._current_player = 0;
    this._turn_count = 0;

    this._top_card = this._cards.pop();
    this._top_card.flip();
    this._top_card.move(global.uno_game_w*8/16+this._turn_count, global.uno_game_h/2);
    //this._top_card.drawImageFront(global.uno_game_w*8/16+this._turn_count, global.uno_game_h/2);

    this.humanTurn(this._players[this._current_player]);

    //  if (player.isEmpty()) {
    //    console.log('player: ' + player.name + ' has no card left. Game end');
    //    break
    //  }
  }

  async botPlay(player) {
    console.log('Turn count: ' + this._turn_count + ', current player: ' + player.name);
    await new Promise(resolve => setTimeout(resolve, 1000));

    const card = player.playCard(this._top_card);
    if (card) {
      console.log('player: ' + player.name + ' played card num: ' + card.num + ', color: ' + card.color_n);
      this.changeTopCard(card);
    } else {
      const card = this._cards.pop();
      console.log('player: ' + player.name + ' drawed card num: ' + card.num + ', color: ' + card.color_n);
      player.addCard(card);
    }

    player.refreshCards();

    this._turn_count++;
    const next_player = this.getNextPlayer();
    if (next_player.type === 'human') {
      this.humanTurn(next_player);
    } else {
      this.botPlay(next_player);
    }
  }

  humanTurn(player) {
    player.cards.forEach( (card) => {
      if (!card.event_is_set) {
        card.canvas.addEventListener('click', ()=>{
          this.humanPlay(player, card);
          player.removeCard(card);
        });
        card.event_is_set = true;
      }
    });
  }

  async humanPlay(player, card) {
    console.log('Turn count: ' + this._turn_count + ', current player: ' + player.name);

    this.changeTopCard(card);

    console.log('player: ' + player.name + ' played card num: ' + card.num + ', color: ' + card.color_n);
    player.refreshCards();


    this._turn_count++;
    this.botPlay( this.getNextPlayer() );
  }

  getNextPlayer() {
    if (this._reverse) {
      if (this._current_player === 0) {
        this._current_player = this._players.length-1;
      } else {
        this._current_player--;
      }
    } else {
      if (this._current_player === this._players.length-1) {
        this._current_player = 0;
      } else {
        this._current_player++;
      }
    }
    return this._players[this._current_player];
  }

  changeTopCard(card) {
    this._used_cards.push(this._top_card);
    this._top_card = card;
    this._top_card.drawImageFront(global.uno_game_w*8/16+this._turn_count, global.uno_game_h/2);
    this._top_card.refresh();
  }
}
