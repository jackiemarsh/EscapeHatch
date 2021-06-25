// console.log("Webpack is working")

import Game from "./game.js";
import GameView from "./game_view";
import Player from "./player.js";

document.addEventListener("DOMContentLoaded", function () {
    const startBtn = document.getElementsByClassName('start-btn')[0];
    // const startGame = document.getElementsByClassName('start-game')[0];
    const playBtn = document.getElementsByClassName('play-btn')[0];
    const gameStory = document.getElementsByClassName('game-story')[0];
    const instructions = document.getElementsByClassName('instructions')[0];
    const gameView = new GameView();
    gameView.startPage();
    
    startBtn.addEventListener('mouseenter', () => {
        // playBtn.classList.remove('hidden');
        gameStory.classList.remove('hidden');
        instructions.classList.remove('hidden');
    })
    
    startBtn.addEventListener('mouseleave', () => {
        // playBtn.classList.add('hidden');
        gameStory.classList.add('hidden');
        instructions.classList.add('hidden');
    })
    
    playBtn.addEventListener('click', gameView.newGame);

    // const canvas = document.getElementById("practice-canvas");
    // const ctx = canvas.getContext("2d");
    // canvas.width = 900;
    // canvas.height = 600;
    
    // const keys = []
    
    // const player = {
    //     x: 250,
    //     y: 250,
    //     width: 40,
    //     height: 50,
    //     frameX: 0,
    //     frameY: 0,
    //     speed: 9,
    //     moving: false
    // };
    
    // const grassFrame = {
    //     width: 50,
    //     height: 150,
    //     frameX: 0,
    //     speed: 2
    // }
    
    // const playerSprite = new Image();
    // playerSprite.src = "../dist/assets/images/Pirate.png"
    // const background1 = new Image();
    // background1.src = "../dist/assets/images/underwater.png"
    // const background2 = new Image();
    // background2.src = "../dist/assets/images/ship.png"
    // const background3 = new Image();
    // background3.src = "../dist/assets/images/ship copy.png"
    // const grass = new Image();
    // grass.src = "../dist/assets/images/grass.png"
    
    // function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    //     ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
    
    // }
    
    // window.addEventListener("keydown", function(e) {
    //     keys[e.key] = true;
    //     // console.log(keys);
    //     Player.moving = true;
    // });
    
    // window.addEventListener("keyup", function(e) {
    //     delete keys[e.key];
    //     Player.moving = false;
    // });
    
    // function moveBackground() {
    //     if (grassFrame.frameX === 0) grassFrame.frameX = 1;
    //     else grassFrame.frameX = 0;
    // } 
    // setInterval(moveBackground, 600)
    
    // function movePlayer() {
    //     if (keys["ArrowUp"] && player.y > 175) {
    //         player.y -= player.speed;
    //         // player.frameX = 1;
    //         player.moving = true;
    //     }
    //     if (keys["ArrowLeft"] && player.x > 0) {
    //         player.x -= player.speed;
    //         player.moving = true;
    //     }
    //     if (keys["ArrowDown"] && player.y < canvas.height - player.height) {
    //         player.y += player.speed;
    //         player.moving = true;
    //     }
    //     if (keys["ArrowRight"] && player.x < canvas.width - player.width) {
    //         player.x += player.speed;
    //         player.moving = true;
    //     }
    // }
    
    // function handlePlayerFrame() {
    //     if (player.frameX < 1 && player.moving) player.frameX++;
    //     else player.frameX = 0;
    // }
    
    // function animate() {
    //     ctx.clearRect(0, 0, canvas.width, canvas.height)
    //     ctx.drawImage(background1, 0, 0, canvas.width, 134);
    //     // position++;
    //     ctx.drawImage(background3, 0, 50, background3.width, 50, 0, 133, canvas.width, 280)
    //     ctx.drawImage(background2, 0, 60, background2.width, 50, 0, 433, canvas.width, 250)
    //     drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height)
    //     movePlayer();
    //     handlePlayerFrame();
    
    //     requestAnimationFrame(animate);
    // };
    
    // animate();
    
    // let fps, fpsInterval, startTime, now, then, elapsed;
    
    
    // function startAnimating(fps) {
    //     fpsInterval = 1000/fps;
    //     then = Date.now();
    //     startTime = then;
    //     animate();
    // }
    
    // function animate() {
    //     requestAnimationFrame(animate);
    //     now = Date.now();
    //     elapsed = now - then;
    //     if (elapsed > fpsInterval) {
    //         then = now - (elapsed % fpsInterval);
    //         ctx.clearRect(0, 0, canvas.width, canvas.height);
    //         ctx.drawImage(background1, 0, 0, canvas.width, 134);
    //         ctx.drawImage(background3, 0, 50, background3.width, 50, 0, 133, canvas.width, 280);
    //         ctx.drawImage(background2, 0, 60, background2.width, 50, 0, 433, canvas.width, 250);
    //         ctx.drawImage(grass, grassFrame.width*grassFrame.frameX, 0, 50, 100, 5, 503, 50, 150);
    //         ctx.drawImage(grass, grassFrame.width*grassFrame.frameX, 0, 50, 100, 250, 500, 50, 150);
    //         ctx.drawImage(grass, grassFrame.width*grassFrame.frameX, 0, 50, 100, 675, 503, 50, 150);
    //         ctx.drawImage(grass, grassFrame.width*grassFrame.frameX, 0, 50, 100, 800, 503, 50, 150);
    
    //         drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);
    //         movePlayer();
    //         handlePlayerFrame();
    //     }
    // }
    // GameView.startAnimating(15);
    
});