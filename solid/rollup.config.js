import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/MyTodo.jsx',
	output: {
		// sourcemap: true,
		format: 'iife',
		file: 'public/bundle.js',
		name: 'app'
	},
	plugins: [
		babel({
      exclude: 'node_modules/**',
      plugins: ["jsx-dom-expressions"]
    }),
    resolve({ extensions: ['.js', '.jsx'] }),
    postcss({ inject: false }),
		production && terser()
  ]
};