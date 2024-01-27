/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brandTheme: '#DAAF50',
        brandSecondary: '#8E4D39',
        brandActive: '#AF8A70',
      },
    },
  },
  plugins: [],
}
