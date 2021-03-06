import Game from'./game';
import Player from "./player.js";
import Inventory from './inventory';
// import LevelTwo from './levels/level2';

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
        // this.bubbles = setInterval(this.sound, 9000)
        
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
        const soundControlsStart = document.getElementsByClassName('start-controls')[0];
        const soundControls = document.getElementsByClassName('sound-controls')[0];
        const soundPauseS = document.getElementById('sound-pause-start');
        const soundPause = document.getElementById('sound-pause');
        const soundPlay = document.getElementById('sound-play');
    
        openingBox.classList.add('hidden');
        map.classList.add('hidden');
        endBox.classList.add('hidden');
        playBtn.classList.add('hidden');
        gameOver.classList.add('hidden');
        gameOver.classList.add('stay-hidden');
        youWin.classList.add('hidden');
        gameStory.classList.add('hidden');
        instructions.classList.add('hidden');
        soundControlsStart.classList.add('hidden');
        soundControls.classList.remove('hidden');
        clockDisplay.classList.remove('hidden');
        inventoryCanvas.classList.remove('hidden');
        
        // this.winGameSequence();
        this.timer(1);
        // if (soundPauseS.classList.contains('hidden') || soundPause.classList.contains('hidden')) {
        //     clearInterval(this.bubbles)
        // }
    }

//     soundControls() {
//         const soundPlay = document.getElementById('sound-play');
//         const soundPause = document.getElementById('sound-pause');
//         const winSound = document.getElementById("win-sound");
//         const loseSound = document.getElementById("lose-sound");
//         const addSound = document.getElementById("add-sound");
//         const sounds = document.getElementsByTagName("audio")
//         if (soundPause.classList.contains(hidden)) {
//             clearInterval(this.bubbles);
//             // winSound.muted = true;
//             // loseSound.muted = true;
//             // addSound.muted = true;
//             sounds.muted = true
//             soundPause.classList.remove('hidden');
//             soundPlay.classList.add('hidden');
//          } else {
//             //  winSound.muted = false;
//              soundPlay.classList.remove('hidden');
//              soundPause.classList.add('hidden');
//          }
//    };

    sound() {
        const bubblesSound = document.getElementById("bubbles");
        bubblesSound.loop = false;
        bubblesSound.play()
    }

    music() {
        const pirateSong = document.getElementById("pirate-music");
        pirateSong.loop = true;
        pirateSong.play();
        // clearInterval(this.bubbles)
    }

    timer(startMinutes) {
        // startMinutes = 1;
        // this.level.time when harder levels built
        let time = startMinutes*60
        const countdownEl = document.getElementById("clock-display");
        const loseSound = document.getElementById("lose-sound");
        const bubblesSound = document.getElementById("bubbles-sound");
        const restartBtn = document.getElementsByClassName('restart-btn lose')[0];
        const soundPause = document.getElementById('sound-pause-start');
        const soundPauseS = document.getElementById('sound-pause');
        let startTime = new Date().getTime();
        
        let runClock = setInterval(() => {
  
            if(Math.floor(new Date().getTime()) - startTime > 61000){
                 clearInterval(runClock);
                const endBox = document.getElementsByClassName('end-game')[0];
                const gameOver = document.getElementsByClassName('lose-box')[0];
                endBox.classList.remove('hidden');
                gameOver.classList.remove('hidden', 'stay-hidden');
                restartBtn.classList.remove('hidden');
                const bubblesSound = document.getElementById("bubbles");
                // clearInterval(this.bubbles)
                loseSound.loop = false;
                if (!soundPauseS.classList.contains('hidden') || !soundPause.classList.contains('hidden')) {
                    loseSound.play();
                }
            } 
            let m = Math.floor(time/60);
            let s = Math.floor(time%60);

            s = s < 10 ? "0" + s : s;
            countdownEl.innerHTML = `${m}:${s}`;
            time--;
        }, 1000)
    }

    winGame() {
        const endBox = document.getElementsByClassName('end-game')[0];
        const youWin = document.getElementsByClassName('win-box')[0];
        const restartBtn = document.getElementsByClassName('restart-btn win')[0];
        const countdownEl = document.getElementById("clock-display");
        const winAudio = document.getElementById("win-sound")
        const bubblesSound = document.getElementById("bubbles");
        const soundPauseS = document.getElementById('sound-pause-start');
        const soundPause = document.getElementById('sound-pause');
        winAudio.pause();

        if (this.player.inventory.length === 6) {
            // && this.player.inventory.includes(levels.levelWin())
            endBox.classList.remove('hidden');
            youWin.classList.remove('hidden');
            restartBtn.classList.remove('hidden');
            if (!soundPauseS.classList.contains('hidden') || !soundPause.classList.contains('hidden')) {
                winAudio.play();
            }
            // clearInterval(this.bubbles)
            countdownEl.innerHTML = `Yargh!`
            this.win = true;
        }
        // return false;
    }
    // winSound() {
    //     const winAudio = document.getElementById("win-sound")
    //     if (this.pause) {
    //         winAudio.play()
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
