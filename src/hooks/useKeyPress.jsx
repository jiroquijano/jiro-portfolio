import {useEffect} from 'react';

const useKeyPress = (callback) => {
    useEffect(()=>{
        window.addEventListener('keydown', callback)
        return () => window.removeEventListener('keydown', callback);
    },[callback])
}

export default useKeyPress;