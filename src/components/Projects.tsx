"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <Section id="projects">
      <h2 className="h2">Projects</h2>
      <p className="p-muted mt-4">Highlights of my work.</p>

      <motion.div
        className="mt-6 grid md:grid-cols-2 gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
      >
        {projects.map((p) => (
          <motion.article
            key={p.title}
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
            }}
            className="card overflow-hidden"
          >
            <div className="h-40 bg-gradient-to-br from-brand/20 to-pink-500/20" />
            <div className="p-5">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="p-muted mt-2">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full bg-black/5 dark:bg-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    className="inline-flex items-center gap-1 text-brand hover:underline"
                  >
                    <ExternalLink size={16} /> Live
                  </a>
                )}
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    className="inline-flex items-center gap-1 text-brand hover:underline"
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
