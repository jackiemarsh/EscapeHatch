class Scene {
    constructor() {

    }

    drawScene(canvas) {

    // <img id="myImage" src="./assets/images/Pirate Ship Tile Set Sheet.png">;

    let img = new Image();
    img.src = "./assets/images/board-ship.png"
    let ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0)
    }
}