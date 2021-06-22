/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("console.log(\"Webpack is working\")\n\n// const Game = require(\"./game\");\n// const GameView = require(\"./game_view\");\n\n// document.addEventListener(\"DOMContentLoaded\", function () {\n    const canvas = document.getElementById(\"practice-canvas\");\n    const ctx = canvas.getContext(\"2d\");\n    canvas.width = 900;\n    canvas.height = 600;\n    \n    const keys = []\n    \n    const player = {\n        x: 250,\n        y: 250,\n        width: 40,\n        height: 50,\n        frameX: 0,\n        frameY: 0,\n        speed: 9,\n        moving: false\n    };\n    \n    const grassFrame = {\n        width: 50,\n        height: 150,\n        frameX: 0,\n        speed: 2\n    }\n    \n    const playerSprite = new Image();\n    playerSprite.src = \"./assets/images/Pirate.png\"\n    const background1 = new Image();\n    background1.src = \"./assets/images/underwater.png\"\n    const background2 = new Image();\n    background2.src = \"./assets/images/ship.png\"\n    const background3 = new Image();\n    background3.src = \"./assets/images/ship copy.png\"\n    const grass = new Image();\n    grass.src = \"./assets/images/grass.png\"\n    \n    function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {\n        ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);\n    \n    }\n    \n    // let position = 0;\n    \n    \n    \n    window.addEventListener(\"keydown\", function(e) {\n        keys[e.key] = true;\n        // console.log(keys);\n        player.moving = true;\n    });\n    \n    window.addEventListener(\"keyup\", function(e) {\n        delete keys[e.key];\n        player.moving = false;\n    });\n    \n    function moveBackground() {\n        if (grassFrame.frameX === 0) grassFrame.frameX = 1;\n        else grassFrame.frameX = 0;\n    } \n    setInterval(moveBackground, 600)\n    \n    function movePlayer() {\n        if (keys[\"ArrowUp\"] && player.y > 175) {\n            player.y -= player.speed;\n            // player.frameX = 1;\n            player.moving = true;\n        }\n        if (keys[\"ArrowLeft\"] && player.x > 0) {\n            player.x -= player.speed;\n            player.moving = true;\n        }\n        if (keys[\"ArrowDown\"] && player.y < canvas.height - player.height) {\n            player.y += player.speed;\n            player.moving = true;\n        }\n        if (keys[\"ArrowRight\"] && player.x < canvas.width - player.width) {\n            player.x += player.speed;\n            player.moving = true;\n        }\n    }\n    \n    function handlePlayerFrame() {\n        if (player.frameX < 1 && player.moving) player.frameX++;\n        else player.frameX = 0;\n    }\n    \n    // function animate() {\n    //     ctx.clearRect(0, 0, canvas.width, canvas.height)\n    //     ctx.drawImage(background1, 0, 0, canvas.width, 134);\n    //     // position++;\n    //     ctx.drawImage(background3, 0, 50, background3.width, 50, 0, 133, canvas.width, 280)\n    //     ctx.drawImage(background2, 0, 60, background2.width, 50, 0, 433, canvas.width, 250)\n    //     drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height)\n    //     movePlayer();\n    //     handlePlayerFrame();\n    \n    //     requestAnimationFrame(animate);\n    // };\n    \n    // animate();\n    \n    let fps, fpsInterval, startTime, now, then, elapsed;\n    \n    \n    function startAnimating(fps) {\n        fpsInterval = 1000/fps;\n        then = Date.now();\n        startTime = then;\n        animate();\n    }\n    \n    function animate() {\n        requestAnimationFrame(animate);\n        now = Date.now();\n        elapsed = now - then;\n        if (elapsed > fpsInterval) {\n            then = now - (elapsed % fpsInterval);\n            ctx.clearRect(0, 0, canvas.width, canvas.height);\n            ctx.drawImage(background1, 0, 0, canvas.width, 134);\n            ctx.drawImage(background3, 0, 50, background3.width, 50, 0, 133, canvas.width, 280);\n            ctx.drawImage(background2, 0, 60, background2.width, 50, 0, 433, canvas.width, 250);\n            ctx.drawImage(grass, grassFrame.width*grassFrame.frameX, 0, 50, 100, 5, 503, 50, 150);\n            ctx.drawImage(grass, grassFrame.width*grassFrame.frameX, 0, 50, 100, 250, 500, 50, 150);\n            ctx.drawImage(grass, grassFrame.width*grassFrame.frameX, 0, 50, 100, 675, 503, 50, 150);\n            ctx.drawImage(grass, grassFrame.width*grassFrame.frameX, 0, 50, 100, 800, 503, 50, 150);\n    \n            drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);\n            movePlayer();\n            handlePlayerFrame();\n        }\n    }\n    startAnimating(15);\n    \n// });\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;