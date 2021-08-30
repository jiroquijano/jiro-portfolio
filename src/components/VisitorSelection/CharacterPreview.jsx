import React from 'react';

const CharacterPreview = ({characters, currentIndex}) => {

    return (
        <div>
            {characters[currentIndex]}
        </div>
    )
}

export default CharacterPreview