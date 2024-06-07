import React from 'react';
import { LIGHTHOUSE_DATA } from '@/data';
import Status from '@/components/Status';
import Styles from './styles.module.css';
import { IDs } from '@/constants';
import Animation from '@/components/Animation';

function AuditResults() {
    return (
        <section id={IDs.statistics} className='section'>
            <Animation className='title' animation='fade-up' Tag='h1'>Statistics</Animation>
            <div className={Styles.statusContainer}>
            {LIGHTHOUSE_DATA.map(score => (
                <Status key={score.title} title={score.title} percentage={score.percentage}>{score.children}</Status>
            ))}
            </div>
        </section>
    );
}

export default AuditResults;