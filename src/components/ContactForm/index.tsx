"use client";

import { useState, useEffect, useReducer } from "react";
import { sendEmail } from "@/api";
import { z } from "zod";
import Styles from './styles.module.css';
import Button from "../Button";
import { IDs } from "@/constants";
import Animation from "@/components/Animation";

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
    <section id={IDs.contactForm} className={`${Styles.container} section`}>
        <Animation animation='fade-up' Tag='h1' className='title'>Contact Me</Animation>
        <Animation animation='fade-up' Tag='p' className={Styles.formInstructions}>Necessary fields are marked with a *</Animation>
        <Animation animation='fade-up' Tag='form' className={Styles.form} onSubmit={handleSubmit}>
            <div className={Styles.formGroup}>
                <label htmlFor='name'>Full Name:</label>
                <input type='text' name='name' id='name' value={state.name} onChange={handleInputChange} className={Styles.name} placeholder='John Doe'/>
            </div>
            <div className={Styles.formGroup}>
                <label htmlFor='email'>Email*:</label>
                <input type='email' name='email' id='email' value={state.email} className={Styles.email} onChange={handleInputChange} placeholder='john@doe.email' required />
            </div>
            <div className={`${Styles.formGroup} ${Styles.messageContainer}`}>
                <label htmlFor='message'>Message*:</label>
                <textarea name='message' id='message' value={state.message} className={Styles.message} onChange={handleInputChange} placeholder='Your message' required />
            </div>
            <Button buttonType='submit' disabled={!isButtonEnabled}>{isLoading ? 'Loading...' : 'Send'}</Button>
        </Animation>
    </section>
  );
}

export default ContactForm;