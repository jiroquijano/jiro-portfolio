import React from 'react';
import {Fade} from '@material-ui/core';

const CharacterPreview = ({characters, currentIndex}) => {
    return (
        <Fade in={true} timeout={500}>
            <div>
                {characters[currentIndex]}
            </div>
        </Fade>
    )
}

export default CharacterPreview