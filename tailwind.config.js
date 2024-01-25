import daisyui from 'daisyui'

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [daisyui],
  theme: {
    screens: {
      'xs': '0px',
      // => @media (min-width: 0px) { ... }
      'sm': '576px',
      // => @media (min-width: 576px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '992px',
      // => @media (min-width: 992px) { ... }
      'xl': '1200px',
      // => @media (min-width: 1200px) { ... }
      '2xl': '1400px',
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
