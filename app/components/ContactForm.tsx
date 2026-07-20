"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="form-success" role="status">
        <h3>Thank you. Your note is ready for our team.</h3>
        <p>We’ll review the context you shared and connect you with the most relevant adviser.</p>
        <button type="button" onClick={() => setSubmitted(false)}>Send another note</button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-row">
        <label>Full name<input name="name" autoComplete="name" required /></label>
        <label>Work email<input type="email" name="email" autoComplete="email" required /></label>
      </div>
      <label>Organisation<input name="organisation" autoComplete="organization" /></label>
      <label>How can we help?<textarea name="message" rows={4} required /></label>
      <button className="submit-button" type="submit">Send your note</button>
    </form>
  );
}
