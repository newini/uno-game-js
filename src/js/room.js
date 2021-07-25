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
    console.log('Initialize cards')
    const index_arr = [...Array(108).keys()];
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
      }
    }
    // re-order z-index
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

    // Init
    this._turn_count = 0;
    this._skip = false;
    this._reverse = false;
    this._draw2 = false;
    this._draw4 = false;
    this._current_player = this._players[0];

    await( this.changeTopCard( this._cards.pop() ) );

    this.initTurn();
  }

  async initTurn() {
    console.log('Turn count: ' + this._turn_count + ', current player: ' + this._current_player.name);
    await new Promise(resolve => setTimeout(resolve, 500));

    // check draw cards
    if (this._draw2) {
      this._draw2 = false;
      for (let i=0; i<2; i++) this._current_player.addCard( this._cards.pop() );
      this.finishTurn();
    } else if (this._draw4) {
      this._draw4 = false;
      for (let i=0; i<4; i++) this._current_player.addCard( this._cards.pop() );
      this.finishTurn();
    } else {
      if (this._current_player.type === 'bot') {
        this.botTurn();
      } else {
        this.humanTurn();
      }
    }
  }

  async botTurn() {
    await new Promise(resolve => setTimeout(resolve, 500));

    const card = await( this._current_player.playCard(this._top_card) );
    if (card) {
      console.log('played card num: ' + card.num + ', color: ' + card.color_n);
      this.changeTopCard(card);
    } else {
      const card = this._cards.pop();
      console.log('drawed card num: ' + card.num + ', color: ' + card.color_n);
      this._current_player.addCard(card);
    }

    this.finishTurn();
  }

  humanTurn() {
    this._top_back_card = this._cards[ this._cards.length-1 ];
    this._top_back_card.mouseEffect();

    // Select card event
    this._current_player.cards.forEach( (card) => {
      if (this._top_card.isMatch(card)) {
        card.mouseEffect();

        card.canvas.addEventListener('click', () => {
          console.log('played card num: ' + card.num + ', color: ' + card.color_n);
          this._current_player.removeCard(card);

          // Remove event listener
          this._top_back_card.resetEventListener();
          this._current_player.cards.forEach( (card) => {
            card.resetEventListener();
          });

          // Show color change blocks
          if (card.num === 13 || card.num === 14) {
            const bc_colors = [];
            for (let i=0; i<4; i++) {
              const w = global.uno_game_w;
              const bc = new BasicCanvas(w/2+w*i/16, global.uno_game_h*3/4, w/16, w/16);
              bc.fillColor(i);
              bc.canvas.addEventListener('click', () => {
                bc_colors.forEach( bc_color => bc_color.remove() );
                // Change card color
                card.color_n = i;
                // Process
                this.changeTopCard(card);
                this.finishTurn();
              });
              bc_colors.push(bc);
            }
          } else {
            this.changeTopCard(card);
            this.finishTurn();
          }
        });
      }
    });

    // Draw card event
    this._top_back_card.canvas.addEventListener('click', () => {
      const card = this._cards.pop();
      console.log('drawed card num: ' + card.num + ', color: ' + card.color_n);

      // Remove event listener
      this._top_back_card.resetEventListener();
      this._current_player.cards.forEach( (card) => {
        card.resetEventListener();
      });

      this._current_player.addCard(card);
      this.finishTurn();
    });
  }

  async finishTurn() {
    console.log('finish turn')

    // re-deploy player's cards
    await( this._current_player.reDeployCards() );

    // Check empty
    if (this._current_player.isEmpty()) {
      console.log('player: ' + this._current_player.name + ' has no card left. Game end');
    } else {
      this._turn_count++;
      await ( this.decideNextPlayer() );
      this.initTurn();
    }
  }

  decideNextPlayer() {
    console.log('decide next player')

    let current_player_id = this._current_player.id;
    let loop_cnt = 1;
    if (this._skip) {
      this._skip = false;
      loop_cnt++;
    }
    for (let i=0; i<loop_cnt; i++) {
      if (this._reverse) {
        if (current_player_id === 0) {
          current_player_id = this._players.length - 1;
        } else {
          current_player_id--;
        }
      } else {
        if (current_player_id === this._players.length-1) {
          current_player_id = 0;
        } else {
          current_player_id++;
        }
      }
    }
    this._current_player = this._players[current_player_id];
  }

  changeTopCard(card) {
    if (this._top_card) this._used_cards.push(this._top_card);
    this._top_card = card;
    this._top_card.drawImageFront(global.uno_game_w*8/16+this._turn_count, global.uno_game_h/2);
    this._top_card.refresh();
    this.treatCard();
  }

  async treatCard() {
    console.log('treat card num:' + this._top_card.num)
    switch (this._top_card.num) {
      case 10: // skip card
        this._skip = true;
        break;
      case 11: // reverse card
        this._reverse = (this._reverse) ? false : true;
        break;
      case 12: // +2 card
        this._draw2 = true;
        break;
      case 13: // change color card
        await ( this.changeColor() );
        break;
       case 14: // +4 color change card
        this._draw4 = true;
        await ( this.changeColor() );
        break;
      default:
        break;
    }
  }

  changeColor() {
    if (this._current_player.type === 'bot') {
      this._top_card.color_n = this._current_player.changeColor();
      console.log('change color' + this._top_card.color_n);
    }
  }


}
