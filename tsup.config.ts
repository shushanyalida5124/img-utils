import { defineConfig } from 'tsup';

export default defineConfig({
  entryPoints: {
    index: 'src/index.ts'
  },
  bundle: true,
  splitting: true,
  outDir: 'dist',
  format: ['cjs', 'esm'],
  dts: true,
  shims: true,
  clean: true,
});