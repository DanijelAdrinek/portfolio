"use client";

import React, { ReactNode, createContext } from 'react';
import { useAnimations } from '@/hooks';
import Button from '@/components/Button';

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
            <Button clickFunction={toggleAnimations}>TOGGLE ANIMATIONS!</Button>
        </main>
    );
}

export default AnimationController;