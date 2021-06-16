import React from 'react';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    wall: (props) => ({
        width: '100%',
        height: '100px',
        backgroundImage: `url(${props.decor})`,
        position: 'absolute',
        top: 0,
        left: 0
    })
})

const Wall = ({decor}) => {
    const classes = useStyles({decor});
    return (
        <div className={classes.wall}/>
    )
}

export default Wall;