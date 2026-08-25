import { useState } from "react";
import Reveal from "./Reveal";
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {};
    if (form.name.trim().length < 2) {
      nextErrors.name = "Please enter your name.";
    }
    if (!validateEmail(form.email.trim())) {
      nextErrors.email = "Please enter a valid email.";
    }
    if (form.message.trim().length < 10) {
      nextErrors.message = "Message must be at least 10 characters.";
    }
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSuccess(false);
      return;
    }
    setErrors({});
    setSuccess(true);
    setForm({ name: "", email: "", message: "" });
    window.setTimeout(() => setSuccess(false), 5000);
  };
  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Contact</h2>
        </Reveal>
        <Reveal>
          <p className="section-subtitle">
            Let&apos;s build something together
          </p>
        </Reveal>
        <div className="contact-grid">
          <Reveal className="contact-info">
            <p>
              I&apos;m open to freelance work, collaborations, and full-time
              opportunities. Drop a message and I&apos;ll get back to you soon.
            </p>
            <ul className="contact-details">
              <li>
                <strong>Email</strong>
                <a href="mehaknadeem209@gmail.com">mehaknadeem209@gmail.com</a>
              </li>
              <li>
                <strong>Location</strong>
                <span>Available for remote work</span>
              </li>
            </ul>
          </Reveal>
          <Reveal>
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={errors.name ? "error" : ""}
                  required
                />
                <span className="error-msg">{errors.name || ""}</span>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@email.com"
                  className={errors.email ? "error" : ""}
                  required
                />
                <span className="error-msg">{errors.email || ""}</span>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className={errors.message ? "error" : ""}
                  required
                />
                <span className="error-msg">{errors.message || ""}</span>
              </div>
              <button type="submit" className="btn btn-primary btn-full">
                Send Message
              </button>
              {success && (
                <p className="form-success">
                  Message sent successfully! I&apos;ll reply soon.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
