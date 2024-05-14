type SideSnippet = {class: string, animation: string};

interface Sides {
  LEFT: SideSnippet;
  RIGHT: SideSnippet;
}

export const CODE_SIDES: Sides = {
  LEFT: { class: 'left', animation: "fade-right" },
  RIGHT: { class: 'right', animation: "fade-left" }
}

interface Languages {
  JAVASCRIPT: string;
  TYPESCRIPT: string;
  HTML: string;
  CSS: string;
}

export const CODE_LANGUAGES: Languages = {
  JAVASCRIPT: "language-javascript",
  TYPESCRIPT: "language-typescript",
  HTML: "language-html",
  CSS: "language-css"
}

interface CodeSnippet {
  note: string;
  code: string;
}

export const CODE_EXAMPLES: CodeSnippet[] = [
  {
    note: 'useAnimations hook:',
    code: 
`
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
        
    }, [areAnimationsEnabled]);

    useEffect(() => {
        refresh();
    }, [isMobile])

    useEffect(() => {
        _handleAnimationStatus(true);
    }, []);

    return {areAnimationsEnabled: areAnimationsEnabled!, setAnimations, setIsMobile, refresh};

}
`
  }
]