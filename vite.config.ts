import path from "path";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

import { defineConfig } from "vite";

export default function viteConfig() {
  return defineConfig({
    plugins: [
      react(),
      tsconfigPaths(),
      tailwindcss()
    ],
    base: "./",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@components": path.resolve(__dirname, "src/components"),
      }
    },
    build: {
      chunkSizeWarningLimit: 1000,
      emptyOutDir: true,
      sourcemap: false,
      outDir: path.resolve(__dirname, "./dist"),
      rollupOptions: {
        output: {
          manualChunks(id) { // split into chunks
            if (id.includes("node_modules")) {
              if (id.includes("react-dom")) {
                return "react-dom";
              }
              if (id.includes("react-router-dom")) {
                return "react-router-dom";
              }
              if (id.includes("react")) {
                return "react";
              }
            }
            return "vendor"
          }
        }
      }
    },
    server: {
      port: 2999,
      open: true,
    },
    preview: {
      port: 2999,
      open: true,
    }
  })
}