"use client";

import React, { ReactNode } from 'react';
import Styles from './styles.module.css';
import { BUTTON_SIZES } from '@/constants';

type Size = typeof BUTTON_SIZES[keyof typeof BUTTON_SIZES];

interface ButtonProps {
    children: ReactNode;
    clickFunction?: Function;
    className?: string;
    buttonType?: string;
    size?: Size;
    color?: string;
    backgroundColor?: string;
    border?: string;
}

function Button({children, clickFunction, buttonType, className, size, color, backgroundColor, border} : ButtonProps) { 

    return (
        <button className={`${Styles.btn} ${size && Styles[size]} ${className}`}
            // if clickFunction is given add onClick property
            {...(clickFunction && { onClick: () => clickFunction() })} 
            // if type is given, add type property
            {...(buttonType && { type: buttonType as any })}
            style={{color: color, backgroundColor: backgroundColor, border: border}}
        >
            {children}
        </button>
    );
}

export default Button;