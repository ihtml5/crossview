// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import cleanup from 'rollup-plugin-cleanup';
import { terser } from "rollup-plugin-terser";
import typescript from '@rollup/plugin-typescript';

const pkg = require('./package.json');

const commPlugins = [
  typescript(),
  resolve({
    jsnext: true,
    main: true,
    browser: true,
  }),
  babel({
    exclude: 'node_modules/**',
    plugins: [
      'transform-object-assign',
      'array-includes',
      'transform-es2015-destructuring',
    ],
  }),
  cleanup({
    comments: 'none',
  }),
];

export default [{
  input: './src/index.ts',
  output: {
    file: './dist/index.js',
    format: 'umd',
    exports: 'named',
    name: 'crossViewState',
    sourcemap: false,
  },
  plugins: [
    ...commPlugins,
    terser({
      output: {
        preamble: `/* v${pkg.version} ${new Date()} by CrossView Team. Released under the MIT License. */`,
      }
    }),
  ],
}, {
  input: './src/index.ts',
  output: {
    file: './dist/index.es.js',
    format: "esm",
    exports: 'named',
    name: 'crossViewState',
    sourcemap: false,
  },
  plugins: [
    ...commPlugins,
  ],
}].filter(buildOptions => buildOptions);
