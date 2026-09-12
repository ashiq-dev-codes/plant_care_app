import AppFonts from "@/src/shared/path/appFonts";
import AppColors from "@/src/shared/theme/appColors";
import { StyleSheet } from "react-native";

const homePageStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.backgroundColor,
    },
    scrollContent: {
        paddingBottom: 160,
    },

    // Header
    header: {
        backgroundColor: AppColors.primaryColor,
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
        paddingBottom: 24,
    },
    headerTopRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        marginTop: 8,
    },
    iconButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: AppColors.whiteColor,
    },
    badge: {
        position: "absolute",
        top: 10,
        right: 11,
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: AppColors.errorColor,
    },
    locationBlock: {
        alignItems: "center",
    },
    locationLabel: {
        fontSize: 12,
        color: AppColors.withOpacity(AppColors.whiteColor, 0.7),
        fontFamily: AppFonts.poppinsRegular.name,
    },
    locationRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
        marginTop: 2,
    },
    locationValue: {
        fontSize: 15,
        color: AppColors.whiteColor,
        fontFamily: AppFonts.poppinsSemiBold.name,
    },
    searchBar: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginTop: 20,
        marginHorizontal: 20,
        paddingHorizontal: 18,
        paddingVertical: 14,
        borderRadius: 30,
        backgroundColor: AppColors.whiteColor,
    },
    searchInput: {
        flex: 1,
        fontSize: 14,
        color: AppColors.blackColor,
        fontFamily: AppFonts.poppinsRegular.name,
    },

    // Weather card
    weatherCard: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: -30,
        marginHorizontal: 24,
        paddingHorizontal: 22,
        paddingVertical: 18,
        borderRadius: 24,
        backgroundColor: AppColors.whiteColor,
        shadowColor: AppColors.blackColor,
        shadowOpacity: 0.08,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 6 },
        elevation: 3,
    },
    weatherTemp: {
        fontSize: 26,
        color: AppColors.primaryColor,
        fontFamily: AppFonts.poppinsBold.name,
    },
    weatherLocation: {
        marginTop: 2,
        fontSize: 14,
        color: AppColors.grayColor,
        fontFamily: AppFonts.poppinsRegular.name,
    },

    // Categories
    categoryRow: {
        marginTop: 24,
    },
    categoryRowContent: {
        paddingHorizontal: 24,
        gap: 12,
        alignItems: "center",
    },
    categoryChipActive: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        paddingLeft: 6,
        paddingRight: 16,
        paddingVertical: 6,
        borderRadius: 24,
        backgroundColor: AppColors.primaryColor,
    },
    categoryChipIcon: {
        width: 28,
        height: 28,
        borderRadius: 14,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: AppColors.whiteColor,
    },
    categoryChipActiveText: {
        fontSize: 14,
        color: AppColors.whiteColor,
        fontFamily: AppFonts.poppinsSemiBold.name,
    },
    categoryIconButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: AppColors.whiteColor,
    },

    // Check your plant
    checkPlantCard: {
        flexDirection: "row",
        marginTop: 24,
        marginHorizontal: 24,
        padding: 16,
        borderRadius: 24,
        gap: 16,
        backgroundColor: AppColors.whiteColor,
        shadowColor: AppColors.blackColor,
        shadowOpacity: 0.05,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: 1,
    },
    checkPlantImage: {
        width: 84,
        height: 104,
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: AppColors.backgroundColor,
    },
    checkPlantContent: {
        flex: 1,
    },
    checkPlantTitle: {
        fontSize: 17,
        color: AppColors.primaryColor,
        fontFamily: AppFonts.poppinsSemiBold.name,
    },
    checkPlantSubtitle: {
        marginTop: 6,
        fontSize: 13,
        lineHeight: 18,
        color: AppColors.grayColor,
        fontFamily: AppFonts.poppinsRegular.name,
    },
    diagnoseButton: {
        marginTop: 12,
        alignSelf: "flex-start",
        paddingHorizontal: 22,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: AppColors.primaryColor,
    },
    diagnoseButtonText: {
        fontSize: 13,
        color: AppColors.whiteColor,
        fontFamily: AppFonts.poppinsSemiBold.name,
    },

    // All Features
    sectionTitle: {
        marginTop: 28,
        marginHorizontal: 24,
        fontSize: 18,
        color: AppColors.primaryColor,
        fontFamily: AppFonts.poppinsSemiBold.name,
    },
    featureGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 16,
        marginHorizontal: 16,
    },
    featureCard: {
        width: "50%",
        paddingHorizontal: 8,
        marginBottom: 16,
    },
    featureCardInner: {
        padding: 16,
        borderRadius: 20,
        backgroundColor: AppColors.whiteColor,
        shadowColor: AppColors.blackColor,
        shadowOpacity: 0.05,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: 1,
    },
    featureTitle: {
        fontSize: 15,
        color: AppColors.primaryColor,
        fontFamily: AppFonts.poppinsSemiBold.name,
    },
    featureSubtitle: {
        marginTop: 4,
        fontSize: 12,
        lineHeight: 16,
        color: AppColors.grayColor,
        fontFamily: AppFonts.poppinsRegular.name,
    },
    featureImage: {
        height: 80,
        marginTop: 14,
        borderRadius: 14,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: AppColors.backgroundColor,
    },
});

export default homePageStyles;
