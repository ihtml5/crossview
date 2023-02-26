// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import builtins from 'rollup-plugin-node-builtins';
import cleanup from 'rollup-plugin-cleanup';
import { terser } from 'rollup-plugin-terser';

const pkg = require('./package.json');
export default [
  {
    input: './src/index.js',
    output: [
      {
        file: './dist/index.js',
        format: 'umd',
        exports: 'named',
        name: 'crossviewUtils',
        sourcemap: false,
      },
      {
        file: './dist/index.es.js',
        format: 'es',
        exports: 'named',
        name: 'crossviewUtils',
        sourcemap: false,
      },
    ],
    plugins: [
      resolve({
        jsnext: true,
        main: true,
        browser: true,
        preferBuiltins: true,
      }),
      builtins(),
      babel({
        babelrc: false,
        exclude: 'node_modules/**', // only transpile our source code,
        plugins: ['transform-object-assign', 'array-includes', 'transform-es2015-destructuring'],
      }),
      terser({
        output: {
          preamble: `// v${pkg.version} ${new Date()} by crossview Team. Released under the MIT License.`,
        },
      }),
      cleanup({
        comments: 'none',
      }),
    ],
  },
];
