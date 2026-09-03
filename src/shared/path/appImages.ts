// Centralized image asset paths — single source of truth for the app.

const AppImages = {
    // Splash
    splashImg1: require("../../../assets/images/splash/splash_img_1.png"),
    splashLogo1: require("../../../assets/images/splash/splash_logo_1.png"),

    // Auth
    googleLogo: require("../../../assets/images/auth/google_logo.png"),
} as const;

export default AppImages;
