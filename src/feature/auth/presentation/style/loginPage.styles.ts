import AppFonts from "@/src/shared/path/appFonts";
import AppColors from "@/src/shared/theme/appColors";
import { StyleSheet } from "react-native";

const loginPageStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.backgroundColor,
    },
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: 24,
        paddingBottom: 30,
    },
    // Heading
    heading: {
        marginTop: 70,
        fontSize: 34,
        textAlign: "center",
        color: AppColors.primaryColor,
        fontFamily: AppFonts.poppinsBold.name,
    },
    subHeading: {
        marginTop: 8,
        fontSize: 15,
        textAlign: "center",
        color: AppColors.grayColor,
        fontFamily: AppFonts.poppinsRegular.name,
    },

    // Form
    form: {
        marginTop: 50,
    },
    fieldLabel: {
        marginBottom: 8,
        fontSize: 15,
        color: AppColors.primaryColor,
        fontFamily: AppFonts.poppinsSemiBold.name,
    },
    inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 30,
        paddingHorizontal: 20,
        backgroundColor: AppColors.whiteColor,
        shadowColor: AppColors.blackColor,
        shadowOpacity: 0.05,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: 1,
    },
    input: {
        flex: 1,
        paddingVertical: 18,
        fontSize: 15,
        color: AppColors.blackColor,
        fontFamily: AppFonts.poppinsRegular.name,
    },
    passwordField: {
        marginTop: 22,
    },
    recoveryPassword: {
        marginTop: 12,
        alignSelf: "flex-end",
        fontSize: 14,
        color: AppColors.grayColor,
        fontFamily: AppFonts.poppinsMedium.name,
    },

    // Buttons
    signInButton: {
        marginTop: 30,
        borderRadius: 30,
        paddingVertical: 18,
        alignItems: "center",
        backgroundColor: AppColors.primaryColor,
    },
    signInButtonText: {
        fontSize: 17,
        color: AppColors.whiteColor,
        fontFamily: AppFonts.poppinsSemiBold.name,
    },
    googleButton: {
        marginTop: 16,
        flexDirection: "row",
        borderRadius: 30,
        paddingVertical: 16,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: AppColors.whiteColor,
        shadowColor: AppColors.blackColor,
        shadowOpacity: 0.05,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: 1,
    },
    googleIcon: {
        width: 22,
        height: 22,
        marginRight: 10,
    },
    googleButtonText: {
        fontSize: 16,
        color: AppColors.blackColor,
        fontFamily: AppFonts.poppinsMedium.name,
    },

    // Footer
    footer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        paddingTop: 30,
    },
    footerText: {
        fontSize: 14,
        color: AppColors.grayColor,
        fontFamily: AppFonts.poppinsRegular.name,
    },
    footerLink: {
        color: AppColors.primaryColor,
        fontFamily: AppFonts.poppinsSemiBold.name,
    },
});

export default loginPageStyles;
