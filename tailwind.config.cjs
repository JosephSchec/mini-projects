/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,astro,ts}'],
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
};
