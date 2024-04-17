"use client";

import React, { useState, useEffect } from 'react';
import myImage from '@public/images/Danijel_Adrinek_Professional.webp';
import Image from 'next/image';
import styles from './info.module.css';

function Info() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const updateWindowDimensions = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Add event listener to update isMobile state when window size changes
        window.addEventListener('resize', updateWindowDimensions);

        // Call the function once initially to set isMobile state
        updateWindowDimensions();

        // Clean up the event listener when the component unmounts
        return () => window.removeEventListener('resize', updateWindowDimensions);
    }, []);

    const firstArticleDelay = isMobile ? 650 : 650;
    const secondAricleDelay = isMobile ? 950 : 950;

    return (
        <section className={styles.intro}>
            <h1 className={styles.title} data-aos="fade-up" data-aos-delay="50" data-aos-anchor-placement="top-bottom">WEB DEVELOPER</h1>
            <div className={styles.content}>
                <article className='info__infoCard' data-aos="fade-up" data-aos-delay="350" data-aos-anchor-placement="top-bottom">
                    <div className={styles.imageContainer}>
                        <Image src={myImage} alt='Danijel Adrinek' height={250} width={250}/>
                    </div>
                    <h3 className={`anim-typewriter ${styles.name}`}>Danijel Adrinek</h3>
                    <div className={styles.aboutMe}>
                        <h5 className={styles.aboutTitle}>About me</h5>
                        <p className={styles.aboutText}>I am a passionate web developer with a keen eye for details.</p> <p className={styles.aboutText}>I transform your designs designs into pixel-perfect web solutions while keeping the websites SEO optimized, easy to use, and written in clean, easily managable code.</p>
                    </div>
                </article>
                <div className="text-container">
                    <article data-aos="fade-up" data-aos-delay={firstArticleDelay} data-aos-anchor-placement="top-bottom">
                    </article>
                    <article data-aos="fade-up" data-aos-delay={secondAricleDelay} data-aos-anchor-placement="top-bottom">
                        <h5>Programming languages I have previously used:</h5>
                        <p>
                            <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg" width="36" height="36" alt="NextJs" /></a>
                            <a href="https://shopify.com/](https://www.svgrepo.com/show/354341/shopify.svg" target="_blank" rel="noreferrer">
                            <Image src="https://www.svgrepo.com/show/354341/shopify.svg" width="36" height="36" alt="Shopify" />
                            </a>
                            <a href="https://git-scm.com/" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg" width="36" height="36" alt="Git" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="JavaScript" /></a><a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="36" height="36" alt="TypeScript" /></a><a href="https://dart.dev/" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/dart-colored.svg" width="36" height="36" alt="Dart" /></a><a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="36" height="36" alt="HTML5" /></a><a href="https://reactjs.org/" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a><a href="https://jquery.com/" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/jquery-colored.svg" width="36" height="36" alt="JQuery" /></a><a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="36" height="36" alt="CSS3" /></a><a href="https://sass-lang.com/" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg" width="36" height="36" alt="Sass" /></a><a href="https://getbootstrap.com/" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg" width="36" height="36" alt="Bootstrap" /></a><a href="https://redux.js.org/" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg" width="36" height="36" alt="Redux" /></a><a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="36" height="36" alt="NodeJS" /></a><a href="https://graphql.org/" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/graphql-colored.svg" width="36" height="36" alt="GraphQL" /></a><a href="https://www.mysql.com/" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg" width="36" height="36" alt="MySQL" /></a><a href="https://firebase.google.com/" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg" width="36" height="36" alt="Firebase" /></a><a href="https://flutter.dev/" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/flutter-colored.svg" width="36" height="36" alt="Flutter" /></a><a href="https://store.arduino.cc/?gclid=Cj0KCQjw2eilBhCCARIsAG0Pf8uueBifykWcsSS4LPESeGQfxGVKJYnzV7bz471XfknQJy_1VINVWM8aAkLtEALw_wcB" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/arduino-colored.svg" width="36" height="36" alt="Arduino" /></a><a href="https://www.docker.com/" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/docker-colored.svg" width="36" height="36" alt="Docker" /></a><a href="https://www.figma.com/" target="_blank" rel="noreferrer"><Image src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg" width="36" height="36" alt="Figma" /></a>
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Info;