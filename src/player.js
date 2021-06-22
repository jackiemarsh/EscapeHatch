export default class Player {
        constructor() {
            this.x = 250,
            this.y = 250,
            this.width = 40,
            this.height = 50,
            this.frameX = 0,
            this.frameY = 0,
            this.speed = 9,
            this.moving = false,
            this.keys = []
        }
    
    handlePlayerFrame() {
        if (this.frameX < 1 && this.moving) this.frameX++;
        else this.frameX = 0;
    }

    movePlayer() {
        if (this.keys["ArrowUp"] && this.y > 175) {
            this.y -= this.speed;
            // this.frameX = 1;
            this.moving = true;
        }
        if (this.keys["ArrowLeft"] && this.x > 0) {
            this.x -= this.speed;
            this.moving = true;
        }
        if (this.keys["ArrowDown"] && this.y < canvas.height - this.height) {
            this.y += this.speed;
            this.moving = true;
        }
        if (this.keys["ArrowRight"] && this.x < canvas.width - this.width) {
            this.x += this.speed;
            this.moving = true;
        }
    }

    
}