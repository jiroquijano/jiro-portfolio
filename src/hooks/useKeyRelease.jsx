import {useEffect} from 'react';

const useKeyRelease = (callback) => {
    useEffect(()=>{
        window.addEventListener('keyup', callback)
        return () => {
            window.removeEventListener('keyup', callback);
        }
    },[callback])
}

export default useKeyRelease;