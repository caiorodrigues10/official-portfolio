import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: "#ffffff",
          text: "#000000",
        },
        dark: {
          background: "#111010",
          text: "#D7D7D7",
        },
      },
      backgroundImage: {
        "text-slider-dark":
          "linear-gradient(to right, #5F5F5F 0, rgb(0, 0, 0) 10%, #5F5F5F 20%)",
        "text-slider-light":
          "linear-gradient(to right, #5F5F5F 0, rgb(255, 255, 255) 10%, #5F5F5F 20%)",
      },
    },
  },
  plugins: [],
};
export default config;
