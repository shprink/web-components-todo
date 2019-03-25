import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';

export default {
  plugins: [
    terser(),
    babel({
      babelrc: true
    }),
    nodeResolve({
      jsnext: true,
      main: true
    }),
    commonjs({
      include: 'node_modules/slim-js/**',
      extensions: ['.js'],
      ignoreGlobal: false,
      sourceMap: false
    })
  ],
  input: 'src/todo-app.js',
  output: {
    file: 'dist/app.js',
    format: 'esm'
  }
};
