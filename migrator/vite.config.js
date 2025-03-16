import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import ssr from "vite-plugin-ssr/plugin";
import { fileURLToPath } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    ssr({
      prerender: false,
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
