import AppFonts from "@/src/shared/path/appFonts";
import AppColors from "@/src/shared/theme/appColors";
import { StyleSheet } from "react-native";

const profilePageStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.backgroundColor,
    },
    scrollContent: {
        paddingHorizontal: 24,
        paddingBottom: 160,
    },

    // Header
    headerRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        paddingTop: 8,
        paddingBottom: 12,
    },
    headerSideSlot: {
        width: 32,
    },
    headerTitle: {
        fontSize: 17,
        color: AppColors.primaryColor,
        fontFamily: AppFonts.poppinsSemiBold.name,
    },

    // Sections
    sectionTitle: {
        marginTop: 20,
        marginBottom: 14,
        fontSize: 20,
        color: AppColors.primaryColor,
        fontFamily: AppFonts.poppinsSemiBold.name,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        gap: 14,
        paddingHorizontal: 18,
        paddingVertical: 16,
        marginBottom: 12,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: AppColors.withOpacity(AppColors.grayColor, 0.25),
    },
    rowLabel: {
        flex: 1,
        fontSize: 15,
        color: AppColors.primaryColor,
        fontFamily: AppFonts.poppinsMedium.name,
    },

    // Logout
    logoutButton: {
        marginTop: 12,
        paddingVertical: 20,
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: AppColors.whiteColor,
        shadowColor: AppColors.blackColor,
        shadowOpacity: 0.05,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: 1,
    },
    logoutText: {
        fontSize: 15,
        color: AppColors.primaryColor,
        fontFamily: AppFonts.poppinsSemiBold.name,
        textDecorationLine: "underline",
    },
    versionText: {
        marginTop: 20,
        textAlign: "center",
        fontSize: 13,
        color: AppColors.grayColor,
        fontFamily: AppFonts.poppinsRegular.name,
    },
});

export default profilePageStyles;
