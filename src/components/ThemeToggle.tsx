"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  const current = theme === "system" ? systemTheme : theme;

  const isDark = current === "dark";

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={
        "relative inline-flex items-center justify-center rounded-full p-2 " +
        "transition-all duration-300 focus:outline-none " +
        (isDark
          ? "bg-black/40 hover:bg-black/60 shadow-[0_0_20px_-4px_rgba(236,72,153,0.45)]"
          : "bg-white/70 hover:bg-white/90 shadow-[0_0_18px_-4px_rgba(59,130,246,0.45)]")
      }
    >
      {/* Icon */}
      {isDark ? (
        <Sun
          size={18}
          className="text-yellow-400 transition-transform duration-300 hover:rotate-90"
        />
      ) : (
        <Moon
          size={18}
          className="text-blue-600 transition-transform duration-300 hover:-rotate-90"
        />
      )}
    </button>
  );
}
