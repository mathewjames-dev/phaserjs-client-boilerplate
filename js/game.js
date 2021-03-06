/*
 * File Name: game.js
 * Description: File for housing the game.
 * Author: mathewjames.dev
 * Author URL: https://mathewjames.dev
 */
// Create a game namespace
class Game extends Phaser.Game {
    constructor(config) {
        super(config);

        // this.socket = io(SERVER_URL); // If we want socket.io

        // If there's music in your game, and it needs to play through-out a few State swaps, then you could reference it below. 
        //this.music = null;

        // Toggle background music theme on or off; starts in "on/true" state 
        //this.musicToggle = true;

        // Your game can check GAMENAME.paused in the game loops to know if it should pause or not.
        //this.paused = false;


        // Here we have some global level vars that persist regardless of State. 
        // Button styling
        this.buttonStyle = { font: "26px Arial", fill: "#000000", align: "center" };

        this.scene.start('Boot');
    }
}

module.exports = Game;