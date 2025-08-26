"use client";

import Section from "./Section";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <Section id="contact">
      <h2 className="h2">Contact</h2>
      <p className="p-muted mt-2">
        Want to collaborate or chat about opportunities? Reach out!
      </p>

      <div className="mt-2 grid md:grid-cols-2 gap-6">
        {/* Quick Links */}
        <div className="card p-3 glow-shadow transition-all duration-300">
          <h3 className="font-semibold">Quick Links</h3>

          <div className="flex flex-col gap-1.5">
            <a
              href="mailto:you@example.com"
              className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-blue-500 no-underline"
            >
              <Mail size={18} /> you@example.com
            </a>

            <a
              href="https://www.linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-blue-500 no-underline"
            >
              <Linkedin size={18} /> linkedin.com/in/your-username
            </a>

            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-blue-500 no-underline"
            >
              <Github size={18} /> github.com/your-username
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          className="card p-3 glow-shadow transition-all duration-300"
          action="https://formsubmit.co/you@example.com"
          method="POST"
        >
          <input type="hidden" name="_subject" value="New message from portfolio" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <div className="grid gap-2">
            <div>
              <label className="text-sm">Your Name</label>
              <input
                name="name"
                required
                className="mt-1 w-full rounded-xl border border-black/10 dark:border-white/10 bg-transparent px-3 py-1 transition duration-150 glow-input"
                placeholder="Jane Doe"
              />
            </div>

            <div>
              <label className="text-sm">Email</label>
              <input
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-xl border border-black/10 dark:border-white/10 bg-transparent px-3 py-1 transition duration-150 glow-input"
                placeholder="jane@example.com"
              />
            </div>

            <div>
              <label className="text-sm">Message</label>
              <textarea
                name="message"
                required
                rows={4}
                className="mt-1 w-full rounded-xl border border-black/10 dark:border-white/10 bg-transparent px-3 py-1 transition duration-150 glow-input"
                placeholder="Tell me about your project…"
              />
            </div>

            <div className="mt-1">
              <button
                className="mx-auto glow-tile inline-flex items-center gap-2 rounded-2xl px-4 py-1.5 bg-brand text-white hover:bg-brand-600 transition transform hover:scale-105"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </div>

          <p className="p-muted text-xs mt-0.5">
            No server required. Replace <code>you@example.com</code> in the form action with your
            real email to receive messages.
          </p>
        </form>
      </div>
    </Section>
  );
}
