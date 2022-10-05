import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import solid from '@astrojs/solid-js';

export default defineConfig({
	site: 'https://victor-auffret.github.io',
	// base: 'C:/Users/victor/Documents/00_victor_pro/victor-auffret.github.io/docs',
	integrations: [sitemap(), solid()],
	outDir: 'docs'
});
