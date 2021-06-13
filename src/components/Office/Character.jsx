import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core';
import useKeyPress from '../../hooks/useKeyPress';

const STEP = 20;
const useStyles = makeStyles({
    character: (props) => ({
        position: 'relative',
        top: `${props.positionY}px`,
        left: `${props.positionX}px`,
        height: '30px',
        width: '30px'
    })
});

const Character = ({canvas}) => {
    const [positionX, setX] = useState();
    const [positionY, setY] = useState();
    const classes = useStyles({positionX, positionY});

    useEffect(()=>{
        setX(canvas.current?.offsetWidth/2);
        setY(canvas.current?.offsetHeight - 40);
        window.addEventListener('resize', (e)=>{
            setX(canvas.current?.offsetWidth/2);
            setY(canvas.current?.offsetHeight - 40);
        });
        return () => window.removeEventListener('resize', ()=>{});
    },[canvas])

    const validateMovement = (newX, newY) => {
        const canvasWidth = canvas.current.offsetWidth;
        const canvasHeight = canvas.current.offsetHeight;
        return (newX > 0 && newX < canvasWidth - 40) && (newY > 0 && newY < canvasHeight - 40);
    }

    const moveCharacter = (movement) => {
        switch (movement) {
            case 'up' : {
                setY((previousY) => {
                    return validateMovement(positionX, previousY-STEP) ?
                        previousY - STEP : previousY;
                })
                break;
            }
            case 'down' : {
                setY((previousY) => {
                    return validateMovement(positionX, previousY+STEP) ?
                        previousY + STEP : previousY;
                });
                break;
            }
            case 'right' : {
                setX((previousX) => {
                    return validateMovement(previousX+STEP, positionY) ?
                        previousX+STEP : previousX;
                });
                break;
            }
            case 'left' : {
                setX((previousX) => {
                    return validateMovement(previousX-STEP, positionY) ?
                        previousX-STEP : previousX;
                });
                break;
            }
            default: {
                break;
            }
        }
    }

    const handleKeyPress = (event) => {
        if(event.key.includes('Arrow')) {
            const movement = event.key.replace('Arrow','').toLowerCase();
            moveCharacter(movement);
        }
        if(event.key.toLowerCase() === 'x') alert('interact');
        event.preventDefault();
    }

    useKeyPress(handleKeyPress);

    return (
        <div className={classes.character}>
            X
        </div>
    )
}

export default Character;