import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.VITE_BACKEND_LINK": JSON.stringify(process.env.VITE_BACKEND_LINK),
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        index: "index.html",
        bunpou_hyougen: "src/pages/bunpou-hyougen/index.html",
        choukai: "src/pages/choukai/index.html",
        dokkai: "src/pages/dokkai/index.html",
        goi_kotoba: "src/pages/goi-kotoba/index.html",
      },
    },
  },
});
