'use client';

import { useEffect, useRef } from 'react';
import { useLocalStorage } from './useLocalStorage';
import AOS from 'aos';

export function useAnimations(): [boolean, (areEnabled: boolean) => void] {

    const initialRender = useRef(true);

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

    function setAnimations(areEnabled: boolean) {
        if(areEnabled) {
            _enableAnimations();
        } else {
            _disableAnimations();
        }

        setValue(areEnabled);
    }

    useEffect(() => {

        if(initialRender.current) {
            console.log(initialRender.current)
            initialRender.current = false;
        } else {
            console.log(initialRender.current)
            setAnimations(areAnimationsEnabled);
        }
        
    }, [areAnimationsEnabled]);

    return [areAnimationsEnabled, setAnimations];

}