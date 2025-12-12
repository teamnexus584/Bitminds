import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// GitHub Pages specific configuration
export default defineConfig({
  base: '/Bitminds/',
  root: './client',
  publicDir: '../public',
  build: {
    outDir: '../dist/spa',
    emptyOutDir: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
});