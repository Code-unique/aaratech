import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "tt-wellingtons": ["var(--font-tt-wellingtons)"],
      },
      colors: {
        foreground: " rgb(var(--foreground) , <alpha-value>)",
        background: " rgb(var(--background) , <alpha-value>)",
        primary: " rgb(var(--primary) , <alpha-value>)",
        headingText: " rgb(var(--heading-text) , <alpha-value>)",
        paraText: " rgb(var(--para-text) , <alpha-value>)",
        subtitle: " rgb(var(--subtitle) , <alpha-value>)",
        secondary: " rgb(var(--secondary) , <alpha-value>)",
        darkHeading: " rgb(var(--dark-heading) , <alpha-value>)",
        videoBorder: " rgb(var(--video-border) , <alpha-value>)",
      },
    },
  },
  plugins: [],
};
export default config;
