import React, {useRef} from 'react';
import {Grid, makeStyles} from '@material-ui/core';
import Character from './Character';

const useStyles = makeStyles({
    canvas : {
        background: '#EFEFEF',
        height: '600px',
        display: 'flex'
    },
    character: (props) => ({
        position: 'relative',
        top: `${props.y}px`,
        left: `${props.x}px`
    })
});

const OfficeCanvas = () => {
    const classes = useStyles();
    const canvasRef = useRef(null);
    return (
        <Grid container item direction='row' ref={canvasRef} className={classes.canvas}>
            <Grid item>
                <Character canvas={canvasRef}/>
            </Grid>
        </Grid>
    )
}

export default OfficeCanvas;