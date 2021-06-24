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


    

    // collidePoint(point) {

    //     if (point.x < this.x || point.x > this.x + this.w || point.y < this.y || point.y > this.y + this.h) return false;

    //     return true;

    // };

    //   let player = new Player();
    //   let inventory = new Inventory(120, 8, 128, 32);
    generateAllItems() {
        let generatedItems = [
            //  new Item("barrel", 50, 200, 950, 600, Math.random() * 250, Math.random() * 120, 80, 51, "../dist/assets/inventory/barrel.png"),
             new Item("bread", 0, 0, 466, 319, Math.random() * 855, Math.random() * 600, 35, 35, "../dist/assets/inventory/bread.png"),
             new Item("coin", 0, 0, 345, 417, Math.random() * 855, Math.random() * 600, 35, 35, "../dist/assets/inventory/coin.png"),
             new Item("crystal", 0, 0, 361, 538, Math.random() * 855, Math.random() * 600, 35, 35, "../dist/assets/inventory/crystal.png"),
             new Item("shell", 100, 0, 50, 50, Math.random() * 855, Math.random() * 600, 35, 35, "../dist/assets/inventory/shell.png"),
             new Item("key", 32, 0, 32, 32, Math.random() * 855, Math.random() * 600, 35, 35, "../dist/assets/inventory/KeyIcons.png"),
             new Item("letters", 0, 0, 581, 458, Math.random() * 855, Math.random() * 600, 45, 45, "../dist/assets/inventory/paper.png"),
             new Item("bottle", 0, 0, 400, 500, Math.random() * 855, Math.random() * 600, 45, 45, "../dist/assets/inventory/bottle.png"),
             new Item("quiche", 0, 0, 290, 290, Math.random() * 855, Math.random() * 600, 35, 35, "../dist/assets/inventory/quiche.png"),
             new Item("skull", 0, 0, 346, 398, Math.random() * 855, Math.random() * 600, 35, 40, "../dist/assets/inventory/skull.png"),
             new Item("wood", 0, 0, 514, 423, Math.random() * 855, Math.random() * 600, 35, 35, "../dist/assets/inventory/wood.png"),
            ];
        return generatedItems;
    }

    // drawInventoryItems() {
    //     this.inventoryItems = this.generateAllItems();

    //     if (this.inventoryItems.length) { 
    //         this.inventoryItems.forEach(item => {
    //             // console.log(item)
    //             let index = this.inventoryItems.indexOf(item);
    //             let i = ((this.w - 35) / this.columns * (index % this.columns))+3
    //             let jdex = 0
    //                 if (index > 5) {
    //                     jdex = 1
    //                 }
    //             let newItem = new Image();
    //             newItem.src = item.src;
    //             newItem.onload = () => { 
    //             this.ctx.drawImage(newItem, item.x, item.y, item.w, item.h, i, (this.h / this.rows * jdex)+18 , item.dw, item.dh) 
    //             }
    //         });
    //     }
    // }
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
        // this.ctx.fillStyle = "lightgray";
        // this.ctx.fillRect(this.x, this.y, this.w-28, this.h-28);

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

}