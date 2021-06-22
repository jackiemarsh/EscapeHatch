import GameView from "./game_view";

export default class Game {
    constructor() {
        window.addEventListener("keydown", function(e) {
            keys[e.key] = true;
            // console.log(keys);
            Player.moving = true;
        });
        
        window.addEventListener("keyup", function(e) {
            delete keys[e.key];
            Player.moving = false;
        });
        this.inventory = [];
        const gameView = new GameView();
        gameView.animate();
        // console.log(gameView.then);
    }

  }
  
//   Game.BG_COLOR = "blue";
//   Game.DIM_X = 1000;
//   Game.DIM_Y = 600;
//   Game.FPS = 32;
//   Game.NUM_ASTEROIDS = 10;