import React from 'react';
import Image from 'next/image';

function FooterSocials() {

    const imageSize = 40;

    return (
        <div>
            <h3>Socials:</h3>
            <p>
                <a href="https://www.github.com/DanijelAdrinek" target="_blank" rel="noreferrer">
                    <picture>
                        <Image height={imageSize} width={imageSize} alt='Github' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg"/>
                    </picture>
                </a>
                <a href="https://www.linkedin.com/in/danijel-adrinek-502237227" target="_blank" rel="noreferrer">
                    <picture>
                        <Image height={imageSize} width={imageSize} alt='Linkedin' src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg"/>
                    </picture>
                </a>
            </p>
        </div>
    );
}

export default FooterSocials;