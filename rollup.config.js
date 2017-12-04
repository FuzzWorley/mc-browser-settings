import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import multiEntry from 'rollup-plugin-multi-entry';
import uglify from 'rollup-plugin-uglify';
import eslint from 'rollup-plugin-eslint';
import { minify } from 'uglify-js';

const isProd = process.env.PROD;
const name = require('./package.json').config.moduleName;
const plugins = [
  eslint(),
  json(),
  babel({
    exclude: 'node_modules/**',
    plugins: ['external-helpers']
  }),
  nodeResolve({ jsnext: true, main: true }),
  commonjs()
];

if (isProd) {
  plugins.push(uglify({}, minify));
} else {
  plugins.unshift(multiEntry())
}

const input = isProd
  ? 'assets/js/main.js'
  : ['assets/js/main.js', 'assets/js/preview.js']

export default {
  input,
  plugins,
  output: {
    name,
    file: `dist/bundle.js`,
    format: 'umd'
  },
  sourcemap: !isProd
};
