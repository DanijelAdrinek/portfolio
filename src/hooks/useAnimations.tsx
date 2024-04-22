'use client';

import { useEffect, useRef } from 'react';
import { useLocalStorage } from './useLocalStorage';
import AOS from 'aos';

export function useAnimations(): {areAnimationsEnabled: boolean,setAnimations: (areEnabled: boolean) => void,refresh: () => void} {

    const numOfRenders = useRef(0);

    const key: string = 'animations';
    const initialValue: boolean = true;

    let [areAnimationsEnabled, setValue] = useLocalStorage(key, initialValue);
    
    areAnimationsEnabled = Boolean(areAnimationsEnabled);

    function _enableAnimations() {
        document.body.classList.remove('animationsDisabled');
        AOS.init({
            duration: 350,
            offset: 300,
            once: false,
            easing: 'ease-in-out',
            anchorPlacement: 'top-bottom'
        });
    }

    function _disableAnimations() {
        document.body.classList.add('animationsDisabled');
        AOS.init({ disable: true });
    }

    function refresh() {
        if(areAnimationsEnabled) {
            _enableAnimations();
        } else {
            _disableAnimations();
        }
    }

    function setAnimations(areEnabled: boolean) {
        if(areEnabled) {
            _enableAnimations();
        } else {
            _disableAnimations();
        }

        setValue(areEnabled);
    }

    useEffect(() => {

        // because of the way useLocalStorage works, it will render twice initially
        if(numOfRenders.current < 2) {
            numOfRenders.current = numOfRenders.current + 1;
            return;
        }
            
        console.log(numOfRenders.current)
        setAnimations(areAnimationsEnabled);
        
        // eslint-disable-next-line
    }, [areAnimationsEnabled]);

    return {areAnimationsEnabled, setAnimations, refresh};

}