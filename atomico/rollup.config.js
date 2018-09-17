import buble from "rollup-plugin-buble";
import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import commonjs from "rollup-plugin-commonjs";
import filesize from "rollup-plugin-filesize";
import pkg from "./package.json";
import colors from "colors";
import prepare from "rollup-prepare";
import postcss from "rollup-plugin-postcss";
import cssnano from "cssnano";

export default {
    ...prepare({
        pkg
    }),
    plugins: plugins(false)
};

/**
 * Returns the generic plugins to be used for packaging
 * @param {boolean} classes - lets you disable the transformation of classes
 * @return {Array}
 */
function plugins(classes = true) {
    return [
        commonjs({
            include: "node_modules/**"
        }),
        resolve(),
        postcss({
            plugins: [cssnano]
        }),
        buble({
            jsx: "h",
            transforms: {
                classes
            },
            objectAssign: "Object.assign"
        }),
        terser(),
        filesize({
            /**
             * allows to generate the printing of the output size of each file
             */
            render(options, size, gzip, brotliSize, minifiedSize, bundle) {
                let title = colors.cyan.bold,
                    value = colors.yellow;
                return `${title(bundle.file)}  Min: ${value(
                    size
                )} Gzip: ${value(gzip)}`;
            }
        })
    ];
}
