// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "ground1":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000101010301010101010101010101010102020202020202020202020202020202020202020202020202020202020202020202020402020402020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7], TileScale.Sixteen);
            case "goal1":
            case "level3":return tiles.createTilemap(hex`0a0008000101010101010101010101010101010101010101010101010101010101010101010101010101010101010b0201010c01010103040304030403040304050606060606060606070809090909090909090a`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . 2 . . . 
2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,sprites.castle.tileGrass1,sprites.castle.tileGrass2,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath4,sprites.castle.tilePath5,sprites.castle.tilePath6,myTiles.tile3,sprites.castle.rock1], TileScale.Sixteen);
            case "goal2":
            case "level1":return tiles.createTilemap(hex`0a0008000101010101010101010101010101010101010101010101010101010101010101010101010101010101010b0101020c01010103040304030403040304050606060606060606070809090909090909090a`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . 2 . . . 
2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,sprites.castle.tileGrass1,sprites.castle.tileGrass2,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath4,sprites.castle.tilePath5,sprites.castle.tilePath6,myTiles.tile3,sprites.castle.rock1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "ball":
            case "tile2":return tile2;
            case "dirt":
            case "tile5":return tile5;
            case "hole":
            case "tile8":return tile8;
            case "top":
            case "tile4":return tile4;
            case "d-start":
            case "tile6":return tile6;
            case "g-start":
            case "tile3":return tile3;
            case "nuthole":
            case "tile7":return tile7;
            case "gridtile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
