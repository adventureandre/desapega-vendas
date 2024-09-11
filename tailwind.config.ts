import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        zero: '0',
      },
      colors: {
        desapegaFundo: '#ffffff',
        desapegaFundoHover: '#e2e0e2',
        desapegaWhite: 'white',
        desapegaYellow: '#ff7e3b',
        desapegaRed: '#e81a5d',
        desapegaBlue: '#00a8fb',
      },
      fontFamily: {
        sans: 'Roboto',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
