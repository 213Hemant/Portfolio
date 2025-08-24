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

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(current === "dark" ? "light" : "dark")}
      className="inline-flex items-center gap-2 rounded-xl px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10"
    >
      {current === "dark" ? <Sun size={18} /> : <Moon size={18} />}
      <span className="text-sm">{current === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}
