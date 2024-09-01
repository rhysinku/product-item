import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/product-item/",
  server: {
    host: "0.0.0.0",
    port: 4000, // Make sure this matches the port you are exposing
  },
});
