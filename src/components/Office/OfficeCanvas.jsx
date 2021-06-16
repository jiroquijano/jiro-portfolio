import React, {useRef, useState, useContext} from 'react';
import {Container, makeStyles} from '@material-ui/core';
import Character from './Character';
import Wall from './Decorations/Wall';
import Item from './Decorations/Item';
import useResize from '../../hooks/useResize';
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
        maxWidth: '1400px',
        display: 'flex',
        border: '4px solid black',
        position: 'relative'
    }
});

const OfficeCanvas = () => {
    const classes = useStyles();
    const canvasRef = useRef(null);
    const [control, setControl] = useState('saf');
    const [hitMap, setHitMap] = useState([]);

    useResize(()=>{
        if(canvasRef !== null) {
            const boxesX =  Math.floor(canvasRef?.current?.offsetWidth/10);
            const boxesY = Math.floor(canvasRef?.current?.offsetHeight/10);
            const hitMapArray = Array.from(Array(boxesY)).map(()=>{
                return Array.from(Array(boxesX)).map(()=>0);
            });
            setHitMap(hitMapArray)
        }
    })
 
    return (
        <Container container ref={canvasRef} className={classes.canvas}>
            <Wall decor={WALL_SPRITE}/>
            <Item 
                canvas={canvasRef}
                spriteImage={BOARD_SPRITE}
                posX={300}
                posY={600}
                width={126}
                height={100}
            />
            <Character 
                canvas={canvasRef}
                sprite={BONNA_SPRITE}
                startPosX={110}
                startPosY={110}
                name={'bonnie'}
                isControlled={control === 'bonnie'}
                selectCharacter={()=>setControl('bonnie')}
            />
            <Character 
                canvas={canvasRef}
                sprite={JIRO_SPRITE}
                startPosX={210}
                startPosY={110}
                name={'saf'}
                isControlled={control === 'saf'}
                selectCharacter={()=>setControl('saf')}
            />
        </Container>
    )
}

export default OfficeCanvas;