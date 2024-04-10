import React from 'react';
import styles from './info.module.css';

function Info() {
    return (
        <section className={`${styles.intro} content box-shadow`}>
            <h1 className={`${styles.title} `}><span>✹</span> Intro <span>✹</span></h1>
            <h3>Danijel Adrinek</h3>
            <h5>Web Developer</h5>
            <p>Passionate about creating beautiful, modern websites and creating amazing animations while keeping the website optimized and SEO friendly to the max</p>
        </section>
    );
}

export default Info;