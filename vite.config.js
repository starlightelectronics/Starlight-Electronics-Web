import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteCommonjs, esbuildCommonjs } from '@originjs/vite-plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [// This creates part of the magic.
  viteCommonjs(),
  react({
    // exclude: /\.stories\.(t|j)sx?$/,
    babel: {
      // presets: ['@babel/preset-env'],
      // babelrc: true,
      parserOpts: {
        plugins: [
          'optionalChaining',
          'nullishCoalescingOperator',
          'logicalAssignment',
        ],
      },
    },
  }),],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        // https://github.com/vitejs/vite/issues/5308
        // add the name of your package
        esbuildCommonjs(['react-viewerjs']),
      ],
    },
  },
  server: {
    open: true
  }
})
