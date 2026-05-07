"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.18),_transparent_45%)]" />
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff14_1px,transparent_1px),linear-gradient(to_bottom,#ffffff14_1px,transparent_1px)] bg-[size:64px_64px]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-5xl"
      >
        <p className="mb-6 text-sm tracking-[0.5em] text-violet-300">
          MOVEMENT • CODE • DESIGN
        </p>

        <h1 className="text-6xl font-black tracking-tight md:text-8xl lg:text-9xl">
          RAWLAB_
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
          A creative digital space where technology, movement, design and human
          experience become living systems.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full border border-slate-500 px-6 py-3 text-sm uppercase tracking-widest text-slate-100 transition hover:border-violet-300 hover:text-violet-300"
          >
            Explore
          </a>

          <a
            href="https://github.com/RAWLAB-SPACE"
            target="_blank"
            className="rounded-full bg-slate-100 px-6 py-3 text-sm uppercase tracking-widest text-slate-950 transition hover:bg-violet-300"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}