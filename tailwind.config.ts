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
