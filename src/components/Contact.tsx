import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setStatus("idle");

    emailjs
      .sendForm("service_447zz8h", "template_3ne1tst", form.current, {
        publicKey: "RNXacVWVI2-lO_AF7",
      })
      .then(
        () => {
          setStatus("sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStatus("error");
        },
      );
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} ref={form}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="user_name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="user_email" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={6} required></textarea>
      </div>
      <button
        type="submit"
        className={`submit-button ${status === "sent" ? "submitted" : ""} ${status === "error" ? "error" : ""}`}
        disabled={status === "sent"}
      >
        {status === "sent" ? "Sent" : status === "error" ? "Failed - Try Again" : "Send Message"}
      </button>
    </form>
  );
}
