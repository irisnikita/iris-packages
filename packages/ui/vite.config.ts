import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import terser from "@rollup/plugin-terser";
import { visualizer } from "rollup-plugin-visualizer";
// import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // tailwindcss(),
    react({}),
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
      entryRoot: "src",
      tsconfigPath: "tsconfig.app.json",
      exclude: [
        "**/*.stories.tsx",
        "**/*.test.tsx",
        "**/__tests__/**",
        "**/__mocks__/**",
      ],
      include: ["src/**/*"],
    }),
    visualizer({
      gzipSize: true,
      brotliSize: true,
      open: false,
      filename: "stats.html",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: "src/index.ts",
      name: "antsomi-zma-ui",
      formats: ["es", "umd"],
      fileName: (format) =>
        `antsomi-zma-ui.${format}${format === "umd" ? ".prod" : ""}.js`,
    },
    sourcemap: true,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        pure_funcs: ["console.info", "console.debug"],
      },
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
      treeshake: {
        preset: "recommended",
        moduleSideEffects: false,
      },
      plugins: [
        terser({
          format: {
            preamble: "/* antsomi-zma-ui v1.0.0 */",
          },
        }),
      ],
    },
  },
});
