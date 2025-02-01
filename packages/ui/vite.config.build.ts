import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import terser from "@rollup/plugin-terser";
import { visualizer } from "rollup-plugin-visualizer";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
// import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  define: {
    "import.meta.env.STORYBOOK": "false",
  },
  plugins: [
    // tailwindcss(),
    cssInjectedByJsPlugin({}),
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
      include: ["src/components/**/*", "src/**/*"],
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
      name: "iris-ui",
      formats: ["es"],
      fileName: (format) =>
        `iris-ui.${format}${format === "umd" ? ".prod" : ""}.js`,
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
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "ReactJsxRuntime",
        },
      },
      treeshake: {
        preset: "recommended",
        moduleSideEffects: false,
      },
      plugins: [
        terser({
          format: {
            preamble: "/* iris-ui v1.0.0 */",
          },
        }),
      ],
    },
  },
});
