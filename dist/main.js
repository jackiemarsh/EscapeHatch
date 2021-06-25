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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _inventory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inventory */ \"./src/inventory.js\");\n\n\n\n\nclass Game {\n    constructor() {\n        this.inventory = [];\n        this.keys = []\n\n        const gameView = new _game_view__WEBPACK_IMPORTED_MODULE_0__.default();\n        this.canvas = gameView.canvas;\n        this.ctx = gameView.ctx;\n        gameView.startAnimating(15);\n        this.timer();\n    }\n    \n    timer() {\n        const startMinutes = 1;\n        // this.level.time when harder levels built\n        let time = startMinutes*60\n        const countdownEl = document.getElementById(\"clock-display\");\n        \n        let startTime = new Date().getTime();\n        let runClock = setInterval(() => {\n            if(Math.floor(new Date().getTime()) - startTime > 62000){\n                clearInterval(runClock);\n                return false;\n            } \n            let m = Math.floor(time/60);\n            let s = Math.floor(time%60);\n            \n            s = s < 10 ? \"0\" + s : s;\n            countdownEl.innerHTML = `${m}:${s}`;\n            time--;\n        }, 1000)\n    }\n\n}\n  \n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameView)\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n/* harmony import */ var _inventory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inventory */ \"./src/inventory.js\");\n\n\n\n\nclass GameView {\n    constructor () {\n        this.canvas = document.getElementById(\"game-canvas\");\n        this.ctx = this.canvas.getContext(\"2d\");\n        this.canvas.width = 900;\n        this.canvas.height = 600;\n        this.then = 0;\n        this.fpsInterval = 0;\n        \n        this.grassFrame = {\n            width: 50,\n            height: 150,\n            frameX: 0,\n            speed: 2\n        };\n\n        this.moveBackground = this.moveBackground.bind(this);\n        this.startAnimating = this.startAnimating.bind(this);\n        this.animate = this.animate.bind(this);\n        this.inventory = [];\n        setInterval(this.moveBackground, 600, this.grassFrame);\n        console.log(\"game view inventory\", this.inventory);\n        this.inventory = new _inventory__WEBPACK_IMPORTED_MODULE_2__.default(700, 100, 328, 140);\n        this.player = new _player_js__WEBPACK_IMPORTED_MODULE_1__.default(this.canvas, this.inventory);\n        this.inventory.drawInventory();\n        console.log(\"game view gameinventory\", this.inventory.gameItems)\n        this.player.drawInventoryItems();\n        this.drawAllItems();\n       \n        // this.ctx.mozImageSmoothingEnabled = false;\n        // this.ctx.webkitImageSmoothingEnabled = false;\n        // this.ctx.msImageSmoothingEnabled = false;\n        // this.ctx.imageSmoothingEnabled = false;\n        this.newGame = this.newGame.bind(this);\n        this.winGame = this.winGame.bind(this);\n        // this.startAnimating(3);\n    }\n\n    startPage() {\n        // const playBtn = document.getElementsByClassName('play-btn')[0];\n        // const gameOver = document.getElementsByClassName('game-over')[0];\n        const gameStory = document.getElementsByClassName('game-story')[0];\n        const instructions = document.getElementsByClassName('instructions')[0];\n        const endBox = document.getElementsByClassName('end-game')[0];\n        const gameOver = document.getElementsByClassName('lose-box')[0];\n        const youWin = document.getElementsByClassName('win-box')[0];\n        // playBtn.classList.add('hidden');\n        instructions.classList.add('hidden');\n        // gameOver.classList.add('hidden');\n        gameStory.classList.add('hidden');\n        youWin.classList.add('hidden');\n        gameOver.classList.add('hidden');\n        endBox.classList.add('hidden');\n    }\n\n    newGame() {\n        console.log(\"I'm hit!\")\n        // this.inventory = new Inventory(700, 100, 328, 140);\n        // console.log(\"game view inventory\", this.inventory)\n        // this.player = new Player(this.canvas, this.inventory);\n        // this.inventory.drawInventory();\n        // console.log(\"game view gameinventory\", this.inventory.gameItems)\n        let game = new _game__WEBPACK_IMPORTED_MODULE_0__.default();\n\n        const openingBox = document.getElementsByClassName('opening-box')[0];\n        const endBox = document.getElementsByClassName('end-game')[0];\n        const playBtn = document.getElementsByClassName('play-btn')[0];\n        const gameOver = document.getElementsByClassName('lose-box')[0];\n        const youWin = document.getElementsByClassName('win-box')[0];\n        // const cont = document.getElementsByClassName('cont')[0];\n        const gameStory = document.getElementsByClassName('game-story')[0];\n        const instructions = document.getElementsByClassName('instructions')[0];\n        youWin.classList.add('hidden');\n        gameOver.classList.add('hidden');\n        openingBox.classList.add('hidden');\n        endBox.classList.add('hidden');\n        playBtn.classList.add('hidden');\n        instructions.classList.add('hidden');\n        // gameOver.classList.add('hidden');\n        gameStory.classList.add('hidden');\n    }\n\n    winGame() {\n        const endBox = document.getElementsByClassName('end-game')[0];\n        const youWin = document.getElementsByClassName('win-box')[0];\n\n        if (this.player.inventory.length === 4) {\n            endBox.classList.remove('hidden');\n            youWin.classList.remove('hidden');\n        }\n    }\n\n    gameOver() {\n\n    }\n\n    drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {\n        this.ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);\n    }\n\n    moveBackground(sprite) {\n        if (sprite.frameX === 0) sprite.frameX++;\n        else sprite.frameX = 0;\n    } \n\n    // setInterval(moveBackground, 600, this.grassFrame);\n    // setInterval(this.moveBackground.bind(this), 600, this.grassFrame);\n\n    drawAllItems() {\n        this.inventory.gameItems.forEach(item => {\n            let newItem = new Image();\n            newItem.src = item.src;\n\n            if (newItem.complete) { \n                this.ctx.drawImage(newItem, item.x, item.y, item.w, item.h, item.dx, item.dy, item.dw, item.dh) \n            }\n        });\n    };\n\n    startAnimating(fps) {\n        let startTime;\n        this.fpsInterval = 1000/fps;\n        this.then = Date.now();\n        startTime = this.then;\n        this.animate();\n    }\n    \n    animate() {\n        let now, elapsed;\n        \n        const playerSprite = new Image();\n        playerSprite.src = \"../dist/assets/images/guybrush 3.PNG\"\n        const background1 = new Image();\n        background1.src = \"../dist/assets/images/underwater.png\"\n        const background2 = new Image();\n        background2.src = \"../dist/assets/images/ship.png\"\n        const background3 = new Image();\n        background3.src = \"../dist/assets/images/ship copy.png\"\n        const grass = new Image();\n        grass.src = \"../dist/assets/images/grass.png\";\n        const environment = new Image();\n        environment.src = \"../dist/assets/images/ecco_1.PNG\"\n        // const\n\n        now = Date.now();\n        elapsed = now - this.then;\n\n        if (elapsed > this.fpsInterval) {\n            // console.log(\"rendering\")\n            this.then = now - (elapsed % this.fpsInterval);\n\n            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n            this.ctx.drawImage(background1, 0, 0, this.canvas.width, 134);\n            this.ctx.drawImage(background3, 0, 50, background3.width, 50, 0, 133, this.canvas.width, 280);\n            this.ctx.drawImage(background2, 0, 60, background2.width, 50, 0, 433, this.canvas.width, 250);\n            this.ctx.drawImage(grass, this.grassFrame.width*this.grassFrame.frameX, 0, 50, 100, 5, 503, 50, 150);\n            this.ctx.drawImage(grass, this.grassFrame.width*this.grassFrame.frameX, 0, 50, 100, 250, 500, 50, 150);\n            this.ctx.drawImage(grass, this.grassFrame.width*this.grassFrame.frameX, 0, 50, 100, 675, 503, 50, 150);\n            this.ctx.drawImage(grass, this.grassFrame.width*this.grassFrame.frameX, 0, 50, 100, 800, 503, 50, 150);\n            this.ctx.drawImage(environment, 70, 62, 78, 100, 500, 500, 117, 150);\n            this.ctx.drawImage(environment, 400, 62, 50, 50, 15, 100, 100, 100);\n            this.ctx.drawImage(environment, 400, 62, 50, 50, 800, 100, 100, 100);\n            this.ctx.drawImage(environment, 350, 82, 40, 40, 825, 535, 80, 80);\n\n            this.drawSprite(playerSprite, this.player.width * this.player.frameX, this.player.height * this.player.frameY, this.player.width, this.player.height, this.player.x, this.player.y, this.player.width+20, this.player.height+20);\n            this.player.keyListeners();\n            this.player.handlePlayerFrame();\n            this.winGame();\n            \n        }\n        requestAnimationFrame(this.animate.bind(this));\n        this.drawAllItems();\n        // this.player.drawInventoryItems();\n    };\n\n    // newGame() {\n    //     let gameCanvas = document.getElementById('game-canvas');\n    //     this.game = new Game();\n    // }\n\n    // restart() {\n    //     let gameOver = document.getElementsByClassName('game-over')[0];\n    //     let cont = document.getElementsByClassName('cont')[0];\n    //     let transitionEvent;\n\n    //     const gameOverFadeOut = (e) => {\n    //         e.preventDefault();\n\n    //         this.newGame();\n    //         this.gameView.player.KeyListeners();\n    //         // this.pause = false;\n\n    //         gameOver.classList.add('hidden');\n    //         cont.classList.add('hidden');\n            \n    //         document.removeEventListener('keydown', gameOverFadeOut);\n    //     }\n    // }\n  \n    // for (let index = this.items.length-1; index > -1; --index) {\n    //     let item = items[index];\n\n    //     if (item.y + item.h >= map_floor && item.collideRect(player) && pointer.down && item.collidePoint(pointer)) {\n    //       front_item_index = index;// store the frontmost item index\n    //     }\n\n    //     // item.updatePosition(map_gravity, map_friction, map_floor);\n    //     this.ctx.drawImage(tile_set, item.sx, item.sy, item.w, item.h, Math.round(item.x), Math.round(item.y), item.w, item.h);\n    //   }\n    //   // If there is an item selected, add it to the inventory\n    //   if (front_item_index != undefined && inventory.addItem(items[front_item_index])) items.splice(front_item_index, 1); \n  \n\n};\n\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\nconsole.log(\"Webpack is working\")\n\n;\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    const startBtn = document.getElementsByClassName('start-btn')[0];\n    // const startGame = document.getElementsByClassName('start-game')[0];\n    const playBtn = document.getElementsByClassName('play-btn')[0];\n    const gameStory = document.getElementsByClassName('game-story')[0];\n    const instructions = document.getElementsByClassName('instructions')[0];\n    const gameView = new _game_view__WEBPACK_IMPORTED_MODULE_1__.default();\n    gameView.startPage();\n    \n    startBtn.addEventListener('mouseenter', () => {\n        playBtn.classList.remove('hidden');\n        gameStory.classList.remove('hidden');\n        instructions.classList.remove('hidden');\n    })\n    \n    startBtn.addEventListener('mouseleave', () => {\n        playBtn.classList.add('hidden');\n        gameStory.classList.add('hidden');\n        instructions.classList.add('hidden');\n    })\n    \n    playBtn.addEventListener('click', gameView.newGame);\n\n    // const canvas = document.getElementById(\"practice-canvas\");\n    // const ctx = canvas.getContext(\"2d\");\n    // canvas.width = 900;\n    // canvas.height = 600;\n    \n    // const keys = []\n    \n    // const player = {\n    //     x: 250,\n    //     y: 250,\n    //     width: 40,\n    //     height: 50,\n    //     frameX: 0,\n    //     frameY: 0,\n    //     speed: 9,\n    //     moving: false\n    // };\n    \n    // const grassFrame = {\n    //     width: 50,\n    //     height: 150,\n    //     frameX: 0,\n    //     speed: 2\n    // }\n    \n    // const playerSprite = new Image();\n    // playerSprite.src = \"../dist/assets/images/Pirate.png\"\n    // const background1 = new Image();\n    // background1.src = \"../dist/assets/images/underwater.png\"\n    // const background2 = new Image();\n    // background2.src = \"../dist/assets/images/ship.png\"\n    // const background3 = new Image();\n    // background3.src = \"../dist/assets/images/ship copy.png\"\n    // const grass = new Image();\n    // grass.src = \"../dist/assets/images/grass.png\"\n    \n    // function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {\n    //     ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);\n    \n    // }\n    \n    // window.addEventListener(\"keydown\", function(e) {\n    //     keys[e.key] = true;\n    //     // console.log(keys);\n    //     Player.moving = true;\n    // });\n    \n    // window.addEventListener(\"keyup\", function(e) {\n    //     delete keys[e.key];\n    //     Player.moving = false;\n    // });\n    \n    // function moveBackground() {\n    //     if (grassFrame.frameX === 0) grassFrame.frameX = 1;\n    //     else grassFrame.frameX = 0;\n    // } \n    // setInterval(moveBackground, 600)\n    \n    // function movePlayer() {\n    //     if (keys[\"ArrowUp\"] && player.y > 175) {\n    //         player.y -= player.speed;\n    //         // player.frameX = 1;\n    //         player.moving = true;\n    //     }\n    //     if (keys[\"ArrowLeft\"] && player.x > 0) {\n    //         player.x -= player.speed;\n    //         player.moving = true;\n    //     }\n    //     if (keys[\"ArrowDown\"] && player.y < canvas.height - player.height) {\n    //         player.y += player.speed;\n    //         player.moving = true;\n    //     }\n    //     if (keys[\"ArrowRight\"] && player.x < canvas.width - player.width) {\n    //         player.x += player.speed;\n    //         player.moving = true;\n    //     }\n    // }\n    \n    // function handlePlayerFrame() {\n    //     if (player.frameX < 1 && player.moving) player.frameX++;\n    //     else player.frameX = 0;\n    // }\n    \n    // function animate() {\n    //     ctx.clearRect(0, 0, canvas.width, canvas.height)\n    //     ctx.drawImage(background1, 0, 0, canvas.width, 134);\n    //     // position++;\n    //     ctx.drawImage(background3, 0, 50, background3.width, 50, 0, 133, canvas.width, 280)\n    //     ctx.drawImage(background2, 0, 60, background2.width, 50, 0, 433, canvas.width, 250)\n    //     drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height)\n    //     movePlayer();\n    //     handlePlayerFrame();\n    \n    //     requestAnimationFrame(animate);\n    // };\n    \n    // animate();\n    \n    // let fps, fpsInterval, startTime, now, then, elapsed;\n    \n    \n    // function startAnimating(fps) {\n    //     fpsInterval = 1000/fps;\n    //     then = Date.now();\n    //     startTime = then;\n    //     animate();\n    // }\n    \n    // function animate() {\n    //     requestAnimationFrame(animate);\n    //     now = Date.now();\n    //     elapsed = now - then;\n    //     if (elapsed > fpsInterval) {\n    //         then = now - (elapsed % fpsInterval);\n    //         ctx.clearRect(0, 0, canvas.width, canvas.height);\n    //         ctx.drawImage(background1, 0, 0, canvas.width, 134);\n    //         ctx.drawImage(background3, 0, 50, background3.width, 50, 0, 133, canvas.width, 280);\n    //         ctx.drawImage(background2, 0, 60, background2.width, 50, 0, 433, canvas.width, 250);\n    //         ctx.drawImage(grass, grassFrame.width*grassFrame.frameX, 0, 50, 100, 5, 503, 50, 150);\n    //         ctx.drawImage(grass, grassFrame.width*grassFrame.frameX, 0, 50, 100, 250, 500, 50, 150);\n    //         ctx.drawImage(grass, grassFrame.width*grassFrame.frameX, 0, 50, 100, 675, 503, 50, 150);\n    //         ctx.drawImage(grass, grassFrame.width*grassFrame.frameX, 0, 50, 100, 800, 503, 50, 150);\n    \n    //         drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);\n    //         movePlayer();\n    //         handlePlayerFrame();\n    //     }\n    // }\n    // GameView.startAnimating(15);\n    \n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/inventory.js":
/*!**************************!*\
  !*** ./src/inventory.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Inventory)\n/* harmony export */ });\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ \"./src/item.js\");\n\n\nclass Inventory {\n    constructor(x, y, w, h) {\n        this.x = x;\n        this.y = y;\n        this.w = w;\n        this.h = h;\n        this.allItems = new Array();\n        this.playerInventory = new Array();\n        this.inventoryItems = this.generateAllItems();\n        this.gameItems = this.generateGameItems();\n        this.columns = 6;\n        this.rows = 2;\n\n        this.goldCoins = {\n            width: 32,\n            height: 32,\n            frameX: 0,\n            speed: 2\n        };\n\n        this.canvas = document.getElementById(\"inventory-canvas\");\n        this.ctx = this.canvas.getContext(\"2d\", { alpha: true });\n        // this.ctx.mozImageSmoothingEnabled = false;\n        // this.ctx.webkitImageSmoothingEnabled = false;\n        // this.ctx.msImageSmoothingEnabled = false;\n        // this.ctx.imageSmoothingEnabled = false;\n        this.moveCoin = this.moveCoin.bind(this);\n        this.generateAllItems = this.generateAllItems.bind(this);\n        this.generateGameItems = this.generateGameItems.bind(this);\n        setInterval(this.moveCoin, 300, this.goldCoins);\n    };\n\n\n    \n\n    // collidePoint(point) {\n\n    //     if (point.x < this.x || point.x > this.x + this.w || point.y < this.y || point.y > this.y + this.h) return false;\n\n    //     return true;\n\n    // };\n\n    //   let player = new Player();\n    //   let inventory = new Inventory(120, 8, 128, 32);\n    generateAllItems() {\n        let xLow = 50;\n        let yLow = 170;\n        let xHigh = 850;\n        let yHigh = 550;\n        let dXMin = Math.floor(Math.random() * (1 + xHigh - xLow)) + xLow;\n        let dYMin = Math.floor(Math.random() * (1 + yHigh - yLow)) + yLow;\n        let generatedItems = [\n            //  new Item(\"barrel\", 50, 200, 950, 600, Math.random() * 250, Math.random() * 120, 80, 51, \"../dist/assets/inventory/barrel.png\"),\n             new _item__WEBPACK_IMPORTED_MODULE_0__.default(\"bread\", 0, 0, 466, 319, Math.floor(Math.random() * (1 + xHigh - xLow)) + xLow, Math.floor(Math.random() * (1 + yHigh - yLow)) + yLow, 35, 35, \"../dist/assets/inventory/bread.png\"),\n             new _item__WEBPACK_IMPORTED_MODULE_0__.default(\"coin\", 0, 0, 345, 417, Math.floor(Math.random() * (1 + xHigh - xLow)) + xLow, Math.floor(Math.random() * (1 + yHigh - yLow)) + yLow, 35, 35, \"../dist/assets/inventory/coin.png\"),\n             new _item__WEBPACK_IMPORTED_MODULE_0__.default(\"crystal\", 0, 0, 361, 538, Math.floor(Math.random() * (1 + xHigh - xLow)) + xLow, Math.floor(Math.random() * (1 + yHigh - yLow)) + yLow, 35, 35, \"../dist/assets/inventory/crystal.png\"),\n             new _item__WEBPACK_IMPORTED_MODULE_0__.default(\"shell\", 100, 0, 50, 50, Math.floor(Math.random() * (1 + xHigh - xLow)) + xLow, Math.floor(Math.random() * (1 + yHigh - yLow)) + yLow, 35, 35, \"../dist/assets/inventory/shell.png\"),\n             new _item__WEBPACK_IMPORTED_MODULE_0__.default(\"key\", 32, 0, 32, 32, Math.floor(Math.random() * (1 + xHigh - xLow)) + xLow, Math.floor(Math.random() * (1 + yHigh - yLow)) + yLow, 35, 35, \"../dist/assets/inventory/KeyIcons.png\"),\n             new _item__WEBPACK_IMPORTED_MODULE_0__.default(\"letters\", 0, 0, 581, 458, Math.floor(Math.random() * (1 + xHigh - xLow)) + xLow, Math.floor(Math.random() * (1 + yHigh - yLow)) + yLow, 45, 45, \"../dist/assets/inventory/paper.png\"),\n             new _item__WEBPACK_IMPORTED_MODULE_0__.default(\"bottle\", 0, 0, 400, 500, Math.floor(Math.random() * (1 + xHigh - xLow)) + xLow, Math.floor(Math.random() * (1 + yHigh - yLow)) + yLow, 45, 45, \"../dist/assets/inventory/bottle.png\"),\n             new _item__WEBPACK_IMPORTED_MODULE_0__.default(\"quiche\", 0, 0, 290, 290, Math.floor(Math.random() * (1 + xHigh - xLow)) + xLow, Math.floor(Math.random() * (1 + yHigh - yLow)) + yLow, 35, 35, \"../dist/assets/inventory/quiche.png\"),\n             new _item__WEBPACK_IMPORTED_MODULE_0__.default(\"skull\", 0, 0, 346, 398, Math.floor(Math.random() * (1 + xHigh - xLow)) + xLow, Math.floor(Math.random() * (1 + yHigh - yLow)) + yLow, 35, 40, \"../dist/assets/inventory/skull.png\"),\n             new _item__WEBPACK_IMPORTED_MODULE_0__.default(\"wood\", 0, 0, 514, 423, Math.floor(Math.random() * (1 + xHigh - xLow)) + xLow, Math.floor(Math.random() * (1 + yHigh - yLow)) + yLow, 35, 35, \"../dist/assets/inventory/wood.png\"),\n            ];\n        return generatedItems;\n    }\n\n    generateGameItems() {\n        let gameItems = []\n        while (gameItems.length < 8) {\n            let el = this.inventoryItems[Math.floor(Math.random()*this.inventoryItems.length)]\n            if (!gameItems.includes(el)) {\n                gameItems.push(el) \n            }\n        }\n        return gameItems;\n    };\n    // drawInventoryItems() {\n    //     this.inventoryItems = this.generateAllItems();\n\n    //     if (this.inventoryItems.length) { \n    //         this.inventoryItems.forEach(item => {\n    //             // console.log(item)\n    //             let index = this.inventoryItems.indexOf(item);\n    //             let i = ((this.w - 35) / this.columns * (index % this.columns))+3\n    //             let jdex = 0\n    //                 if (index > 5) {\n    //                     jdex = 1\n    //                 }\n    //             let newItem = new Image();\n    //             newItem.src = item.src;\n    //             newItem.onload = () => { \n    //             this.ctx.drawImage(newItem, item.x, item.y, item.w, item.h, i, (this.h / this.rows * jdex)+18 , item.dw, item.dh) \n    //             }\n    //         });\n    //     }\n    // }\n    // var pointer = { x:100, y:0, down:false };\n\n    // function loop(time_step) {\n\n    // window.requestAnimationFrame(loop);// perpetuate the loop\n    \n    clickInventory() {\n        //    if (pointer.down && inventory.items.length > 0 && inventory.collidePoint(pointer)) {\n        //        let index = Math.floor((pointer.x - inventory.x) / (inventory.w / inventory.columns));\n               \n        //        pointer.x = player.x + player.w * 0.5;\n        //        let item = inventory.dropItem(index, player.x, player.y);\n               \n        //        if (item) items.unshift(item);\n        //     };\n    };\n\n    moveCoin(sprite) {\n        if (sprite.frameX < 8) sprite.frameX++;\n        else sprite.frameX = 0;\n    } \n\n    drawInventory() {\n        // this.ctx.fillStyle = \"lightgray\";\n        // this.ctx.fillRect(this.x, this.y, this.w-28, this.h-28);\n\n        const coin = new Image();\n        coin.src = \"../dist/assets/inventory/coin_gold.png\"\n        // for (let i = 0; i<this.canvas.width; i+=50) {\n        //     for (let j = 0; j<this.canvas.clientHeight; j+=30) {\n                coin.onload = () => { \n                    this.ctx.drawImage(coin, this.goldCoins.width*this.goldCoins.frameX, 0, 32, 32, 0, 0, 25, 25)\n                    this.ctx.drawImage(coin, this.goldCoins.width*this.goldCoins.frameX, 0, 32, 32, 65, 0, 25, 25)\n                    this.ctx.drawImage(coin, this.goldCoins.width*this.goldCoins.frameX, 0, 32, 32, 130, 0, 25, 25)\n                    this.ctx.drawImage(coin, this.goldCoins.width*this.goldCoins.frameX, 0, 32, 32, 195, 0, 25, 25)\n                    this.ctx.drawImage(coin, this.goldCoins.width*this.goldCoins.frameX, 0, 32, 32, 275, 0, 25, 25)\n                    this.ctx.drawImage(coin, this.goldCoins.width*this.goldCoins.frameX, 0, 32, 32, 275, 70, 25, 25)\n                    this.ctx.drawImage(coin, this.goldCoins.width*this.goldCoins.frameX, 0, 32, 32, 275, 125, 25, 25)\n                    this.ctx.drawImage(coin, this.goldCoins.width*this.goldCoins.frameX, 0, 32, 32, 195, 125, 25, 25)\n                    this.ctx.drawImage(coin, this.goldCoins.width*this.goldCoins.frameX, 0, 32, 32, 130, 125, 25, 25)\n                    this.ctx.drawImage(coin, this.goldCoins.width*this.goldCoins.frameX, 0, 32, 32, 65, 125, 25, 25)\n                    this.ctx.drawImage(coin, this.goldCoins.width*this.goldCoins.frameX, 0, 32, 32, 0, 125, 25, 25)\n                    this.ctx.drawImage(coin, this.goldCoins.width*this.goldCoins.frameX, 0, 32, 32, 0, 70, 25, 25)\n                }\n                requestAnimationFrame(this.drawInventory.bind(this));\n        //     }\n        // }\n    };\n\n}\n\n//# sourceURL=webpack:///./src/inventory.js?");

/***/ }),

/***/ "./src/item.js":
/*!*********************!*\
  !*** ./src/item.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Item)\n/* harmony export */ });\n// import Inventory from \"./inventory\";\n\nclass Item {\n    constructor(name, x, y, w, h, dx, dy, dw, dh, src){\n        this.name = name;\n        this.x = x;\n        this.y = y;\n        this.w = w;\n        this.h = h;\n        this.dx = dx;\n        this.dy = dy;\n        this.dw = dw;\n        this.dh = dh;\n        this.vx = this.vy = 0;\n        this.src = src;\n    }\n\n    \n}\n\n//# sourceURL=webpack:///./src/item.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n/* harmony import */ var _inventory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inventory */ \"./src/inventory.js\");\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item */ \"./src/item.js\");\n\n\n\n\nclass Player {\n        constructor(canvas, allItems) {\n            this.x = 350,\n            this.y = 250,\n            this.width = 58,\n            this.height = 84,\n            this.frameX = 0,\n            this.frameY = 0,\n            this.maxFrame = 5,\n            this.frameSpeed = 1,\n            this.speed = 6,\n            // this.ticksPerFrame = ;\n            this.tickCount = 0; \n            this.moving = false,\n            this.direction = \"idle\",\n            this.inventory = [\n                new _item__WEBPACK_IMPORTED_MODULE_2__.default(\"skull\", 0, 0, 346, 398, Math.random() * 855, Math.random() * 600, 35, 40, \"../dist/assets/inventory/skull.png\"),\n                new _item__WEBPACK_IMPORTED_MODULE_2__.default(\"wood\", 0, 0, 514, 423, Math.random() * 855, Math.random() * 600, 35, 35, \"../dist/assets/inventory/wood.png\"),\n                                ];\n            this.allItems = allItems;\n \n            this.renderCtx = this.allItems.ctx;\n            this.canvas = canvas;\n            this.movePlayer = this.movePlayer.bind(this);\n            this.drawInventoryItems()\n        }\n        \n    handlePlayerFrame() {\n        this.tickCount += this.frameSpeed;\n        if (this.tickCount > this.speed) {\n            this.tickCount = 0;\n            if (this.frameX < this.maxFrame) {\n                this.frameX++\n            } else this.frameX = 0\n        }\n    }\n        \n    keyListeners() {\n        document.addEventListener(\"keydown\", this.movePlayer);\n        \n        document.addEventListener(\"keyup\", (e) => {\n            this.moving = false;\n            this.direction = \"idle\";\n            this.frameX = 0;\n            this.frameY = 0;\n            this.maxFrame = 5;\n        });\n\n    }\n\n    movePlayer(e) {\n        if (this.moving === false) {\n            this.frameX = 0;\n            this.frameY = 0;\n            this.frameSpeed = 1;\n        }\n        switch (e.key) {\n            case \"ArrowUp\":\n                if (this.y > 175) {\n                    this.y -= this.speed;\n                    this.frameY = 1;\n                    this.moving = true;\n                    this.direction = \"up\";\n                    this.frameSpeed = 3;\n                }\n                break;\n            case \"ArrowLeft\":\n                if (this.x > 0) {\n                    this.x -= this.speed;\n                    this.moving = true;\n                    this.direction = \"left\";\n                    this.frameX = 0;\n                    this.frameY = 0;\n                    this.frameSpeed = 3;\n                }\n                break;\n            case \"ArrowDown\":\n                if (this.y < this.canvas.height - this.height) {\n                    this.y += this.speed;\n                    this.moving = true;\n                    this.direction = \"down\";\n                    this.frameX = 0;\n                    this.frameY = 3;\n                    this.maxFrame = 12;\n                    this.frameSpeed = 3;\n                }\n                break;\n            case \"ArrowRight\":\n                if (this.x < this.canvas.width - this.width) {\n                    this.x += this.speed;\n                    this.moving = true;\n                    this.direction = \"right\";\n                    this.frameY = 2;\n                    this.frameSpeed = 3;\n                }\n                break;\n            case \"l\":\n            let item = this.collideRect();\n                if (item) {\n                    this.addItem(item);\n                    this.drawInventoryItems();\n                }\n                break;\n            case \"a\":\n                if (this.inventory.includes(item)) {\n                    this.dropItem(item);\n                    this.drawInventoryItems();\n                }\n                break;\n        default:\n                break;\n            }\n    }\n\n    drawInventoryItems() {\n        console.log(\"drawinventoryitems is being called\", this.inventory)\n        if (this.inventory.length) { \n            this.inventory.forEach(item => {\n                let index = this.inventory.indexOf(item);\n                let i = (this.allItems.w / this.allItems.columns * (index % this.allItems.columns))+5\n                let jdex = 0\n                    if (index > 5) {\n                        jdex = 1\n                    }\n                let newItem = new Image();\n                newItem.src = item.src;\n                newItem.onload = () => { \n                    this.renderCtx.drawImage(newItem, item.x, item.y, item.w, item.h, i, (this.allItems.h / this.allItems.rows * jdex)+18 , item.dw, item.dh); \n                }\n            });\n        }\n    }\n\n    addItem(item) {\n        if (this.inventory.length == this.allItems.columns*2) {\n            item.vy = -4;\n            return false\n        }\n        this.allItems.gameItems.splice(this.allItems.gameItems.indexOf(item), 1)\n        this.inventory.push(item)\n        return true;\n        \n    };\n\n    // dropItem(index, x, y) {\n    //     let item = this.inventory[index];\n    //     if (item) {\n    //         this.items.splice(index, 1);\n    //         item.x = x;\n    //         item.y = y -item.h;\n    //         item.vx = Math.random() * 2 - 1;\n    //         item.vy = Math.random() * -5 -1;\n    //     } return item; \n    // };\n    collideRect() {\n        let arr = this.allItems.inventoryItems;\n        for (let i =0; i<arr.length; i++) { \n            let pcX = (this.x+this.width)/2;\n            let pcY = (this.y+this.height)/2;\n            let objX = (arr[i].dx+arr[i].dw)/2;\n            let objY = (arr[i].dy+arr[i].dh)/2;\n\n            console.log(Math.abs(pcX - objX), Math.abs(pcY + objY))\n            if (Math.abs(pcX - objX) <15 && Math.abs(pcY - objY) < 20) {\n                return arr[i];\n            } \n            \n        }\n        console.log(\"false\")\n        return false;\n    };\n\n    // keyInventory(item) {\n    //     if (this.keys[\"l\"] && this.collideRect(item)) {\n    //         console.log(\"l is in keys\")\n    //         this.addItem(item);\n    //         this.drawInventoryItems();\n    //     }\n    //     if (this.keys[\"a\"] && this.inventory.includes(item)) {\n    //         this.dropItem(item);\n    //         this.drawInventoryItems();\n    //     }\n    // }\n}\n\n//# sourceURL=webpack:///./src/player.js?");

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