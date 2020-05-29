var game = new Phaser.Game(900, 500, Phaser.AUTO, 'TutContainer', { preload: preload, create: create, update:update });

function preload() {
    game.load.spritesheet("avatarRight", "../assets/avatar_right.png", 64, 64);
}

var avatar;
var cursors;

function create() {
    avatar = game.add.sprite(0,128, 'avatarRight');

    avatar.animations.add('rightWalk', [0, 1, 2, 3], 100, true);
    game.physics.arcade.enable(avatar);

    cursors = game.input.keyboard.createCursorKeys();

}

function update() {
    avatar.body.velocity.x = 0;

    if (cursors.right.isDown) {
        avatar.body.velocity.x = 150;
        avatar.animations.play('rightWalk');
    } else {
        avatar.animations.stop();
    }
}
