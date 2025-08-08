import { Configuration } from "twind";

export default {
  theme: {
    extend: {
      colors: {
        primary: "#8B5CF6", // purple
        secondary: "#EC4899", // pink  
        accent: "#06B6D4", // cyan
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
      },
      animation: {
        "bounce-slow": "bounce 3s infinite",
        "wiggle": "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      boxShadow: {
        "chunky": "8px 8px 0px 0px rgba(0,0,0,1)",
        "chunky-hover": "4px 4px 0px 0px rgba(0,0,0,1)",
        "mega-chunky": "12px 12px 0px 0px rgba(0,0,0,1)",
      },
    },
  },
} as Configuration;