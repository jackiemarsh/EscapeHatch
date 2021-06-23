// import Inventory from "./inventory";

export default class Item {
    constructor(name, x, y, w, h, dx, dy, dw, dh, src){
        this.name = name;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.dx = dx;
        this.dy = dy;
        this.dw = dw;
        this.dh = dh;
        this.vx = this.vy = 0;
        this.src = src;
    }

    
}