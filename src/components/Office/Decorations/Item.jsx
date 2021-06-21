import React, {useState, useEffect, useContext, useRef} from 'react';
import {makeStyles} from '@material-ui/core';
import useResize from '../../../hooks/useResize';
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
    const hitMapX = Math.floor(positionX/10);
    const hitMapY = Math.floor(positionY/10);
    const hitMapSpriteWidth = Math.floor(itemRef?.current?.offsetWidth/10);
    const hitMapSpriteHeight = Math.floor(itemRef?.current?.offsetHeight/10);

    const realignPosition = () =>{
        setX(canvas.current?.offsetWidth - canvas.current?.offsetWidth + posX);
        setY(canvas.current?.offsetHeight - canvas.current?.offsetHeight + posY);
    }

    const updateHitMap = () =>{
        //HitMap item identity is <item_type>_<item_type_number>_<attributes>
        const hitMapCopy = hitMap;
        for(let currentRow = hitMapY; currentRow < hitMapY + hitMapSpriteHeight; currentRow++) {
            const itemHitMapRow = hitMap[currentRow];
            itemHitMapRow.fill(`${collision ? `${type}_${id}_X` : `${type}_${id}_A`}`, hitMapX, hitMapX + hitMapSpriteWidth + 1);
            hitMapCopy[currentRow] = itemHitMapRow;
        }
        setHitMap(hitMapCopy);
    }

    useEffect(()=>{
        realignPosition();
    },[canvas]);

    useEffect(()=>{
        updateHitMap();
    },[itemRef.current])

    useResize(()=>{
        realignPosition();
        updateHitMap();
    });

    const classes = useStyles({spriteImage, positionX, positionY, width, height, border, zIndex});
    return (
        <div className={classes.item} ref={itemRef} onClick={()=>console.log(hitMap)}/>
    )
}

export default Item;