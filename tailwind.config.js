/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                darkPrimary: "#892CDC",
                darkSecondary: "#BC6FF1",
                darkTertiary: "#52057B",
                ligthPrimary: "#B799FF",
                ligthSecondary: "#ACBCFF",
                ligthTertiary: "#AEE2FF",
            },
        },
    },
    plugins: [],
    darkMode: 'class'
};
