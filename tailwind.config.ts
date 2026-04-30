import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-dark": "#0A0907",
        "bg-warm": "#1A1612",
        "bg-light": "#F0EBE1",
        gold: "#C8862A",
        terracotta: "#B5522E",
        forest: "#2D4A35",
        cream: "#F0EBE1",
      },
      fontFamily: {
        serif: ["DM Serif Display", "Georgia", "serif"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
