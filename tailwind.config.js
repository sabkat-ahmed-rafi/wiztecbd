/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ["Montserrat", "sans-serif"],
            },
            height: {
                "screen-minus-116": "calc(100vh - 6.25rem)",
            },
            spacing: {
                "2px": "0.125rem",
                "10px": "0.625rem",
                "30px": "1.875rem",
                54: "3.375rem",
                75: "4.688rem",
                87: "5.438rem",
                100: "6.25rem",
                130: "8.125rem",
                150: "9.375rem",
                170: "10.625rem",
                197: "12.313rem",
                200: "12.5rem",
                223: "13.938rem",
                256: "16rem",
                300: "18.75rem",
                350: "21.875rem",
                370: "23.125rem",
                430: "26.875rem",
                500: "31.25rem",
                562: "35.125rem",
                900: "60.875rem",
            },
            maxWidth: {
                562: "43.75rem",
                xl: "71.25rem",
                "2xl": "96rem",
            },
            borderRadius: { 20: "20px", 75: "4.688rem" },
            keyframes: {
                wiggle: {
                    "0%, 100%": { transform: "translateX(0)" },
                    "50%": { transform: "translateX(10px)" },
                },

                textanim: {
                    "0%": { backgroundPosition: "0% 50%" },
                    "100%": { backgroundPosition: "200% 50%" },
                },
            },
            animation: {
                wiggle: "wiggle 0.5s ease-in-out infinite",
                textanim: "textanim 2s linear infinite",
            },
            backgroundImage: {
                "footer-image": "url('/assets/images/Logos/footer-bg.webp')",
            },
            backgroundSize: {
                "200-auto": "200% auto",
            },
        },
        colors: {
            // common
            black: "#000000",
            white: "#fff",
            // common

            // background color start
            default_bg: "#F8F9FB",
            paper_bg: "#ffffff",
            secondary_bg: "#EEEEEE",
            footer: "#1a1a1a",
            transparent: "transparent",
            // background color end
            // Text color start
            primary: "#000",
            secondary: "#343a40",
            gray700: "#5e5e5e",
            gray600: "#606060",
            gray500: "#444f5c",
            // Text color end

            //colors start
            primary_light: "rgba(69, 144, 214, 0.253)",
            primary_main: "#17a2b8",
            primary_dark: "#00f",
            peas_light: "#45c8c0",
            peas_main: "#17afb0",
            peas_dark: "#63a077",
            secondary_light: "#cd89e8",
            success_light: "rgba(139, 196, 63, .1)",
            success_main: "#8BC43F",
            success_dark: "#479d52",
            success_deep: "#20804F",
            info_main: "#007aff",
            info_dark: "#5201ff",
            info_deep: "#4338ca",
            error_light: "#c53d3d",
            error_main: "#FF0000 ",
            warning_main: "#ff8b22",
            //colors end
            // product

            product_1: "#20804F",
            product_2: "#20804F",
            product_3: "#17a2b8",
            product_4: "#45c8c0",
            product_5: "#007aff",
            product_6: "#5201ff",
            product_1: "#4338ca",

            divider: "rgba(0,0,0,.1)",
        },
        backgroundImage: {
            "custom-gradient": "linear-gradient(45deg, hsl(60deg 47% 93%) 0%, hsl(68deg 48% 93%) 11%, hsl(75deg 48% 94%) 22%, hsl(83deg 48% 95%) 33%, hsl(92deg 47% 95%) 44%, hsl(101deg 46% 96%) 56%, hsl(111deg 44% 96%) 67%, hsl(122deg 42% 97%) 78%, hsl(132deg 43% 97%) 89%, hsl(140deg 43% 97%) 100%)",
            "mega-gradient": "linear-gradient(to right, rgba(139, 196, 63, .1) 50%, #ffffff 50%)",
            "emplyee-card": "linear-gradient(to bottom, #ffffff 5%, #EEEEEE 95%)",
            "gradient-title": "linear-gradient(-225deg, #37a000 0%, #8BC43F 29%, #1148d7 67%, #fff800 100%)",
            "gradient-text": "linear-gradient(-225deg, #28a745 0%, #29B841 29%, #000 67%, #fff800 100%)",
            leader: "linear-gradient(to top left, #ffffff 5%, rgba(139, 196, 63, .4) 95%)",
            "auto-pop": "linear-gradient(to bottom, #ffffff 5%, #8BC43F 95%)",
            // leader: "linear-gradient(to top left, #007aff 20%,#FF0000 40%, #8BC43F 80%)",
            "menu-card": "linear-gradient(to bottom, #ffffff 5%, #8BC43F 95%)",
            "primary-gradient": "linear-gradient(45deg, hsl(87, 10%, 33%) 0%, hsl(87, 10%, 40%) 25%, hsl(87, 10%, 50%) 50%, hsl(87, 10%, 60%) 75%, hsl(87, 10%, 70%) 100%)",
        },
        boxShadow: {
            md: "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
            lg: "0 0 2px rgba(0, 0, 0, .16)",
            xl: "0 .125rem .25rem rgba(0, 0, 0, .075) !important",
            xxl: "0 8px 28px 2px rgba(61, 61, 61, 0.07)",
            "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
            input: "0 0 8px rgba(139, 196, 63, .4)",
            social: "0px 0px 15px 3px rgba(143, 198, 69, 0.8);",
            playBtn: "0px 0px 25px 3px rgba(143, 198, 69, 0.8)",
            mega: "0px 21px 38px -7px rgba(0,0,0,0.47)",
        },
        fontSize: {
            xxs: ".5rem", // 8px         caption p
            xs: "0.75rem", //"12px",     body2  p
            sm: "0.875rem", //14px",     subtitle2   p
            base: "1rem", //"16px",      body1   p
            lg: "1.125rem", //"18px",    subtitle1    p
            xl: "1.25rem", //"20px",     H6
            "2xl": "1.5rem", //"24px",   H5
            "3xl": "1.75rem", //"28px",  H4
            "4xl": "2rem", // "32px",    H3
            "5xl": "2.25rem", //"36px",  H2
            "6xl": "2.5rem", // 40px     H1
        },
        screens: {
            xs: "480px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
    },

    plugins: [
        function ({ addComponents, theme }) {
            addComponents({
                ".text-H1": {
                    fontSize: theme("fontSize.xl"),

                    "@screen md": {
                        fontSize: theme("fontSize.4xl"), // Large screen
                    },
                    "@screen 2xl": {
                        fontSize: theme("fontSize.6xl"), // Biggest screen
                    },
                },
                ".text-H2": {
                    fontSize: theme("fontSize.xl"),

                    "@screen md": {
                        fontSize: theme("fontSize.3xl"), // Large screen
                    },
                    "@screen 2xl": {
                        fontSize: theme("fontSize.5xl"), // Biggest screen
                    },
                },
                ".text-H3": {
                    fontSize: theme("fontSize.lg"),

                    "@screen md": {
                        fontSize: theme("fontSize.2xl"), // Large screen
                    },
                    "@screen 2xl": {
                        fontSize: theme("fontSize.4xl"), // Biggest screen
                    },
                },
                ".text-H4": {
                    fontSize: theme("fontSize.base"),

                    "@screen md": {
                        fontSize: theme("fontSize.xl"), // Large screen
                    },
                    "@screen 2xl": {
                        fontSize: theme("fontSize.3xl"), // Biggest screen
                    },
                },
                ".text-H5": {
                    fontSize: theme("fontSize.base"),

                    "@screen md": {
                        fontSize: theme("fontSize.xl"), // Large screen
                    },
                    "@screen 2xl": {
                        fontSize: theme("fontSize.2xl"), // Biggest screen
                    },
                },
                ".text-H6": {
                    fontSize: theme("fontSize.base"),

                    "@screen md": {
                        fontSize: theme("fontSize.xl"), // Large screen
                    },
                    "@screen 2xl": {
                        fontSize: theme("fontSize.xl"), // Biggest screen
                    },
                },
                ".text-subtitle1": {
                    fontSize: theme("fontSize.sm"),

                    "@screen md": {
                        fontSize: theme("fontSize.lg"), // Large screen
                    },
                    "@screen 2xl": {
                        fontSize: theme("fontSize.lg"), // Biggest screen
                    },
                },
                ".text-subtitle2": {
                    fontSize: theme("fontSize.xs"),

                    "@screen md": {
                        fontSize: theme("fontSize.sm"), // Large screen
                    },
                    "@screen 2xl": {
                        fontSize: theme("fontSize.sm"), // Biggest screen
                    },
                },
                ".text-body1": {
                    fontSize: theme("fontSize.xs"),

                    // "@screen md": {
                    //     fontSize: theme("fontSize.base"), // Large screen
                    // },
                    "@screen 2xl": {
                        fontSize: theme("fontSize.base"), // Biggest screen
                    },
                },
                ".text-body2": {
                    fontSize: theme("fontSize.xs"),
                },
                ".text-caption": {
                    fontSize: theme("fontSize.xxs"),
                },
            });
        },
    ],
};
