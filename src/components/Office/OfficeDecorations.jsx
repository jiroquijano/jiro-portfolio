import React from 'react';
import Wall from './Decorations/Wall';
import Item from './Decorations/Item';
const WALL_BLUE_SPRITE  = 'sprites/office/wall-blue.png'
const WALL_WHITE_SPRITE  = 'sprites/office/wall-white.png'
const WALL_THIN_SPRITE  = 'sprites/office/wall-thin.png'
const BOARD_SPRITE  = 'sprites/office/board.png'
const RECEPTION_SPRITE  = 'sprites/office/reception.png'
const COUCH_SPRITE  = 'sprites/office/couch.png'
const VENDO_SPRITE  = 'sprites/office/vendo-machine.png'
const GLASS_WINDOW_SPRITE  = 'sprites/office/glass-window.png'

const OfficeDecorations = ({decors, canvasRef}) => {
    const decorations = Object.keys(decors);
    const itemToSpriteMap = {
        boards: BOARD_SPRITE,
        sideWalls: WALL_THIN_SPRITE,
        walls: WALL_WHITE_SPRITE,
        couches: COUCH_SPRITE,
        receptions: RECEPTION_SPRITE,
        vendos: VENDO_SPRITE,
        windows: GLASS_WINDOW_SPRITE
    }

    return (
        <>
            <Wall decor={WALL_BLUE_SPRITE}/>
            {
                decorations.map((decoration)=>{
                    return decors[decoration].map((item, index)=>{
                        return (
                            <Item canvas={canvasRef}
                                key={index}
                                spriteImage={itemToSpriteMap[decoration]}
                                type={decoration}
                                id={index}
                                posX={item.posX}
                                posY={item.posY}
                                width={item.width}
                                height={item.height}
                                collision={item.collision}
                                border={item.border}
                            />
                        )
                    })
                })
            }
        </>
    )
}

export default OfficeDecorations;