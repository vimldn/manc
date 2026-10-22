import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: { 50: "#f3efdf", 100: "#eee8d8", 200: "#d8d4c1", 300: "#b6beae", 400: "#829584", 500: "#667565", 600: "#50614f", 700: "#354c3f", 800: "#234434", 900: "#123f30" },
        brand: {
          DEFAULT: "#123f30",
          dark: "#0a3023",
          light: "#f3ebd6",
        },
        cta: {
          DEFAULT: "#b9412e",
          dark: "#963222",
        },
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};
export default config;
