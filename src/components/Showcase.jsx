import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Cinematic Mech — High Poly',
    tag: '3D Art',
    desc: 'Hard-surface modeling, shader artistry, and cinematic lighting.',
  },
  {
    title: 'Procedural City — Real-Time',
    tag: 'Optimization',
    desc: 'GPU-friendly topology, LOD strategies, and baked lighting.',
  },
  {
    title: 'Stylized Character — Animation',
    tag: 'Animation',
    desc: 'Exaggerated motion principles inspired by Gear 5 and Spider-Verse.',
  },
  {
    title: 'LookDev — Iridescent Materials',
    tag: 'LookDev',
    desc: 'Thin-film interference and toon/halftone hybrid shaders.',
  },
];

const Showcase = () => {
  return (
    <section id="work" className="relative w-full bg-white py-20 text-neutral-900 dark:bg-black dark:text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(168,85,247,0.15),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="font-display text-3xl font-black sm:text-5xl">3D Art Showcase</h2>
            <p className="mt-3 max-w-2xl text-neutral-600 dark:text-neutral-300">
              A selection of high-poly renders, real-time assets, and stylized animations.
            </p>
          </div>
          <a href="#contact" className="hidden rounded-lg border border-neutral-200 px-4 py-2 text-sm hover:bg-neutral-50 dark:border-white/15 dark:hover:bg-white/10 sm:block">
            Commission / Collaborate
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200/60 bg-white shadow-md transition dark:border-white/10 dark:bg-neutral-900/50"
            >
              {/* Placeholder media frame */}
              <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br from-neutral-200 via-neutral-100 to-white dark:from-fuchsia-900/30 dark:via-indigo-900/20 dark:to-neutral-900">
                <div className="absolute inset-0 mix-blend-overlay bg-[radial-gradient(circle,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:12px_12px]" />
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background:'conic-gradient(from 90deg at 50% 50%, rgba(236,72,153,0.15), rgba(99,102,241,0.15), rgba(34,211,238,0.15), rgba(236,72,153,0.15))'}} />
              </div>

              <div className="space-y-1 p-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-fuchsia-600 dark:text-fuchsia-400">
                  <span>{p.tag}</span>
                  <span className="text-neutral-400">•</span>
                  <span>Stylized</span>
                </div>
                <h3 className="text-lg font-bold">{p.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
