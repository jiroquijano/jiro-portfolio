import React, {useRef} from 'react';
import {Container, makeStyles} from '@material-ui/core';
import Character from './Character';

const useStyles = makeStyles({
    canvas : {
        background: '#FFFFFF',
        backgroundImage: 'url("sprites/office/seamless-tiles.png")',
        opacity: '1',
        backgroundPosition: '-48px -48px',
        height: '600px',
        maxWidth: '1400px',
        display: 'flex',
        border: '4px solid black',
        position: 'relative'
    },
    wall: {
        width: '100%',
        height: '100px',
        backgroundImage: 'url("sprites/office/wall.png")',
        position: 'absolute',
        top: 0,
        left: 0
    }
});

const OfficeCanvas = () => {
    const classes = useStyles();
    const canvasRef = useRef(null);
    const characterRef = useRef(null)
    return (
        <Container container ref={canvasRef} className={classes.canvas}>
            <div className={classes.wall}></div>
            <Character ref={characterRef} canvas={canvasRef}/>
        </Container>
    )
}

export default OfficeCanvas;