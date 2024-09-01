/** @type {import('tailwindcss').Config} */
import twBootstrapGridOptimizer from "tw-bootstrap-grid-optimizer";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["SUSE", "sans-serif"],
        secondary: ["Inter", "system-ui"],
      },
    },
  },
  plugins: [twBootstrapGridOptimizer],
};
