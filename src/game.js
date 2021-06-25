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
        this.timer();
    }
    
    timer() {
        const startMinutes = 2;
        // this.level.time when harder levels built
        let time = startMinutes*60
        const countdownEl = document.getElementById("clock-display");
        
        let startTime = new Date().getTime();
        let runClock = setInterval(() => {
            if(Math.floor(new Date().getTime()) - startTime === 60000){
                clearInterval(runClock);
                return false;
            }
            let m = Math.floor(time/60);
            let s = Math.floor(time%60);
            
            s = s < 10 ? "0" + s : s;
            countdownEl.innerHTML = `${m}:${s}`;
            time--;
        }, 1000)
    }

}
  