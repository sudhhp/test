import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ correct configuration
export default defineConfig({
  plugins: [react()],
});
