// Centralized font definitions — single source of truth for the app.
// Add new font families here as you download .ttf files into assets/fonts/.

const AppFonts = {
    // Poppins
    poppinsThin: {
        name: "poppinsThin",
        path: require("../../../assets/fonts/poppins/Poppins-Thin.ttf"),
    },
    poppinsExtraLight: {
        name: "poppinsExtraLight",
        path: require("../../../assets/fonts/poppins/Poppins-ExtraLight.ttf"),
    },
    poppinsLight: {
        name: "poppinsLight",
        path: require("../../../assets/fonts/poppins/Poppins-Light.ttf"),
    },
    poppinsRegular: {
        name: "poppinsRegular",
        path: require("../../../assets/fonts/poppins/Poppins-Regular.ttf"),
    },
    poppinsMedium: {
        name: "poppinsMedium",
        path: require("../../../assets/fonts/poppins/Poppins-Medium.ttf"),
    },
    poppinsSemiBold: {
        name: "poppinsSemiBold",
        path: require("../../../assets/fonts/poppins/Poppins-SemiBold.ttf"),
    },
    poppinsBold: {
        name: "poppinsBold",
        path: require("../../../assets/fonts/poppins/Poppins-Bold.ttf"),
    },
    poppinsExtraBold: {
        name: "poppinsExtraBold",
        path: require("../../../assets/fonts/poppins/Poppins-ExtraBold.ttf"),
    },
    poppinsBlack: {
        name: "poppinsBlack",
        path: require("../../../assets/fonts/poppins/Poppins-Black.ttf"),
    },
} as const;

export default AppFonts;
