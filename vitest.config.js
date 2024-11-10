/// <reference types="vitest/config" />

import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	test: {
		coverage: {
			provider: 'istanbul',
			reporter: ['text', 'json', 'html'],
		},
		environment: 'jsdom',
		globals: true,
	},
});
