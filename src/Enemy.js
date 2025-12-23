
export default class Enemy extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, animIdle, animKey, player) {
        super(scene, x, y, animIdle, animKey);
        this.scene = scene;
        this.player = player;
        this.animKey = animKey;
        this.animIdle = animIdle;
        this.speed = 0;
        this.attackRange = 100;

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

        
        if (distance < this.attackRange) {
            this.playAttack();
            this.scene.physics.moveToObject(this, this.player, this.speed);
        }
        else {
            this.playIdle();
            this.scene.physics.moveToObject(this, this.player, this.speed);
        }
    }
 
    playAttack() {
            this.anims.play(this.animKey,true)   
    }
 
    playIdle() {
        this.anims.play(this.animIdle, true) 
    }
}
export { Enemy }

