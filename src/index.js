console.log("Webpack is working")

// const Game = require("./game");
const GameView = require("./game_view");

document.addEventListener("DOMContentLoaded", function () {
  const canvasEl = document.getElementById("escape-canvas");
//   canvasEl.width = Game.DIM_X;
//   canvasEl.height = Game.DIM_Y;

  const ctx = canvasEl.getContext("2d");
//   const game = new Game();
//   new GameView(game, ctx).start();
    ctx.beginPath();
    ctx.rect(0, 0, canvasEl.width, canvasEl.height);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
    // let img = new Image();
    // img.src = "board-ship.png"
    // // let ctx = canvas.getContext('2d');
    //     ctx.drawImage(img, 0, 0)
});
