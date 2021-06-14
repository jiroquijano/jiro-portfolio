import React, {useState, useEffect, useRef} from 'react';
import {makeStyles, Popper} from '@material-ui/core';
import useKeyPress from '../../hooks/useKeyPress';
import useKeyRelease from '../../hooks/useKeyRelease';

const STEP = 10;
const SPRITE_STEP_MAX = 3;
const SPRITE_DIMENSION = 100;
const JIRO_SPRITE = 'sprites/character-sprite.png'

const useStyles = makeStyles({
    character: (props) => ({
        position: 'absolute',
        backgroundImage: `url(${JIRO_SPRITE})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: `-${props.step * SPRITE_DIMENSION}px -${props.direction}px`,
        top: `${props.positionY}px`,
        left: `${props.positionX}px`,
        height: `${SPRITE_DIMENSION}px`,
        width: `${SPRITE_DIMENSION}px`
    })
});

const Character = ({canvas}) => {
    const [positionX, setX] = useState();
    const [positionY, setY] = useState();
    const [direction, setDirection] = useState(300);
    const [step, setStep] = useState(1);
    const characterRef = useRef(null);
    const [isPopperOpen, setPopperOpen] = useState(true);
    const classes = useStyles({positionX, positionY, step, direction});

    const directionMap = {
        up: 0,
        left: 1,
        right: 2,
        down: 3
    }

    useEffect(()=>{
        setX(canvas.current?.offsetWidth - 110);
        setY(canvas.current?.offsetHeight - 110);
        window.addEventListener('resize', (e)=>{
            setX(canvas.current?.offsetWidth/2);
            setY(canvas.current?.offsetHeight - 110);
        });
        return () => window.removeEventListener('resize', ()=>{});
    },[canvas]);

    const handleKeyPress = (event) => {
        if(event.key.includes('Arrow')) {
            const movement = event.key.replace('Arrow','').toLowerCase();
            setDirection(directionMap[movement] * SPRITE_DIMENSION);
            setStep((prevStep) => {
                const currentStep = prevStep === SPRITE_STEP_MAX - 1 ? 0 : prevStep + 1;
                return currentStep;
            })
            moveCharacter(movement);
            event.preventDefault();
        }
        if(event.key.toLowerCase() === 'x') alert('interact');
    }

    useKeyPress(handleKeyPress);
    useKeyRelease(()=>{
        setDirection(300);
        setStep(1);
    });

    const validateMovement = (newX, newY) => {
        const canvasWidth = canvas.current.offsetWidth;
        const canvasHeight = canvas.current.offsetHeight;
        return (newX > 0 && newX < canvasWidth - 100) && (newY > 0 && newY < canvasHeight - 100);
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

    return (
        <>
            <div ref={characterRef} className={classes.character}/>
            <Popper
                anchorEl={characterRef.current}
                open={isPopperOpen}
                placement='top'
            >
                <div style={{color: 'black'}}>
                    jiro
                </div>
            </Popper>
        </>
    )
}

export default Character;