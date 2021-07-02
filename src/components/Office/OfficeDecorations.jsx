import React from 'react';
import Wall from './Decorations/Wall';
import Item from './Decorations/Item';
const WALL_BLUE_SPRITE  = 'sprites/office/wall-blue.png'
const WALL_WHITE_SPRITE  = 'sprites/office/wall-white.png'
const WALL_THIN_SPRITE  = 'sprites/office/wall-thin.png'
const BOARD_SPRITE  = 'sprites/office/board.png'
const EMPTY_BOARD_SPRITE  = 'sprites/office/boardempty.png'
const RECEPTION_SPRITE  = 'sprites/office/reception.png'
const COUCH_SPRITE  = 'sprites/office/couch.png'
const VENDO_SPRITE  = 'sprites/office/vendo-machine.png'
const GLASS_WINDOW_SPRITE  = 'sprites/office/glass-window.png'
const SINK_SPRITE  = 'sprites/office/sink.png'
const SOFA_L_SPRITE  = 'sprites/office/sofa_l.png'
const SOFA_R_SPRITE  = 'sprites/office/sofa_r.png'
const TABLE_SPRITE = 'sprites/office/table.png'
const BACK_CHAIR_SPRITE = 'sprites/office/chair-back.png'
const LAPTOP_L_SPRITE = 'sprites/office/laptop-left.png'
const LAPTOP_F_SPRITE = 'sprites/office/laptop-front.png'
const PLANT_1_SPRITE = 'sprites/office/plant1.png'
const PLANT_2_SPRITE = 'sprites/office/plant2.png'
const INFO_STAND_SPRITE = 'sprites/office/infostand.png'
const RAILS_SPRITE = 'sprites/office/rails.png'
const DIVIDER_SPRITE = 'sprites/office/divider.png'
const PAINTING_1_SPRITE = 'sprites/office/painting1.png'
const CERTIFICATE_SPRITE = 'sprites/office/certificate.png'
const SHELF_SPRITE = 'sprites/office/shelf.png'
const PHONE_SPRITE = 'sprites/office/phone.png'

const OfficeDecorations = ({decors, canvasRef}) => {
    const decorations = Object.keys(decors);
    const itemToSpriteMap = {
        boards: BOARD_SPRITE,
        sideWalls: WALL_THIN_SPRITE,
        walls: WALL_WHITE_SPRITE,
        couches: COUCH_SPRITE,
        receptions: RECEPTION_SPRITE,
        vendos: VENDO_SPRITE,
        windows: GLASS_WINDOW_SPRITE,
        sinks: SINK_SPRITE,
        leftSofas: SOFA_L_SPRITE,
        rightSofas: SOFA_R_SPRITE,
        tables: TABLE_SPRITE,
        backChairs: BACK_CHAIR_SPRITE,
        leftLaptops: LAPTOP_L_SPRITE,
        frontLaptops: LAPTOP_F_SPRITE,
        emptyBoards: EMPTY_BOARD_SPRITE,
        plant1s: PLANT_1_SPRITE,
        plant2s: PLANT_2_SPRITE,
        infoStands: INFO_STAND_SPRITE,
        rails: RAILS_SPRITE,
        dividers: DIVIDER_SPRITE,
        painting1s: PAINTING_1_SPRITE,
        certificates: CERTIFICATE_SPRITE,
        shelves: SHELF_SPRITE,
        phones: PHONE_SPRITE
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
                                zIndex={item.zIndex}
                            />
                        )
                    })
                })
            }
        </>
    )
}

export default OfficeDecorations;