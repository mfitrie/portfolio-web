import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            // Mobile first approach (min-width)
            'xs': '475px',      // Extra small devices (large phones)
            'sm': '640px',      // Small devices (tablets)
            'md': '768px',      // Medium devices (small laptops)
            'lg': '1024px',     // Large devices (laptops/desktops)
            'xl': '1280px',     // Extra large devices (large desktops)
            '2xl': '1536px',    // 2X Extra large devices (larger desktops)

            // Custom breakpoints
            'tablet': '640px',
            'laptop': '1024px',
            'desktop': '1280px',

            // Max-width breakpoints (for mobile-first overrides)
            'max-sm': { 'max': '639px' },
            'max-md': { 'max': '767px' },
            'max-lg': { 'max': '1023px' },
            'max-xl': { 'max': '1279px' },

            // Range breakpoints (between two sizes)
            'sm-md': { 'min': '640px', 'max': '767px' },
            'md-lg': { 'min': '768px', 'max': '1023px' },
            'lg-xl': { 'min': '1024px', 'max': '1279px' },

            // Specific device targeting
            'mobile': { 'max': '767px' },
            'tablet-only': { 'min': '768px', 'max': '1023px' },
            'desktop-only': { 'min': '1024px' },

            // Portrait and landscape
            'portrait': { 'raw': '(orientation: portrait)' },
            'landscape': { 'raw': '(orientation: landscape)' },

            // High resolution screens
            'retina': { 'raw': '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)' },
        },
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
        },
    },
    plugins: [],
};

export default config;