"use client";

import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';
import Styles from './code.module.css';
import './prism.css';
import AOS from 'aos';
import Animation from '../animation/animation';
import { SIDES, LANGUAGES } from '@/constants';

type Side = typeof SIDES[keyof typeof SIDES];
type Language = typeof LANGUAGES[keyof typeof LANGUAGES];

interface Props {
    children: string;
    side?: Side;
    language?: Language;
    note?: string;
}

function Code({children, side = SIDES.LEFT, language = LANGUAGES.JAVASCRIPT, note}: Props) {;

    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {

        Prism.highlightAll();
        AOS.refreshHard();

    }, [isExpanded]);

    function toggleIsExpanded() {
        setIsExpanded(!isExpanded);
    }

    return (
        <div className={Styles.editorContainer}>
            <Animation animation={side.animation}>
            <article className={`${Styles.editor} ${Styles[side.class]} ${isExpanded ? Styles.open : Styles.closed}`}>

                {/* Header */}
                <div className={Styles.header}>
                    <div className={Styles.headerDecorations}></div>
                </div>

                {/* Code */}
                <pre>

                    <button onClick={toggleIsExpanded} className={Styles.button}>{isExpanded ? "Shrink" : "Expand"}</button> <br/>
                    {/* Displays note contents, then adds br tag to the end to create a new line */}
                    {note && <>{note}<br/></>}
                    
                    <code className={language}>
                        {children}
                    </code>

                </pre>
            </article>
            </Animation>
        </div>
    );
}

export default Code;