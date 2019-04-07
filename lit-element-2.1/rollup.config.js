import minifyHTML from 'rollup-plugin-minify-html-literals';
import resolve from 'rollup-plugin-node-resolve'
import bundleSize from 'rollup-plugin-filesize';

import { terser } from 'rollup-plugin-terser'
import { inlineLitElement } from 'rollup-plugin-inline-lit-element'

export default {
  treeshake: true,
  input: 'src/index.js',
  external: [],
  plugins: [
    minifyHTML(),
    inlineLitElement(),
    resolve(),
    terser(),
    bundleSize()
  ],
  output: {
    sourcemap: true,
    globals: {},
    file: 'dist/main.js',
    format: 'esm'
  }
}