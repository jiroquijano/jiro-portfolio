import React, {useEffect, useRef, useState} from 'react';
import {Container, makeStyles} from '@material-ui/core';
import Character from './Character';
import Wall from './Decorations/Wall';
import Item from './Decorations/Item';
import OfficeHitMapContext from '../../context/OfficeHitMapContext';
const JIRO_SPRITE = 'sprites/jiro-sprite.png'
const BONNA_SPRITE = 'sprites/bonna-sprite.png'
const WALL_SPRITE  = 'sprites/office/wall-blue.png'
const BOARD_SPRITE  = 'sprites/office/board.png'


const useStyles = makeStyles({
    canvas : {
        background: '#FFFFFF',
        backgroundImage: 'url("sprites/office/tiles.png")',
        opacity: '1',
        backgroundPosition: '-48px -48px',
        height: '600px',
        width: '80vw',
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
                <Wall decor={WALL_SPRITE}/>
                <Item 
                    canvas={canvasRef}
                    spriteImage={BOARD_SPRITE}
                    posX={10}
                    posY={0}
                    width={126}
                    height={100}
                    collision={true}
                />
                 <Item 
                    canvas={canvasRef}
                    spriteImage={BOARD_SPRITE}
                    posX={400}
                    posY={300}
                    width={126}
                    height={100}
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
                    posX={560}
                    posY={490}
                    name={'saf'}
                    isControlled={control === 'saf'}
                    selectCharacter={()=>setControl('saf')}
                />
            </OfficeHitMapContext.Provider>
        </Container>
    )
}

export default OfficeCanvas;