module.exports = {
  content: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  target: 'relaxed',
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    // ... keep the rest of your custom theme
    colors: require('./tailwind-colors')().colors
  },
  variants: {},
  corePlugins: {},
  plugins: [],
}
