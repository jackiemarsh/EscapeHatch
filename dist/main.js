/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\n\nclass Game {\n    constructor() {\n        window.addEventListener(\"keydown\", function(e) {\n            keys[e.key] = true;\n            // console.log(keys);\n            Player.moving = true;\n        });\n        \n        window.addEventListener(\"keyup\", function(e) {\n            delete keys[e.key];\n            Player.moving = false;\n        });\n        this.inventory = [];\n        const gameView = new _game_view__WEBPACK_IMPORTED_MODULE_0__.default();\n        gameView.animate();\n        // console.log(gameView.then);\n    }\n\n  }\n  \n//   Game.BG_COLOR = \"blue\";\n//   Game.DIM_X = 1000;\n//   Game.DIM_Y = 600;\n//   Game.FPS = 32;\n//   Game.NUM_ASTEROIDS = 10;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameView)\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n\n\n\nclass GameView {\n    constructor () {\n        this.canvas = document.getElementById(\"practice-canvas\");\n        this.ctx = this.canvas.getContext(\"2d\");\n        this.canvas.width = 900;\n        this.canvas.height = 600;\n        this.player = new _player_js__WEBPACK_IMPORTED_MODULE_1__.default();\n        this.then = 0;\n        this.fpsInterval = 0;\n    }\n    \n    drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {\n        this.ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);\n    }\n\n    moveBackground(grassFrame) {\n        if (grassFrame.frameX === 0) grassFrame.frameX = 1;\n        else grassFrame.frameX = 0;\n    } \n    \n    \n    // startAnimating(fps) {\n        // let startTime;\n        // fpsInterval = 1000/fps;\n        // this.then = Date.now();\n        // startTime = this.then;\n        // animate();\n    // }\n    \n    animate() {\n        // let now, elapsed;\n        const grassFrame = {\n            width: 50,\n            height: 150,\n            frameX: 0,\n            speed: 2\n        };\n        \n        const playerSprite = new Image();\n        playerSprite.src = \"../dist/assets/images/Pirate.png\"\n        const background1 = new Image();\n        background1.src = \"../dist/assets/images/underwater.png\"\n        const background2 = new Image();\n        background2.src = \"../dist/assets/images/ship.png\"\n        const background3 = new Image();\n        background3.src = \"../dist/assets/images/ship copy.png\"\n        const grass = new Image();\n        grass.src = \"../dist/assets/images/grass.png\"\n\n        // now = Date.now();\n        // elapsed = now - this.then;\n        // if (elapsed > fpsInterval) {\n            // this.then = now - (elapsed % fpsInterval);\n            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n            this.ctx.drawImage(background1, 0, 0, this.canvas.width, 134);\n            this.ctx.drawImage(background3, 0, 50, background3.width, 50, 0, 133, this.canvas.width, 280);\n            this.ctx.drawImage(background2, 0, 60, background2.width, 50, 0, 433, this.canvas.width, 250);\n            this.ctx.drawImage(grass, grassFrame.width*grassFrame.frameX, 0, 50, 100, 5, 503, 50, 150);\n            this.ctx.drawImage(grass, grassFrame.width*grassFrame.frameX, 0, 50, 100, 250, 500, 50, 150);\n            this.ctx.drawImage(grass, grassFrame.width*grassFrame.frameX, 0, 50, 100, 675, 503, 50, 150);\n            this.ctx.drawImage(grass, grassFrame.width*grassFrame.frameX, 0, 50, 100, 800, 503, 50, 150);\n            \n            this.drawSprite(playerSprite, this.player.width * this.player.frameX, this.player.height * this.player.frameY, this.player.width, this.player.height, this.player.x, this.player.y, this.player.width, this.player.height);\n            requestAnimationFrame(this.animate.bind(this));\n            // player.movePlayer();\n            // player.handlePlayerFrame();\n            // setInterval(moveBackground(grassFrame), 600);\n        // }\n    };\n    // startAnimating(15);\n};\n\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\nconsole.log(\"Webpack is working\")\n\n;\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    const game = new _game_js__WEBPACK_IMPORTED_MODULE_0__.default();\n    \n    // const canvas = document.getElementById(\"practice-canvas\");\n    // const ctx = canvas.getContext(\"2d\");\n    // canvas.width = 900;\n    // canvas.height = 600;\n    \n    // const keys = []\n    \n    // const player = {\n    //     x: 250,\n    //     y: 250,\n    //     width: 40,\n    //     height: 50,\n    //     frameX: 0,\n    //     frameY: 0,\n    //     speed: 9,\n    //     moving: false\n    // };\n    \n    // const grassFrame = {\n    //     width: 50,\n    //     height: 150,\n    //     frameX: 0,\n    //     speed: 2\n    // }\n    \n    // const playerSprite = new Image();\n    // playerSprite.src = \"../dist/assets/images/Pirate.png\"\n    // const background1 = new Image();\n    // background1.src = \"../dist/assets/images/underwater.png\"\n    // const background2 = new Image();\n    // background2.src = \"../dist/assets/images/ship.png\"\n    // const background3 = new Image();\n    // background3.src = \"../dist/assets/images/ship copy.png\"\n    // const grass = new Image();\n    // grass.src = \"../dist/assets/images/grass.png\"\n    \n    // function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {\n    //     ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);\n    \n    // }\n    \n    // window.addEventListener(\"keydown\", function(e) {\n    //     keys[e.key] = true;\n    //     // console.log(keys);\n    //     Player.moving = true;\n    // });\n    \n    // window.addEventListener(\"keyup\", function(e) {\n    //     delete keys[e.key];\n    //     Player.moving = false;\n    // });\n    \n    // function moveBackground() {\n    //     if (grassFrame.frameX === 0) grassFrame.frameX = 1;\n    //     else grassFrame.frameX = 0;\n    // } \n    // setInterval(moveBackground, 600)\n    \n    // function movePlayer() {\n    //     if (keys[\"ArrowUp\"] && player.y > 175) {\n    //         player.y -= player.speed;\n    //         // player.frameX = 1;\n    //         player.moving = true;\n    //     }\n    //     if (keys[\"ArrowLeft\"] && player.x > 0) {\n    //         player.x -= player.speed;\n    //         player.moving = true;\n    //     }\n    //     if (keys[\"ArrowDown\"] && player.y < canvas.height - player.height) {\n    //         player.y += player.speed;\n    //         player.moving = true;\n    //     }\n    //     if (keys[\"ArrowRight\"] && player.x < canvas.width - player.width) {\n    //         player.x += player.speed;\n    //         player.moving = true;\n    //     }\n    // }\n    \n    // function handlePlayerFrame() {\n    //     if (player.frameX < 1 && player.moving) player.frameX++;\n    //     else player.frameX = 0;\n    // }\n    \n    // function animate() {\n    //     ctx.clearRect(0, 0, canvas.width, canvas.height)\n    //     ctx.drawImage(background1, 0, 0, canvas.width, 134);\n    //     // position++;\n    //     ctx.drawImage(background3, 0, 50, background3.width, 50, 0, 133, canvas.width, 280)\n    //     ctx.drawImage(background2, 0, 60, background2.width, 50, 0, 433, canvas.width, 250)\n    //     drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height)\n    //     movePlayer();\n    //     handlePlayerFrame();\n    \n    //     requestAnimationFrame(animate);\n    // };\n    \n    // animate();\n    \n    // let fps, fpsInterval, startTime, now, then, elapsed;\n    \n    \n    // function startAnimating(fps) {\n    //     fpsInterval = 1000/fps;\n    //     then = Date.now();\n    //     startTime = then;\n    //     animate();\n    // }\n    \n    // function animate() {\n    //     requestAnimationFrame(animate);\n    //     now = Date.now();\n    //     elapsed = now - then;\n    //     if (elapsed > fpsInterval) {\n    //         then = now - (elapsed % fpsInterval);\n    //         ctx.clearRect(0, 0, canvas.width, canvas.height);\n    //         ctx.drawImage(background1, 0, 0, canvas.width, 134);\n    //         ctx.drawImage(background3, 0, 50, background3.width, 50, 0, 133, canvas.width, 280);\n    //         ctx.drawImage(background2, 0, 60, background2.width, 50, 0, 433, canvas.width, 250);\n    //         ctx.drawImage(grass, grassFrame.width*grassFrame.frameX, 0, 50, 100, 5, 503, 50, 150);\n    //         ctx.drawImage(grass, grassFrame.width*grassFrame.frameX, 0, 50, 100, 250, 500, 50, 150);\n    //         ctx.drawImage(grass, grassFrame.width*grassFrame.frameX, 0, 50, 100, 675, 503, 50, 150);\n    //         ctx.drawImage(grass, grassFrame.width*grassFrame.frameX, 0, 50, 100, 800, 503, 50, 150);\n    \n    //         drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);\n    //         movePlayer();\n    //         handlePlayerFrame();\n    //     }\n    // }\n    // GameView.startAnimating(15);\n    \n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\nclass Player {\n        constructor() {\n            this.x = 250,\n            this.y = 250,\n            this.width = 40,\n            this.height = 50,\n            this.frameX = 0,\n            this.frameY = 0,\n            this.speed = 9,\n            this.moving = false,\n            this.keys = []\n        }\n    \n    handlePlayerFrame() {\n        if (this.frameX < 1 && this.moving) this.frameX++;\n        else this.frameX = 0;\n    }\n\n    movePlayer() {\n        if (this.keys[\"ArrowUp\"] && this.y > 175) {\n            this.y -= this.speed;\n            // this.frameX = 1;\n            this.moving = true;\n        }\n        if (this.keys[\"ArrowLeft\"] && this.x > 0) {\n            this.x -= this.speed;\n            this.moving = true;\n        }\n        if (this.keys[\"ArrowDown\"] && this.y < canvas.height - this.height) {\n            this.y += this.speed;\n            this.moving = true;\n        }\n        if (this.keys[\"ArrowRight\"] && this.x < canvas.width - this.width) {\n            this.x += this.speed;\n            this.moving = true;\n        }\n    }\n\n    \n}\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;