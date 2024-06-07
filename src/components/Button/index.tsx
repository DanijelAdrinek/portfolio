"use client";

import React, { ReactNode } from 'react';
import Styles from './styles.module.css';
import { BUTTON_SIZES } from '@/constants';

type Size = typeof BUTTON_SIZES[keyof typeof BUTTON_SIZES];

interface ButtonProps {
    children: ReactNode;
    id?: string;
    clickFunction?: Function;
    className?: string;
    buttonType?: string;
    size?: Size;
    color?: string;
    disabled?: boolean;
    backgroundColor?: string;
    border?: string;
}

function Button({children, clickFunction, buttonType, id, className, size, color, disabled = false, backgroundColor, border} : ButtonProps) { 

    return (
        <button id={id} className={`${Styles.btn} ${size && Styles[size]} ${className}`}
            // if clickFunction is given add onClick property
            {...(clickFunction && { onClick: () => clickFunction() })} 
            // if type is given, add type property
            {...(buttonType && { type: buttonType as any })}
            disabled={disabled}
            style={{color: color, backgroundColor: backgroundColor, border: border}}
        >
            {children}
        </button>
    );
}

export default Button;