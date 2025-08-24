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
          ? "backdrop-blur bg-white/70 dark:bg-black/30 border-b border-black/10 dark:border-white/10"
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
              className="hover:text-brand transition"
            >
              {l.label}
            </a>
          ))}
          {/* Resume link → opens PDF in new tab */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand transition"
          >
            Resume
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label="Open Menu"
          className="md:hidden p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10"
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-black/10 dark:border-white/10">
          <div className="container py-3 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 hover:text-brand transition"
              >
                {l.label}
              </a>
            ))}
            {/* Resume link for mobile */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="py-2 hover:text-brand transition"
            >
              Resume
            </a>
            <ThemeToggle />
          </div>
        </div>
      )}
    </motion.header>
  );
}
