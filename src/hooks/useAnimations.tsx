'use client';

import { useEffect, useState, useRef } from 'react';
import { useLocalStorage } from './useLocalStorage';
import AOS from 'aos';

export function useAnimations(): {areAnimationsEnabled: boolean, setAnimations: (areEnabled: boolean) => void, setIsMobile: (isMobile: boolean) => void, refresh: () => void} {

    const numOfRenders = useRef(0);

    const key: string = 'animations';
    const initialValue: boolean = true;

    let [areAnimationsEnabled, setValue] = useLocalStorage(key, initialValue);
    const [isMobile, _setIsMobileState] = useState(true);

    // in production the site will render less times than in development, this code checks if we are in production or development, and adjusts the code accordingly
    process.env.NODE_ENV === 'production' ? numOfRenders.current = 1 : numOfRenders.current = 0;

    function _enableAnimations() {
        document.body.classList.remove('animationsDisabled');
        AOS.init({
            disable: 'mobile',
            duration: 350,
            offset: 200,
            once: false,
            easing: 'ease-in-out',
            anchorPlacement: 'top-bottom'
        });

    }

    function _disableAnimations() {document.body.classList.add('animationsDisabled');}

    
    function _handleAnimationStatus(shouldBeEnabled: boolean) {
        console.log('handleAnimations, isMobile: ', !isMobile);
        if(shouldBeEnabled && !isMobile) {
            _enableAnimations();
        } else {
            _disableAnimations();
        }
    }
    
    function refresh() {_handleAnimationStatus(areAnimationsEnabled!);}
    
    function setIsMobile(isMobile: boolean) {_setIsMobileState(isMobile);}
    
    function setAnimations(areEnabled: boolean) {

        _handleAnimationStatus(areEnabled);

        setValue(areEnabled);
    }

    useEffect(() => {

        // in production the site will render less times than in development, this code checks if we are in production or development, and adjusts the code accordingly
        if(numOfRenders.current < 2) {
            numOfRenders.current = numOfRenders.current + 1;
            return;
        }

        setAnimations(areAnimationsEnabled);
        
        // eslint-disable-next-line
    }, [areAnimationsEnabled]);

    useEffect(() => {
        refresh();
        // eslint-disable-next-line
    }, [isMobile])

    useEffect(() => {
        _handleAnimationStatus(true);
        // eslint-disable-next-line
    }, []);

    return {areAnimationsEnabled: areAnimationsEnabled!, setAnimations, setIsMobile, refresh};

}