import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <li className="relative block h-5.5 w-5.5 cursor-pointer">
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="relative block h-5.5 w-5.5 cursor-pointer"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? <Sun /> : <Moon />}
      </button>
    </li>
  );
};

export default ThemeSwitcher;
