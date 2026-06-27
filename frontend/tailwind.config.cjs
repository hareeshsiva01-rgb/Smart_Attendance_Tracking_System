module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#f59e0b',
          orange: '#f59e0b',
          purple: '#7c3aed'
        },
        muted: '#f6f6fb'
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        'soft-lg': '0 10px 30px rgba(13,12,29,0.08)'
      }
    }
  },
  plugins: []
}
