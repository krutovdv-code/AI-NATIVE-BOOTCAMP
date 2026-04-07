/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                bg: '#f5f5f0',
                text: '#0a0a0f',
                accent: '#f5a623',
                border: 'rgba(232, 232, 224, 0.15)'
            },
            fontFamily: {
                display: ['Roboto Condensed', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            }
        }
    }
}
