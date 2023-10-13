/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontSize: {
			'h1-sm': [
				'28px',
				{
					lineHeight: '32px',
					fontWeight: 800,
				},
			],
			'h2-sm': [
				'14px',
				{
					lineHeight: '20px',
					letterSpacing: '1%',
					fontWeight: 700,
				},
			],
			button: [
				'18px',
				{
					lineHeight: '18px',
					letterSpacing: '3%',
					fontWeight: 700,
				},
			],
			sm: [
				'10px',
				{
					lineHeight: '10px',
					fontWeight: 800,
				},
			],
			'link-sm': [
				'12px',
				{
					lineHeight: '14px',
					fontWeight: 700,
				},
			],
		},
		screens: {
			sm: '480px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
		},
		extend: {
			colors: {
				black: '#000000',
				nero: '#1A1A1A',
				orange: '#FF6633',
			},
			fontFamily: {
				montserrat: ['"Montserrat"', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
