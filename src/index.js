console.log("Webpack is working")

import { forEach } from "underscore";
import Game from "./game.js";
import GameView from "./game_view";
import Player from "./player.js";

document.addEventListener("DOMContentLoaded", function () {
    const startBtn = document.getElementsByClassName('start-btn')[0];
    const playBtn = document.getElementsByClassName('play-btn')[0];
    // const restartBtn = document.getElementsByClassName('restart-btn')[0];
    const gameStory = document.getElementsByClassName('game-story')[0];
    const instructions = document.getElementsByClassName('instructions')[0];
    const soundControlsStart = document.getElementsByClassName('start-controls')[0];
    const soundControl = document.getElementsByClassName('sound-controls')[0];
    const pirateMusic = document.getElementById('pirate-music');
    const soundPlayS = document.getElementById('sound-play-start');
    const soundPauseS = document.getElementById('sound-pause-start');
    const soundPause = document.getElementById('sound-pause');
    const soundPlay = document.getElementById('sound-play');
    const closeMenu = document.getElementsByClassName('close-menu')[0];
    const menu = document.getElementsByClassName('menu')[0];
    const gameView = new GameView();
    gameView.startPage();
    // gameView.music();

    startBtn.addEventListener('click', () => {
        menu.classList.remove('hidden');
        gameView.music();
    })
    
    closeMenu.addEventListener('click', () => {
        menu.classList.add('hidden');
    })
    
    playBtn.addEventListener('click', gameView.newGame);


    soundControlsStart.addEventListener('click', () => {
         if (pirateMusic.paused) {
             pirateMusic.loop = true; 
             pirateMusic.play(); 
             soundPause.classList.remove('hidden');
             soundPauseS.classList.remove('hidden');
             soundPlay.classList.add('hidden');
             soundPlayS.classList.add('hidden');
          } else {
              pirateMusic.pause();
              clearInterval(gameView.bubbles)
              console.log(gameView.bubbles)
              soundPlay.classList.remove('hidden');
              soundPlayS.classList.remove('hidden');
              soundPause.classList.add('hidden');
              soundPauseS.classList.add('hidden');
          }
    })
    
    soundControl.addEventListener('click', () => {
        const soundPlay = document.getElementById('sound-play');
        const soundPause = document.getElementById('sound-pause');
        const winSound = document.getElementById("win-sound");
        const loseSound = document.getElementById("lose-sound");
        const addSound = document.getElementById("add-sound");
        // const sounds = document.getElementsByTagName("audio")
        if (soundPause.classList.contains('hidden')) {
            
            // sounds.muted = true
            soundPause.classList.remove('hidden');
            soundPauseS.classList.remove('hidden');
            soundPlay.classList.add('hidden');
            soundPlayS.classList.add('hidden');
            // winSound.muted = true;
            // loseSound.muted = true;
            // addSound.muted = true;
         } else {
            clearInterval(gameView.bubbles)
             soundPlay.classList.remove('hidden');
             soundPlayS.classList.remove('hidden');
             soundPause.classList.add('hidden');
             soundPauseS.classList.add('hidden');
         }
    })
});