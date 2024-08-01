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
    },
  },
  plugins: [],
};
export default config;
