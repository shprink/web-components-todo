import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import { sizeSnapshot } from "rollup-plugin-size-snapshot";
import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";
import cssnano from "cssnano";
import serve from "rollup-plugin-serve";
import pkg from "./package.json";

export default {
	input: pkg.source,
	output: {
		format: "iife",
		file: pkg.iife,
		name: "bundle",
		sourcemap: true
	},
	plugins: [
		resolve(),
		postcss({ plugins: [cssnano] }),
		babel(),
		terser(),
		sizeSnapshot()
		//serve("public")
	]
};
