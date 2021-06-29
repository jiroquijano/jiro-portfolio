import React, {useEffect, useRef, useState} from 'react';
import {Container, makeStyles} from '@material-ui/core';
import Character from './Character';

import OfficeHitMapContext from '../../context/OfficeHitMapContext';
import OfficeBoundaryContext from '../../context/OfficeBoundaryContext';
import OfficeDecorations from './OfficeDecorations';
import officeDecorConfiguration from './Decorations/configurations/officeItemsConfig';
import officeBoundaries from './Decorations/configurations/officeBoundaries';
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

    return (
        <Container ref={canvasRef} className={classes.canvas}>
            <OfficeHitMapContext.Provider value={{hitMap, setHitMap}}>
            <OfficeBoundaryContext.Provider value={{boundaries, setBoundaries}}>
                <OfficeDecorations
                    canvasRef={canvasRef}
                    decors={officeDecorConfiguration}
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