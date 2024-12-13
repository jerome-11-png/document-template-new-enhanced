/** @type {import('tailwindcss').Config} */
    export default {
      content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            primary: {
              50: '#f0f2f5',
              100: '#e1e5ea',
              200: '#c2cdd5',
              300: '#a3b5c0',
              400: '#849db0',
              500: '#65859b',
              600: '#466d86',
              700: '#275571',
              800: '#083d5c',
              900: '#002547',
            },
          },
        },
      },
      plugins: [],
    };
