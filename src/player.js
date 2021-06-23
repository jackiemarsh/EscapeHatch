export default class Player {
        constructor(canvas) {
            this.x = 250,
            this.y = 250,
            this.width = 39,
            this.height = 56,
            this.frameX = 0,
            this.frameY = 0,
            this.speed = 9,
            this.moving = false,
            this.keys = [];
            this.canvas = canvas;

            document.addEventListener("keydown", (e) => {
                this.keys[e.key] = true;
                // console.log(keys);
                this.moving = true;
            });
            
            document.addEventListener("keyup", (e) => {
                delete this.keys[e.key];
                this.moving = false;
            });
        }

    handlePlayerFrame() {
        if (this.frameX < 1 && this.moving) {
            this.frameY = 2;
            this.frameX = 1
        // } else if (this.frameX >= 1 && this.moving) {
        //     this.frameX++;
        //     this.frameY = 1;
        }
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
        if (this.keys["ArrowDown"] && this.y < this.canvas.height - this.height) {
            this.y += this.speed;
            this.moving = true;
        }
        if (this.keys["ArrowRight"] && this.x < this.canvas.width - this.width) {
            this.x += this.speed;
            this.moving = true;
        }
    }

    
}