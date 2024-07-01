/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],
	theme: {
		extend: {
		  fontFamily: {
			'custom': ['Noto Sans', 'Open Sans'],
		  },
		  colors: {
			'custom-green': '#85cc9c',
			'soft-yellow': '#fafad7',
			'blue1': '#2b9eb3',
		  },
		},
		
	  },
	plugins: [],
}

