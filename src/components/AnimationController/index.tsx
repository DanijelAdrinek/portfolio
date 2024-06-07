"use client";

import React, { ReactNode, createContext, useEffect } from 'react';
import { useAnimations, useMediaQuery } from '@/hooks';

interface AnimationControllerProps {
  children: ReactNode;
}

export const AnimationsContext = createContext(false);

function AnimationController({ children }: AnimationControllerProps) {

    const isMobile = useMediaQuery('(max-width: 767px)');

    const {areAnimationsEnabled, setIsMobile} = useAnimations();
    
    // const toggleAnimations = () => setAnimations(!areAnimationsEnabled);
    
    useEffect(() => {
        setIsMobile(isMobile);
    },
    // eslint-disable-next-line
    [isMobile]);

    const shouldAnimate = (areAnimationsEnabled && !isMobile) ? true : false;

    return (
        <main>
            <AnimationsContext.Provider value={shouldAnimate}>
                {children}
            </AnimationsContext.Provider>
            {/* <Button clickFunction={toggleAnimations}>TOGGLE ANIMATIONS!</Button> */}
        </main>
    );
}

export default AnimationController;