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
       
        const soundPauseS = document.getElementById('sound-pause');
    
        const bubblesSound = document.getElementById("bubbles");
        bubblesSound.loop = false;
       

        const pirateSong = document.getElementById("pirate-music");
        pirateSong.pause()
    }
  

}
  