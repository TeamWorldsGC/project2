import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Using Vite preprocessor
	preprocess: vitePreprocess(),

	kit: {
		// Static adapter with necessary configuration for GitHub Pages
		adapter: adapter({
			pages: "build",
			assets: "build",
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		// Set the base path to match the GitHub repository name
		paths: {
			base: "/project2"  // Update this to your repository name
		},
	}
};

export default config;
