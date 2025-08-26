"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const cursor = cursorRef.current;
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Mouse-following glow */}
      <div
        ref={cursorRef}
        className="neon-cursor fixed z-[9999] pointer-events-none rounded-full transition-transform duration-50"
        style={{
          transform: "translate(-50%, -50%)",
          left: "-9999px",
          top: "-9999px",
        }}
      />

      {/* Animated background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-16 -left-16 h-72 w-72 rounded-full bg-brand/20 blur-3xl animate-blob" />
        <div className="absolute top-20 right-0 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl animate-blob [animation-delay:3s]" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl animate-blob [animation-delay:6s]" />
      </div>

      <section className="section">
        <div className="container grid md:grid-cols-2 items-center gap-10 relative z-10">
          {/* Hero text content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="h1">
              Hi, I’m <span className="text-brand">Your Name</span>
            </h1>
            <p className="p-muted mt-4 text-lg">
              Engineering graduate passionate about building fast, accessible,
              elegant web experiences. I love solving problems and shipping
              quality software.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {/* ✅ Fixed button contrast */}
              <a
                href="#projects"
                className="glow-tile inline-flex items-center gap-2 rounded-2xl px-5 py-3 
                           bg-brand text-gray-900 dark:text-white 
                           hover:bg-brand-600 transition shadow-soft"
              >
                View Projects <ArrowRight size={18} />
              </a>

              <a
                href="/resume.pdf"
                download
                className="glow-tile inline-flex items-center gap-2 rounded-2xl px-5 py-3 
                           border border-black/10 dark:border-white/20 
                           hover:bg-black/5 dark:hover:bg-white/10 transition"
              >
                Download Resume <Download size={18} />
              </a>
            </div>
          </motion.div>

          {/* Hero image / showcase */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="card glow-tile p-6 flex items-center justify-center h-72 transition-all duration-300">
              <div className="text-center">
                {/* 🔲 Placeholder for your profile image */}
 {/* <img src="/OldPhotoAI-2025-03-18.png" alt="Your Name" className="mx-auto h-28 w-28 rounded-full object-cover" />   */}
                         <div className="flex justify-center">
  <Image
    src="/OldPhotoAI-2025-03-18.png"
    alt="Your Name"
    width={112}
    height={112}
    className="rounded-full object-cover"
  />
</div>

                                       {/* Replace above div with: 
                    <img src="public\OldPhotoAI-2025-03-18.png" alt="Your Name" 
                         className="mx-auto h-28 w-28 rounded-full object-cover" /> 
                */}

                <p className="mt-4 font-medium">Aspiring Software Engineer</p>
                <p className="p-muted text-sm">
                  Next.js • TypeScript • Tailwind • Node
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
