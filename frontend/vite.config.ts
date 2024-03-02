import { defineConfig } from 'vite';
import * as path from 'path';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    server: {
      port: 3000,
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json', '.png'],
      alias: {
        src: path.resolve(__dirname, 'src'),
      },
    },
    plugins: [react(), svgr({ include: ['**/*.svg?react', '**/*.svg'] })],
  };
});
