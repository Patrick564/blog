/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css : {
						'code::before': false,
						'code::after': false,
						code: {
							background: '#93c5fd',
							borderRadius: '3px',
							padding: '4px 5px',
							fontWeight: '400',
						},
					},
				},
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}
