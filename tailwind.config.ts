import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@premieroctet/next-admin/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "280px",
      md: "768px",
      md1: "1000px",
      md2: "1200px",
      lg: "1440px",
      lg1: "1500px",
      lg2: "1630px",
      xl: "1920px",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      cormorant_infant: ["cormorant_infant"],
      jakarta: ["var(--font-jakarta)", "sans-serif"],
      spaceGrotesk: ["var(--font-space-grotesk)", "sans-serif"],
    },
    borderWidth: {
      DEFAULT: "1px",
    },
    extend: {
      colors: {
        primary: "#5874A8",
        primaryLight: "#6f8fc4",
        primaryBlue: "#5874A8",
        primaryTeal: "#5890a8",
      },
      keyframes: {
        "home-fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "home-services-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "home-logo-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "home-quote-cycle": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "8%": { opacity: "1", transform: "translateY(0)" },
          "25%": { opacity: "1", transform: "translateY(0)" },
          "33%": { opacity: "0", transform: "translateY(-8px)" },
          "100%": { opacity: "0", transform: "translateY(-8px)" },
        },
      },
      animation: {
        bounceTwice: "bounce 1s infinite",
        "home-fade-up": "home-fade-up 0.9s ease both",
        "home-services-scroll": "home-services-scroll 100s linear infinite",
        "home-logo-scroll": "home-logo-scroll 32s linear infinite",
        "home-quote-cycle": "home-quote-cycle 10s ease infinite",
      },
    },
  },
  plugins: [],
};
export default config;
