'use client';

import { useEffect, useRef } from 'react';
import { useLocalStorage } from './useLocalStorage';
import AOS from 'aos';

export function useAnimations(): {areAnimationsEnabled: boolean, setAnimations: (areEnabled: boolean) => void, refresh: () => void} {

    const numOfRenders = useRef(0);

    const key: string = 'animations';
    const initialValue: null = null;

    let [areAnimationsEnabled, setValue]: [boolean | null, ((value: boolean) => void)] = useLocalStorage(key, initialValue);
    
    console.log('useAnimations');

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

        console.log('ran animations');
    }

    function _disableAnimations() {document.body.classList.add('animationsDisabled');}

    function _handleAnimationStatus(shouldBeEnabled: boolean) {
        if(shouldBeEnabled) {
            _enableAnimations();
        } else {
            _disableAnimations();
        }
    }

    function refresh() {_handleAnimationStatus(areAnimationsEnabled!);}

    function setAnimations(areEnabled: boolean) {
        console.log('setAnimations');

        _handleAnimationStatus(areEnabled);

        setValue(areEnabled);
    }

    useEffect(() => {

        if(areAnimationsEnabled != null && areAnimationsEnabled != undefined) {
            setAnimations(areAnimationsEnabled);
        }
        
        // eslint-disable-next-line
    }, [areAnimationsEnabled]);

    return {areAnimationsEnabled: areAnimationsEnabled!, setAnimations, refresh};

}