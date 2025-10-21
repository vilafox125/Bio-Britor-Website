import type { Config } from 'tailwindcss'
const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        lab: {
          black: '#0A0A0A',
          graphite: '#1A1A1A',
          ash: '#2A2A2A',
          bone: '#F5F3EE',
          fog: '#C9C6BF',
          gold: '#CFAE66',
          gold2: '#D6B46C',
          bronze: '#7F784E',
          green: '#A8A77A',
        }
      },
      boxShadow: {
        gold: '0 10px 40px rgba(207,174,102,0.06), 0 2px 12px rgba(0,0,0,0.40)'
      },
      borderRadius: {
        blob: '1.25rem'
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui'],
        body: ['var(--font-body)', 'system-ui']
      }
    }
  },
  plugins: []
}
export default config
