import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default [
  // browser-friendly UMD build
  {
    input: 'src/index.ts',
    output: {
      name: 'FilterData',
      file: 'dist/filterdata.min.js',
      format: 'umd',
    },
    plugins: [resolve(), commonjs(), typescript(), terser()],
  },
];
