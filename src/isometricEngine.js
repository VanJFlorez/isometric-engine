var game = new Phaser.Game(900, 500, Phaser.AUTO, 'TutContainer', { preload: preload, create: create, update:update });

function preload() {
    //load all necessary assets
    game.load.spritesheet("avataru", "../assets/tile008.png", 64, 64);
    game.load.spritesheet("avatard", "../assets/tile009.png", 64, 64);
    game.load.spritesheet("avatarl", "../assets/tile010.png", 64, 64);
    game.load.spritesheet("avatarr", "../assets/tile011.png", 64, 64);
}
var avatar;
function create() {
    avatar = game.add.sprite(0,0, 'avataru');
    avatar.animations.add('up', [0, 1, 2, 3], 10, true);
    avatar.animations.play('up');
    
    avatar = game.add.sprite(0,64, 'avatard');
    avatar.animations.add('down', [0, 1, 2, 3], 10, true);
    avatar.animations.play('down');
    
    avatar = game.add.sprite(0,128, 'avatarl');
    avatar.animations.add('left', [0, 1, 2, 3], 10, true);
    avatar.animations.play('left');
    
    avatar = game.add.sprite(0,192, 'avatarr');
    avatar.animations.add('right', [0, 1, 2, 3], 10, true);
    avatar.animations.play('right');
}

function update() {

}