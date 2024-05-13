import React from 'react';
import myImage from '@public/images/Danijel_Adrinek_Professional.webp';
import Image from 'next/image';
import styles from './styles.module.css';
import Animation from '@/components/Animation';
import InfoClient from './client_info';
import './info.css';
import { IDs } from '../../constants/IDs';

const Info = () => {

    const delay = 450
    
    return (
        <section id={IDs.info} className={`section ${styles.intro}`}>
            <Animation animation='fade-up' delay={50} anchorPlacement='top-bottom'>
                <h1 className='title'>WEB DEVELOPER</h1>
            </Animation>
            <div className={styles.content}>
                
                <Animation className={`info__infoCard ${styles.aboutMeCard}`} animation="fade-up" delay={350} anchorPlacement="top-bottom" Tag='article'>
                    <div className={styles.imageContainer}>
                        <Image src={myImage} alt='Danijel Adrinek' width={250} height={250} loading='lazy'/>
                    </div>
                    <h2 className={`anim-typewriter ${styles.name}`}>Danijel Adrinek</h2>
                    <div className={styles.aboutMe}>
                        <h3 className={styles.title}>About me</h3>
                        <p className={styles.text}>I am a passionate web developer with a keen eye for details.</p> <p className={styles.text}>I transform your designs into pixel-perfect web solutions while keeping the websites SEO optimized, easy to use, and written in clean, easily managable code.</p>
                    </div>
                </Animation>

                <Animation className={`info__infoCard ${styles.languagesCard}`} animation="fade-up" delay={delay}>
                    <article className={styles.languages}>
                        <h3 className={styles.title}>Programming languages I have previously used:</h3>
                        <div>
                            <InfoClient/>
                        </div>
                    </article>
                </Animation>

                <Animation className={`info__infoCard ${styles.textCard}`} animation="fade-up" data-aos-delay={delay}>
                    <article>
                        <h2 className={styles.title}>What I can do for you:</h2>
                        <p className={styles.text}>Clean Code</p>
                        <p className={styles.text}>Pixel-perfect web solutions that completely match the design assigned to me</p>
                        <p className={styles.text}>SEO optimized websites that perform well on the web, and rank high on Google</p>
                        <p className={styles.text}>Advanced knowledge of animations and animation libraries like AOS</p>
                        <p className={styles.text}>Mobile first code</p>
                        <p className={styles.text}>Cross browser compatibility</p>
                        <p className={styles.text}>Responsive design</p>
                    </article>
                </Animation>

            </div>
        </section>
    );
}

export default Info;