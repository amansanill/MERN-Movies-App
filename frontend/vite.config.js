import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": {
        target: "http://backend:5000", // Change localhost to backend
        changeOrigin: true,
        secure: false,
      },
      "/uploads/": {
        target: "http://backend:5000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

