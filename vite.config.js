import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/dad-joke-generator/', // Replace <your-repo-name> with your actual GitHub repository name
});
