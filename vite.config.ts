import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, 'src/colourspace.ts'),
			name: 'colourspace',
			fileName: 'colourspace',
		},
	},
	plugins: [dts()],
});
