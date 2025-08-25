"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <Section id="projects">
      {/* Intro heading */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="h2">Projects</h2>
        <p className="p-muted mt-4 text-lg">
          Highlights of my work. Each project is a piece of my journey in building
          elegant, performant web apps.
        </p>
      </motion.div>

      {/* Projects grid */}
      <motion.div
        className="mt-12 grid md:grid-cols-2 gap-8"
        initial="hidden"
        animate="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12 } },
        }}
      >
        {projects.map((p) => (
          <motion.article
            key={p.title}
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="card glow-tile group overflow-hidden relative transition-all duration-300"
          >
            {/* Floating accent blob */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand/10 blur-3xl rounded-full animate-float-slow pointer-events-none" />

            {/* Top gradient accent */}
            <div className="h-36 bg-gradient-to-br from-brand/20 to-pink-500/20 group-hover:from-brand/30 group-hover:to-pink-500/30 transition-all duration-300" />

            {/* Project content */}
            <div className="relative z-10 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-brand transition-colors duration-300">
                {p.title}
              </h3>
              <p className="p-muted mt-2 text-sm">{p.description}</p>

              {/* Tech tags with glow */}
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="glow-tile text-xs px-2 py-1 rounded-full bg-black/5 dark:bg-white/10 transition-all duration-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-5 flex items-center gap-5 text-sm font-medium">
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-brand hover:underline transition-opacity duration-200 hover:opacity-80"
                  >
                    <ExternalLink size={16} /> Live
                  </a>
                )}
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-brand hover:underline transition-opacity duration-200 hover:opacity-80"
                  >
                    <Github size={16} /> Code
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
