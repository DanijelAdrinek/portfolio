import React from 'react';
import Image from 'next/image';
import Github from '@public/images/github-mark-white.svg';
import Linkedin from '@public/images/In-Blue-40.png';

function FooterSocials() {

    const imageSize = 40;

    return (
        <div data-testid="footer-socials">
            <h2>Socials:</h2>
            <p>
                <a href="https://www.github.com/DanijelAdrinek" target="_blank" rel="noreferrer">
                    <picture>
                        <Image height={imageSize} width={imageSize} alt='Github' src={Github.src}/>
                    </picture>
                </a>
                <a href="https://www.linkedin.com/in/danijel-adrinek-502237227" target="_blank" rel="noreferrer">
                    <picture>
                        <Image height={imageSize} width={imageSize} alt='Linkedin' src={Linkedin.src}/>
                    </picture>
                </a>
            </p>
        </div>
    );
}

export default FooterSocials;