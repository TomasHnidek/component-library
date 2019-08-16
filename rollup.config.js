import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';

import pkg from './package.json';

export default {
  input: ['src/index.jsx', 'src/components/alert/alert.jsx', 'src/components/button/button.jsx'],
  output: [
    {
      dir: pkg.main,
      format: 'cjs',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    postcss({
      extract: false,
      modules: true,
      use: ['sass'],
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
