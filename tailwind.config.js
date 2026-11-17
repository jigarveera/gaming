export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],

    theme: {
        extend: {
            fontFamily: {
                audiowide: ['Audiowide', 'sans-serif']
            },

            colors: {
                surface: {
                    50: "#ffffff",
                    100: "#f5f5f5",
                    200: "#e1e1e1",
                    300: "#d9d9d9",
                    400: "#c1c1c1",
                    500: "#ababab",
                    600: "#616161",
                    700: "#464646",
                    800: "#2F2F2F",
                    900: "#1C1C1C",
                    950: "#111111",
                },

                "success-green": {
                    50: "#ddf5e3",
                    100: "#bbecc7",
                    200: "#99e3ac",
                    300: "#77d990",
                    400: "#55d074",
                    500: "#34c759",
                    600: "#2ba54a",
                    700: "#22843b",
                    800: "#1a632c",
                    900: "#11421d",
                    950: "#08210e",
                },

                "warning-orange": {
                    50: "#ffecdb",
                    100: "#ffd9b7",
                    200: "#ffc693",
                    300: "#ffb36f",
                    400: "#ffa04b",
                    500: "#ff8d28",
                    600: "#d47521",
                    700: "#aa5e1a",
                    800: "#7f4614",
                    900: "#552f0d",
                    950: "#2a1706",
                },

                "critical-red": {
                    50: "#ffddde",
                    100: "#ffbcbe",
                    200: "#ff9b9d",
                    300: "#ff7a7d",
                    400: "#ff595c",
                    500: "#ff383c",
                    600: "#d42e32",
                    700: "#aa2528",
                    800: "#7f1c1e",
                    900: "#551214",
                    950: "#2a090a",
                },
            }
        },

    }
}