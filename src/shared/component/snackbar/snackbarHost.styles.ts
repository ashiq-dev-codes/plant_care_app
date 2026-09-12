import AppFonts from "@/src/shared/path/appFonts";
import AppColors from "@/src/shared/theme/appColors";
import { StyleSheet } from "react-native";

const snackbarHostStyles = StyleSheet.create({
    wrapper: {
        position: "absolute",
        left: 16,
        right: 16,
    },
    card: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderRadius: 14,
        shadowColor: AppColors.blackColor,
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
        elevation: 6,
    },
    text: {
        flex: 1,
        fontSize: 14,
        color: AppColors.whiteColor,
        fontFamily: AppFonts.poppinsMedium.name,
    },
});

export default snackbarHostStyles;
