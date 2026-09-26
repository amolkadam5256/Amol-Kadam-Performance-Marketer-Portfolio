"use client";

import { FormEvent, useState } from "react";
import { mailtoHref, site, whatsappHref } from "@/data/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [context, setContext] = useState("");

  const message = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Topic: ${topic}`,
    "",
    context,
  ].join("\n");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const mail = mailtoHref(`Enquiry: ${topic} — ${name}`, message);
    const popup = window.open(mail, "_blank");
    if (!popup) window.location.href = mail;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="form-success">
        <h2>Your enquiry is ready to send.</h2>
        <p>Your email app should have opened with the note addressed to {site.email}. If it did not, use one of the routes below — the message is already written.</p>
        <div className="form-success-actions">
          <a className="ed-btn ink" href={mailtoHref(`Enquiry: ${topic} — ${name}`, message)}>
            Open email
          </a>
          <a className="ed-btn ghost" href={whatsappHref(`Hi Amol, I am ${name}. ${topic}. ${context}`)}>
            Send on WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input required name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
      </label>
      <label>
        Work email
        <input required type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" />
      </label>
      <label>
        What can I help with?
        <select required name="topic" value={topic} onChange={(e) => setTopic(e.target.value)}>
          <option value="" disabled>Select a topic</option>
          <option>Performance marketing</option>
          <option>SEO or local search</option>
          <option>Analytics and tracking</option>
          <option>Consulting or opportunity</option>
        </select>
      </label>
      <label>
        Context
        <textarea required name="context" value={context} onChange={(e) => setContext(e.target.value)} placeholder="A little about the challenge, goals and timeline." rows={5} />
      </label>
      <button className="ed-btn ink" type="submit">Send enquiry</button>
    </form>
  );
}
