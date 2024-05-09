import React from 'react';
import Styles from './styles.module.css';
import CircularProgressBar from './CircularProgressBar';
import { LighthouseData } from '@/types';


function Status({title, children, percentage}: LighthouseData) {
    return (
        <article className={`status ${Styles.container}`} data-aos="fade-up">
            <h1 className='title'>{title}</h1>
                <CircularProgressBar percentage={percentage}/>
            <p className={Styles.description}>{children}</p>
        </article>
    );
}

export default Status;