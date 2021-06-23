export default class Inventory {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.items = new Array();
        this.columns = 6;
        this.canvas = document.getElementById("inventory-canvas");
        this.ctx = this.canvas.getContext("2d", { alpha: true });
    };

    addItem(sprite) {
        if (this.items.length == this.columns) {
            sprite.vy = -4;
            return false
        }
        this.items.push(sprite)
        return true;
    };

    dropItem(index, x, y) {
        var item = this.items[index];
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
    //   let items = [
    //                 new Sprite(Math.random() * 240, 100, 96, 16, tile_size, tile_size),
    //                new Sprite(Math.random() * 240, 100, 0, 32, tile_size, tile_size),
    //                new Sprite(Math.random() * 240, 100, 16, 32, tile_size, tile_size),
    //                new Sprite(Math.random() * 240, 100, 32, 32, tile_size, tile_size),
    //                new Sprite(Math.random() * 240, 100, 48, 32, tile_size, tile_size),
    //                new Sprite(Math.random() * 240, 100, 64, 32, tile_size, tile_size),
    //                new Sprite(Math.random() * 240, 100, 80, 32, tile_size, tile_size),
    //                new Sprite(Math.random() * 240, 100, 96, 32, tile_size, tile_size)
    //             ];

    // var pointer = { x:100, y:0, down:false };

    // function loop(time_step) {

    // window.requestAnimationFrame(loop);// perpetuate the loop

    clickInventory() {

           if (pointer.down && inventory.items.length > 0 && inventory.collidePoint(pointer)) {
               let index = Math.floor((pointer.x - inventory.x) / (inventory.w / inventory.columns));
               
               pointer.x = player.x + player.w * 0.5;
               let item = inventory.dropItem(index, player.x, player.y);
               
               if (item) items.unshift(item);
            };
    };

    drawInventory() {
        this.ctx.fillStyle = "lightgray";
        this.ctx.fillRect(this.x, this.y, this.w, this.h);

        // for (let index = inventory.items.length - 1; index > -1; -- index) {

        //   let item = inventory.items[index];
        //   let dest_x = inventory.x + index * tile_size * 2;
            
        //   this.ctx.drawImage(tile_set, item.sx, item.sy, item.w, item.h, dest_x, inventory.y, tile_size * 2, tile_size * 2);
        //     /* Draw to the display context */
        //     // context.drawImage(buffer.canvas, 0, 0, buffer.canvas.width, buffer.canvas.height, 0, 0, context.canvas.width, context.canvas.height);

        // };
    };

    drawItems() {
         
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