import React from 'react';
import { LIGHTHOUSE_DATA } from '@/data';
import Status from '@/components/Status';
import Styles from './styles.module.css';

function AuditResults() {
    return (
        <section className={Styles.container}>
        {LIGHTHOUSE_DATA.map(score => (
            <Status key={score.title} title={score.title} percentage={score.percentage}>{score.children}</Status>
        ))}
        </section>
    );
}

export default AuditResults;