import React, { useState } from 'react';
import { makeStyles} from '@material-ui/core';
import CharacterPreview from './CharacterPreview';

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
        alignItems: 'center',
        color: 'white'
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

const scrollThrough = (characters, currentIndex, direction) => {
    let resultingIndex = currentIndex;
    switch (direction) {
        case 'right': {
            resultingIndex = currentIndex + 1 < characters.length ? currentIndex + 1 : 0;
            break;
        }
        case 'left': {
            resultingIndex = currentIndex - 1 < 0 ? characters.length - 1 : currentIndex - 1;
            break;
        }
        default: {
            break;
        }
    }
    return resultingIndex;
}

const VisitorSelectionCarousel = ({characters}) => {
    const classes = useStyles();
    const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);

    return (
        <>
            <div className={classes.root}>
                <div className={classes.button} onClick={() =>
                    setCurrentCharacterIndex((prevIndex) => scrollThrough(characters, prevIndex, 'left'))
                }>
                    {'<<<'}
                </div>

                <CharacterPreview characters={characters} currentIndex={currentCharacterIndex}/>

                <div className={classes.button} onClick={() => 
                    setCurrentCharacterIndex((prevIndex) => scrollThrough(characters, prevIndex, 'right'))
                }>
                    {'>>>'}
                </div>
            </div>
            <div className={classes.indexGuide}>
                {
                    characters.map((character)=>
                        <div 
                            className = {
                                character === characters[currentCharacterIndex] ?
                                    classes.activeCircle : classes.inactiveCircle
                            }
                            key = {character}
                        > ● </div>
                    )
                }
            </div>
        </>
    )
}

export default VisitorSelectionCarousel;