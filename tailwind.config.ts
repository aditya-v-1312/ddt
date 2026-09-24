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
        brand: {
          royal: "#244586",
          navy: "#08152F",
          midnight: "#050D20",
          navySoft: "#152B59",
          navyBorder: "#1C366B",
          copper: "#9A5B2D",
          warmCopper: "#B87543",
          copperLight: "#D99767",
          sand: "#F8F7F3",
          sandMuted: "#EFECE3",
          dark: "#17213A",
          muted: "#687080",
          border: "#E7E4DA",
        },
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "DM Serif Display", "Georgia", "serif"],
        sans: ["'Manrope'", "Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.22em",
        ultra: "0.3em",
      },
      animation: {
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
