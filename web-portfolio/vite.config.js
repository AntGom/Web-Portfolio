import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Web-Portfolio/',
  server: {
    port: 3000,
  },
});