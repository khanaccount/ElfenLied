import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: "/src/components",
      pages: "/src/pages",
      styles: "/src/styles",
      assets: "/src/assets",
      contexts: "/src/contexts",
    },
  },
  base: "/ElfenLied/",
});
