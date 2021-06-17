import React, {useEffect, useRef, useState} from 'react';
import {Container, makeStyles} from '@material-ui/core';
import Character from './Character';
import Wall from './Decorations/Wall';
import Item from './Decorations/Item';
import OfficeHitMapContext from '../../context/OfficeHitMapContext';
const JIRO_SPRITE = 'sprites/jiro-sprite.png'
const BONNA_SPRITE = 'sprites/bonna-sprite.png'
const WALL_BLUE_SPRITE  = 'sprites/office/wall-blue.png'
const WALL_WHITE_SPRITE  = 'sprites/office/wall-white.png'
const WALL_THIN_SPRITE  = 'sprites/office/wall-thin.png'
const BOARD_SPRITE  = 'sprites/office/board.png'
const RECEPTION_SPRITE  = 'sprites/office/reception.png'
const COUCH_SPRITE  = 'sprites/office/couch.png'


const useStyles = makeStyles({
    canvas : {
        background: '#FFFFFF',
        backgroundImage: 'url("sprites/office/tiles.png")',
        opacity: '1',
        backgroundPosition: '-48px -48px',
        height: '600px',
        width: '1000px',
        maxWidth: '1400px',
        display: 'flex',
        border: '4px solid #565656',
        position: 'relative'
    }
});

const OfficeCanvas = () => {
    const classes = useStyles();
    const canvasRef = useRef(null);
    const [control, setControl] = useState('saf');
    const [hitMap, setHitMap] = useState([]);

    const calculateHitMap = () => {
        const boxesX =  Math.floor(canvasRef?.current?.offsetWidth/10);
        const boxesY = Math.floor(canvasRef?.current?.offsetHeight/10);
        const hitMapArray = Array.from(Array(boxesY)).map(()=>{
            return Array.from(Array(boxesX)).map(()=>0);
        });
        setHitMap(hitMapArray);
    }

    useEffect(()=>{
        calculateHitMap();
    },[]);

    return (
        <Container ref={canvasRef} className={classes.canvas}>
            <OfficeHitMapContext.Provider value={{hitMap, setHitMap}}>
                <Wall decor={WALL_BLUE_SPRITE}/>
                <Item 
                    canvas={canvasRef}
                    spriteImage={BOARD_SPRITE}
                    posX={30}
                    posY={0}
                    width={126}
                    height={100}
                    collision={false}
                />
                <Item 
                    canvas={canvasRef}
                    spriteImage={WALL_WHITE_SPRITE}
                    posX={632}
                    posY={298}
                    width={357}
                    height={100}
                    collision={true}
                    border='2px #3a3a4f solid'
                />
                <Item 
                    canvas={canvasRef}
                    spriteImage={WALL_THIN_SPRITE}
                    posX={632}
                    posY={158}
                    width={25}
                    height={142}
                    collision={true}
                />
                 <Item 
                    canvas={canvasRef}
                    spriteImage={RECEPTION_SPRITE}
                    posX={480}
                    posY={380}
                    width={200}
                    height={120}
                    collision={true}
                />
                 <Item 
                    canvas={canvasRef}
                    spriteImage={COUCH_SPRITE}
                    posX={743}
                    posY={348}
                    width={180}
                    height={107}
                    collision={true}
                />
                <Character 
                    canvas={canvasRef}
                    sprite={BONNA_SPRITE}
                    posX={500}
                    posY={490}
                    name={'bonnie'}
                    isControlled={control === 'bonnie'}
                    selectCharacter={()=>setControl('bonnie')}
                />
                <Character 
                    canvas={canvasRef}
                    sprite={JIRO_SPRITE}
                    posX={530}
                    posY={310}
                    name={'saf'}
                    isControlled={control === 'saf'}
                    selectCharacter={()=>setControl('saf')}
                />
            </OfficeHitMapContext.Provider>
        </Container>
    )
}

export default OfficeCanvas;