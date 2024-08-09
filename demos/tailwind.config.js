/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'boston-blue': '#3B88C3',
      },
    },
  },
  plugins: [],
};
