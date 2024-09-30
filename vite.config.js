import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      // Set the entry point to the main file of your library
      entry: path.resolve(__dirname, "src/main.jsx"),
      name: "ExportProjectLibrary", // Global name of the library
      fileName: (format) => `export-project-library.${format}.js`, // Output filenames
    },
    rollupOptions: {
      // External dependencies that shouldn't be bundled
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
