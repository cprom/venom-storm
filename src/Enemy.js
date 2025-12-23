
export default class Enemy extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, animIdle, animAttack1, animDead, player) {
        super(scene, x, y, animIdle, animAttack1, animDead);
        this.scene = scene;
        this.player = player;
        this.animAttack1 = animAttack1;
        this.animIdle = animIdle;
        this.animDead = animDead;
        this.speed = 0;
        this.attackRange = 100;
        this.isDead = false;
        this.isDying = false;

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setCollideWorldBounds(true);
        this.setGravityY(1000);
        this.setScale(1.5);

    }
    
    update() {
         
    if(this.body.velocity.x < 0){
        this.setScale(1.5,1.5);
        this.flipX = true;
    }else if (this.body.velocity.x > 0){
        this.setScale( 1.5, 1.5);
        this.setOffset( 45, 50);
        this.flipX = false;
    }
        const distance = Phaser.Math.Distance.Between(
            this.x, this.y,
            this.player.x, this.player.y
        );
       

        if(this.isDead){
            this.playIsDead();
     
        }
        else if (distance < this.attackRange) {
            this.playAttack();
            this.scene.physics.moveToObject(this, this.player, this.speed);
        }
        else {
            this.playIdle();
            this.scene.physics.moveToObject(this, this.player, this.speed);
        }
      
    }
 
    playAttack() {
        this.anims.play(this.animAttack1,true);   
    }
 
    playIdle() {
        this.anims.play(this.animIdle, true); 
                
    }

    playIsDead() {
    this.isDying = true;
    this.setVelocity(0, 0);
    this.body.checkCollision.none = true;

    this.anims.play(this.animDead, true);


    this.once(
        Phaser.Animations.Events.ANIMATION_COMPLETE_KEY + this.animDead,
        () => {
            // this.destroy();
        }
    );

    }

}

export { Enemy }

