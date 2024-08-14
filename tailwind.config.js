const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'grid-pattern': "linear-gradient(to bottom, theme('colors.neutral.950 / 0%'), theme('colors.neutral.950 / 100%')), url('/images/noise.png')"
            },
            colors: {
                neutral: colors.neutral,
                primary: '#693D14',          // Updated primary color to match your branding
                'primary-content': '#171717', // Text color on primary backgrounds
                secondary: '#016968',        // Secondary color for other UI elements
                'secondary-content': '#ffffff', // Text color on secondary backgrounds
                info: '#2bdcd2',             // Info color for highlights
                'info-content': '#171717',   // Text color on info backgrounds
                background: '#2B1104',       // Background color for your site
                footer: '#313131',           // Footer background color
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans]
            }
        }
    },
    daisyui: {
        themes: [
            {
                lofi: {
                    ...require('daisyui/src/theming/themes')['lofi'],
                    primary: '#693D14',         // Primary color for DaisyUI components
                    'primary-content': '#171717', // Text color on primary backgrounds
                    secondary: '#016968',       // Secondary color for DaisyUI components
                    'secondary-content': '#ffffff', // Text color on secondary backgrounds
                    info: '#2bdcd2',            // Info color for DaisyUI components
                    'info-content': '#171717',  // Text color on info backgrounds
                    background: '#2B1104',      // Background color for DaisyUI components
                    footer: '#313131',          // Footer background color
                    'footer-content': '#ffffff', // Text color on footer backgrounds
                }
            }
        ]
    },
    plugins: [require('daisyui')]
};
