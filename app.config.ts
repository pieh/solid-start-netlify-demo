import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  middleware: "./src/middleware.ts",
  server: {
    preset: "netlify_edge",
    prerender: {
      routes: ["/about"],
    },
  },
});
