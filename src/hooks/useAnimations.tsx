'use client';

import { useEffect, useRef } from 'react';
import { useLocalStorage } from './useLocalStorage';
import AOS from 'aos';

export function useAnimations(): {areAnimationsEnabled: boolean, setAnimations: (areEnabled: boolean) => void, refresh: () => void} {

    const numOfRenders = useRef(0);

    const key: string = 'animations';
    const initialValue: boolean = true;

    let [areAnimationsEnabled, setValue] = useLocalStorage(key, initialValue);
    
    areAnimationsEnabled = Boolean(areAnimationsEnabled);

    function _enableAnimations() {
        document.body.classList.remove('animationsDisabled');
        AOS.init({
            disable: 'mobile',
            duration: 350,
            offset: 300,
            once: false,
            easing: 'ease-in-out',
            anchorPlacement: 'top-bottom'
        });
    }

    function _disableAnimations() {document.body.classList.add('animationsDisabled');}

    function _handleAnimationStatus(shouldBeEnabled: boolean) {
        if(shouldBeEnabled) {
            _enableAnimations();
        } else {
            _disableAnimations();
        }
    }

    function refresh() {_handleAnimationStatus(areAnimationsEnabled);}

    function setAnimations(areEnabled: boolean) {
        _handleAnimationStatus(areEnabled);

        setValue(areEnabled);
    }

    useEffect(() => {

        // because of the way useLocalStorage works, it will render twice initially
        if(numOfRenders.current < 1) {
            numOfRenders.current = numOfRenders.current + 1;
            return;
        }

        setAnimations(areAnimationsEnabled);
        
        // eslint-disable-next-line
    }, [areAnimationsEnabled]);

    return {areAnimationsEnabled, setAnimations, refresh};

}