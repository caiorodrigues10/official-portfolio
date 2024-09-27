"use client";
import { useThemeContext } from "@/context/ThemeContext";
import { ToastContainer } from "react-toastify";

export default function ToastContainerThemed() {
  const { isDark } = useThemeContext();

  return (
    <ToastContainer
      theme={isDark ? "dark" : "light"}
      progressStyle={isDark ? { background: "#0068FF" } : {}}
    />
  );
}
