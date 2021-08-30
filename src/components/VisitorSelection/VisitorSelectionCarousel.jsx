import React, { useState, useContext} from 'react';
import { makeStyles} from '@material-ui/core';
import CharacterPreview from './CharacterPreview';
import OfficePageContext from '../../context/OfficePageContext';

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
    const {officeDispatch} = useContext(OfficePageContext);

    const handleChangeSelection = (direction) => {
        setCurrentCharacterIndex((prevIndex) => {
            const index = scrollThrough(characters, prevIndex, direction);
            officeDispatch({type: 'SET_CURRENT_CHARACTER', character: characters[index]});
            return index;
        })
    }

    return (
        <>
            <div className={classes.root}>
                {/*LEFT ARROW*/}
                <div className={classes.button} onClick={() => handleChangeSelection('left') }>
                    {'<<<'}
                </div>

                 {/*CHARACTER SPRITE*/}
                <CharacterPreview characters={characters} currentIndex={currentCharacterIndex}/>

                
                {/*RIGHT ARROW*/}
                <div className={classes.button} onClick={() => handleChangeSelection('right') }>
                    {'>>>'}
                </div>
            </div>

            {/*INDEX INDICATOR*/}
            <div className={classes.indexGuide}>
                {
                    characters.map((character) => {
                        const guideClassName = character === characters[currentCharacterIndex] ?
                            classes.activeCircle : classes.inactiveCircle;
                        return <div key = {character} className = {guideClassName}> ● </div>
                    })
                }
            </div>
        </>
    )
}

export default VisitorSelectionCarousel;