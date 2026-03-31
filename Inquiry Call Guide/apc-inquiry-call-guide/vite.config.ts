import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages project URL: /<repo>/ (see .github/workflows/deploy-github-pages.yml)
export default defineConfig({
  base: process.env.GITHUB_ACTIONS === 'true' ? '/apc-journeys/' : '/',
  server: {
    port: 3001,
    host: '0.0.0.0',
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  }
});
