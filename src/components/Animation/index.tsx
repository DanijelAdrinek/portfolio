"use client";

import React, { ReactElement, useContext } from 'react';
import { AnimationsContext } from '@/components/AnimationController';
import { AnimationProps } from '@/types';

function Animation({ children, animation, className, offset, delay, easing, once, mirror, anchorPlacement, Tag = "div", }: AnimationProps): ReactElement {

    const isEnabled = useContext(AnimationsContext);

    let aosProps = (isEnabled ? {
        'data-aos': animation,
        'data-aos-offset': offset,
        'data-aos-delay': delay,
        'data-aos-easing': easing,
        'data-aos-once': once,
        'data-aos-mirror': mirror,
        'data-aos-anchor-placement': anchorPlacement,
    } : {'data-aos': 'none'});

  return (
    <Tag {...aosProps} className={className}>
        {children}
    </Tag>
  );
}

export default Animation;
