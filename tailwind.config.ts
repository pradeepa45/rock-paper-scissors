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
        'dark-text': 'var(--dark-text)',
        'score-text': 'var(--score-text)',
        'header-outline': 'var(--header-outline)',
        'from-scissors': 'var(--from-sci)',
        'to-scissors': 'var(--to-sci)',
        'from-paper': 'var(--from-paper)',
        'to-paper': 'var(--to-paper)',
        'from-rock': 'var(--from-rock)',
        'to-rock': 'var(--to-rock)',
        'from-liz': 'var(--from-liz)',
        'to-liz': 'var(--to-liz)',
        'from-hand': 'var(--from-hand)',
        'to-hand': 'var(--to-hand)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "scissors": "var(--scissors-gradient)",
        "paper": "var(--paper-gradient)",
        "rock": "var(--rock-gradient)",
        "hand": "var(--hand-gradient)",
        "lizard": "var(--lizard-gradient)",
      },
    },
  },
  plugins: [],
};
export default config;
