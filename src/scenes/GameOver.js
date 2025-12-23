// "Every great game begins with a single scene. Let's make this one unforgettable!"
export default class GameOver extends Phaser.Scene {
    constructor() {
        super('GameOver');
    }

    init() {
        // Initialize scene
    }

    preload() {
        // Load assets
    }

    create() {
        // Create game objects
        this.add.text(
            500, 300, 
            'Game Over',
        {
            fontSize: '50px',
            color: 'red'
        })
        this.add.text(460, 400, 
        'Click to Play Again', 
        { 
            fontSize: '30px'
        })

        this.input.on('pointerdown', () => {
            this.scene.stop('GameOver');
            this.scene.start('Start'); // Or your main game scene key
        });
    }

}
