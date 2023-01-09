/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'mccann-black': '#000000',
				'mccann-dark-grey': '#4D4D4D',	
				'mccann-light-grey': '#CCCCCC',
				'mccann-white': '#F2F2F2',
				'mccann-green': '#15CE79'
			},
			fontFamily: {
				overpriced: ['Overpriced', 'sans-serif'],
				sofia_regular: ['SofiaProRegular'],
			}
		},
	},
	plugins: [require("autoprefixer")],
}
