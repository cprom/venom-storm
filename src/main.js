import { Start } from './scenes/Start.js';
import  GameOver  from './scenes/GameOver.js'

const config = {
    type: Phaser.AUTO,
    title: 'Overlord Rising',
    description: '',
    parent: 'game-container',
    width: 1280,
    height: 720,
    backgroundColor: '#000000',
    pixelArt: false,
    scene: [
        Start, GameOver
    ],
    physics: {
        default: 'arcade', // or 'matter' if you are using Matter.js
        arcade: {
            gravity: { y:200 },
            debug: true // Set to true to see physics bodies
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
}

new Phaser.Game(config);
            