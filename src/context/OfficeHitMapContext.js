import React from 'react';

const defaultHitMap = {
    hitMap: [],
    updateHitMap: ()=>{}
}

const OfficeHitMapContext = React.createContext(defaultHitMap);

export default OfficeHitMapContext;