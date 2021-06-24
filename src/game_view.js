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
        this.inventory = new Inventory(700, 100, 328, 140);
        setInterval(this.moveBackground, 600, this.grassFrame);
        console.log("game view inventory", this.inventory)
        this.player = new Player(this.canvas, this.inventory);
        this.inventory.drawInventory();
        // this.player.drawInventoryItems();
        // this.drawAllItems();
       
          // this.ctx.mozImageSmoothingEnabled = false;
        // this.ctx.webkitImageSmoothingEnabled = false;
        // this.ctx.msImageSmoothingEnabled = false;
        // this.ctx.imageSmoothingEnabled = false;
    }
    
    drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
        this.ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
    }

    moveBackground(sprite) {
        if (sprite.frameX === 0) sprite.frameX++;
        else sprite.frameX = 0;
    } 

    // setInterval(moveBackground, 600, this.grassFrame);
    // setInterval(this.moveBackground.bind(this), 600, this.grassFrame);

    drawAllItems() {
       
        this.inventory.inventoryItems.forEach(item => {
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
        playerSprite.src = "../dist/assets/images/guybrush.PNG"
        const background1 = new Image();
        background1.src = "../dist/assets/images/underwater.png"
        const background2 = new Image();
        background2.src = "../dist/assets/images/ship.png"
        const background3 = new Image();
        background3.src = "../dist/assets/images/ship copy.png"
        const grass = new Image();
        grass.src = "../dist/assets/images/grass.png";
        const environment = new Image();
        environment.src = "../dist/assets/images/ecco_1.PNG"
        // const

        now = Date.now();
        elapsed = now - this.then;

        if (elapsed > this.fpsInterval) {
            // console.log("rendering")
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
            this.player.movePlayer();
            this.player.handlePlayerFrame();
            
        }
        requestAnimationFrame(this.animate.bind(this));
        this.drawAllItems();
        // this.player.drawInventoryItems();
    };

  
    // for (let index = this.items.length-1; index > -1; --index) {
    //     let item = items[index];

    //     if (item.y + item.h >= map_floor && item.collideRect(player) && pointer.down && item.collidePoint(pointer)) {
    //       front_item_index = index;// store the frontmost item index
    //     }

    //     // item.updatePosition(map_gravity, map_friction, map_floor);
    //     this.ctx.drawImage(tile_set, item.sx, item.sy, item.w, item.h, Math.round(item.x), Math.round(item.y), item.w, item.h);
    //   }
    //   // If there is an item selected, add it to the inventory
    //   if (front_item_index != undefined && inventory.addItem(items[front_item_index])) items.splice(front_item_index, 1); 
  

};
