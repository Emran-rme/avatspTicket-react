/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                body: ["IRANSans", "sans-serif"],
                display: ["IRANSans", "sans-serif"],
            },
            colors: {
                customPurpleOne: "#3b183f",
                customPurpleTwo: "#300c34",
                customPurpleTree: "#4a264e",
            },
        },
    },
    plugins: [],
};
