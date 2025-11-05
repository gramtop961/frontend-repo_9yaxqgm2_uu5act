import React from 'react';
import { motion } from 'framer-motion';

// Simple animated SVG lines to suggest AI data flow / neural connections
const NeuralLines = () => (
  <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 800 400" preserveAspectRatio="none">
    <defs>
      <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#a855f7" stopOpacity="0.0" />
        <stop offset="50%" stopColor="#a855f7" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.0" />
      </linearGradient>
      <filter id="blur"><feGaussianBlur stdDeviation="2" /></filter>
    </defs>
    {[...Array(6)].map((_, i) => (
      <motion.path
        key={i}
        d={`M 0 ${50 + i * 50} C ${200 + i * 10} ${20 + i * 40}, ${400 + i * 20} ${80 + i * 20}, 800 ${40 + i * 45}`}
        stroke="url(#glow)"
        strokeWidth="2"
        fill="none"
        style={{ filter: 'url(#blur)' }}
        initial={{ pathLength: 0, opacity: 0.2 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 2.2 + i * 0.3, ease: 'easeInOut' }}
      />
    ))}
  </svg>
);

const bullets = [
  {
    title: 'AI Pipelines',
    body: 'Custom diffusion pipelines, dataset prep, and toolchains for creative production.',
  },
  {
    title: 'Realtime Optimization',
    body: 'LOD, retopo, GPU materials, and streaming assets for VR/AR and web.',
  },
  {
    title: 'Automation & Tools',
    body: 'Workflow automation, Python/Node tooling, glTF/FBX processing, and render ops.',
  },
];

const Consulting = () => {
  return (
    <section id="consulting" className="relative overflow-hidden bg-neutral-950 py-24 text-white dark:bg-neutral-950">
      <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_70%_30%,rgba(99,102,241,0.35),transparent)]" />
      <NeuralLines />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-3xl">
          <h2 className="font-display text-3xl font-black sm:text-5xl">AI Consulting & Integration</h2>
          <p className="mt-4 text-neutral-300">
            I design and integrate intelligent systems that enhance creative pipelines — from content generation to
            real-time interactivity.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bullets.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-fuchsia-500/10 blur-2xl" />
              <h3 className="text-xl font-bold">{b.title}</h3>
              <p className="mt-2 text-neutral-300">{b.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Consulting;
