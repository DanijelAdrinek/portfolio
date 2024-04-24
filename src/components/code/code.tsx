import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';
import Styles from './code.module.css';
import './prism.css';
import AOS from 'aos';

interface Sides {
    [index: string]: {class: string, animation: string};
}

export const SIDES: Sides = {
    LEFT: { class: 'left', animation: "fade-right" },
    RIGHT: { class: 'right', animation: "fade-left" }
}

interface Languages {
    [index: string]: string;
}

export const LANGUAGES: Languages = {
    JAVASCRIPT: "language-javascript",

}

type Side = typeof SIDES[keyof typeof SIDES];
type Language = typeof LANGUAGES[keyof typeof LANGUAGES];

interface Props {
    children: string;
    side?: Side;
    language?: Language;
    note?: string;
}

function Code({children, side = SIDES.LEFT, language = LANGUAGES.JAVASCRIPT, note}: Props) {;

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {

        Prism.highlightAll();
        AOS.refreshHard();

    }, [isOpen]);

    function toggleIsOpen() {
        setIsOpen(!isOpen);
    }

    return (
        <div className={Styles.editorContainer}>
            <div className={`${Styles.editor} ${Styles[side.class]} ${isOpen ? Styles.open : Styles.closed}`} style={{transition: 'all 0.5s ease-in-out'}} data-aos={side.animation}>

                {/* Header */}
                <div className={Styles.header}>
                    <div className={Styles.headerDecorations}></div>
                </div>

                {/* Code */}
                <pre>

                    <button onClick={toggleIsOpen} className={Styles.button}>{isOpen ? "Shrink" : "Expand"}</button> <br/>
                    {/* Displays note contents, then adds br tag to the end to create a new line */}
                    {note && <>{note}<br/></>}

                    
                    <code className={language}>
                        {children}
                    </code>

                </pre>
            </div>
        </div>
    );
}

export default Code;