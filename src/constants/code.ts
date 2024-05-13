type SideSnippet = {class: string, animation: string};

interface Sides {
  LEFT: SideSnippet;
  RIGHT: SideSnippet;
}

export const CODE_SIDES: Sides = {
  LEFT: { class: 'left', animation: "fade-right" },
  RIGHT: { class: 'right', animation: "fade-left" }
}

interface Languages {
  JAVASCRIPT: string;
  TYPESCRIPT: string;
  HTML: string;
  CSS: string;
}

export const CODE_LANGUAGES: Languages = {
  JAVASCRIPT: "language-javascript",
  TYPESCRIPT: "language-typescript",
  HTML: "language-html",
  CSS: "language-css"
}

interface CodeSnippet {
  note: string;
  code: string;
}

export const CODE_EXAMPLES: CodeSnippet[] = [
  { 
    note: 'ContactForm:', 
    code: 
`
"use client";

import { useState, useEffect, useReducer } from "react";
import { sendEmail } from "@/api";
import { z } from "zod";
import Styles from './styles.module.css';
import Button from "../Button";
import { IDs } from "@/constants";

interface State {
    name: string;
    email: string;
    message: string;
}

type ActionType = typeof ACTIONS[keyof typeof ACTIONS];

interface Action {
    type: ActionType;
    payload: string;
}

const ACTIONS = {
    name: 'name',
    email: 'email',
    message: 'message',
    reset: 'reset'
}


const isValidFormInfo = z.object({
    name: z.string(),
    email: z.string().email(),
    message: z.string().min(1)
});

function reducer(state: State, action: Action) {

    switch (action.type) {
        case ACTIONS.name:
            return { ...state, name: action.payload };
        case ACTIONS.email:
            return { ...state, email: action.payload };
        case ACTIONS.message:
            return { ...state, message: action.payload };
        case ACTIONS.reset:
            return { name: '', email: '', message: '' };
        default:
            return state;
    }
  }

function ContactForm() {

    const [isButtonEnabled, setIsButtonEnabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [state, dispatch] = useReducer(reducer, { name: '', email: '', message: '' });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const {name, email, message} = event.target as any;

        setIsLoading(true);
        const response = await sendEmail(name.value, email.value, message.value)
        setIsLoading(false)

        if (response.success === "true") {
            dispatch({ type: ACTIONS.reset, payload: '' });
        };

        alert(response.message);
    };

    const handleInputChange = (event : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const name = event.target.name as keyof typeof ACTIONS;

        dispatch({
            type: ACTIONS[name],
            payload: event.target.value
        });
    }

    useEffect(() => {
        // checks if user input is valid and if submit button should be enabled
        setIsButtonEnabled(isValidFormInfo.safeParse(state).success);
    }, [state])

  return (
    <section id={IDs.contactForm} className={{Styles.container} section}>
        <h1 className='title'>Contact Me</h1>
        <p className={Styles.formInstructions}>Necessary fields are marked with a *</p>
        <form className={Styles.form} onSubmit={handleSubmit}>
            <div className={Styles.formGroup}>
                <label htmlFor='name'>Full Name:</label>
                <input type='text' name='name' id='name' value={state.name} onChange={handleInputChange} className={Styles.name} placeholder='John Doe'/>
            </div>
            <div className={Styles.formGroup}>
                <label htmlFor='email'>Email*:</label>
                <input type='email' name='email' id='email' value={state.email} className={Styles.email} onChange={handleInputChange} placeholder='john@doe.email' required />
            </div>
            <div className={{Styles.formGroup} {Styles.messageContainer}}>
                <label htmlFor='message'>Message*:</label>
                <textarea name='message' id='message' value={state.message} className={Styles.message} onChange={handleInputChange} placeholder='Your message' required />
            </div>
            <Button buttonType='submit' disabled={!isButtonEnabled}>{isLoading ? 'Loading...' : 'Send'}</Button>
        </form>
    </section>
  );
}

export default ContactForm;
` 
  },
  {
    note: 'useAnimations hook:',
    code: 
`
'use client';

import { useEffect, useState, useRef } from 'react';
import { useLocalStorage } from './useLocalStorage';
import AOS from 'aos';

export function useAnimations(): {areAnimationsEnabled: boolean, setAnimations: (areEnabled: boolean) => void, setIsMobile: (isMobile: boolean) => void, refresh: () => void} {

    const numOfRenders = useRef(0);

    const key: string = 'animations';
    const initialValue: boolean = true;

    let [areAnimationsEnabled, setValue] = useLocalStorage(key, initialValue);
    const [isMobile, _setIsMobileState] = useState(true);

    // in production the site will render less times than in development, this code checks if we are in production or development, and adjusts the code accordingly
    process.env.NODE_ENV === 'production' ? numOfRenders.current = 1 : numOfRenders.current = 0;

    function _enableAnimations() {
        document.body.classList.remove('animationsDisabled');
        AOS.init({
            disable: 'mobile',
            duration: 350,
            offset: 200,
            once: false,
            easing: 'ease-in-out',
            anchorPlacement: 'top-bottom'
        });

    }

    function _disableAnimations() {document.body.classList.add('animationsDisabled');}

    
    function _handleAnimationStatus(shouldBeEnabled: boolean) {
        if(shouldBeEnabled && !isMobile) {
            _enableAnimations();
        } else {
            _disableAnimations();
        }
    }
    
    function refresh() {_handleAnimationStatus(areAnimationsEnabled!);}
    
    function setIsMobile(isMobile: boolean) {_setIsMobileState(isMobile);}
    
    function setAnimations(areEnabled: boolean) {

        _handleAnimationStatus(areEnabled);

        setValue(areEnabled);
    }

    useEffect(() => {

        // in production the site will render less times than in development, this code checks if we are in production or development, and adjusts the code accordingly
        if(numOfRenders.current < 2) {
            numOfRenders.current = numOfRenders.current + 1;
            return;
        }

        setAnimations(areAnimationsEnabled);
        
        // eslint-disable-next-line
    }, [areAnimationsEnabled]);

    useEffect(() => {
        refresh();
        // eslint-disable-next-line
    }, [isMobile])

    useEffect(() => {
        _handleAnimationStatus(true);
        // eslint-disable-next-line
    }, []);

    return {areAnimationsEnabled: areAnimationsEnabled!, setAnimations, setIsMobile, refresh};

}
`
  },
  {
    note: 'AuditResults:',
    code:
`
import React from 'react';
import { LIGHTHOUSE_DATA } from '@/data';
import Status from '@/components/Status';
import Styles from './styles.module.css';
import { IDs } from '@/constants';
import Animation from '@/components/Animation';

function AuditResults() {
    return (
        <section id={IDs.statistics} className='section'>   
            <Animation className='title' animation='fade-up' Tag='h1'>Statistics</Animation>
            <div className={Styles.statusContainer}>
            {LIGHTHOUSE_DATA.map(score => (
                <Status key={score.title} title={score.title} percentage={score.percentage}>{score.children}</Status>
            ))}
            </div>
        </section>
    );
}

export default AuditResults;
`
  }
]