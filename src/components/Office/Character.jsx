import React, {useState, useEffect, useRef, useContext} from 'react';
import {makeStyles, Popper} from '@material-ui/core';
import useKeyPress from '../../hooks/useKeyPress';
import useKeyRelease from '../../hooks/useKeyRelease';
import useResize from '../../hooks/useResize';
import OfficeHitMapContext from '../../context/OfficeHitMapContext';

const STEP = 10;
const SPRITE_STEP_MAX = 3;
const SPRITE_DIMENSION = 100;
const CHARACTER_WIDTH = 70;

const useStyles = makeStyles({
    character: (props) => ({
        position: 'absolute',
        backgroundImage: `url(${props.sprite})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: `-${props.step * SPRITE_DIMENSION}px -${props.direction}px`,
        top: `${props.positionY}px`,
        left: `${props.positionX}px`,
        height: `${SPRITE_DIMENSION}px`,
        width: `${SPRITE_DIMENSION}px`,
        zIndex: props.positionY
    })
});

const Character = ({canvas, sprite, posX, posY, name, isControlled, selectCharacter}) => {
    const [positionX, setX] = useState();
    const [positionY, setY] = useState();
    const [direction, setDirection] = useState(300);
    const [step, setStep] = useState(1);
    const characterRef = useRef(null);
    const {hitMap} = useContext(OfficeHitMapContext);
    const [isPopperOpen, setPopperOpen] = useState(false);
    const classes = useStyles({positionX, positionY, step, direction, sprite});
    const hitMapX = Math.floor((positionX+20)/10);
    const hitMapY = Math.floor((positionY)/10);
    const hitMapSpriteWidth = CHARACTER_WIDTH/10;
    const hitMapSpriteHeight = Math.floor(characterRef?.current?.offsetHeight/10);

    const directionMap = {
        up: 0,
        left: 1,
        right: 2,
        down: 3
    }

    const handleKeyPress = (event) => {
        if(event.key.includes('Arrow') && isControlled) {
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

    const realignPosition = () =>{
        setX(canvas.current?.offsetWidth - canvas.current?.offsetWidth + posX);
        setY(canvas.current?.offsetHeight - canvas.current?.offsetHeight + posY);
    }

    useEffect(()=>{
        realignPosition();
    },[canvas]);

    useKeyPress(handleKeyPress);

    useKeyRelease(()=>{ 
        //idle character sprite on key up
        setDirection(300);
        setStep(1);
    });

    const isWithinCanvas = (newX, newY) => {
        const canvasWidth = canvas.current.offsetWidth;
        const canvasHeight = canvas.current.offsetHeight;
        return (newX > 0 && newX < canvasWidth - 100) && (newY > 0 && newY < canvasHeight - 100);
    }

    const doesHitMapAllowMovement = (newHitMapX, newHitMapY, direction) => {
        let collisionMap = [];
        const spriteBodyMiddleHitMap = newHitMapY+Math.ceil(hitMapSpriteHeight/1.5);
        const spriteBodyWidthHitMapEnd = newHitMapX+hitMapSpriteWidth-2;
        if(['up','down'].includes(direction)){
            collisionMap = hitMap[spriteBodyMiddleHitMap].slice(newHitMapX+1,spriteBodyWidthHitMapEnd);
        } else if(['left', 'right'].includes(direction)){
            const xToCheck = direction === 'left' ? newHitMapX : spriteBodyWidthHitMapEnd;
            collisionMap.push(hitMap[spriteBodyMiddleHitMap][xToCheck]);
        }
        //hitmap convention = <type>_<id>_<attributes>
        return collisionMap.every((value)=> String(value).split('_')[2] !== 'X');
    }

    const moveCharacter = (movement) => {
        switch (movement) {
            case 'up' : {
                setY((previousY) => {
                    return isWithinCanvas(positionX, previousY-STEP) && 
                        doesHitMapAllowMovement(hitMapX, hitMapY-1, movement) ?
                        previousY - STEP : previousY;
                })
                break;
            }
            case 'down' : {
                setY((previousY) => {
                    return isWithinCanvas(positionX, previousY+STEP) &&
                        doesHitMapAllowMovement(hitMapX, hitMapY+2, movement) ?
                        previousY + STEP : previousY;
                });
                break;
            }
            case 'right' : {
                setX((previousX) => {
                    return isWithinCanvas(previousX+STEP, positionY) &&
                        doesHitMapAllowMovement(hitMapX+1, hitMapY, movement) ?
                        previousX+STEP : previousX;
                });
                break;
            }
            case 'left' : {
                setX((previousX) => {
                    return isWithinCanvas(previousX-STEP, positionY) &&
                        doesHitMapAllowMovement(hitMapX-1, hitMapY, movement) ?
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
            <div ref={characterRef} className={classes.character} onClick={selectCharacter}/>
            <Popper
                anchorEl={characterRef.current}
                open={isPopperOpen}
                placement='top'
            >
                <div style={{color: 'black'}}>
                    {`${name}`}
                </div>
            </Popper>
        </>
    )
}

export default Character;