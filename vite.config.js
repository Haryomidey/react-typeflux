import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/index.js",
      name: "ReactTypeflux",
      fileName: (format) => `react-typeflux.${format}.js`
    },
    rollupOptions: {
      external: (id) =>
        ["react", "react-dom"].includes(id) || id.startsWith("react-icons/"),
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
});
