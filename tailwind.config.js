/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
        'bitcount-prop-single': ['Bitcount Prop Single', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        'aqua': '#45ADA8',
        'dark-aqua': '#007B7F',
        'light-aqua': '#A0DBDB',
        'golden-accent':'#F6E3B4',
        'soft-mist': '#F0F4F8',
        'deep-blue': '#1E3A8A',
        'light-blue': '#3B82F6',
        'indigo': '#4F46E5',
        'violet': '#8B5CF6',
        
      }
    },
  },
  plugins: [],
}
