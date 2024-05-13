"use client";

import React, { ReactElement, useContext } from 'react';
import { AnimationsContext } from '@/components/AnimationController';
import { AnimationProps } from '@/types';

function Animation({ children, animation, offset, delay, easing, once, mirror, anchorPlacement, Tag = "div", ...props}: AnimationProps): ReactElement {

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
    <Tag {...aosProps} {...props}>
        {children}
    </Tag>
  );
}

export default Animation;
