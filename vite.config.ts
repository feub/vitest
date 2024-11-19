//import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // means global variables will be available during tests like 'describe, it, expect' so we don't have to import it in every test file
    environment: "jsdom", // simulating a browser environment
    setupFiles: ["./src/setupTest.ts"], // execute necessary code before running the tests. This is a perfect segue to create _setupTests.ts_.
  },
});
