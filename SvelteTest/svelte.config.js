import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
	  adapter: adapter({
		// Ensure all assets are built into the "build" directory (or use a custom folder)
		pages: 'build',
		assets: 'build',
		fallback: 'index.html',  // Set to a specific fallback if you're using client-side routing
		
	  }),
	  prerender: {
		default: true // This will prerender all pages for static hosting
	  }
	},
	preprocess: vitePreprocess()
  };
  
  export default config;
