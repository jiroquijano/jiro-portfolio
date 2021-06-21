import React, {useEffect, useRef, useState} from 'react';
import {Container, makeStyles} from '@material-ui/core';
import Character from './Character';

import OfficeHitMapContext from '../../context/OfficeHitMapContext';
import OfficeDecorations from './OfficeDecorations';
const JIRO_SPRITE = 'sprites/jiro-sprite.png'
const BONNA_SPRITE = 'sprites/bonna-sprite.png'


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

    const decors = {
        boards: [{posX: 50, posY: 0, width: 126, height: 100, collision: false}],
        sideWalls: [
            {posX: 214, posY: 120, width: 25, height: 65, collision: false},
            {posX: 214, posY: 300, width: 25, height: 65, collision: false},
            {posX: 632, posY: 158, width: 25, height: 142, collision: true},
        ],
        walls: [
            {posX: 0, posY: 360, width: 235, height: 100, collision: true, border:'2px #3a3a4f solid'},
            {posX: 0, posY: 180, width: 235, height: 100, collision: true, border:'2px #3a3a4f solid'},
            {posX: 632, posY: 298, width: 357, height: 100, collision: true, border:'2px #3a3a4f solid'},
        ],
        couches: [{posX: 743, posY: 348, width: 180, height: 107, collision: true}],
        receptions: [{posX: 480, posY: 380, width: 200, height: 120, collision: true}],
        vendos: [
            {posX: 900, posY: 0, width: 89, height: 120, collision: true},
            {posX: 810, posY: 0, width: 89, height: 120, collision: true}
        ]
    }

    return (
        <Container ref={canvasRef} className={classes.canvas}>
            <OfficeHitMapContext.Provider value={{hitMap, setHitMap}}>
                <OfficeDecorations
                    canvasRef={canvasRef}
                    decors={decors}
                />
                <Character 
                    canvas={canvasRef}
                    sprite={BONNA_SPRITE}
                    posX={890}
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