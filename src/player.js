export default class Player {
        constructor(canvas) {
            this.x = 250,
            this.y = 250,
            this.width = 50,
            this.height = 60,
            this.frameX = 0,
            this.frameY = 1,
            this.speed = 9,
            this.moving = false,
            this.direction = "idle",
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
        else if (!this.moving) {
            this.frameX = 0;
            this.frameY = 1;
        }
    }

    movePlayer() {
        if (this.keys["ArrowUp"] && this.y > 175) {
            this.y -= this.speed;
            // this.frameY = 1;
            this.FrameX = 
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
        }
        if (this.keys["ArrowRight"] && this.x < this.canvas.width - this.width) {
            this.x += this.speed;
            this.moving = true;
            this.direction = "right"
        }
        if (this.keys.length === 0) {
            this.moving = false;
            this.direction = "idle";
        }
    }

    
}