import GameView from "./game_view";
import Inventory from "./inventory";

export default class Player {
        constructor(canvas, allItems) {
            this.x = 250,
            this.y = 250,
            this.width = 48,
            this.height = 60,
            this.frameX = 12,
            this.frameY = 0,
            // this.maxFrame = 4,
            this.speed = 5,
            // this.ticksPerFrame = ;
            this.tickCount = 0; 
            this.moving = false,
            this.direction = "idle",
            this.keys = [];
            this.inventory = new Array();
            this.allItems = allItems;
 
            this.renderCtx = this.allItems.ctx;
            this.canvas = canvas;

            window.addEventListener("keydown", (e) => {
                this.keys[e.key] = true;
                console.log(this.keys);
                this.moving = true;
            });
            
            window.addEventListener("keyup", (e) => {
                delete this.keys[e.key];
                console.log(this.keys);
                console.log(this.direction, this.frameX, this.frameY, this.maxFrame);
                this.moving = false;
            });
        }

    handlePlayerFrame() {
        // this.tickCount += 1;
        // if (this.tickCount > this.speed) {
        //     this.tickCount = 0;
        //     if (this.frameX < this.maxFrame-1) {
        //         this.frameX++;
        //         // console.log(this.frameX);
        //     } else {
        //         this.frameX = 0;
        //     }
        // } 
        this.tickCount += 1;
        if (this.tickCount > this.speed) {
            this.tickCount = 0;
        if (this.frameX < 15 && this.direction === "idle") {
            this.frameX++
        } else this.frameX = 12
        
        // if (this.frameX >= 1 && this.moving) {
        //     this.frameX++;
        //     this.frameY = 1;
        }
    }

    movePlayer(item) {
        if (this.keys.length === 0) {
            this.moving = false;
            this.direction = "idle";
            // this.frameX = 0;
            // this.frameY = 1;
            // this.maxFrame = 2;
        }
        if (this.keys["ArrowUp"] && this.y > 175) {
            console.log("up is in keys")
            this.y -= this.speed;
            // this.frameY = 1;
            this.moving = true;
            this.direction = "up";
        }
        if (this.keys["ArrowLeft"] && this.x > 0) {
            this.x -= this.speed;
            this.moving = true;
            this.direction = "left";
        }
        if (this.keys["ArrowDown"] && this.y < this.canvas.height - this.height) {
            this.y += this.speed;
            this.moving = true;
            this.direction = "down";
            this.frameX = 0;
            this.frameY = 3;
            this.maxFrame = 12;
        }
        if (this.keys["ArrowRight"] && this.x < this.canvas.width - this.width) {
            this.x += this.speed;
            this.moving = true;
            this.direction = "right";
            this.frameY = 0;
            this.frameX = 3;
            this.maxFrame = 5;
        }
        if (this.keys["l"]) {
            let item = this.collideRect()
            console.log("l key", item)
            if (item) {
                console.log("l is in keys")
                this.addItem(item);
                console.log("next")
                this.drawInventoryItems();
            }
        }
        if (this.keys["a"] && this.inventory.includes(item)) {
            this.dropItem(item);
            this.drawInventoryItems();
        }
    }

    drawInventoryItems() {
        console.log("inventory", this.inventory)
        if (this.inventory.length) { 
            this.inventory.forEach(item => {
                console.log("item src", item.src)
                let index = this.inventory.indexOf(item);
                let i = (this.w / this.columns * (index % this.columns))+5
                let jdex = 0
                    if (index > 5) {
                        jdex = 1
                    }
                let newItem = new Image();
                console.log(newItem)
                newItem.src = item.src;
                console.log(newItem.src)
                if (newItem.complete) { 
                    this.renderCtx.drawImage(newItem, item.x, item.y, item.w, item.h, i, (this.h / this.rows * jdex)+18 , item.dw, item.dh) 
                  
                }
            });
        }
    }

    addItem(item) {
        console.log("addItem")
        if (this.inventory.length == this.inventory.columns) {
            console.log("in the if st")
            item.vy = -4;
            return false
        }
        this.inventory.push(item)
        console.log("inv after push", this.inventory)
        return true;
        
    };

    // dropItem(index, x, y) {
    //     let item = this.inventory[index];
    //     if (item) {
    //         this.items.splice(index, 1);
    //         item.x = x;
    //         item.y = y -item.h;
    //         item.vx = Math.random() * 2 - 1;
    //         item.vy = Math.random() * -5 -1;
    //     } return item; 
    // };
    collideRect() {
        let arr = this.allItems.inventoryItems;
        for (let i =0; i<arr.length; i++) { 
        // this.allItems.inventoryItems.forEach(item => {
            if (!(this.x > arr[i].dx + arr[i].dw) || !(this.x + this.w < arr[i].dx) || !(this.y > arr[i].dy + arr[i].dh) || !(this.y + this.h < arr[i].dy)) {
                // console.log("false", item)
                return arr[i];
            } else {
                // console.log("true", item, this.x, this.y, item.dw, item.dh, item.dx, item.dy)
                return false;
            }
        }
    };

    // keyInventory(item) {
    //     if (this.keys["l"] && this.collideRect(item)) {
    //         console.log("l is in keys")
    //         this.addItem(item);
    //         this.drawInventoryItems();
    //     }
    //     if (this.keys["a"] && this.inventory.includes(item)) {
    //         this.dropItem(item);
    //         this.drawInventoryItems();
    //     }
    // }
}