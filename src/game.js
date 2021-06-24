import GameView from "./game_view";
import Player from "./player";
import Inventory from "./inventory";
import * as clock from "./clock";

export default class Game {
    constructor() {
        this.inventory = [];
        this.keys = []

        const gameView = new GameView();
        this.canvas = gameView.canvas;
        this.ctx = gameView.ctx;
        gameView.startAnimating(15);
    }
    
    gameWin() {
        game.timer.stop();
    }

    gameOver() {
        game.timer.stop();
    }

    gameStart() {
        game.timer.restart();
    }
}
  