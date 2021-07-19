console.log("Webpack is working")

import Game from "./game.js";
import GameView from "./game_view";
import Player from "./player.js";

document.addEventListener("DOMContentLoaded", function () {
    const startBtn = document.getElementsByClassName('start-btn')[0];
    const playBtn = document.getElementsByClassName('play-btn')[0];
    // const restartBtn = document.getElementsByClassName('restart-btn')[0];
    const gameStory = document.getElementsByClassName('game-story')[0];
    const instructions = document.getElementsByClassName('instructions')[0];
    const closeMenu = document.getElementsByClassName('close-menu')[0];
    const menu = document.getElementsByClassName('menu')[0];
    const gameView = new GameView();
    gameView.startPage();
    
    startBtn.addEventListener('click', () => {
        menu.classList.remove('hidden');
    })
    
    closeMenu.addEventListener('click', () => {
        menu.classList.add('hidden');
    })
    
    playBtn.addEventListener('click', gameView.newGame);

    
    
});