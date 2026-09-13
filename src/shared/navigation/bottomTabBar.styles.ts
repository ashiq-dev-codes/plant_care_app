import AppColors from "@/src/shared/theme/appColors";
import { StyleSheet } from "react-native";

export const BAR_HEIGHT = 66;
export const SCAN_BUTTON_SIZE = 64;
export const BAR_BOTTOM_OFFSET = 28;

// How far other floating UI (e.g. the snackbar) needs to sit above the
// screen bottom to clear the tab bar, including its floating scan button.
export const TAB_BAR_CLEARANCE =
    BAR_BOTTOM_OFFSET + BAR_HEIGHT + SCAN_BUTTON_SIZE / 2 + 12;

const bottomTabBarStyles = StyleSheet.create({
    wrapper: {
        position: "absolute",
        left: 20,
        right: 20,
        bottom: BAR_BOTTOM_OFFSET,
        height: BAR_HEIGHT + SCAN_BUTTON_SIZE / 2,
    },
    bar: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: BAR_HEIGHT,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        borderRadius: BAR_HEIGHT / 2,
        backgroundColor: AppColors.primaryColor,
        shadowColor: AppColors.blackColor,
        shadowOpacity: 0.2,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 6 },
        elevation: 6,
    },
    tabButton: {
        flex: 1,
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
    },
    activeDot: {
        width: 4,
        height: 4,
        borderRadius: 2,
        backgroundColor: AppColors.whiteColor,
    },
    scanButton: {
        position: "absolute",
        top: 0,
        left: "50%",
        marginLeft: -(SCAN_BUTTON_SIZE / 2),
        width: SCAN_BUTTON_SIZE,
        height: SCAN_BUTTON_SIZE,
        borderRadius: SCAN_BUTTON_SIZE / 2,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: AppColors.primaryColor,
        borderWidth: 4,
        borderColor: AppColors.backgroundColor,
        shadowColor: AppColors.blackColor,
        shadowOpacity: 0.25,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
        elevation: 8,
    },
});

export default bottomTabBarStyles;
