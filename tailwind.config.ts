import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1e5fbf",
          dark: "#164a97",
          light: "#eaf1fb",
        },
        cta: {
          DEFAULT: "#e8590c",
          dark: "#c74a06",
        },
      },
      maxWidth: {
        container: "1140px",
      },
    },
  },
  plugins: [],
};
export default config;
