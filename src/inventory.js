import Item from "./item";

export default class Inventory {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.allItems = new Array();
        this.inventoryItems = new Array();
        this.columns = 6;
        this.rows = 2;
        this.canvas = document.getElementById("inventory-canvas");
        this.ctx = this.canvas.getContext("2d", { alpha: true });
        // this.ctx.mozImageSmoothingEnabled = false;
        // this.ctx.webkitImageSmoothingEnabled = false;
        // this.ctx.msImageSmoothingEnabled = false;
        // this.ctx.imageSmoothingEnabled = false;

        this.generateAllItems = this.generateAllItems.bind(this);
    };


    addItem(sprite) {
        if (this.inventoryItems.length == this.columns) {
            sprite.vy = -4;
            return false
        }
        this.inventoryItems.push(sprite)
        return true;
    };

    dropItem(index, x, y) {
        let item = this.items[index];
        if (item) {
            this.items.splice(index, 1);
            item.x = x;
            item.y = y -item.h;
            item.vx = Math.random() * 2 - 1;
            item.vy = Math.random() * -5 -1;
        } return item; 
    };

    // collidePoint(point) {

    //     if (point.x < this.x || point.x > this.x + this.w || point.y < this.y || point.y > this.y + this.h) return false;

    //     return true;

    // };

    collideRect(sprite) {
        if (this.x > sprite.x + sprite.w || this.x + this.w < sprite.x || this.y > sprite.y + sprite.h || this.y + this.h < sprite.y) return false;

        return true;
    };

    //   let player = new Player();
    //   let inventory = new Inventory(120, 8, 128, 32);
    generateAllItems() {
        let generatedItems = [
            //  new Item("barrel", 50, 200, 950, 600, Math.random() * 250, Math.random() * 120, 80, 51, "../dist/assets/inventory/barrel.png"),
             new Item("bread", 0, 0, 466, 319, Math.random() * 240, Math.random() * 240, 35, 35, "../dist/assets/inventory/bread.png"),
             new Item("coin", 0, 0, 345, 417, Math.random() * 240, Math.random() * 240, 35, 35, "../dist/assets/inventory/coin.png"),
             new Item("crystal", 0, 0, 361, 538, Math.random() * 240, Math.random() * 240, 35, 35, "../dist/assets/inventory/crystal.png"),
             new Item("shell", 100, 0, 50, 50, Math.random() * 240, Math.random() * 240, 35, 35, "../dist/assets/inventory/shell.png"),
             new Item("key", 32, 0, 32, 32, Math.random() * 240, Math.random() * 240, 35, 35, "../dist/assets/inventory/KeyIcons.png"),
             new Item("letters", 0, 0, 581, 458, Math.random() * 240, Math.random() * 240, 45, 45, "../dist/assets/inventory/paper.png"),
             new Item("bottle", 0, 0, 400, 500, Math.random() * 240, Math.random() * 240, 45, 45, "../dist/assets/inventory/bottle.png"),
             new Item("quiche", 0, 0, 290, 290, Math.random() * 240, Math.random() * 240, 35, 35, "../dist/assets/inventory/quiche.png"),
             new Item("skull", 0, 0, 346, 398, Math.random() * 240, Math.random() * 240, 35, 35, "../dist/assets/inventory/skull.png"),
             new Item("wood", 0, 0, 514, 423, Math.random() * 240, Math.random() * 240, 35, 35, "../dist/assets/inventory/wood.png"),
            ];
        return generatedItems;
    }

    drawInventoryItems() {
        this.inventoryItems = this.generateAllItems();

        if (this.inventoryItems.length) { 
            this.inventoryItems.forEach(item => {
                // console.log(item)
                let index = this.inventoryItems.indexOf(item);
                let i = (this.w / this.columns * (index % this.columns))
                let jdex = 0
                    if (index > 5) {
                        jdex = 1
                    }
                let newItem = new Image();
                newItem.src = item.src;
                newItem.onload = () => { 
                this.ctx.drawImage(newItem, item.x, item.y, item.w, item.h, i, (this.h / this.rows * jdex)+15 , item.dw, item.dh) 
                }
            });
        }
    }
    // var pointer = { x:100, y:0, down:false };

    // function loop(time_step) {

    // window.requestAnimationFrame(loop);// perpetuate the loop

    clickInventory() {
        //    if (pointer.down && inventory.items.length > 0 && inventory.collidePoint(pointer)) {
        //        let index = Math.floor((pointer.x - inventory.x) / (inventory.w / inventory.columns));
               
        //        pointer.x = player.x + player.w * 0.5;
        //        let item = inventory.dropItem(index, player.x, player.y);
               
        //        if (item) items.unshift(item);
        //     };
    };

    drawInventory() {
        this.ctx.fillStyle = "lightgray";
        this.ctx.fillRect(this.x, this.y, this.w, this.h);

        const coin = new Image();
        coin.src = "../dist/assets/inventory/coin_gold.png"
        for (let i = 0; i<this.canvas.width; i+=50) {
            for (let j = 0; j<this.canvas.clientHeight; j+=30) {
                coin.onload = () => { 
                this.ctx.drawImage(coin, 0, 0, 32, 32, i, j, 25, 25)
                }
            }
        }
    };

    drawAllItems() {
        for (let index = this.items.length-1; index > -1; --index) {
            let item = items[index];

            if (item.y + item.h >= map_floor && item.collideRect(player) && pointer.down && item.collidePoint(pointer)) {
              front_item_index = index;// store the frontmost item index
            }
  
            // item.updatePosition(map_gravity, map_friction, map_floor);
            this.ctx.drawImage(tile_set, item.sx, item.sy, item.w, item.h, Math.round(item.x), Math.round(item.y), item.w, item.h);
          }
          // If there is an item selected, add it to the inventory
          if (front_item_index != undefined && inventory.addItem(items[front_item_index])) items.splice(front_item_index, 1); 
    };

}