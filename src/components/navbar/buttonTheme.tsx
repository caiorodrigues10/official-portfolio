"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { MoonStar, Sun } from "lucide-react";
import { useThemeContext } from "@/context/ThemeContext";

const ThemeToggleButton = () => {
  const { isDark, handleDarkMode } = useThemeContext();

  return (
    <button
      onClick={handleDarkMode}
      className="p-2 dark:hover:bg-slate-100/40 hover:bg-slate-400/40 h-fit duration-200 rounded-full active:scale-90"
    >
      {!isDark ? <MoonStar /> : <Sun />}
    </button>
  );
};

export default ThemeToggleButton;
