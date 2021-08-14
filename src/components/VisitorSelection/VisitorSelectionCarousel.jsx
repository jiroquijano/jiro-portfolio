import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '50%',
    },
    button: {
        height: '100%',
        background: 'blue',
        display: 'flex',
        alignItems: 'center'
    },
    activeCircle: {
        color: 'black',
        display: 'inline-block',
        paddingRight: '4px'
    },
    inactiveCircle: {
        color: 'gray',
        display: 'inline-block',
        paddingRight: '4px'
    },
    indexGuide: {
        padding: '4px'
    }
});

const CHARACTERS = ['jiro', 'bonna', 'guest', 'robot']; //extract to a config enum

const scrollThrough = (currentIndex, direction) => {
    let resultingIndex = currentIndex;
    switch (direction) {
        case 'right': {
            resultingIndex = currentIndex + 1 < CHARACTERS.length ? currentIndex + 1 : 0;
            break;
        }
        case 'left': {
            resultingIndex = currentIndex - 1 < 0 ? CHARACTERS.length - 1 : currentIndex - 1;
            break;
        }
        default: {
            break;
        }
    }
    return resultingIndex;
}

const VisitorSelectionCarousel = () => {
    const classes = useStyles();
    const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);

    return (
        <>
            <div className={classes.root}>
                <div className={classes.button} onClick={() =>
                    setCurrentCharacterIndex((prevIndex) => scrollThrough(prevIndex, 'left'))
                }>
                    left
                </div>
                <div>
                    {CHARACTERS[currentCharacterIndex]}
                </div>
                <div className={classes.button} onClick={() => 
                    setCurrentCharacterIndex((prevIndex) => scrollThrough(prevIndex, 'right'))
                }>
                    right
                </div>
            </div>
            <div className={classes.indexGuide}>
                {
                    CHARACTERS.map((character)=>
                        <div className={
                            character === CHARACTERS[currentCharacterIndex] ?
                                classes.activeCircle : classes.inactiveCircle
                        }> ● </div>
                    )
                }
            </div>
        </>
    )
}

export default VisitorSelectionCarousel;