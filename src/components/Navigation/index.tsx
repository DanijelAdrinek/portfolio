"use client";

import React from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@public/images/face_black_noBG.svg';

// This is the Navigation component that I was making while I still didnt know what the project would look like and what it would do
//  this component did not make it to the final project
function Navigation() {
    return (
        <nav className={styles.nav}>
            <div className={styles['nav-content-container']}>
                <Image src={Logo} alt='Logo of my face' width={50} height={50} className={styles.image}/>
                <div className={styles['nav-links']}>
                    <Link href="/">Home</Link>
                    <Link href="/about">About Me</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/contact">Contact Me</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;