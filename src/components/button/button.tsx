"use client";

import React, { ReactNode } from 'react';
import Styles from './button.module.css';
import { BUTTON_SIZES } from '@/constants';

interface ButtonProps {
    children: ReactNode;
    clickFunction: Function;
    className?: string;
    size?: string;
    color?: string;
    backgroundColor?: string;
    border?: string;
}

type Size = typeof BUTTON_SIZES[keyof typeof BUTTON_SIZES];

function Button({children, clickFunction, className, size, color, backgroundColor, border} : ButtonProps) { 

    return (
        <button className={`${Styles.btn} ${size && Styles[size]} ${className}`} onClick={() => clickFunction()} style={{color: color, backgroundColor: backgroundColor, border: border}}>
            {children}
        </button>
    );
}

export default Button;