import GameView from "./game_view";
import Player from "./player";
import Inventory from "./inventory";

export default class Game {
    constructor() {
        // this.canvas = canvas
        this.inventory = [];
        this.keys = []
        // this.player = new Player();
        const gameView = new GameView();
        gameView.startAnimating(15);
        this.player = new Player();
        this.inventory = new Inventory(700, 100, 300, 120)
        this.inventory.drawInventoryItems();
        // this.inventory.drawAllItems();
    }

    keyInventory(sprite) {
        if (this.player.keys["l"] && this.inventory.collideRect(sprite)) {
            this.inventory.addItem(sprite)
        }
        if (this.player.keys["a"] && this.inventory.items.includes(sprite)) {
            this.inventory.dropItem(sprite)
        }
    }
    
}
  