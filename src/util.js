const Util = {
    inherits(childClass, parentClass) {
      //...
    }
  };
  
  
  let canvasWidth = 700;
  let canvasHeight = 620;
  
  let x = 0;
  let y = 0;
  
  let srcX;
  let srcY;
  
  const sheetWidth = ;
  const sheetHeight = ;
  
  const cols = ;
  const rows = ;
  
  const width = sheetWidth / cols;
  const height = sheetHeight / rows; 
  
  const currentFrame = 0;
  let sprite = new Image();
  sprite.src = "";
  
  function updateFrame() {
      currentFrame = ++currentFrame % cols; 
      srcX = currentFrame * width;
      srcY = 0;
      ctx.clearRect(x, y, width, height);
  }
  // needs canvas and ctx?
  function drawImage() {
      updateFrame();
      ctx.drawImage(character, srcX, srcY, width, height, x, y, width, height);
  }
  
  setInterval(function() {
      drawImage();
  }, 100);
  module.exports = Util;