import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  middleware: "./src/middleware.ts",
  server: {
    preset: "netlify",
    prerender: {
      routes: ["/about"],
    },
  },
});
