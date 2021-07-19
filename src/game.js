import GameView from "./game_view";
import Player from "./player";
import Inventory from "./inventory";

export default class Game {
    constructor() {
        this.inventory = [];
        this.keys = []

        const gameView = new GameView();
        this.canvas = gameView.canvas;
        this.ctx = gameView.ctx;
        gameView.startAnimating(15);
        // this.timer(1, (x) => {
        //     // console.log( "timer", x)
        //     return(x)
        // });
    }
  

}
  