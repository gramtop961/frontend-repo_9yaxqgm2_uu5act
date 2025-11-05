import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-white text-neutral-900 dark:bg-[#0a0a0a] dark:text-white">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient energy layers (do not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/10 dark:from-fuchsia-500/10 dark:via-transparent dark:to-indigo-500/10" />
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_30%,black,transparent)] bg-[radial-gradient(closest-side,rgba(255,255,255,0.35),transparent)] dark:bg-[radial-gradient(closest-side,rgba(139,92,246,0.35),transparent)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-neutral-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-white"
        >
          Lead 3D Artist • AI Consultant
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="font-display text-4xl font-black leading-tight sm:text-6xl md:text-7xl"
        >
          Where Creativity
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-indigo-600 to-cyan-500 dark:from-fuchsia-400 dark:via-indigo-400 dark:to-cyan-300"> Meets Code</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-5 max-w-2xl text-balance text-base text-neutral-700 dark:text-neutral-300 sm:text-lg"
        >
          Lead 3D Artist & AI Consultant pushing the limits of art and intelligence — blending stylized animation,
          real-time optimization, and intelligent systems for VR/AR and beyond.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-6 py-3 text-white shadow-lg transition hover:shadow-fuchsia-500/30 dark:bg-white dark:text-neutral-900"
          >
            Explore My Work
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M8 7H17V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-neutral-300/70 bg-white/70 px-6 py-3 text-neutral-900 backdrop-blur transition hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Comic halftone corners */}
      <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rotate-6 bg-[radial-gradient(circle,rgba(0,0,0,0.25)_1px,transparent_1px)] [background-size:10px_10px] dark:bg-[radial-gradient(circle,rgba(255,255,255,0.15)_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute -bottom-10 -right-10 h-44 w-44 -rotate-6 bg-[radial-gradient(circle,rgba(0,0,0,0.25)_1px,transparent_1px)] [background-size:10px_10px] dark:bg-[radial-gradient(circle,rgba(255,255,255,0.15)_1px,transparent_1px)]" />
    </section>
  );
};

export default Hero;
