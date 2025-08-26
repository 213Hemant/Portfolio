"use client";

import Image from "next/image";
import Section from "./Section";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  const total = projects.length;
  const [index, setIndex] = useState(0);
  const [isPaused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isPaused || total <= 1) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 5000);
    return () => clearInterval(t);
  }, [isPaused, total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setIndex((i) => (i - 1 + total) % total);
        setPaused(true);
      } else if (e.key === "ArrowRight") {
        setIndex((i) => (i + 1) % total);
        setPaused(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [total]);

  if (!projects || projects.length === 0) {
    return (
      <Section id="projects">
        <h2 className="h2">Projects</h2>
        <p className="p-muted mt-4">No projects yet — add some to src/lib/data.</p>
      </Section>
    );
  }

  return (
    <Section id="projects">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="h2">Projects</h2>
        <p className="p-muted mt-4 text-lg">
          Highlights of my work. Each project is a piece of my journey in building elegant,
          performant web apps.
        </p>
      </motion.div>

      <div
        className="mt-10 relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="overflow-hidden rounded-2xl">
          <div
            ref={trackRef}
            className="flex will-change-transform"
            style={{
              width: `${total * 100}%`,
              transform: `translateX(-${(index * 100) / total}%)`,
              transition: "transform 700ms cubic-bezier(.2,.9,.2,1)",
            }}
            aria-live="polite"
          >
            {projects.map((p, i) => (
              <div
                key={p.title}
                className="w-full flex-shrink-0 px-3 md:px-6"
                style={{ width: `${100 / total}%` }}
                role="group"
                aria-roledescription="slide"
                aria-label={`${p.title} (${i + 1} of ${total})`}
              >
                <article className="mx-auto max-w-3xl">
                  <div className="relative">
                    <div className="bg-transparent">
                      <div className="overflow-hidden rounded-t-2xl">
                        <div className="relative h-44 md:h-44 w-full bg-gray-100 dark:bg-black/20">
                          <Image
                            src={p.image ?? "/OldPhotoAI-2025-03-18.png"}
                            alt={p.title + " screenshot"}
                            fill
                            sizes="(max-width: 768px) 100vw, 800px"
                            style={{ objectFit: "cover" }}
                            className="object-cover"
                          />
                        </div>
                      </div>

                      <div className="card mt-0 rounded-t-none rounded-b-[0] overflow-visible relative -translate-y-5 p-5">
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand/10 blur-3xl rounded-full animate-float-slow pointer-events-none" />
                        <div className="relative z-10">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-brand transition-colors duration-300">
                            {p.title}
                          </h3>
                          <p className="p-muted mt-2 text-sm">{p.description}</p>

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

                          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm font-medium">
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
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <button
          aria-label="Previous project"
          onClick={() => {
            setIndex((i) => (i - 1 + total) % total);
            setPaused(true);
          }}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full p-2 bg-white/80 dark:bg-black/30 border border-black/5 dark:border-white/10 shadow-soft hover:scale-105 transition-transform"
        >
          <ChevronLeft />
        </button>

        <button
          aria-label="Next project"
          onClick={() => {
            setIndex((i) => (i + 1) % total);
            setPaused(true);
          }}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 bg-white/80 dark:bg-black/30 border border-black/5 dark:border-white/10 shadow-soft hover:scale-105 transition-transform"
        >
          <ChevronRight />
        </button>

        <div className="absolute bottom left-1/2 -translate-x-1/2 flex gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => {
                setIndex(i);
                setPaused(true);
              }}
              className={`h-2 w-8 rounded-full transition-all ${
                i === index ? "bg-brand" : "bg-gray-300 dark:bg-white/10"
              }`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
