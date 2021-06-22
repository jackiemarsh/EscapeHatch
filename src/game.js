import GameView from "./game_view";
import Player from "./player";

export default class Game {
    constructor() {
        // this.canvas = canvas
        this.inventory = [];
        this.keys = []
        // this.player = new Player();
        const gameView = new GameView();
        gameView.animate();
    }

  }
  
//   Game.BG_COLOR = "blue";
//   Game.DIM_X = 1000;
//   Game.DIM_Y = 600;
//   Game.FPS = 32;
//   Game.NUM_ASTEROIDS = 10;