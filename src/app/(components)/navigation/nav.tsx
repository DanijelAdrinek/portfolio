"use client";

import React, { useState } from 'react';
import styles from './nav.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@public/images/face_black_noBG.svg';


function Navigation() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className={styles.nav}>
            <div className={styles['nav-content-container']}>
                <Image src={Logo} alt='Logo of my face' width={50} height={50} className={styles.image}/>
                <div className={`${styles['nav-links']} ${isMenuOpen ? styles['open'] : ''}`}>
                    <Link href="/">Home</Link>
                    <Link href="/about">About Me</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/contact">Contact Me</Link>
                </div>
                <button onClick={toggleMenu} className={`${styles['menu-btn-container']} not_tablet not_desktop`}>
                    <div className={`${styles['menu-btn']}`}></div>
                </button>
            </div>
        </nav>
    );
}

export default Navigation;