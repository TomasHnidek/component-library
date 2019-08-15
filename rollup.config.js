import autoprefixer from 'autoprefixer';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'postcss';
import resolve from 'rollup-plugin-node-resolve';
import sass from 'rollup-plugin-sass';
import url from 'rollup-plugin-url';

import pkg from './package.json';

export default {
  input: 'src/index.jsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    sass({
      processor: css => postcss({
        plugins: [autoprefixer],
        modules: true
      })
        .process(css)
        .then(result => result.css)
    }),
    url(),
    babel({
      exclude: 'node_modules/**',
    }),
    resolve({
      mainFields: ['module'],
      extensions: ['.mjs', '.js', '.json', '.node', '.jsx']
    }),
    commonjs()
  ]
}
