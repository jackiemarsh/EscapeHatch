import GameView from "./game_view";
import Inventory from "./inventory";
import Item from "./item";

export default class Player {
        constructor(canvas, allItems) {
            this.x = 350,
            this.y = 250,
            this.width = 58,
            this.height = 84,
            this.frameX = 0,
            this.frameY = 0,
            this.maxFrame = 5,
            this.frameSpeed = 1,
            this.speed = 6,
            // this.ticksPerFrame = ;
            this.tickCount = 0; 
            this.moving = false,
            this.direction = "idle",
            this.inventory = [
                new Item("skull", 0, 0, 346, 398, Math.random() * 855, Math.random() * 600, 35, 40, "../dist/assets/inventory/skull.png"),
                new Item("wood", 0, 0, 514, 423, Math.random() * 855, Math.random() * 600, 35, 35, "../dist/assets/inventory/wood.png"),
                                ];
            this.allItems = allItems;
 
            this.renderCtx = this.allItems.ctx;
            this.canvas = canvas;
            this.movePlayer = this.movePlayer.bind(this);
            this.drawInventoryItems()
        }
        
    handlePlayerFrame() {
        this.tickCount += this.frameSpeed;
        if (this.tickCount > this.speed) {
            this.tickCount = 0;
            if (this.frameX < this.maxFrame) {
                this.frameX++
            } else this.frameX = 0
        }
    }
        
    keyListeners() {
        document.addEventListener("keydown", this.movePlayer);
        
        document.addEventListener("keyup", (e) => {
            this.moving = false;
            this.direction = "idle";
            this.frameX = 0;
            this.frameY = 0;
            this.maxFrame = 5;
        });

    }

    movePlayer(e) {
        if (this.moving === false) {
            this.frameX = 0;
            this.frameY = 0;
            this.frameSpeed = 1;
        }
        switch (e.key) {
            case "ArrowUp":
                if (this.y > 175) {
                    this.y -= this.speed;
                    this.frameY = 1;
                    this.moving = true;
                    this.direction = "up";
                    this.frameSpeed = 3;
                }
                break;
            case "ArrowLeft":
                if (this.x > 0) {
                    this.x -= this.speed;
                    this.moving = true;
                    this.direction = "left";
                    this.frameX = 0;
                    this.frameY = 4;
                    this.frameSpeed = 3;
                }
                break;
            case "ArrowDown":
                if (this.y < this.canvas.height - this.height) {
                    this.y += this.speed;
                    this.moving = true;
                    this.direction = "down";
                    this.frameX = 0;
                    this.frameY = 3;
                    this.maxFrame = 12;
                    this.frameSpeed = 3;
                }
                break;
            case "ArrowRight":
                if (this.x < this.canvas.width - this.width) {
                    this.x += this.speed;
                    this.moving = true;
                    this.direction = "right";
                    this.frameY = 2;
                    this.frameSpeed = 3;
                }
                break;
            case "l":
            let item = this.collideRect();
                if (item) {
                    this.addItem(item);
                    this.drawInventoryItems();
                }
                break;
            case "a":
                if (this.inventory.includes(item)) {
                    this.dropItem(item);
                    this.drawInventoryItems();
                }
                break;
        default:
                break;
            }
    }

    drawInventoryItems() {
        if (this.inventory.length) { 
            this.inventory.forEach(item => {
                let index = this.inventory.indexOf(item);
                let i = (this.allItems.w / this.allItems.columns * (index % this.allItems.columns))+5
                let jdex = 0
                    if (index > 5) {
                        jdex = 1
                    }
                let newItem = new Image();
                newItem.src = item.src;
                newItem.onload = () => { 
                    this.renderCtx.drawImage(newItem, item.x, item.y, item.w, item.h, i, (this.allItems.h / this.allItems.rows * jdex)+18 , item.dw, item.dh); 
                }
            });
        }
    }

    addItem(item) {
        if (this.inventory.length == this.allItems.columns*2) {
            item.vy = -4;
            return false
        }
        this.allItems.gameItems.splice(this.allItems.gameItems.indexOf(item), 1)
        this.inventory.push(item)
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
            let pcX = (this.x+this.width)/2;
            let pcY = (this.y+this.height)/2;
            let objX = (arr[i].dx+arr[i].dw)/2;
            let objY = (arr[i].dy+arr[i].dh)/2;

            if (Math.abs(pcX - objX) <15 && Math.abs(pcY - objY) < 20) {
                return arr[i];
            } 
            
        }
        return false;
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