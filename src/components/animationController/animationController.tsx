"use client";

import React, { ReactNode, createContext } from 'react';
import { useAnimations } from '@/hooks';

interface AnimationControllerProps {
  children: ReactNode;
}

export const AnimationsContext = createContext(false);

function AnimationController({ children }: AnimationControllerProps) {

    const {areAnimationsEnabled, setAnimations} = useAnimations();

    const toggleAnimations = () => setAnimations(!areAnimationsEnabled);

    return (
        <main>
            <AnimationsContext.Provider value={areAnimationsEnabled}>
                {children}
            </AnimationsContext.Provider>
            <button onClick={toggleAnimations}>TOGGLE ANIMATIONS!</button>
        </main>
    );
}

export default AnimationController;