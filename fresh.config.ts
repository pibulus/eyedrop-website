import { defineConfig } from "$fresh/server.ts";
import { Twind } from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";

export default defineConfig({
  plugins: [Twind(twindConfig)],
});
