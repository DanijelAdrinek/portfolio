import React from 'react';
import Styles from './styles.module.css';
import FooterSectionLinks from './FooterSectionLinks';
import FooterSocials from './FooterSocials';
import FooterInfo from './FooterInfo';

function Footer() {
    return (
        <footer className={Styles.footer}>
            <FooterInfo/>
            <FooterSocials/>
            <FooterSectionLinks/>
        </footer>
    );
}

export default Footer;