import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: [
      {
        find: "@client",
        replacement: path.resolve(__dirname, "./src"),
      },
      {
        find: "#client",
        replacement: path.resolve(__dirname, "./src/components"),
      },
      {
        find: ":client",
        replacement: path.resolve(__dirname, "./src/hooks"),
      },
    ],
  },
});
