/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-card':'linear-gradient(0deg, rgba(4,52,66,1) 32%, rgba(22,83,54,1) 100%)',
        'gradient-card-2': 'linear-gradient(90deg, rgba(71,251,105,1) 0%, rgba(22,83,54,1) 100%)',
        'gradient-card-blue': 'linear-gradient(to left, #043442, #154654)'
      },
      backgroundColor:{
        'card':'#5D9E44',
        'card-2':'#165336'
      },
      colors:{
        'card':'#47FB69'
      }
      
    },
  },
  plugins: [],
}
