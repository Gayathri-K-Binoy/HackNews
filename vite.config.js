// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // If you're using React

// https://vitejs.dev/config/
export default defineConfig({
   base: '/Hacknews/' ,
  build: {
    outDir: 'docs',    // Output folder for GitHub Pages
  },
  plugins: [react()],
});
