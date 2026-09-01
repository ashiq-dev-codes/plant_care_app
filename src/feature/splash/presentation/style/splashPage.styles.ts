import AppFonts from "@/src/shared/path/appFonts";
import AppColors from "@/src/shared/theme/appColors";
import { StyleSheet } from "react-native";

const splashPageStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.blackColor,
    },
    background: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: "54%",
        aspectRatio: 440 / 390,
    },
    footer: {
        alignItems: "center",
        paddingBottom: 40,
    },
    footerText: {
        fontSize: 14,
        letterSpacing: 2,
        color: AppColors.whiteColor,
        fontFamily: AppFonts.poppinsSemiBold.name,
    },
});

export default splashPageStyles;
