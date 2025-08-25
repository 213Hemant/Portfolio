// src/components/Skills.tsx
"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <Section id="skills">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true }}
      >
        <h2 className="h2">Skills</h2>
        <p className="p-muted mt-4">Tech I use and enjoy.</p>
      </motion.div>

      <motion.div
        className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
      >
        {skills.map((s) => (
          <motion.div
            key={s}
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
            }}
            className="card glow-tile p-4 text-center relative overflow-hidden transition-transform duration-250 hover:scale-[1.03]"
          >
            {/* Decorative blob per card */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-pink-500/10 blur-3xl animate-blob pointer-events-none" />

            <div className="relative z-10">
              <span className="font-medium">{s}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
