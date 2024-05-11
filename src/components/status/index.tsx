import React from 'react';
import Styles from './styles.module.css';
import Animation from '@/components/Animation';
import CircularProgressBar from './CircularProgressBar';
import { LighthouseData } from '@/types';

function Status({title, children, percentage}: LighthouseData) {
    return (
        <Animation className={`status ${Styles.container}`} Tag='article' animation='fade-up'>
            <Animation className='title' animation='fade-up' Tag='h2'>{title}</Animation>
                <CircularProgressBar percentage={percentage}/>
            <p className={Styles.description}>{children}</p>
        </Animation>
    );
}

export default Status;