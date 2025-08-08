import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8B5CF6", // purple
        secondary: "#EC4899", // pink  
        accent: "#06B6D4", // cyan
        amber: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
        peach: {
          200: "#ffd8cc",
          300: "#ffb5a0",
        },
        coral: {
          300: "#ff9580",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
      },
      animation: {
        "bounce-slow": "bounce 3s infinite",
        "wiggle": "wiggle 1s ease-in-out infinite",
        "pulse": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        pulse: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "0.8" },
        },
      },
      boxShadow: {
        "chunky": "8px 8px 0px 0px rgba(0,0,0,1)",
        "chunky-hover": "4px 4px 0px 0px rgba(0,0,0,1)",
        "mega-chunky": "12px 12px 0px 0px rgba(0,0,0,1)",
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
} satisfies Config;