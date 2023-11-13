"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="relative flex h-9 w-9 items-center justify-center rounded-md hover:bg-gray dark:hover:bg-meta-4"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {mounted && <>{theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}</>}
    </button>
  );
}
