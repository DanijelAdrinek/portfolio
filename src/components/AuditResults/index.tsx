import React from 'react';
import { LIGHTHOUSE_DATA } from '@/data';
import Status from '@/components/Status';
import Styles from './styles.module.css';
import { IDs } from '@/constants';

function AuditResults() {
    return (
        <section id={IDs.statistics}>   
            <h1 className='title'>Statistics</h1>
            <div className={Styles.statusContainer}>
            {LIGHTHOUSE_DATA.map(score => (
                <Status key={score.title} title={score.title} percentage={score.percentage}>{score.children}</Status>
            ))}
            </div>
        </section>
    );
}

export default AuditResults;