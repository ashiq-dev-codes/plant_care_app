import AppFonts from "@/src/shared/path/appFonts";
import AppColors from "@/src/shared/theme/appColors";
import { StyleSheet } from "react-native";

const AVATAR_SIZE = 96;

const editProfilePageStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.backgroundColor,
    },
    headerRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        paddingTop: 8,
        paddingBottom: 12,
    },
    headerSideSlot: {
        width: 22,
    },
    headerTitle: {
        fontSize: 17,
        color: AppColors.primaryColor,
        fontFamily: AppFonts.poppinsSemiBold.name,
    },
    content: {
        paddingHorizontal: 24,
        paddingTop: 12,
    },

    // Avatar
    avatarWrapper: {
        alignSelf: "center",
        width: AVATAR_SIZE,
        height: AVATAR_SIZE,
        marginBottom: 32,
    },
    avatar: {
        width: AVATAR_SIZE,
        height: AVATAR_SIZE,
        borderRadius: AVATAR_SIZE / 2,
        backgroundColor: AppColors.whiteColor,
    },
    avatarPlaceholder: {
        alignItems: "center",
        justifyContent: "center",
    },
    avatarEditBadge: {
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: AppColors.primaryColor,
        borderWidth: 3,
        borderColor: AppColors.backgroundColor,
    },

    // Fields
    fieldLabel: {
        marginBottom: 8,
        fontSize: 14,
        color: AppColors.primaryColor,
        fontFamily: AppFonts.poppinsSemiBold.name,
    },
    inputWrapper: {
        marginBottom: 20,
        borderRadius: 16,
        paddingHorizontal: 18,
        backgroundColor: AppColors.whiteColor,
        shadowColor: AppColors.blackColor,
        shadowOpacity: 0.05,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: 1,
    },
    inputWrapperDisabled: {
        backgroundColor: AppColors.withOpacity(AppColors.grayColor, 0.1),
        shadowOpacity: 0,
        elevation: 0,
    },
    input: {
        paddingVertical: 16,
        fontSize: 15,
        color: AppColors.blackColor,
        fontFamily: AppFonts.poppinsRegular.name,
    },
    inputDisabled: {
        color: AppColors.grayColor,
    },

    // Save button
    saveButton: {
        marginTop: 12,
        borderRadius: 30,
        paddingVertical: 18,
        alignItems: "center",
        backgroundColor: AppColors.primaryColor,
    },
    saveButtonText: {
        fontSize: 16,
        color: AppColors.whiteColor,
        fontFamily: AppFonts.poppinsSemiBold.name,
    },
});

export default editProfilePageStyles;
