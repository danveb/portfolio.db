import { useState, useRef } from "react";
import { MessageSent } from "./index";
import emailjs from "@emailjs/browser";
import "../styles/Note.css";

const serviceId = process.env.REACT_APP_SERVICE_ID;
const templateId = process.env.REACT_APP_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_PUBLIC_KEY;

export default function Note() {
  // useState
  const [messageSent, setMessageSent] = useState<boolean>(false);

  const form = useRef<HTMLFormElement | null>(null);
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // error check for .env on EmailJS
    if (!serviceId || !templateId || !publicKey) {
      throw new Error("Environment variables not set correctly.");
    }
    emailjs.sendForm(serviceId, templateId, form.current as HTMLFormElement, publicKey)
      .then((result) => {
        console.log(result.text);
        setMessageSent(() => !messageSent);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="note">
      <div className="note__wrapper">
        {messageSent ? (
          <MessageSent />
        ) : (
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="user_name">Name</label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              placeholder="Your name"
              required
            />
            <label htmlFor="user_email">Email</label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              placeholder="Your email"
              required
            />
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Any message you'd like to send"
              required
            />
            <input className="submitBtn" type="submit" value="shoot email 👨‍💻" />
          </form>
        )}
      </div>
    </div>
  );
}