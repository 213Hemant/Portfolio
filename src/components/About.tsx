// src/components/About.tsx
"use client";

import Section from "./Section";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Section id="about">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="h2">About Me</h2>
        <p className="p-muted mt-4">
          I’m an engineering graduate focused on full-stack web development. I enjoy turning ideas
          into performant, accessible products. I’m comfortable with JavaScript/TypeScript,
          React/Next.js, Node.js, and databases, and I’m always learning.
        </p>
      </motion.div>

      {/* Traits grid */}
      <motion.div
        className="mt-6 grid md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08 } },
        }}
      >
        {[
          { title: "Problem Solver", desc: "Strong DSA fundamentals and clean code practices." },
          { title: "Team Player", desc: "Collaborative, communicative, and reliable under deadlines." },
          { title: "Curious", desc: "I love exploring new tools, patterns, and design systems." },
        ].map((item) => (
          <motion.div
            key={item.title}
            variants={{
              hidden: { opacity: 0, y: 18 },
              show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
            }}
            className="card glow-tile group relative overflow-hidden p-5 transition-transform duration-300 hover:scale-[1.02]"
          >
            {/* Small floating accent */}
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-brand/10 blur-3xl animate-float-slow pointer-events-none" />

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                {/* Icon-like floating pill */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand to-pink-500 animate-float-slow" />
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-brand transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="p-muted mt-2 text-sm">{item.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
