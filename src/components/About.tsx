// src/components/About.tsx
"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import Image from "next/image";

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

      {/* Profile photo / illustration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-8 flex justify-center"
      >
        <div className="relative w-40 h-40 rounded-2xl overflow-hidden shadow-lg">
          {/* 🔽 Replace /images/profile-placeholder.jpg with your own profile photo */}
          <Image
            src="/images/profile-placeholder.jpg"
            alt="Profile photo"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Traits grid */}
      <motion.div
        className="mt-10 grid md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08 } },
        }}
      >
        {[
          { 
            title: "Problem Solver", 
            desc: "Strong DSA fundamentals and clean code practices.",
            img: "/OldPhotoAI-2025-03-18.png" // 🔽 Replace with your own icon/illustration
          },
          { 
            title: "Team Player", 
            desc: "Collaborative, communicative, and reliable under deadlines.",
            img: "/images/teamwork-placeholder.jpg" 
          },
          { 
            title: "Curious", 
            desc: "I love exploring new tools, patterns, and design systems.",
            img: "/images/curiosity-placeholder.jpg"
          },
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
              {/* Icon / Illustration placeholder */}
              <div className="relative w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
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
