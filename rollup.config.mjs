// @ts-check
import { readFileSync } from 'fs';
import path from 'path';

import { defineConfig } from 'rollup';
import dts from 'rollup-plugin-dts';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

const packageJson = JSON.parse(
  readFileSync(path.resolve(process.cwd(), 'package.json'), 'utf8'),
);

const commonPlugins = [
  resolve({ extensions: ['.ts'] }),
  commonjs(),
  typescript({ declaration: false, outDir: null }),
];

const config = defineConfig([
  {
    input: 'src/index.ts',
    output: [
      {
        name: 'FilterData',
        file: packageJson.jsdelivr,
        format: 'umd',
        sourcemap: true,
      },
    ],
    plugins: [...commonPlugins, terser()],
  },
  {
    input: 'src/index.ts',
    output: [
      {
        format: 'cjs',
        dir: path.dirname(packageJson.main),
        preserveModules: true,
        preserveModulesRoot: 'src',
        interop: 'auto',
        exports: 'named',
        sourcemap: true,
        entryFileNames: '[name].cjs',
      },
      {
        format: 'esm',
        dir: path.dirname(packageJson.module),
        preserveModules: true,
        preserveModulesRoot: 'src',
        interop: 'auto',
        exports: 'named',
        sourcemap: true,
        generatedCode: 'es2015',
        entryFileNames: '[name].js',
      },
    ],
    plugins: [...commonPlugins],
  },
  {
    input: 'src/index.ts',
    output: [{ file: packageJson.types, format: 'esm' }],
    plugins: [dts()],
  },
]);

export default config;
