import { Enemy } from '../Enemy.js'


export class Start extends Phaser.Scene {

    constructor() {
        super('Start');
        this.itemCollider = null;
    }
 
    preload() {
        this.load.image('background', 'assets/space.png');
        this.load.image('background_2', 'assets/Background/1.png')
        this.load.image('tree2', 'assets/Background/2.png')
        this.load.image('tree3', 'assets/Background/3.png');
        this.load.image('tree4', 'assets/Background/4.png');
        this.load.image('tree5', 'assets/Background/5.png');
        this.load.image('tree6', 'assets/Background/6.png');
        this.load.image('platform', 'assets/Platform.png');
        this.load.image('tile_72', 'assets/Background/1 Tiles/Tile_72.png');
        this.load.image('sword_1', 'assets/Shinobi/Sword1.png');

        //  The player sprite is CC0 from https://ansimuz.itch.io - check out his other work!
        this.load.spritesheet('player', 'assets/Shinobi/Idle.png', { frameWidth: 128, frameHeight: 128 });

        this.load.spritesheet('attack', 'assets/Shinobi/Attack_1.png', {frameWidth: 128, frameHeight: 128});
        this.load.spritesheet('attack2', 'assets/Shinobi/Attack_2.png', {frameWidth: 128, frameHeight: 128});
        this.load.spritesheet('attack3', 'assets/Shinobi/Attack_3.png', {frameWidth: 128, frameHeight: 128});
        this.load.spritesheet('shield', 'assets/Shinobi/Shield.png', {frameWidth: 128, frameHeight: 128});

        this.load.spritesheet('walk', 'assets/Shinobi/Walk.png', {frameWidth: 128, frameHeight: 128});
        this.load.spritesheet('run', 'assets/Shinobi/Run.png', {frameWidth: 128, frameHeight: 128});
        this.load.spritesheet('jump', 'assets/Shinobi/Jump.png', {frameWidth: 128, frameHeight: 128});

        this.load.spritesheet('hurt', 'assets/Shinobi/Hurt.png', {frameWidth: 128, frameHeight: 128});
        this.load.spritesheet('dead', 'assets/Shinobi/Dead.png', {frameWidth: 128, frameHeight: 128});
        

        // Enemy sprites
        this.load.spritesheet('yurei_idle', 'assets/Yurei/Idle.png', {frameWidth: 128, frameHeight: 128});
        this.load.spritesheet('yurei_attack1', 'assets/Yurei/Attack_1.png', {frameWidth: 128, frameHeight: 128});
        this.load.spritesheet('yurei_attack2', 'assets/Yurei/Attack_2.png', {frameWidth: 128, frameHeight: 128});
        this.load.spritesheet('yurei_attack2', 'assets/Yurei/Attack_2.png', {frameWidth: 128, frameHeight: 128});
        this.load.spritesheet('yurei_attack3', 'assets/Yurei/Attack_3.png', {frameWidth: 128, frameHeight: 128});
   
    }
    create() {

        // set world boundrary to used to prevent player from walking off screen
        this.physics.world.setBounds(0, 0, 11200, 1000);
  
        this.add.image(0, -100, 'background_2').setOrigin(0).setScrollFactor(0.2).setScale(2); 
        this.add.image(1152,-100, 'background_2').setOrigin(0).setScrollFactor(0.2).setScale(2); 
        this.add.image(1728,-100, 'background_2').setOrigin(0).setScrollFactor(0.2).setScale(2); 
        this.add.image(2304,-100, 'background_2').setOrigin(0).setScrollFactor(0.2).setScale(2); 
        this.add.image(2880,-100, 'background_2').setOrigin(0).setScrollFactor(0.2).setScale(2); 
 
        this.add.image(0, 0, 'tree2').setOrigin(0).setScrollFactor(0.3).setScale(2);; 
        this.add.image(1152, 0, 'tree2').setOrigin(0).setScrollFactor(0.3).setScale(2);
        this.add.image(1728, 0, 'tree2').setOrigin(0).setScrollFactor(0.3).setScale(2);
        this.add.image(2304, 0, 'tree2').setOrigin(0).setScrollFactor(0.3).setScale(2);

        this.add.image(0, 0, 'tree3').setOrigin(0).setScrollFactor(0.5).setScale(2);; 
        this.add.image(1152, 0, 'tree3').setOrigin(0).setScrollFactor(0.5).setScale(2);
 
        
        this.add.image(0, 15, 'tree4').setOrigin(0).setScrollFactor(0.7).setScale(2);
        this.add.image(1152, 15, 'tree4').setOrigin(0).setScrollFactor(0.7).setScale(2);
        this.add.image(1728, 15, 'tree4').setOrigin(0).setScrollFactor(0.7).setScale(2);
        this.add.image(2304, 15, 'tree4').setOrigin(0).setScrollFactor(0.7).setScale(2);
        this.add.image(2880, 15, 'tree4').setOrigin(0).setScrollFactor(0.7).setScale(2);
        this.add.image(3456, 15, 'tree4').setOrigin(0).setScrollFactor(0.7).setScale(2);
        this.add.image(4032, 15, 'tree4').setOrigin(0).setScrollFactor(0.7).setScale(2);
        this.add.image(4608, 15, 'tree4').setOrigin(0).setScrollFactor(0.7).setScale(2);
        this.add.image(5184, 15, 'tree4').setOrigin(0).setScrollFactor(0.7).setScale(2);
        this.add.image(5760, 15, 'tree4').setOrigin(0).setScrollFactor(0.7).setScale(2);
        this.add.image(6336, 15, 'tree4').setOrigin(0).setScrollFactor(0.7).setScale(2);
        this.add.image(6912, 15, 'tree4').setOrigin(0).setScrollFactor(0.7).setScale(2);

            
    // Foreground/ground layer (moves with the camera)
        this.add.image(0, 50, 'tree5').setOrigin(0).setScrollFactor(0.8).setScale(2);
        this.add.image(1152, 50, 'tree5').setOrigin(0).setScrollFactor(0.8).setScale(2);
        this.add.image(1728, 50, 'tree5').setOrigin(0).setScrollFactor(0.8).setScale(2);
        this.add.image(2304, 50, 'tree5').setOrigin(0).setScrollFactor(0.8).setScale(2);
        this.add.image(2880, 50, 'tree5').setOrigin(0).setScrollFactor(0.8).setScale(2);
        this.add.image(3456, 50, 'tree5').setOrigin(0).setScrollFactor(0.8).setScale(2);
        this.add.image(4032, 50, 'tree5').setOrigin(0).setScrollFactor(0.8).setScale(2);
        this.add.image(4608, 50, 'tree5').setOrigin(0).setScrollFactor(0.8).setScale(2);
        this.add.image(5184, 50, 'tree5').setOrigin(0).setScrollFactor(0.8).setScale(2);
        this.add.image(5760, 50, 'tree5').setOrigin(0).setScrollFactor(0.8).setScale(2);
        this.add.image(6336, 50, 'tree5').setOrigin(0).setScrollFactor(0.8).setScale(2);
        this.add.image(6912, 50, 'tree5').setOrigin(0).setScrollFactor(0.8).setScale(2);
        this.add.image(7488, 50, 'tree5').setOrigin(0).setScrollFactor(0.8).setScale(2);
        this.add.image(8064, 50, 'tree5').setOrigin(0).setScrollFactor(0.8).setScale(2);
        

        // Player
        this.player = this.physics.add.sprite(400, 540, 'player');
        this.player.body.setSize(40,80,false);
        this.player.body.setOffset(45, 50);
        this.player.setCollideWorldBounds(true);
        this.player.setScale(1.5);
        this.player.setGravityY(500);
        this.player.setBounce(0.1);  
        
        // Create the enemy instance, passing the current scene and the player object
        this.yurei_1 = new Enemy(this, 600, 500,'yurei_idle', 'yurei_attack1',this.player );
        this.yurei_1.body.setSize(40,80,false);
        this.yurei_1.body.setOffset(45, 50);
        this.tweens.add({
        targets: this.yurei_1,
        y: this.player.y - 20, // Move up by 20 pixels
        duration: 1000, // Takes 1000ms (1 second) to move up
        ease: 'Sine.InOut', // Smooth movement in both directions
        yoyo: true, // Reverse the motion (move back down)
        repeat: -1 // Loop indefinitely
        });

       
        // this.yurei_2 = new Enemy(this, 100, 300,'yurei_2_idle', 'yurei_2_attack3',this.player );
        // this.yurei_2.body.setSize(40,80,false);
        // this.yurei_2.body.setOffset(45, 50);
        

        // Add collision between player and enemy
        // this.physics.add.collider(this.player, this.yurei_1, this.handlePlayerEnemyCollision, null, this);
        // this.physics.add.collider(this.player, this.yurei_2, this.handleCollision, null, this);

             

            this.add.image(0, 130, 'tree6').setOrigin(0).setScrollFactor(1).setScale(2);
            this.add.image(1152, 130, 'tree6').setOrigin(0).setScrollFactor(1).setScale(2);
            this.add.image(1728, 130, 'tree6').setOrigin(0).setScrollFactor(1).setScale(2);
            this.add.image(2304, 130, 'tree6').setOrigin(0).setScrollFactor(1).setScale(2);
            this.add.image(2880, 130, 'tree6').setOrigin(0).setScrollFactor(1).setScale(2);
            this.add.image(3456, 130, 'tree6').setOrigin(0).setScrollFactor(1).setScale(2);
            this.add.image(4032, 130, 'tree6').setOrigin(0).setScrollFactor(1).setScale(2);
            this.add.image(4608, 130, 'tree6').setOrigin(0).setScrollFactor(1).setScale(2);
            this.add.image(5184, 130, 'tree6').setOrigin(0).setScrollFactor(1).setScale(2);
            this.add.image(5760, 130, 'tree6').setOrigin(0).setScrollFactor(1).setScale(2);
            this.add.image(6336, 130, 'tree6').setOrigin(0).setScrollFactor(1).setScale(2);
            this.add.image(6912, 130, 'tree6').setOrigin(0).setScrollFactor(1).setScale(2);
            this.add.image(7488, 130, 'tree6').setOrigin(0).setScrollFactor(1).setScale(2);
            this.add.image(8064, 130, 'tree6').setOrigin(0).setScrollFactor(1).setScale(2);
            this.add.image(8640, 130, 'tree6').setOrigin(0).setScrollFactor(1).setScale(2);
            this.add.image(9216, 130, 'tree6').setOrigin(0).setScrollFactor(1).setScale(2);
            this.add.image(9792, 130, 'tree6').setOrigin(0).setScrollFactor(1).setScale(2);
            this.add.image(10368, 130, 'tree6').setOrigin(0).setScrollFactor(1).setScale(2);

            //Camera
            this.cameras.main.setBounds(0, 0, 2000 * 5.6, 1000);
            this.cameras.main.startFollow(this.player);
            this.cameras.main.followOffset.set(50, 0);
             

            // Get the game dimensions
                const gameWidth = this.scale.width;
                const gameHeight = this.scale.height;
                // Assuming your tile image is 64x64 pixels and the ground is positioned at the bottom of the screen
                const tileHeight = 32; 
                const groundYPosition = gameHeight - tileHeight / .5; // Position the center of the tilesprite at the bottom edge

                // Create the TileSprite
                this.ground = this.add.tileSprite(
                    0,              // x position (set origin to 0 for easier positioning)
                    groundYPosition, // y position
                    gameWidth * 9,      // width of the area it covers
                    tileHeight,     // height of the area it covers
                    'tile_72'   // texture key
                )
                .setOrigin(0, 0.5) // Set origin to middle-left for accurate vertical positioning
                .setDepth(-1); // Optional: ensure it's behind other objects

                // If using physics for a platformer, you might add physics to the TileSprite
                this.physics.add.existing(this.ground, true); // true for static body
                this.physics.add.collider(this.player, this.ground);
                this.physics.add.collider(this.yurei_1, this.ground);
                // this.physics.add.collider(this.yurei_2, this.ground); 

            // Player Animations
            this.player.anims.create({
                key: 'idle',
                frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
                frameRate: 5,
                repeat: -1
            });
            this.player.anims.create({
                key: 'attack',
                frames: this.anims.generateFrameNumbers('attack', {frames: [0, 1, 2, 3, 4]}),
                frameRate: 20,
                repeat: 0
            })
            this.player.anims.create({
                key: 'attack2',
                frames: this.anims.generateFrameNumbers('attack2', {frames: [0, 1, 2]}),
                frameRate: 10,
                repeat: 0
            })
            this.player.anims.create({
                key: 'attack3',
                frames: this.anims.generateFrameNumbers('attack3', {frames: [0, 1, 2, 3]}),
                frameRate: 8,
                repeat: 0
            })
            this.player.anims.create({
                key: 'walk',
                frames: this.anims.generateFrameNumbers('walk', {frames: [0, 1, 2, 3, 4, 5, 6, 7]}),
                frameRate: 10,
                repeat: 0
            })
            this.player.anims.create({
                key: 'jump',
                frames: this.anims.generateFrameNumbers('jump', {frames: [11,8, 8, 8, 8, 8, 9,9, 9, 9, 9 ,9, 9, 9, 9 , 9 , 9 , 9 , 9, 9, 9 ,9 , 9, 10, 10, 10, 10, 10,11]}),
                frameRate: 20,
                repeat: 0
            })
            this.player.anims.create({
                key: 'run',
                frames: this.anims.generateFrameNumbers('run', {frames: [0, 1, 2, 3, 4, 5, 6, 7]}),
                frameRate: 20,
                repeat: 0
            })
            this.player.anims.create({
                key: 'shield',
                frames: this.anims.generateFrameNumbers('shield', {frames: [0, 1, 2, 3]}),
                frameRate: 20,
                repeat: -1
            })
            this.player.anims.create({
                key: 'hurt',
                frames: this.anims.generateFrameNumbers('hurt', {frames: [0, 1]}),
                frameRate: 4,
                repeat: 0
            })
            this.player.anims.create({
                key: 'dead',
                frames: this.anims.generateFrameNumbers('dead', {frames: [0, 1, 2, 3]}),
                frameRate: 4,
                repeat: 0
            })
            
            // Enemy - Yurei
            this.yurei_1.anims.create({
                key: 'yurei_idle',
                frames: this.anims.generateFrameNumbers('yurei_idle', {frames: [0, 1, 2, 3]}),
                frameRate: 20,
                repeat: -1
            })
            this.yurei_1.anims.create({
                key: 'yurei_attack1',
                frames: this.anims.generateFrameNumbers('yurei_attack1', {frames: [0, 1, 2, 3]}),
                frameRate: 10,
                repeat: -1
            })

            // this.yurei_2.anims.create({
            //     key: 'yurei_2_idle',
            //     frames: this.anims.generateFrameNumbers('yurei_idle', {frames: [0, 1, 2, 3]}),
            //     frameRate: 10,
            //     repeat: -1
            // })
            // this.yurei_2.anims.create({
            //     key: 'yurei_2_attack2',
            //     frames: this.anims.generateFrameNumbers('yurei_attack2', {frames: [0, 1, 2, 3]}),
            //     frameRate: 10,
            //     repeat: -1
            // })
            // this.yurei_2.anims.create({
            //     key: 'yurei_2_attack3',
            //     frames: this.anims.generateFrameNumbers('yurei_attack3', {frames: [0, 1, 2, 3, 4, 5]}),
            //     frameRate: 10,
            //     repeat: -1
            // })
            
                // Listen for the animation complete event on the player sprite
            this.player.on('animationcomplete-attack', () => { // Specific event for the 'attack' key
                this.playerAttacking = false;
                // Optionally, force an idle animation to start immediately after
                this.player.anims.play('idle', true);
            }, this);
                // Listen for the animation complete event on the player sprite
            this.player.on('animationcomplete-attack2', () => { // Specific event for the 'attack' key
                this.playerAttacking = false;
                // Optionally, force an idle animation to start immediately after
                this.player.anims.play('idle', true);
            }, this);
                // Listen for the animation complete event on the player sprite
            this.player.on('animationcomplete-attack3', () => { // Specific event for the 'attack' key
                this.playerAttacking = false;
                // Optionally, force an idle animation to start immediately after
                this.player.anims.play('idle', true);
            }, this);


            this.playerAttacking = false;
            this.movingLeft = false;
            this.cursors = this.input.keyboard.createCursorKeys();
            this.keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
            this.keyX = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
            this.keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
            this.runKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT);
            this.walkSpeed = 150;
            this.runSpeed = 400; // Faster speed for running

            this.playerHealthPoints = 100;
            this.enemyHealthPoints = 50;
            this.isDead = false;

            this.weapon = this.add.sprite(this.player.x + 50, this.player.y + 20, 'sword_1')
            this.physics.add.existing(this.weapon, false);
            this.weapon.body.setEnable(false)
            // this.weapon.body.setOffset(45, 50);
            

            this.physics.add.collider(this.player, this.yurei_1, (playerGameObject, enemyGameObject) => {
            console.log('collide with yurei_1')
            this.playerHealthPoints -= 1;
                
            } );
            this.physics.add.collider(this.player, this.yurei_1)

            this.physics.add.collider(this.weapon, this.yurei_1, (playerGameObject, enemyGameObject) => {
                console.log('weapon collide with yurei_1')
                
                this.enemyHealthPoints -= 1;
            } );
            this.physics.add.collider(this.weapon, this.yurei_1)

        // In your create() function
        // let player;
        this.healthBar;
        this.enemyHealthBar;

        // player = this.physics.add.sprite(100, 450, 'dude');
        // player.setCollideWorldBounds(true);

        // Create the health bar as a separate graphic
        this.healthBar = this.add.graphics();
        this.healthBar.fillStyle(0xFF0000, 1); // Red background
        this.healthBar.fillRect(this.player.x - 20, this.player.y - 30, 40, 5); // Background bar
        this.healthBar.fillStyle(0x00FF00, 1); // Green foreground
        this.healthBar.fillRect(this.player.x - 20, this.player.y - 30, 40, 5); // Foreground bar

        this.enemyHealthBar = this.add.graphics();
        this.enemyHealthBar.fillStyle(0xFF0000, 1); // Red background
        this.enemyHealthBar.fillRect(this.yurei_1.x - 20, this.yurei_1.y - 30, 40, 5); // Background bar
        this.enemyHealthBar.fillStyle(0x00FF00, 1); // Green foreground
        this.enemyHealthBar.fillRect(this.yurei_1.x - 20, this.yurei_1.y - 30, 40, 5); // Foreground bar

    }

 
    update() {
    this.yurei_1.update();
    // this.yurei_2.update();

    console.log(this.playerHealthPoints)
    console.log(this.isDead)
    this.playerMaxHealth = 100;
    this.enemyMaxHealth = 100;



    // In your update() function
    // Update healthBar position and foreground width
    this.healthBar.clear();
    // Redraw background
    this.healthBar.fillStyle(0xFF0000, 1);
    this.healthBar.fillRect(this.player.x - 20 , this.player.y - 30, 40, 5);
    // Redraw foreground with updated width
    this.healthBar.fillStyle(0x00FF00, 1);
    this.healthBar.fillRect(this.player.x - 20 , this.player.y - 30, (this.playerHealthPoints / this.playerMaxHealth) * 40, 5);

    this.enemyHealthBar.clear();
    // Redraw background
    this.enemyHealthBar.fillStyle(0xFF0000, 1);
    this.enemyHealthBar.fillRect(this.yurei_1.x - 20 , this.yurei_1.y - 30, 40, 5);
    // Redraw foreground with updated width
    this.enemyHealthBar.fillStyle(0x00FF00, 1);
    this.enemyHealthBar.fillRect(this.yurei_1.x - 20 , this.yurei_1.y - 30, (this.enemyHealthPoints / this.enemyMaxHealth) * 40, 5);


    // -------------------
    // ATTACKING LOGIC
    // -------------------

    if(this.playerHealthPoints < 1){
        console.log(this.playerHealthPoints)
        this.isDead = true
    }


    if (Phaser.Input.Keyboard.JustDown(this.keyZ) && !this.playerAttacking){
        this.playerAttacking = true;
        this.player.anims.play('attack', true);
    }else if (Phaser.Input.Keyboard.JustDown(this.keyX) && !this.playerAttacking){
        this.playerAttacking = true;
        this.player.anims.play('attack2', true);
    }else if (Phaser.Input.Keyboard.JustDown(this.keyC) && !this.playerAttacking){
        this.playerAttacking = true;
        this.player.anims.play('attack3', true);
    }

    if( !this.playerAttacking ) {
        // Reset horizontal velocity first to create a 'stop-start' movement style
        this.player.setVelocityX(0);

        let currentSpeed = this.walkSpeed;

        // Check if the run key is held down to set the speed
        if (this.runKey.isDown) {
            currentSpeed = this.runSpeed;
        }

        // Handle left and right movement
        if (this.cursors.left.isDown && !this.isDead) {
            this.weapon.destroy();
            this.weapon = this.add.sprite(this.player.x - 50, this.player.y + 20, 'sword_1')
            this.player.setVelocityX(-currentSpeed);
            // Play the appropriate animation
            if (currentSpeed === this.runSpeed && this.player.body.touching.down) {
                this.player.anims.play('run', true);
            } else if (currentSpeed === this.walkSpeed && this.player.body.touching.down) {
                this.player.anims.play('walk', true);
            }
            // Optional: flip sprite if you only have one set of animations
            this.weapon.setFlipX(true)
            this.player.flipX = true; 

        }else if (this.cursors.right.isDown && !this.isDead) {
            this.weapon.destroy();
             this.weapon = this.add.sprite(this.player.x + 50, this.player.y + 20, 'sword_1')
            this.player.setVelocityX(currentSpeed);
            // Play the appropriate animation
            if (currentSpeed === this.runSpeed && this.player.body.touching.down) {
                this.player.anims.play('run', true);
            } else if (currentSpeed === this.walkSpeed && this.player.body.touching.down) {
                this.player.anims.play('walk', true);
            }
            // Optional: flip sprite if you only have one set of animations
            this.player.flipX = false;

        }else if (this.cursors.down.isDown && !this.playerAttacking && !this.isDead){
            this.player.anims.play('shield', true);
        }else if(this.isDead){
            this.player.anims.play('dead',true)
            this.player.once('animationcomplete', () => {
            this.scene.start('GameOver') 
        })

        } 
        else {
            // If no keys are held, stop moving and play the 'idle' or 'turn' animation
            this.player.setVelocityX(0);
            this.player.anims.play('idle', true); // Assumes you have an 'idle' animation
        }
        if (this.cursors.up.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-500); // Jump
            this.player.anims.play('jump', true); // Play right animation
            this.isJumping = true;
        }



    }
    // -------------------
    // ATTACKING LOGIC
    // -------------------

    


    }
    
}
