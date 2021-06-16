import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core';
import useResize from '../../../hooks/useResize';

const useStyles = makeStyles({
    item: (props) => ({
        width: props.width,
        height: '100px',
        backgroundImage: `url(${props.spriteImage})`,
        position: 'absolute',
        top: props.positionY,
        left: props.positionX
    })
})

const Item = ({canvas, spriteImage, posX, posY, width, height}) => {
    const [positionX, setX] = useState();
    const [positionY, setY] = useState();

    const realignPosition = () =>{
        setX(canvas.current?.offsetWidth - posX);
        setY(canvas.current?.offsetHeight - posY);
    }

    useEffect(()=>{
        realignPosition();
    },[canvas]);

    useResize(()=>{
        realignPosition();
    });

    const classes = useStyles({spriteImage, positionX, positionY, width, height});
    return (
        <div className={classes.item}/>
    )
}

export default Item;