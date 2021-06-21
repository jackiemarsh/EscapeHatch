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

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\")\n\nclass GameView {\n    constructor () {\n        // this.game = game;\n        this.ctx = ctx;\n        // this.ctx.beginPath();\n        // this.ctx.rect(20, 40, 50, 50);\n        // this.ctx.fillStyle = \"#FF0000\";\n        // this.ctx.fill();\n        // this.ctx.closePath();\n    }\n  \n\n\n    start() {\n    // this.bindKeyHandlers();\n    this.lastTime = 0;\n    // this.game.drawShip()\n    requestAnimationFrame(this.animate.bind(this));\n    };\n\n    animate(time) {\n    // const timeDelta = time - this.lastTime;\n  \n    // this.game.step(timeDelta);\n    // this.game.draw(this.ctx);\n    this.lastTime = time;\n  \n    requestAnimationFrame(this.animate.bind(this));\n    };\n}\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("console.log(\"Webpack is working\")\n\n// const Game = require(\"./game\");\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const canvasEl = document.getElementById(\"escape-canvas\");\n//   canvasEl.width = Game.DIM_X;\n//   canvasEl.height = Game.DIM_Y;\n\n  const ctx = canvasEl.getContext(\"2d\");\n//   const game = new Game();\n//   new GameView(game, ctx).start();\n    ctx.beginPath();\n    ctx.rect(0, 0, canvasEl.width, canvasEl.height);\n    ctx.fillStyle = \"blue\";\n    ctx.fill();\n    ctx.closePath();\n    // let img = new Image();\n    // img.src = \"board-ship.png\"\n    // // let ctx = canvas.getContext('2d');\n    //     ctx.drawImage(img, 0, 0)\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;