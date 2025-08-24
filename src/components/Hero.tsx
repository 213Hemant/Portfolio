"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-16 -left-16 h-72 w-72 rounded-full bg-brand/20 blur-3xl animate-blob" />
        <div className="absolute top-20 right-0 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl animate-blob [animation-delay:3s]" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl animate-blob [animation-delay:6s]" />
      </div>

      <section className="section">
        <div className="container grid md:grid-cols-2 items-center gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="h1">
              Hi, I’m <span className="text-brand">Your Name</span>
            </h1>
            <p className="p-muted mt-4 text-lg">
              Engineering graduate passionate about building fast, accessible, elegant web
              experiences. I love solving problems and shipping quality software.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-brand text-white hover:bg-brand-600 transition shadow-soft"
              >
                View Projects <ArrowRight size={18} />
              </a>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 border border-black/10 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10 transition"
              >
                Download Resume <Download size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            {/* Placeholder avatar / showcase */}
            <div className="card p-6 flex items-center justify-center h-72">
              <div className="text-center">
                <div className="mx-auto h-28 w-28 rounded-full bg-gradient-to-br from-brand to-pink-500 animate-float-slow" />
                <p className="mt-4 font-medium">Aspiring Software Engineer</p>
                <p className="p-muted text-sm">Next.js • TypeScript • Tailwind • Node</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
