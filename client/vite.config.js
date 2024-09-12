import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://real-estate-api-delta.vercel.app",
        secure: false,
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
});
