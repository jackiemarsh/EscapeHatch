import GameView from "./game_view";
import Inventory from "./inventory";
import Item from "./item";

export default class Player {
        constructor(canvas, allItems) {
            this.x = 250,
            this.y = 250,
            this.width = 48,
            this.height = 56,
            this.frameX = 12,
            this.frameY = 0,
            // this.maxFrame = 4,
            this.speed = 5,
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
            this.tickCount += 1;
            if (this.tickCount > this.speed) {
                this.tickCount = 0;
                if (this.frameX < 15 && this.direction === "idle") {
                    this.frameX++
                } else this.frameX = 12
            }
        }
        
    keyListeners() {
        document.addEventListener("keydown", this.movePlayer);
        
        document.addEventListener("keyup", (e) => {
            this.moving = false;
            this.direction = "idle"
        });

    }

    movePlayer(e) {
        // if (this.moving === false) {
        //     // this.moving = false;
        //     this.direction = "idle";
        //     // this.frameX = 0;
        //     // this.frameY = 1;
        //     // this.maxFrame = 2;
        // }
        switch (e.key) {
            case "ArrowUp":
                if (this.y > 175) {
                    console.log("up is in keys")
                    this.y -= this.speed;
                    // this.frameY = 1;
                    this.moving = true;
                    this.direction = "up"; 
                }
                break;
            case "ArrowLeft":
                if (this.x > 0) {
                    this.x -= this.speed;
                    this.moving = true;
                    this.direction = "left";
                    this.frameX = 12;
                    this.frameY = 3;
                }
                break;
            case "ArrowDown":
                if (this.y < this.canvas.height - this.height) {
                    this.y += this.speed;
                    this.moving = true;
                    this.direction = "down";
                    this.frameX = 0;
                    this.frameY = 4;
                }
                break;
            case "ArrowRight":
                if (this.x < this.canvas.width - this.width) {
                    this.x += this.speed;
                    this.moving = true;
                    this.direction = "right";
                    this.frameY = 0;
                    this.frameX = 3;
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
        console.log("drawinventoryitems is being called", this.inventory)
        if (this.inventory.length) { 
            this.inventory.forEach(item => {
                console.log("dii item src", item.src)
                let index = this.inventory.indexOf(item);
                let i = (this.allItems.w / this.allItems.columns * (index % this.allItems.columns))+5
                let jdex = 0
                    if (index > 5) {
                        jdex = 1
                    }
                let newItem = new Image();
                console.log(newItem)
                newItem.src = item.src;
                console.log(newItem.src)
                newItem.onload = () => { 
                    this.renderCtx.drawImage(newItem, item.x, item.y, item.w, item.h, i, (this.allItems.h / this.allItems.rows * jdex)+18 , item.dw, item.dh); 
                }
            });
        }
    }

    addItem(item) {
        console.log("addItem")
        if (this.inventory.length == this.allItems.columns*2) {
            console.log("in the if st")
            item.vy = -4;
            return false
        }
        console.log("before splice", this.allItems.gameItems, this.allItems.gameItems.indexOf(item))

        this.allItems.gameItems.splice(this.allItems.gameItems.indexOf(item), 1)
        this.inventory.push(item)
        console.log(this.allItems.gameItems)
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
            let pcX = (this.x+this.width)/2;
            let pcY = (this.y+this.height)/2;
            let objX = (arr[i].dx+arr[i].dw)/2;
            let objY = (arr[i].dy+arr[i].dh)/2;
            console.log(this.x, this.width, this.y, this.height)
            console.log("test", arr[i].name, pcX, pcY, objX, objY)

            console.log(Math.abs(pcX - objX), Math.abs(pcY + objY))
            if (Math.abs(pcX - objX) <15 && Math.abs(pcY - objY) < 15) {
                console.log("true", arr[i], this.x, this.y, arr[i].dw, arr[i].dh, arr[i].dx, arr[i].dy)
                return arr[i];
            } 
            
        }
        console.log("false")
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