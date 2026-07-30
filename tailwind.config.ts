import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B0F14",
        panel: "#10161F",
        panel2: "#141C27",
        border: "#20303F",
        text: "#DCE6EE",
        dim: "#7C8B9A",
        amber: "#F2A93B",
        cyan: "#4FD1C5",
        green: "#4ADE80",
        red: "#F26D6D",
      },
      fontFamily: {
        mono: ["var(--font-jetbrains)", "monospace"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        grid: "linear-gradient(to right, #16202C 1px, transparent 1px), linear-gradient(to bottom, #16202C 1px, transparent 1px)",
      },
      backgroundSize: {
        gridcell: "36px 36px",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        fadeUp: "fadeUp 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
