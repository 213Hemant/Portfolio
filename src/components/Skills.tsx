"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <Section id="skills">
      <h2 className="h2">Skills</h2>
      <p className="p-muted mt-4">Tech I use and enjoy.</p>
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
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
            }}
            className="card p-4 text-center"
          >
            <span className="font-medium">{s}</span>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
