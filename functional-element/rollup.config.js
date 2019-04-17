import commonjs from 'rollup-plugin-commonjs';
import resolve from "rollup-plugin-node-resolve";
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2'

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/my-todo.js',
	output: {
		sourcemap: true,
		format: 'iife',
		file: 'public/bundle.js',
		name: 'app'
	},
	plugins: [
		resolve(),
		typescript({
      typescript: require('typescript'),
    }),
		commonjs(),
		terser()
	]
};