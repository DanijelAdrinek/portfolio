"use client";

import { sendEmail } from "@/api";
function ContactForm() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const {name, email, message} = event.target as any;

        sendEmail(name.value, email.value, message.value);

    };

  return (
    <>
        <h2>Contact Me</h2>

        <p>Necessary fields are marked with a *</p>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Full Name"/>
            <input type="email" name="email" placeholder="Email*" required />
            <textarea name="message" placeholder="Message*" required />
            <button type="submit">Send</button>
        </form>
    </>
  );
}

export default ContactForm;