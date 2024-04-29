'use client';

import React, { ReactElement } from 'react';
import Animation from '@/components/animation/animation';
import { SequentialAnimationProps } from '@/types';
  

function SequentialAnimation({ children, delay = 100, ...props }: SequentialAnimationProps): ReactElement {
    const childrenArray = React.Children.toArray(children);

    return (
        <>
            {childrenArray.map((child, index) => {
                return (
                    <Animation
                        {...props}
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