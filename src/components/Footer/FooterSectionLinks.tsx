import React from 'react';
import { IDs } from '@/constants';

/**
 * Capitalizes first string of every word
 */
function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Converts ID's that would have multiple words like "contactForm" to a more readable format like "Contact Form"
 */
function idToText(id: string) {
    return id
        .replace(/([A-Z])/g, ' $1')
        .split(' ')
        .map(capitalizeFirstLetter)
        .join(' ')
        .trim();
}

function FooterSectionLinks() {
    
    const values = Object.values(IDs);

    return (
        <div>
            <h2>Sections:</h2>
            <ul>
                { values.map(id => <li key={id}><a href={`#${id}`}>{idToText(id)}</a></li>) }
            </ul>
        </div>
    );
}

export default FooterSectionLinks;