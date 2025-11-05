import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, User } from 'lucide-react';

const AboutContact = () => {
  const [sending, setSending] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // No backend wired — simulate a short delay for UX.
    await new Promise((r) => setTimeout(r, 900));
    alert('Thanks! Your message has been staged. Plug in your email service to receive real submissions.');
    setSending(false);
    e.currentTarget.reset();
  };

  return (
    <section id="about" className="relative bg-white py-24 text-neutral-900 dark:bg-black dark:text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_10%_20%,rgba(236,72,153,0.10),transparent)]" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-black sm:text-5xl">About</h2>
          <p className="mt-5 text-neutral-700 dark:text-neutral-300">
            I bridge the worlds of stylized 3D and intelligent systems. My work blends playful, high-energy aesthetics
            with technical rigor — from toon shaders and halftone FX to optimization for real-time engines.
          </p>
          <ul className="mt-6 grid gap-3 text-sm text-neutral-700 dark:text-neutral-300 sm:grid-cols-2">
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500" /> Stylized animation & lookdev</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-indigo-500" /> Real-time optimization & LOD</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> AI tooling & automation</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-violet-400" /> VR/AR experiences</li>
          </ul>

          <div className="mt-8 flex items-center gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-5 py-3 text-white dark:bg-white dark:text-neutral-900">
              <User className="h-4 w-4" />
              Contact
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 px-5 py-3 hover:bg-neutral-50 dark:border-white/15 dark:hover:bg-white/10">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 px-5 py-3 hover:bg-neutral-50 dark:border-white/15 dark:hover:bg-white/10">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>

        <div id="contact" className="relative">
          <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-400/20 blur-2xl" />
          <div className="rounded-2xl border border-neutral-200 bg-white/70 p-6 shadow-lg backdrop-blur dark:border-white/10 dark:bg-white/5">
            <h3 className="mb-4 text-xl font-bold">Contact</h3>
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm text-neutral-600 dark:text-neutral-300">Name</label>
                <input id="name" required type="text" className="w-full rounded-xl border border-neutral-300/80 bg-white px-4 py-3 text-sm outline-none ring-0 transition placeholder:text-neutral-400 focus:border-neutral-700 dark:border-white/10 dark:bg-white/5 dark:text-white" />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm text-neutral-600 dark:text-neutral-300">Email</label>
                <input id="email" required type="email" className="w-full rounded-xl border border-neutral-300/80 bg-white px-4 py-3 text-sm outline-none ring-0 transition placeholder:text-neutral-400 focus:border-neutral-700 dark:border-white/10 dark:bg-white/5 dark:text-white" />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm text-neutral-600 dark:text-neutral-300">Message</label>
                <textarea id="message" required rows="4" className="w-full rounded-xl border border-neutral-300/80 bg-white px-4 py-3 text-sm outline-none ring-0 transition placeholder:text-neutral-400 focus:border-neutral-700 dark:border-white/10 dark:bg-white/5 dark:text-white" />
              </div>
              <button type="submit" disabled={sending} className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-600 to-cyan-500 px-5 py-3 text-white shadow-lg transition disabled:opacity-60">
                <Send className="h-4 w-4" /> {sending ? 'Sending…' : 'Send Message'}
              </button>
            </form>
            <p className="mt-3 flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
              <Mail className="h-3.5 w-3.5" /> Prefer email? your@email.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContact;
