import Phaser from "phaser";

class Lobby extends Phaser.Scene {
    constructor() {
        super({ key: 'Lobby' });
    }

    preload() {
        this.load.image('background', "/metabackground.webp");
    }

    create(data) {
        console.log('Lobby scene created');

        // Create a tile sprite for the background to allow for a larger map

        const mapWidth = this.cameras.main.width * 1.2; // Example map width
        const mapHeight = this.cameras.main.height * 1.25; // Example map height
        const background = this.add.tileSprite(0, 0, mapWidth, mapHeight, 'background');
        background.setOrigin(0, 0); // Set origin to top-left



        // // Add player sprite at the center

        // let {x,y}=data;

        // this.player = this.physics.add.sprite(x || mapWidth / 2, y || mapHeight / 2.1, 'player');
        // this.player.setOrigin(0.5, 0.5); // Center the player sprite
        // this.player.setScale(0.35); // Decrease the size of the player


        // // Prevent player from moving out of the world bounds
        // this.player.setCollideWorldBounds(true);

        // // Set camera to follow the player
        // this.cameras.main.startFollow(this.player);
    }

    update() {
        // const speed = 150; // Adjust speed as needed
        
        // // Initialize direction vector
        // let dirX = 0;
        // let dirY = 0;
    
        // // Check input and update direction
        // if (this.cursors.left.isDown) {
        //     dirX = -1;
        // } else if (this.cursors.right.isDown) {
        //     dirX = 1;
        // }
    
        // if (this.cursors.up.isDown) {
        //     dirY = -1;
        // } else if (this.cursors.down.isDown) {
        //     dirY = 1;
        // }
    
        // // Create and normalize the direction vector
        // const magnitude = Math.sqrt(dirX * dirX + dirY * dirY);
        // const normalizedDirX = magnitude === 0 ? 0 : dirX / magnitude;
        // const normalizedDirY = magnitude === 0 ? 0 : dirY / magnitude;
    
        // // Apply velocity using the vector
        // this.player.setVelocity(normalizedDirX * speed, normalizedDirY * speed);
    
    }
    
}

export default Lobby;