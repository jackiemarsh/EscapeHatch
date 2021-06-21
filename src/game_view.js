const Game = require('./game')

class GameView {
    constructor () {
        // this.game = game;
        this.ctx = ctx;
        // this.ctx.beginPath();
        // this.ctx.rect(20, 40, 50, 50);
        // this.ctx.fillStyle = "#FF0000";
        // this.ctx.fill();
        // this.ctx.closePath();
    }
  


    start() {
    // this.bindKeyHandlers();
    this.lastTime = 0;
    // this.game.drawShip()
    requestAnimationFrame(this.animate.bind(this));
    };

    animate(time) {
    // const timeDelta = time - this.lastTime;
  
    // this.game.step(timeDelta);
    // this.game.draw(this.ctx);
    this.lastTime = time;
  
    requestAnimationFrame(this.animate.bind(this));
    };
}
module.exports = GameView;