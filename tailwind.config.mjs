/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			'dm': ['DM Sans Variable', 'sans-serif'],
			'playfair': ['Playfair Display Variable', 'serif'],
			'poppins': ['Poppins', 'sans-serif'],
		}
		
	},
	plugins: [],
}
