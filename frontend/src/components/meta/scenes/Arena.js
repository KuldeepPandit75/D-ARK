import Phaser from "phaser";

class Arena extends Phaser.Scene {
    constructor(){
        super({key:"Arena"});
    }

    preload(){
        this.load.tilemapTiledJSON('arenaMap',"/arena.json");
        this.load.spritesheet('player1', '/Cute_Fantasy/Player/Player_New/Player_Anim/Player_Idle_Run_Death_Anim.png', {
            frameWidth: 32,
            frameHeight: 32
        });
    }

    create(){
        const arena=this.make.tilemap({key:"arenaMap"});

        const tileset = [
            arena.addTilesetImage('Grass_1_Middle', 'Grass_1_Middle'),
            arena.addTilesetImage('Water_Tile_1', 'Water_Tile_1'),
        ];

        const layers = {};
        arena.layers.forEach((layer) => {
            layers[layer.name] = arena.createLayer(layer.name, tileset, 0, 0);
            // Set collision for all tiles in the layer
            layers[layer.name].setCollisionByExclusion([-1]); // Exclude -1 (empty tile)
        });

        const arenaWidth = arena.widthInPixels; // Get the actual width of the map in pixels
        const arenaHeight = arena.heightInPixels; // Get the actual height of the map in pixels

        this.arenaPlayer = this.physics.add.sprite(arenaWidth / 2.07, arenaHeight / 1.77, 'player1', 0);
        this.arenaPlayer.setOrigin(0.5, 0.5); // Center the player sprite
        this.arenaPlayer.setCollideWorldBounds(true); // Prevent player from moving out of the world bounds
    }

    upload(){

    }
}