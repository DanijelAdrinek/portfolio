'use client';

import React from 'react';
import moon from '@public/images/moon_2_smaller.webp';
import stars from '@public/images/stars.webp';
import clifs from '@public/images/clifs.webp';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Styles from './styles.module.css';
import Image from 'next/image';
import { IDs } from '@/constants';

function Intro() {

    return (
        <>
            <Parallax id={IDs.intro} className={Styles.parallax} pages={1.8}>
                <ParallaxLayer
                    className={Styles.background}
                    factor={2.5}
                    speed={0}
                >
                    <Image className={Styles.starsImg} src={stars.src} alt='stars' fill={true} loading='lazy' sizes='100vw' />
                </ParallaxLayer>

                <ParallaxLayer
                    className={Styles.name}
                    offset={0.6}
                    speed={0.1}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <h1>Danijel Adrinek</h1>
                </ParallaxLayer>

                <ParallaxLayer
                    className={Styles.moon}
                    speed={2}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        width: 'calc(100px + 20%)',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}
                >
                    <div className={Styles.moonImg}>
                        <Image src={moon.src} layout='fill' sizes='calc(100px + 20%)' alt='moon' priority={true} loading='eager' />
                    </div>
                </ParallaxLayer>
                
                <ParallaxLayer
                    id='clifs'
                    className={Styles.clifs}
                    factor={2.5}
                    speed={0.6}
                >
                    <Image className={Styles.clifsImg} src={clifs.src} alt='clifs' fill={true} loading='lazy' sizes='100vw' />
                </ParallaxLayer>
            </Parallax>

            {/* Placeholder */}
            <div className={Styles.placeholder}>
                <div className={Styles.gradient}></div>
            </div>
        </>
    );
}

export default Intro;