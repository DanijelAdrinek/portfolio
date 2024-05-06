import React from 'react';
import Styles from './status.module.css';
import CircularProgressBar from './CircularProgressBar';

interface Props {
    title: string;
    children: string;
    percentage: number;
}

function Status({title, children, percentage}: Props) {
    return (
        <article className={`status ${Styles.container}`} data-aos="fade-up">
            <h3 className={Styles.title}>{title}</h3>
                <CircularProgressBar percentage={percentage}/>
            <p className={Styles.description}>{children}</p>
        </article>
    );
}

export default Status;