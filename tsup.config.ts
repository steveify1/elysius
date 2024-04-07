import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src"],
  format: ["cjs", "esm"],
  outDir: "dist",
  target: "es2016",
  dts: true,
  clean: true,
  shims: true,
});
