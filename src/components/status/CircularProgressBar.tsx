import React from 'react';
import { PROGRESS_BAR_COLORS } from '@/constants';
import './CircularProgressBar.css';

function CircularProgressBar({percentage} : {percentage : number}) {
    
    const { GOOD, SOLID, BAD } = PROGRESS_BAR_COLORS;

    const color = percentage < 50 ? BAD : percentage < 90 ? SOLID : GOOD;
    
    // 440 is for full circle so we use 4.4 per 1%
    const dashOffset = 4.4 * (100 - percentage);

    return (
        <div className="CircularProgressBar__progressbar" style={{ '--performance-color': color, '--dash-offset': dashOffset } as any}>
            <svg className='CircularProgressBar__progressbar--svg'>
                <circle cx="80" cy="80" r="70" className='CircularProgressBar__progressbar--svg-circle CircularProgressBar__circle-animation'></circle>
            </svg>
            <span className='CircularProgressBar__progressbar--text'>{percentage}</span>
        </div>
    );
}

export default CircularProgressBar;