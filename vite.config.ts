import { defineConfig } from 'vite';

import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  optimizeDeps: {
    include: [
      '@syncfusion/ej2-base',
      '@syncfusion/ej2-react-navigations',
      '@syncfusion/ej2-react-buttons'
    ],
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
    },
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
       include: [/node_modules/],
    },
  },
});