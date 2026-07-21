"use client";

import { useState } from "react";
import { Mail, Phone, Globe } from "lucide-react";
import { SiLinkedin } from "react-icons/si";
import SectionHead from "./SectionHead";

export default function Contact({ contact }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    const to = contact.email.startsWith("[") ? "" : contact.email;
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section className="mb-3">
      <SectionHead title="Contact" icon={Mail} />

      <div className="w-full h-[220px] border border-rule mb-6 overflow-hidden">
        <iframe
          title="Map of Fort Walton Beach, FL"
          src="https://www.google.com/maps?q=Fort+Walton+Beach,+FL&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(0.15) contrast(1.05)" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.2fr] gap-8">
        <div className="text-[13.5px] leading-loose">
          <p className="mb-4 text-ink-soft">
            Have a role, a project, or just want to say hi — reach out directly
            or use the form.
          </p>
          <div className="font-mono text-[12px] space-y-1.5">
            <div className="flex items-center gap-2">
              <Mail size={13} className="text-accent shrink-0" />
              {contact.email}
            </div>
            <div className="flex items-center gap-2">
              <Phone size={13} className="text-accent shrink-0" />
              {contact.phone}
            </div>
            <div className="flex items-center gap-2">
              <Globe size={13} className="text-accent shrink-0" />
              {contact.site}
            </div>
            <div className="flex items-center gap-2">
              <SiLinkedin size={13} className="text-accent shrink-0" />
              {contact.linkedin}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <label className="flex flex-col gap-1">
            <span className="font-mono text-[9.5px] uppercase tracking-wider text-lilac">
              Name
            </span>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="border border-rule bg-card px-3 py-2 text-[13.5px] focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="font-mono text-[9.5px] uppercase tracking-wider text-lilac">
              Email
            </span>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="border border-rule bg-card px-3 py-2 text-[13.5px] focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="font-mono text-[9.5px] uppercase tracking-wider text-lilac">
              Message
            </span>
            <textarea
              name="message"
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              className="border border-rule bg-card px-3 py-2 text-[13.5px] resize-none focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            />
          </label>
          <button
            type="submit"
            className="self-start font-mono text-[11px] uppercase tracking-wider border border-ink px-4 py-2 mt-1 hover:bg-ink hover:text-paper transition-colors"
          >
            Send message
          </button>
          {sent && (
            <p className="text-[12px] text-lilac font-mono">
              Opening your email client…
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
