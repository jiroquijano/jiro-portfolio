import React, {useState, useEffect, useContext, useRef} from 'react';
import {makeStyles} from '@material-ui/core';
import OfficeHitMapContext from '../../../context/OfficeHitMapContext';

const useStyles = makeStyles({
    item: (props) => ({
        width: props.width,
        height: props.height,
        backgroundImage: `url(${props.spriteImage})`,
        position: 'absolute',
        top: props.positionY,
        left: props.positionX,
        zIndex: props.zIndex || props.positionY,
        border: props.border
    })
})

const Item = ({canvas, type, id, spriteImage, posX, posY, width, height, collision, border='', zIndex}) => {
    const [positionX, setX] = useState();
    const [positionY, setY] = useState();
    const itemRef = useRef(null);
    const {hitMap, setHitMap} = useContext(OfficeHitMapContext);

    useEffect(()=>{
        setX(canvas.current?.offsetWidth - canvas.current?.offsetWidth + posX);
        setY(canvas.current?.offsetHeight - canvas.current?.offsetHeight + posY);
    },[setX, setY, canvas, posX, posY]);

    useEffect(()=>{
        const hitMapX = Math.floor(positionX/10);
        const hitMapY = Math.floor(positionY/10);
        const hitMapSpriteWidth = Math.floor(itemRef?.current?.offsetWidth/10);
        const hitMapSpriteHeight = Math.floor(itemRef?.current?.offsetHeight/10);

        const constructItemHitMapEntry = () => {
            let itemHitMapEntry = `${type}_${id}`;
            itemHitMapEntry += `${collision ? '_X' : '_A'}`
            return itemHitMapEntry;
        }
        //HitMap item identity is <item_type>_<item_type_number>_<collision>
        const hitMapCopy = hitMap;
        for(let currentRow = hitMapY; currentRow < hitMapY + hitMapSpriteHeight; currentRow++) {
            const itemHitMapRow = hitMap[currentRow];
            itemHitMapRow.fill(constructItemHitMapEntry(), hitMapX, hitMapX + hitMapSpriteWidth + 1);
            hitMapCopy[currentRow] = itemHitMapRow;
        }
        setHitMap(hitMapCopy);
    },[hitMap, positionX, positionY, setHitMap, collision, id, type])

    const classes = useStyles({spriteImage, positionX, positionY, width, height, border, zIndex});
    return (
        <div className={classes.item} ref={itemRef}/>
    )
}

export default Item;