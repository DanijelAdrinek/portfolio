'use client';

import React, { ReactElement } from 'react';
import Animation from '@/components/Animation';
import { SequentialAnimationProps } from '@/types';
  

function SequentialAnimation({ children, delay = 100, animation='fade-up', ...props }: SequentialAnimationProps): ReactElement {
    const childrenArray = React.Children.toArray(children);

    return (
        <>
            {childrenArray.map((child, index) => {
                return (
                    <Animation
                        {...props}
                        animation={animation}
                        delay={index * delay}
                        key={index}
                    >
                        {child}
                    </Animation>
                )
            })}
        </>
    );
}

export default SequentialAnimation;