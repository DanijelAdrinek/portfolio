"use client";

import { useState, useEffect, useReducer } from "react";
import { sendEmail } from "@/api";
import { z } from "zod";
import Styles from './styles.module.css';
import Button from "../Button";

const isValidFormInfo = z.object({
    name: z.string(),
    email: z.string().email(),
    message: z.string().min(1)
});

interface State {
    name: string;
    email: string;
    message: string;
}

const ACTIONS = {
    name: 'name',
    email: 'email',
    message: 'message'
}

type ActionType = typeof ACTIONS[keyof typeof ACTIONS];

interface Action {
    type: ActionType;
    payload: string;
}

function reducer(state: State, action: Action) {

    switch (action.type) {
      case ACTIONS.name:
        return { ...state, name: action.payload };
      case ACTIONS.email:
        return { ...state, email: action.payload };
      case ACTIONS.message:
        return { ...state, message: action.payload };
      default:
        return state;
    }
  }
function ContactForm() {

    let [isButtonEnabled, setIsButtonEnabled] = useState(false);

    const [state, dispatch] = useReducer(reducer, { name: '', email: '', message: '' });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const {name, email, message} = event.target as any;

        sendEmail(name.value, email.value, message.value);

    };

    const handleInputChange = (event : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const name = event.target.name as keyof typeof ACTIONS;

        console.log(name);

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
    <section className={Styles.container}>
        <h2 className={Styles.title}>Contact Me</h2>
        <p className={Styles.formInstructions}>Necessary fields are marked with a *</p>
        <form className={Styles.form} onSubmit={handleSubmit}>
            <div className={Styles.formGroup}>
                <label htmlFor="name">Full Name:</label>
                <input type="text" name="name" id="name" onChange={handleInputChange} className={Styles.name} placeholder="John Doe"/>
            </div>
            <div className={Styles.formGroup}>
                <label htmlFor="email">Email*:</label>
                <input type="email" name="email" id="email" className={Styles.email} onChange={handleInputChange} placeholder="john@doe.email" required />
            </div>
            <div className={`${Styles.formGroup} ${Styles.messageContainer}`}>
                <label htmlFor="message">Message*:</label>
                <textarea name="message" id="message" className={Styles.message} onChange={handleInputChange} placeholder="Your message" required />
            </div>
            <Button buttonType="submit" disabled={!isButtonEnabled}>Send</Button>
        </form>
    </section>
  );
}

export default ContactForm;