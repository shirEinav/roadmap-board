import { defineConfig } from "vite"
import * as react from "@vitejs/plugin-react"
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@chakra-ui/react": resolve("..", "..", "packages/react/src"),
    },
  },
})
