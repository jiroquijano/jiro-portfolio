import React from 'react';

const defaultBoundaries = {
    boundaries: {},
    updateHitMap: ()=>{}
}

const OfficeBoundaryContext = React.createContext(defaultBoundaries);

export default OfficeBoundaryContext;