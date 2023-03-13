const resolve = require("@rollup/plugin-node-resolve").default;
const commonjs = require("@rollup/plugin-commonjs").default;
const typescript = require("@rollup/plugin-typescript").default;
const dts = require("rollup-plugin-dts").default;

module.exports = [
    {
        input: "lib/index.ts",
        output: [
            {
                file: "dist/cjs/index.js",
                format: "cjs",
                sourcemap: true,
            },
            {
                file: "dist/esm/index.js",
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            resolve(),
            commonjs(),
            typescript({ exclude: ["**/__tests__", "**/*.test.ts", "**/stories"], tsconfig: "../../../tsconfig.json" }),
        ],
        external: ['react'],
    },
    {
        input: "dist/esm/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
    },
];