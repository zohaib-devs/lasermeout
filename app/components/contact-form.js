"use client";

import { useState } from "react";
import styles from "./contact-form.module.css";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-title">
      <span className={styles.watermark} aria-hidden="true">LMO / HELLO / LMO</span>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Email &amp; phone</p>
        <h2 id="contact-title" className={styles.title}>Get in <span>touch</span></h2>
        <p className={styles.intro}>
          Questions, concerns, or ready to get smooth? Fill in the form or call us on <a href="tel:+442077884712">020 7788 4712</a>.
        </p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.fields}>
            <label><span>First name</span><input name="firstName" autoComplete="given-name" required /></label>
            <label><span>Last name</span><input name="lastName" autoComplete="family-name" required /></label>
            <label><span>Email address</span><input name="email" type="email" autoComplete="email" required /></label>
            <label><span>Mobile number</span><input name="phone" type="tel" autoComplete="tel" required /></label>
          </div>
          <label className={styles.message}><span>Your message</span><textarea name="message" rows="6" required /></label>
          <button type="submit">{submitted ? "Message received" : "Submit form"}</button>
          <p className={styles.status} aria-live="polite">{submitted ? "Thanks — we’ll be in touch shortly." : ""}</p>
        </form>
      </div>
    </section>
  );
}
