import Item from "./item";

export default class Inventory {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.allItems = new Array();
        this.playerInventory = new Array();
        this.inventoryItems = this.generateAllItems();
        this.gameItems = this.generateGameItems();
        this.columns = 6;
        this.rows = 2;

        this.goldCoins = {
            width: 32,
            height: 32,
            frameX: 0,
            speed: 2
        };

        this.canvas = document.getElementById("inventory-canvas");
        this.ctx = this.canvas.getContext("2d", { alpha: true });
        // this.ctx.mozImageSmoothingEnabled = false;
        // this.ctx.webkitImageSmoothingEnabled = false;
        // this.ctx.msImageSmoothingEnabled = false;
        // this.ctx.imageSmoothingEnabled = false;
        this.moveCoin = this.moveCoin.bind(this);
        this.generateAllItems = this.generateAllItems.bind(this);
        this.generateGameItems = this.generateGameItems.bind(this);
        setInterval(this.moveCoin, 300, this.goldCoins);
    };

    generateAllItems() {
        let xLow = 50;
        let yLow = 170;
        let xHigh = 850;
        let yHigh = 550;
        // let dXMin = Math.floor(Math.random() * (1 + xHigh - xLow)) + xLow;
        // let dYMin = Math.floor(Math.random() * (1 + yHigh - yLow)) + yLow;
        let generatedItems = [
            //  new Item("barrel", 50, 200, 950, 600, Math.random() * 250, Math.random() * 120, 80, 51, "./dist/assets/inventory/barrel.png"),
             new Item("bread", 0, 0, 466, 319, Math.floor(Math.random() * (1 + xHigh - xLow)) + xLow, Math.floor(Math.random() * (1 + yHigh - yLow)) + yLow, 35, 35, "./dist/assets/inventory/bread.png"),
             new Item("coin", 0, 0, 345, 417, Math.floor(Math.random() * (1 + xHigh - xLow)) + xLow, Math.floor(Math.random() * (1 + yHigh - yLow)) + yLow, 35, 35, "./dist/assets/inventory/coin.png"),
             new Item("crystal", 0, 0, 361, 538, Math.floor(Math.random() * (1 + xHigh - xLow)) + xLow, Math.floor(Math.random() * (1 + yHigh - yLow)) + yLow, 35, 35, "./dist/assets/inventory/crystal.png"),
             new Item("shell", 100, 0, 50, 50, Math.floor(Math.random() * (1 + xHigh - xLow)) + xLow, Math.floor(Math.random() * (1 + yHigh - yLow)) + yLow, 35, 35, "./dist/assets/inventory/shell.png"),
             new Item("key", 32, 0, 32, 32, Math.floor(Math.random() * (1 + xHigh - xLow)) + xLow, Math.floor(Math.random() * (1 + yHigh - yLow)) + yLow, 35, 35, "./dist/assets/inventory/KeyIcons.png"),
             new Item("letters", 0, 0, 581, 458, Math.floor(Math.random() * (1 + xHigh - xLow)) + xLow, Math.floor(Math.random() * (1 + yHigh - yLow)) + yLow, 45, 45, "./dist/assets/inventory/paper.png"),
             new Item("bottle", 0, 0, 400, 500, Math.floor(Math.random() * (1 + xHigh - xLow)) + xLow, Math.floor(Math.random() * (1 + yHigh - yLow)) + yLow, 45, 45, "./dist/assets/inventory/bottle.png"),
             new Item("quiche", 0, 0, 290, 290, Math.floor(Math.random() * (1 + xHigh - xLow)) + xLow, Math.floor(Math.random() * (1 + yHigh - yLow)) + yLow, 35, 35, "./dist/assets/inventory/quiche.png"),
             new Item("skull", 0, 0, 346, 398, Math.floor(Math.random() * (1 + xHigh - xLow)) + xLow, Math.floor(Math.random() * (1 + yHigh - yLow)) + yLow, 35, 40, "./dist/assets/inventory/skull.png"),
             new Item("wood", 0, 0, 514, 423, Math.floor(Math.random() * (1 + xHigh - xLow)) + xLow, Math.floor(Math.random() * (1 + yHigh - yLow)) + yLow, 35, 35, "./dist/assets/inventory/wood.png"),
            ];
        return generatedItems;
    }

    generateGameItems() {
        let gameItems = []
        while (gameItems.length < 8) {
            let el = this.inventoryItems[Math.floor(Math.random()*this.inventoryItems.length)]
            if (!gameItems.includes(el)) {
                gameItems.push(el) 
            }
        }
        return gameItems;
    };
    

    // clickInventory() {
    //     //    if (pointer.down && inventory.items.length > 0 && inventory.collidePoint(pointer)) {
    //     //        let index = Math.floor((pointer.x - inventory.x) / (inventory.w / inventory.columns));
               
    //     //        pointer.x = player.x + player.w * 0.5;
    //     //        let item = inventory.dropItem(index, player.x, player.y);
               
    //     //        if (item) items.unshift(item);
    //     //     };
    // };

    moveCoin(sprite) {
        if (sprite.frameX < 8) sprite.frameX++;
        else sprite.frameX = 0;
    } 

    drawInventory() {
        const coin = new Image();
        coin.src = "./dist/assets/inventory/coin_gold.png"
                coin.onload = () => { 
                    // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                    this.ctx.drawImage(coin, this.goldCoins.width*this.goldCoins.frameX, 0, 32, 32, 0, 0, 25, 25)
                    this.ctx.drawImage(coin, this.goldCoins.width*this.goldCoins.frameX, 0, 32, 32, 65, 0, 25, 25)
                    this.ctx.drawImage(coin, this.goldCoins.width*this.goldCoins.frameX, 0, 32, 32, 130, 0, 25, 25)
                    this.ctx.drawImage(coin, this.goldCoins.width*this.goldCoins.frameX, 0, 32, 32, 195, 0, 25, 25)
                    this.ctx.drawImage(coin, this.goldCoins.width*this.goldCoins.frameX, 0, 32, 32, 275, 0, 25, 25)
                    this.ctx.drawImage(coin, this.goldCoins.width*this.goldCoins.frameX, 0, 32, 32, 275, 70, 25, 25)
                    this.ctx.drawImage(coin, this.goldCoins.width*this.goldCoins.frameX, 0, 32, 32, 275, 125, 25, 25)
                    this.ctx.drawImage(coin, this.goldCoins.width*this.goldCoins.frameX, 0, 32, 32, 195, 125, 25, 25)
                    this.ctx.drawImage(coin, this.goldCoins.width*this.goldCoins.frameX, 0, 32, 32, 130, 125, 25, 25)
                    this.ctx.drawImage(coin, this.goldCoins.width*this.goldCoins.frameX, 0, 32, 32, 65, 125, 25, 25)
                    this.ctx.drawImage(coin, this.goldCoins.width*this.goldCoins.frameX, 0, 32, 32, 0, 125, 25, 25)
                    this.ctx.drawImage(coin, this.goldCoins.width*this.goldCoins.frameX, 0, 32, 32, 0, 70, 25, 25)
                }
                requestAnimationFrame(this.drawInventory.bind(this));
        //     }
        // }
    };

}