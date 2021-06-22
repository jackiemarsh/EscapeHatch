import Game from'./game';
import Player from "./player.js";

export default class GameView {
    constructor () {
        const canvas = document.getElementById("practice-canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = 900;
        canvas.height = 600;
        this.player = new Player();
        this.then = 0;
        this.fpsInterval = 0;
    }
    
    drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
        ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
    }

    moveBackground(grassFrame) {
        if (grassFrame.frameX === 0) grassFrame.frameX = 1;
        else grassFrame.frameX = 0;
    } 
    
    
    startAnimating(fps) {
        let startTime;
        fpsInterval = 1000/fps;
        this.then = Date.now();
        startTime = this.then;
        animate();
    }
    
    animate() {
        let now, elapsed;
        const grassFrame = {
            width: 50,
            height: 150,
            frameX: 0,
            speed: 2
        }
        
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

        requestAnimationFrame(animate);
        now = Date.now();
        elapsed = now - this.then;
        if (elapsed > fpsInterval) {
            this.then = now - (elapsed % fpsInterval);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(background1, 0, 0, canvas.width, 134);
            ctx.drawImage(background3, 0, 50, background3.width, 50, 0, 133, canvas.width, 280);
            ctx.drawImage(background2, 0, 60, background2.width, 50, 0, 433, canvas.width, 250);
            ctx.drawImage(grass, grassFrame.width*grassFrame.frameX, 0, 50, 100, 5, 503, 50, 150);
            ctx.drawImage(grass, grassFrame.width*grassFrame.frameX, 0, 50, 100, 250, 500, 50, 150);
            ctx.drawImage(grass, grassFrame.width*grassFrame.frameX, 0, 50, 100, 675, 503, 50, 150);
            ctx.drawImage(grass, grassFrame.width*grassFrame.frameX, 0, 50, 100, 800, 503, 50, 150);
    
            drawSprite(playerSprite, this.player.width * this.player.frameX, this.player.height * this.player.frameY, this.player.width, this.player.height, this.player.x, this.player.y, this.player.width, this.player.height);
            player.movePlayer();
            player.handlePlayerFrame();
            setInterval(moveBackground(grassFrame), 600);
        }
    }
    // startAnimating(15);
}
