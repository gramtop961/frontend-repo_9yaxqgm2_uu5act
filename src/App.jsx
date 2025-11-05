import React from 'react';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import Consulting from './components/Consulting';
import AboutContact from './components/AboutContact';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-white text-neutral-900 antialiased selection:bg-fuchsia-500/20 selection:text-fuchsia-700 dark:bg-black dark:text-white">
      {/* Sticky nav */}
      <header className="sticky top-0 z-50 w-full border-b border-neutral-200/70 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-neutral-950/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="font-display text-lg font-black tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-indigo-600 to-cyan-500">CREATIVE</span>
            <span className="ml-1">/ CODE</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm sm:flex">
            <a href="#work" className="opacity-80 hover:opacity-100">Work</a>
            <a href="#consulting" className="opacity-80 hover:opacity-100">AI Consulting</a>
            <a href="#about" className="opacity-80 hover:opacity-100">About</a>
            <a href="#contact" className="rounded-lg bg-neutral-900 px-3 py-1.5 text-white dark:bg-white dark:text-neutral-900">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Showcase />
        <Consulting />
        <AboutContact />
      </main>

      <footer className="border-t border-neutral-200/70 bg-white/60 py-8 text-sm text-neutral-600 backdrop-blur dark:border-white/10 dark:bg-neutral-950/60 dark:text-neutral-400">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 sm:flex-row">
          <p>© {new Date().getFullYear()} — Lead 3D Artist & AI Consultant</p>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-neutral-900 dark:hover:text-white">Top</a>
            <a href="#work" className="hover:text-neutral-900 dark:hover:text-white">Work</a>
            <a href="#contact" className="hover:text-neutral-900 dark:hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
