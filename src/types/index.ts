import { ReactNode } from "react";

export type AnimationFunctionObject = {
    [key: string]: (parentElement: HTMLElement | null, delay?: number, animation?: string) => void;
}

export interface AnimationProps {
    children: ReactNode;
    animation: string;
    className?: string;
    offset?: number;
    delay?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: string;
    Tag?: keyof JSX.IntrinsicElements;
}

export interface SequentialAnimationProps extends Omit<AnimationProps, 'children'> {
    children: ReactNode[];
}

export interface LighthouseData {
    title: string;
    children: string;
    percentage: number;
}