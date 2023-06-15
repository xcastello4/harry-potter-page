/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./src/pages/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./src/components/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./src/layouts/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	],
	theme: {
		extend: {},
	},
	plugins: [],
}
