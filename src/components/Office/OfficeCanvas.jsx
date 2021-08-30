import React, {useEffect, useRef, useState, useContext} from 'react';
import {Container, makeStyles} from '@material-ui/core';
import Character from './Character';

import OfficeHitMapContext from '../../context/OfficeHitMapContext';
import OfficeBoundaryContext from '../../context/OfficeBoundaryContext';
import OfficePageContext from '../../context/OfficePageContext';

import OfficeDecorations from './OfficeDecorations';
import officeDecorConfiguration from './Decorations/canvas-coordinates/officeItemsConfig';
import officeBoundaries from './Decorations/canvas-coordinates/officeBoundaries';

const JIRO_SPRITE = 'sprites/jiro-sprite-formal.png'
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

const OfficeCanvas = () => {
    const classes = useStyles();
    const canvasRef = useRef(null);
    const [hitMap, setHitMap] = useState([]);
    const [boundaries, setBoundaries] = useState({});
    const {officeState} = useContext(OfficePageContext);

    const calculateHitMap = () => {
        const boxesX =  Math.floor(canvasRef?.current?.offsetWidth/10);
        const boxesY = Math.floor(canvasRef?.current?.offsetHeight/10);
        const hitMapArray = Array.from(Array(boxesY)).map(()=>{
            return Array.from(Array(boxesX)).map(()=>0);
        });
        setHitMap(hitMapArray);
    }

    const checkIfCharacterIsControlled = (name) => {
        return name === officeState.currentCharacter;
    }

    useEffect(()=>{
        calculateHitMap();
        setBoundaries(officeBoundaries);
    },[]);

    return (
        <Container ref={canvasRef} className={classes.canvas}>
            <OfficeHitMapContext.Provider value={{hitMap, setHitMap}}>
            <OfficeBoundaryContext.Provider value={{boundaries, setBoundaries}}>
                <OfficeDecorations
                    decors={officeDecorConfiguration}
                />
                <Character 
                    canvas={canvasRef}
                    sprite={BONNA_SPRITE}
                    posX={900}
                    posY={60}
                    name='bonna'
                    checkControlled={checkIfCharacterIsControlled}
                />
                <Character 
                    canvas={canvasRef}
                    sprite={JIRO_SPRITE}
                    posX={530}
                    posY={310}
                    name='jiro'
                    checkControlled={checkIfCharacterIsControlled}
                />
            </OfficeBoundaryContext.Provider>
            </OfficeHitMapContext.Provider>
        </Container>
    )
}

export default OfficeCanvas;