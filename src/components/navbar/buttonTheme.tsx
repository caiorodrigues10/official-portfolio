"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { MoonStar, Sun } from "lucide-react";

const ThemeToggleButton = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = Cookies.get("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else {
      setTheme("light");
      document.documentElement.classList.add("light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    Cookies.set("theme", newTheme, { expires: 365 });
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 dark:hover:bg-slate-100/40 hover:bg-slate-400/40 h-fit duration-200 rounded-full active:scale-90"
    >
      {theme === "light" ? <MoonStar /> : <Sun />}
    </button>
  );
};

export default ThemeToggleButton;
