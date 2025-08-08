import { defineConfig } from "$fresh/server.ts";
import twindPlugin from "$fresh/plugins/tailwind.ts";

export default defineConfig({
  plugins: [twindPlugin()],
});
