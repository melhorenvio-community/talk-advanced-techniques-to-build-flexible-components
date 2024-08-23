/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts}',
  ],
  theme: {
    fontFamily: {
      sans: [
        'Nunito Sans',
        'sans-serif',
      ],
    },
    extend: {
      colors: {
        'boston-blue': '#3B88C3',
      },
    },
  },
  plugins: [],
};
