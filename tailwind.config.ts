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
        sage:        "#B8BFA8",
        "sage-dark": "#9DA894",
        "sage-deep": "#6B7560",
        cream:       "#F2EDE4",
        charcoal:    "#1C1C1A",
        gold:        "#8A7355",
        terracotta:  "#9B5F44",
        rose:        "#C4957A",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans:  ["Jost", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
