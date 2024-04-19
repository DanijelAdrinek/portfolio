'use client';

import { AnimationFunctionObject } from "@/types";
import { useAnimations } from "./useAnimations";

export function useCustomAnimations(): AnimationFunctionObject {

    const {refresh} = useAnimations();

    const SequentialAnimation = (parentElement: HTMLElement | null, delay: number = 100, animation: string = 'fade-up' ) => {
        if(!parentElement) { 
            console.log(parent);
            return; }

        const children = Array.from(parentElement.children);

        children.forEach((child, index) => {
            child.setAttribute('data-aos', animation);
            child.setAttribute('data-aos-delay', `${index * delay}`);
        });

        refresh();
    }

    return {SequentialAnimation}

}