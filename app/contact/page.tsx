"use client";

import { useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { FAQ } from "@/components/common/FAQ";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHeader
        eyebrow="CONTACT"
        title="Start with the problem."
        description="Share the business context, what you are trying to improve, and where the friction is showing up."
      />
      <section className="contact-layout shell">
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          {sent ? (
            <div className="form-success">
              <h2>Thanks—your note is ready.</h2>
              <p>Please email it directly to continue the conversation.</p>
              <a className="button button-red" href="mailto:amolkadam1274@gmail.com">
                Email Amol ↗
              </a>
            </div>
          ) : (
            <>
              <label>
                Name
                <input required placeholder="Your name" />
              </label>
              <label>
                Work email
                <input type="email" required placeholder="you@company.com" />
              </label>
              <label>
                What can I help with?
                <select defaultValue="">
                  <option value="" disabled>Select a topic</option>
                  <option>Performance marketing</option>
                  <option>SEO or local search</option>
                  <option>Analytics and tracking</option>
                  <option>Consulting or opportunity</option>
                </select>
              </label>
              <label>
                Context
                <textarea required placeholder="A little about the challenge, goals and timeline." rows={5} />
              </label>
              <button className="button button-red">Send enquiry ↗</button>
            </>
          )}
        </form>

        <aside>
          <p className="overline">DIRECT CONTACT</p>
          <h2>Prefer a direct route?</h2>
          <a href="mailto:amolkadam1274@gmail.com">amolkadam1274@gmail.com ↗</a>
          <a href="tel:+917709266280">+91 7709266280 ↗</a>
          <a href="https://www.linkedin.com/in/amolkadam77">LinkedIn profile ↗</a>
          <p>Based in Taleranwadi, Pune, Maharashtra.</p>
        </aside>
      </section>
      <FAQ />
    </>
  );
}
