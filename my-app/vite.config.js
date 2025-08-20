// vite.config.js
import { defineConfig } from 'vite';
import path from "path";
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Add this block to resolve the @ alias
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});