import React, {useEffect, useRef, useState} from 'react';
import {Container, makeStyles} from '@material-ui/core';
import Character from './Character';

import OfficeHitMapContext from '../../context/OfficeHitMapContext';
import OfficeBoundaryContext from '../../context/OfficeBoundaryContext';
import OfficeDecorations from './OfficeDecorations';
const JIRO_SPRITE = 'sprites/jiro-sprite.png'
const BONNA_SPRITE = 'sprites/bonna-sprite.png'


const useStyles = makeStyles({
    canvas : {
        background: '#FFFFFF',
        backgroundImage: 'url("sprites/office/tiles.png")',
        opacity: '1',
        height: '600px',
        width: '1000px',
        border: '4px solid #565656',
        position: 'relative'
    }
});

const OfficeCanvas = ({setDrawerOpen}) => {
    const classes = useStyles();
    const canvasRef = useRef(null);
    const [control, setControl] = useState('saf');
    const [hitMap, setHitMap] = useState([]);
    const [boundaries, setBoundaries] = useState({});

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
        setBoundaries(officeBoundaries);
    },[]);

    const decors = {
        boards: [{posX: 50, posY: 0, width: 126, height: 100, collision: false}],
        emptyBoards: [{posX: 345, posY: 166, width: 126, height: 100, collision: false, zIndex: 167}],
        sideWalls: [
            {posX: 214, posY: 120, width: 25, height: 65, collision: false},
            {posX: 214, posY: 330, width: 25, height: 65, collision: false},
            {posX: 632, posY: 126, width: 25, height: 175, collision: true},
        ],
        walls: [
            {posX: 0, posY: 390, width: 235, height: 100, collision: true, border:'2px #3a3a4f solid'},
            {posX: 0, posY: 180, width: 235, height: 100, collision: true, border:'2px #3a3a4f solid'},
            {posX: 632, posY: 298, width: 357, height: 100, collision: true, border:'2px #3a3a4f solid'},
        ],
        couches: [
            {posX: 743, posY: 348, width: 180, height: 107, collision: true}
        ],
        receptions: [
            {posX: 480, posY: 380, width: 200, height: 120, collision: true}
        ],
        vendos: [
            {posX: 900, posY: 0, width: 89, height: 120, collision: true},
            {posX: 810, posY: 0, width: 89, height: 120, collision: true}
        ],
        windows: [
            {posX: 250, posY: 10, width: 180, height: 67, collision: false},
            {posX: 450, posY: 10, width: 180, height: 67, collision: false}
        ],
        sinks: [
            {posX: 705, posY: 24, width: 100, height: 85, collision: true, zIndex: 1}
        ],
        leftSofas: [
            {posX: 655, posY: 200, width: 54, height: 100, collision: true},
            {posX: 824, posY: 200, width: 54, height: 100, collision: true},
        ],
        rightSofas: [
            {posX: 770, posY: 200, width: 54, height: 100, collision: true},
            {posX: 939, posY: 200, width: 54, height: 100, collision: true},
        ],
        tables: [
            {posX: 60, posY: 120, width: 102, height: 80, collision: true},
            {posX: 10, posY: 330, width: 102, height: 80, collision: true},
            {posX: 107, posY: 330, width: 102, height: 80, collision: true},
            {posX: 330, posY: 260, width: 102, height: 80, collision: true},
            {posX: 330, posY: 166, width: 102, height: 80, collision: true},
            {posX: 429, posY: 260, width: 102, height: 80, collision: true},
            {posX: 429, posY: 166, width: 102, height: 80, collision: true},
        ],
        backChairs: [
            {posX: 130, posY: 340, width: 55, height: 75, collision: true},
            {posX: 30, posY: 340, width: 55, height: 75, collision: true},
            {posX: 350, posY: 275, width: 55, height: 75, collision: true},
            {posX: 460, posY: 175, width: 55, height: 75, collision: true},
        ],
        leftLaptops: [
            {posX: 18, posY: 315, width: 30, height: 50, collision: false, zIndex: 330},
        ],
        frontLaptops: [
            {posX: 165, posY: 320, width: 30, height: 39, collision: false, zIndex: 330},
            {posX: 115, posY: 115, width: 30, height: 39, collision: false, zIndex: 330}
        ]
    }

    const officeBoundaries = {
        projects: {
            xLeft: 0,
            xRight: 180,
            yUp: 0,
            yDown: 180
        },
        contacts: {
            xLeft: 0,
            xRight: 180,
            yUp: 180,
            yDown: 380
        },
        history: {
            xLeft: 0,
            xRight: 180,
            yUp: 390,
            yDown: 500
        },
        pantry: {
            xLeft: 610,
            xRight: 920,
            yUp: 0,
            yDown: 220
        }
    }

    return (
        <Container ref={canvasRef} className={classes.canvas}>
            <OfficeHitMapContext.Provider value={{hitMap, setHitMap}}>
            <OfficeBoundaryContext.Provider value={{boundaries, setBoundaries}}>
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
                    selectCharacter={()=>{setControl('bonnie')}}
                    setDrawerOpen={setDrawerOpen}
                />
                <Character 
                    canvas={canvasRef}
                    sprite={JIRO_SPRITE}
                    posX={530}
                    posY={310}
                    name={'saf'}
                    isControlled={control === 'saf'}
                    selectCharacter={()=>{setControl('saf')}}
                    setDrawerOpen={setDrawerOpen}
                />
            </OfficeBoundaryContext.Provider>
            </OfficeHitMapContext.Provider>
        </Container>
    )
}

export default OfficeCanvas;