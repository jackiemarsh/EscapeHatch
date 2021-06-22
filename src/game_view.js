import Game from'./game';
import Player from "./player.js";

export default class GameView {
    constructor () {
        this.canvas = document.getElementById("practice-canvas");
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = 900;
        this.canvas.height = 600;
        this.player = new Player(this.canvas);
        this.then = 0;
        this.fpsInterval = 0;
    }
    
    drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
        this.ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
    }

    moveBackground(grassFrame) {
        if (grassFrame.frameX === 0) grassFrame.frameX = 1;
        else grassFrame.frameX = 0;
    } 
    
    
    // startAnimating(fps) {
        // let startTime;
        // fpsInterval = 1000/fps;
        // this.then = Date.now();
        // startTime = this.then;
        // animate();
    // }
    
    animate() {
        // let now, elapsed;
        const grassFrame = {
            width: 50,
            height: 150,
            frameX: 0,
            speed: 2
        };
        
        const playerSprite = new Image();
        playerSprite.src = "../dist/assets/images/Pirate.png"
        const background1 = new Image();
        background1.src = "../dist/assets/images/underwater.png"
        const background2 = new Image();
        background2.src = "../dist/assets/images/ship.png"
        const background3 = new Image();
        background3.src = "../dist/assets/images/ship copy.png"
        const grass = new Image();
        grass.src = "../dist/assets/images/grass.png"

        // now = Date.now();
        // elapsed = now - this.then;
        // if (elapsed > fpsInterval) {
            // this.then = now - (elapsed % fpsInterval);
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.drawImage(background1, 0, 0, this.canvas.width, 134);
            this.ctx.drawImage(background3, 0, 50, background3.width, 50, 0, 133, this.canvas.width, 280);
            this.ctx.drawImage(background2, 0, 60, background2.width, 50, 0, 433, this.canvas.width, 250);
            this.ctx.drawImage(grass, grassFrame.width*grassFrame.frameX, 0, 50, 100, 5, 503, 50, 150);
            this.ctx.drawImage(grass, grassFrame.width*grassFrame.frameX, 0, 50, 100, 250, 500, 50, 150);
            this.ctx.drawImage(grass, grassFrame.width*grassFrame.frameX, 0, 50, 100, 675, 503, 50, 150);
            this.ctx.drawImage(grass, grassFrame.width*grassFrame.frameX, 0, 50, 100, 800, 503, 50, 150);
            
            this.drawSprite(playerSprite, this.player.width * this.player.frameX, this.player.height * this.player.frameY, this.player.width, this.player.height, this.player.x, this.player.y, this.player.width, this.player.height);
            requestAnimationFrame(this.animate.bind(this));
            this.player.movePlayer();
            this.player.handlePlayerFrame();
            // setInterval(moveBackground(grassFrame), 600);
        // }
    };
    // startAnimating(15);
};
