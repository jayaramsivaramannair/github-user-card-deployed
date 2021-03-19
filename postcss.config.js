const tailwindcss = require('tailwindcss');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer')
    ],
    themes: {
        extend: {
            fontFamily: {
                sans: ['Electrolize']
            }
        }
    }
}