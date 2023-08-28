/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderColor: {
        card: '#E6E6E6',
      },
      borderRadius: {
        lg: '10px',
      },
      textColor: {
        dark: '#212121',
        white: '#FAFAFA',
        error: '#D86161',
        placeholder: '#7A7A7A',
      },
      colors: {
        primary: '#1597E4',
      },
    },
  },
  plugins: [],
};
