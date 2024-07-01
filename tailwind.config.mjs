/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'selector',
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {

        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            }
        },
        colors: {
            'naples_yellow': {
                DEFAULT: '#ffe45e',
                100: '#453a00',
                200: '#8b7400',
                300: '#d0ad00',
                400: '#ffd816',
                500: '#ffe45e',
                600: '#ffe97c',
                700: '#ffef9d',
                800: '#fff4be',
                900: '#fffade'
            },
            'lavender_pink': {
                DEFAULT: '#f7accf',
                100: '#4c0828',
                200: '#980f4f',
                300: '#e41777',
                400: '#ef5fa2',
                500: '#f7accf',
                600: '#f8bcd8',
                700: '#facde2',
                800: '#fcdeec',
                900: '#fdeef5'
            },
            'alice_blue': {
                DEFAULT: '#e8f0ff',
                100: '#002261',
                200: '#0044c2',
                300: '#2470ff',
                400: '#85afff',
                500: '#e8f0ff',
                600: '#ebf2ff',
                700: '#f0f5ff',
                800: '#f5f8ff',
                900: '#fafcff'
            },
            'medium_slate_blue': {
                DEFAULT: '#6874e8',
                100: '#090e3b',
                200: '#121b75',
                300: '#1a29b0',
                400: '#2e3fe0',
                500: '#6874e8',
                600: '#8691ed',
                700: '#a4acf1',
                800: '#c3c8f6',
                900: '#e1e3fa'
            },
            'russian_violet': {
                DEFAULT: '#392759',
                100: '#0b0812',
                200: '#171023',
                300: '#221735',
                400: '#2e1f47',
                500: '#392759',
                600: '#5b3e8e',
                700: '#805fb9',
                800: '#ab95d0',
                900: '#d5cae8'
            },
            "light": {
                DEFAULT: "#e8f0ff",
            },
            "dark": {
                DEFAULT: "#171023",
            }
        }
    },
    plugins: [],
}
