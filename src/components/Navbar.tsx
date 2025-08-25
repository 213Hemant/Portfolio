"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "backdrop-blur bg-white/80 dark:bg-black/30 border-b border-gray-300 dark:border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between py-3">
        <Link href="/" className="font-semibold text-lg">
          <span className="text-brand">{"<"}</span> YourName{" "}
          <span className="text-brand">{"/>"}</span>
        </Link>

        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={
                "dark:text-gray-200 transition-colors duration-200 " +
                "hover:text-blue-600 " +
                "hover:shadow-[0_10px_30px_-14px_rgba(59,130,246,0.35)] " +
                "py-1 px-1"
              }
            >
              {l.label}
            </a>
          ))}

          {/* Resume link → darker pink in light mode */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={
              "text-pink-700 dark:text-pink-600 font-medium transition-colors duration-200 rounded-full px-3 py-1 border border-gray-300 dark:border-transparent " +
              "hover:bg-pink-50 dark:hover:bg-pink-900/30 " +
              "hover:shadow-[0_10px_36px_-16px_rgba(236,72,153,0.36)]"
            }
          >
            Resume
          </a>

          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label={open ? "Close Menu" : "Open Menu"}
          aria-expanded={open}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition"
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="md:hidden overflow-hidden border-t border-gray-300 dark:border-white/10"
        aria-hidden={!open}
      >
        <div className="container py-3 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={
                "py-2 text-gray-800 dark:text-gray-200 transition-colors duration-200 " +
                "hover:text-blue-600 " +
                "hover:shadow-[0_8px_26px_-14px_rgba(59,130,246,0.28)]"
              }
            >
              {l.label}
            </a>
          ))}

          {/* Resume link (mobile) */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className={
              "py-2 text-pink-700 dark:text-pink-600 font-medium rounded-full px-3 inline-block border border-gray-300 dark:border-transparent " +
              "hover:bg-pink-50 dark:hover:bg-pink-900/30 " +
              "hover:shadow-[0_8px_30px_-16px_rgba(236,72,153,0.34)] transition"
            }
          >
            Resume
          </a>

          <div>
            <ThemeToggle />
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}
