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
        const soundPauseS = document.getElementById('sound-pause');
    
        const bubblesSound = document.getElementById("bubbles");
        bubblesSound.loop = false;
        // if (!soundPauseS.classList.contains('hidden')) {
        //     bubblesSound.play()
        // }

        const pirateSong = document.getElementById("pirate-music");
        pirateSong.pause()
    }
  

}
  