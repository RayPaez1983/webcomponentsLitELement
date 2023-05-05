import { terser } from 'rollup-plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { litHTML } from 'rollup-plugin-lit-html';

export default {
  input: 'src/fetch-button.js',
  output: [
    {
      file: 'dist/fetch-button.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/fetch-button.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [nodeResolve(), litHTML(), terser()],
  external: ['lit'],
};
