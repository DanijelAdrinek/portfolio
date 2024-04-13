import React from 'react';
import myImg from '@public/images/Danijel_Adrinek_Professional.png';
import Image from 'next/image';
import styles from './info.module.css';

function Info() {
    return (
        <section className="intro">
            <h1 className={styles.title} data-aos="zoom-y-out" data-aos-delay="50" data-aos-anchor-placement="top-bottom">WEB DEVELOPER</h1>
            <article className={styles.infoCard}>
                <Image src={myImg} alt='Danijel Adrinek' height={250} width={250}/>
            </article>
            <div className="text-container">
                <article></article>
                <article></article>
            </div>
        </section>
    );
}

export default Info;