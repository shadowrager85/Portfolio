import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2C3E50",   // Midnight Blue
        secondary: "#8E44AD", // Wisteria
        accent: "#F39C12",    // Orange
        neutral: "#95A5A6",   // Concrete Gray
        base100: "#ECF0F1",   // Clouds
        info: "#3498DB",      // Peter River Blue
        success: "#2ECC71",   // Emerald
        warning: "#FFC107",   // Amber
        error: "#E74C3C",     // Alizarin
      },
    },
  },
  plugins: [require('daisyui')],
};

export default config;
