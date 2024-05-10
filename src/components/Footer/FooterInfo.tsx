import React from 'react';
import Styles from './styles.module.css';

function FooterInfo() {

    const currentYear = new Date().getFullYear();

    return (
        <div>
            <p className={Styles.currentYear}>{currentYear}</p>
            <p className={Styles.name}>Danijel Adrinek</p>
            <p>Web Developer</p>
        </div>
    );
}

export default FooterInfo;