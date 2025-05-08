controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 7 7 7 7 . . . . . 
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        . . . . . . . 7 7 7 7 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, spaceplane, 100, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let bogey: Sprite = null
let projectile: Sprite = null
let spaceplane: Sprite = null
spaceplane = sprites.create(img`
    ..ccc.........ffffff....
    ..f4cc.......fcc22ff....
    ..f44cc...fffccccff.....
    ..f244cccc22224442cc....
    ..f224cc2222222244b9c...
    ..cf222222222222b9999c..
    .c22c222222222911199b2c.
    f22ccccccc22229911b2222c
    fffffcc222c222222222222f
    .....f2224442222222222f.
    ....f222444fc2222222ff..
    ...c222444ffffffffff....
    ...c2222cfffc2f.........
    ...ffffffff2ccf.........
    .......ffff2cf..........
    ........fffff...........
    `, SpriteKind.Player)
controller.moveSprite(spaceplane, 200, 200)
spaceplane.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(1000, function () {
    bogey = sprites.create(img`
        ..bbb.........dddddd....
        ..d7bb.......dbb66dd....
        ..d77bb...dddbbbbdd.....
        ..d677bbbb66667779bb....
        ..d667bb6666666677c8b...
        ..bd666666666666c8888b..
        .b66b666666666811188c6b.
        d66bbbbbbb66668811c6666b
        dddddbb666b666666666666f
        .....d6667776666666666f.
        ....d666777db6666666dd..
        ...b666777dddddddddd....
        ...b6666bdddb6d.........
        ...dddddddd6bbd.........
        .......dddd6bd..........
        ........ddddd...........
        `, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(160, randint(5, 115))
    bogey.setFlag(SpriteFlag.AutoDestroy, true)
})
