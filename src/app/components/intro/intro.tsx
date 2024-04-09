import React from 'react';
import styles from './intro.module.css';

function Intro() {
    return (
        <section className={`${styles.intro} content box-shadow`}>
            <h1>Intro</h1>
            <h3>Danijel Adrinek</h3>
            <h5>Web Developer</h5>
            <p>Passionate about creating beautiful, modern websites and creating amazing animations while keeping the website optimized and SEO friendly to the max</p>
        </section>
    );
}

export default Intro;