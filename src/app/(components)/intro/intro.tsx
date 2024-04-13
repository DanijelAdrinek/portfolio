"use client";

import React from 'react';
import moon from '@public/images/moon_2.png';
import stars from '@public/images/stars.png';
import clifs from '@public/images/clifs.png';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Styles from './intro.module.css';

function Intro() {

    return (
        <>
            <Parallax className={Styles.parallax} pages={1.8}>
                <ParallaxLayer
                    className={Styles.background}
                    factor={2.5}
                    speed={0}
                    style={{
                        backgroundImage: `url(${stars.src})`
                    }}
                >

                </ParallaxLayer>

                <ParallaxLayer
                    className={Styles.name}
                    offset={0.6}
                    speed={0.2}
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
                        backgroundImage: `url(${moon.src})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        width: 'calc(100px + 20%)',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}
                >

                </ParallaxLayer>
                
                <ParallaxLayer
                    id='clifs'
                    className={Styles.clifs}
                    factor={2.5}
                    speed={0.6}
                    style={{
                        backgroundImage: `url(${clifs.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        pointerEvents: 'none'
                    }}
                >
                
                </ParallaxLayer>
            </Parallax>

            {/* Placeholder */}
            <div style={{ height: `100lvh`, width: '100%' }}></div>
        </>
    );
}

export default Intro;