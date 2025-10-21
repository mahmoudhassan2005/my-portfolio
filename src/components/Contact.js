import React, { useState } from "react";

/*
  Set up Formspree:
  1) Go to https://formspree.io, create a form, get form endpoint like https://formspree.io/f/yourFormId
  2) Replace FORM_ENDPOINT below.
  Or replace with your own backend endpoint (see optional server code below).
*/

const FORM_ENDPOINT = "http://localhost:4000/api/contact"; // <-- replace with your Formspree endpoint

function Contact() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json"
        }
      });
      if (res.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch (err) {
      setStatus("ERROR");
    }
  };

  return (
    <section className="contact container card">
      <h2>Contact</h2>
      <p>Have a project or opportunity? Send a message and I’ll get back soon.</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          <span>Name</span>
          <input name="name" type="text" required />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" required />
        </label>
        <label>
          <span>Message</span>
          <textarea name="message" rows="6" required />
        </label>
        <div className="form-row">
          <button className="btn primary" type="submit">Send Message</button>
          <div className="status">
            {status === "SUCCESS" && <span className="success">Thanks! I'll reply soon.</span>}
            {status === "ERROR" && <span className="error">Oops! Something went wrong.</span>}
          </div>
        </div>
      </form>
      <p className="muted">Alternatively, email me at <a href="mailto:mahmoudhassan01550@gmai.com">mahmoudhassan01550@gmai.com</a></p>
    </section>
  );
}

export default Contact;