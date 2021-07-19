import Game from'./game';
import Player from "./player.js";
import Inventory from './inventory';

export default class GameView {
    constructor () {
        this.canvas = document.getElementById("game-canvas");
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = 900;
        this.canvas.height = 600;
        this.then = 0;
        this.fpsInterval = 0;
        
        this.grassFrame = {
            width: 50,
            height: 150,
            frameX: 0,
            speed: 2
        };

        this.moveBackground = this.moveBackground.bind(this);
        this.startAnimating = this.startAnimating.bind(this);
        this.animate = this.animate.bind(this);
        this.inventory = [];
        setInterval(this.moveBackground, 600, this.grassFrame);
        this.inventory = new Inventory(700, 100, 328, 140);
        this.player = new Player(this.canvas, this.inventory);
        this.inventory.drawInventory();
        this.player.drawInventoryItems();
        this.drawAllItems();
        // this.ctx.mozImageSmoothingEnabled = false;
        // this.ctx.webkitImageSmoothingEnabled = false;
        // this.ctx.msImageSmoothingEnabled = false;
        // this.ctx.imageSmoothingEnabled = false;
        this.game;
        this.newGame = this.newGame.bind(this);
        this.winGame = this.winGame.bind(this);
        this.inventoryLength = this.player.inventory.length
        console.log(this.inventoryLength)
    }

    startPage() {
        const gameStory = document.getElementsByClassName('game-story')[0];
        const clockDisplay = document.getElementsByClassName('clock')[0];
        const inventoryCanvas = document.getElementsByClassName('inventory-canvas')[0];
        const instructions = document.getElementsByClassName('instructions')[0];
        const endBox = document.getElementsByClassName('end-game')[0];
        const gameOver = document.getElementsByClassName('lose-box')[0];
        const restartBtn = document.getElementsByClassName('restart-btn')[0];
        const youWin = document.getElementsByClassName('win-box')[0];
        const menu = document.getElementsByClassName('menu')[0];
        clockDisplay.classList.add('hidden');
        inventoryCanvas.classList.add('hidden');
        menu.classList.add('hidden');
        youWin.classList.add('hidden');
        gameOver.classList.add('hidden');
        endBox.classList.add('hidden');
        restartBtn.classList.add('hidden');
    }

    newGame() { 
        console.log("newGame")
        this.game = new Game();
        
        const clockDisplay = document.getElementsByClassName('clock')[0];
        const inventoryCanvas = document.getElementsByClassName('inventory-canvas')[0];
        const openingBox = document.getElementsByClassName('opening-box')[0];
        const map = document.getElementsByClassName('map')[0];
        const endBox = document.getElementsByClassName('end-game')[0];
        const playBtn = document.getElementsByClassName('play-btn')[0];
        const gameOver = document.getElementsByClassName('lose-box')[0];
        const youWin = document.getElementsByClassName('win-box')[0];
        const gameStory = document.getElementsByClassName('game-story')[0];
        const instructions = document.getElementsByClassName('instructions')[0];
        
        openingBox.classList.add('hidden');
        map.classList.add('hidden');
        endBox.classList.add('hidden');
        playBtn.classList.add('hidden');
        gameOver.classList.add('hidden');
        gameOver.classList.add('stay-hidden');
        youWin.classList.add('hidden');
        gameStory.classList.add('hidden');
        instructions.classList.add('hidden');
        clockDisplay.classList.remove('hidden');
        inventoryCanvas.classList.remove('hidden');
        
        // this.winGameSequence();
        this.timer(1);
    }

    timer(startMinutes) {
        // startMinutes = 1;
        // this.level.time when harder levels built
        let time = startMinutes*60
        const countdownEl = document.getElementById("clock-display");
        const restartBtn = document.getElementsByClassName('restart-btn lose')[0];
        
        let startTime = new Date().getTime();
        
        let runClock = setInterval(() => {
            console.log("inventory value", this.inventoryLength);
            if (this.inventoryLength === 4) {
                console.log("runclock clear")
                clearInterval(runClock)
            }
            if(Math.floor(new Date().getTime()) - startTime > 61000){
                console.log("wingame value 2", this.win);
                // console.log(startTime, Math.floor(new Date().getTime()))
                clearInterval(runClock);
                // callback("done");
                const endBox = document.getElementsByClassName('end-game')[0];
                const gameOver = document.getElementsByClassName('lose-box')[0];
                endBox.classList.remove('hidden');
                gameOver.classList.remove('hidden');
                restartBtn.classList.remove('hidden');
            } 
            let m = Math.floor(time/60);
            let s = Math.floor(time%60);

            s = s < 10 ? "0" + s : s;
            countdownEl.innerHTML = `${m}:${s}`;
            time--;
        }, 1000)
    }

    winGame() {
        console.log("wingame inventorylength", this.inventoryLength)
        const endBox = document.getElementsByClassName('end-game')[0];
        const youWin = document.getElementsByClassName('win-box')[0];
        const restartBtn = document.getElementsByClassName('restart-btn win')[0];
        const countdownEl = document.getElementById("clock-display");
        
        if (this.player.inventory.length === 4) {
            endBox.classList.remove('hidden');
            youWin.classList.remove('hidden');
            restartBtn.classList.remove('hidden');
        
            countdownEl.innerHTML = `Yargh!`
            console.log("hello", this.win)
            this.win = true;
        }
        // return false;
    }

    // gameOver() {
    //     if (this.timer() === "done") {
    //         const endBox = document.getElementsByClassName('end-game')[0];
    //         const gameOver = document.getElementsByClassName('lose-box')[0];
    //         endBox.classList.remove('hidden');
    //         gameOver.classList.remove('hidden');
    //         console.log("game over")
    //     }
    // }

    drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
        this.ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
    }

    moveBackground(sprite) {
        if (sprite.frameX === 0) sprite.frameX++;
        else sprite.frameX = 0;
    } 

    drawAllItems() {
        this.inventory.gameItems.forEach(item => {
            let newItem = new Image();
            newItem.src = item.src;

            if (newItem.complete) { 
                this.ctx.drawImage(newItem, item.x, item.y, item.w, item.h, item.dx, item.dy, item.dw, item.dh) 
            }
        });
    };

    startAnimating(fps) {
        let startTime;
        this.fpsInterval = 1000/fps;
        this.then = Date.now();
        startTime = this.then;
        this.animate();
    }
    
    animate() {
        let now, elapsed;
        
        const playerSprite = new Image();
        playerSprite.src = "./dist/assets/images/guybrush 4.PNG"
        const background1 = new Image();
        background1.src = "./dist/assets/images/underwater.png"
        const background2 = new Image();
        background2.src = "./dist/assets/images/ship.png"
        const background3 = new Image();
        background3.src = "./dist/assets/images/ship copy.png"
        const grass = new Image();
        grass.src = "./dist/assets/images/grass.png";
        const environment = new Image();
        environment.src = "./dist/assets/images/ecco_1.PNG"
        // const

        now = Date.now();
        elapsed = now - this.then;

        if (elapsed > this.fpsInterval) {
            this.then = now - (elapsed % this.fpsInterval);

            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.drawImage(background1, 0, 0, this.canvas.width, 134);
            this.ctx.drawImage(background3, 0, 50, background3.width, 50, 0, 133, this.canvas.width, 280);
            this.ctx.drawImage(background2, 0, 60, background2.width, 50, 0, 433, this.canvas.width, 250);
            this.ctx.drawImage(grass, this.grassFrame.width*this.grassFrame.frameX, 0, 50, 100, 5, 503, 50, 150);
            this.ctx.drawImage(grass, this.grassFrame.width*this.grassFrame.frameX, 0, 50, 100, 250, 500, 50, 150);
            this.ctx.drawImage(grass, this.grassFrame.width*this.grassFrame.frameX, 0, 50, 100, 675, 503, 50, 150);
            this.ctx.drawImage(grass, this.grassFrame.width*this.grassFrame.frameX, 0, 50, 100, 800, 503, 50, 150);
            this.ctx.drawImage(environment, 70, 62, 78, 100, 500, 500, 117, 150);
            this.ctx.drawImage(environment, 400, 62, 50, 50, 15, 100, 100, 100);
            this.ctx.drawImage(environment, 400, 62, 50, 50, 800, 100, 100, 100);
            this.ctx.drawImage(environment, 350, 82, 40, 40, 825, 535, 80, 80);

            this.drawSprite(playerSprite, this.player.width * this.player.frameX, this.player.height * this.player.frameY, this.player.width, this.player.height, this.player.x, this.player.y, this.player.width+20, this.player.height+20);
            this.player.keyListeners();
            this.player.handlePlayerFrame();
            this.winGame();
            
        }
        requestAnimationFrame(this.animate.bind(this));
        this.drawAllItems();
    };

    // winGameSequence() {
    //     // this.ctxWin.fillRect(250, 170, 50, 50);
    //     // this.ctxWin.fillStyle = "rgb(45, 48, 236)";
    //     const hatch = new Image();
    //     hatch.src = "./dist/assets/images/ship.png";
    //     hatch.onload = () => { 
    //         // this.ctxWin.fillRect(250, 170, 50, 50);
    //         // this.ctxWin.fillStyle = "blue";
    //         this.ctxWin.drawImage(hatch, 100, 45, 10, 20, 200, 172, 60, 54)
        
    //     debugger
    //     }; 
    // };

};
