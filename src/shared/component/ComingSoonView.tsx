import AppFonts from "@/src/shared/path/appFonts";
import AppColors from "@/src/shared/theme/appColors";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ComingSoonViewProps = {
    title: string;
    showBackButton?: boolean;
};

const ComingSoonView = ({ title, showBackButton = false }: ComingSoonViewProps) => {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
            {showBackButton ? (
                <Pressable
                    style={styles.backButton}
                    onPress={() => router.back()}
                    hitSlop={10}
                >
                    <Ionicons
                        name="chevron-back"
                        size={20}
                        color={AppColors.primaryColor}
                    />
                </Pressable>
            ) : null}

            <View style={styles.content}>
                <Ionicons name="leaf-outline" size={48} color={AppColors.grayColor} />
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>Coming soon</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.backgroundColor,
    },
    backButton: {
        marginTop: 12,
        marginLeft: 20,
    },
    content: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
    },
    title: {
        fontSize: 20,
        color: AppColors.primaryColor,
        fontFamily: AppFonts.poppinsSemiBold.name,
    },
    subtitle: {
        fontSize: 14,
        color: AppColors.grayColor,
        fontFamily: AppFonts.poppinsRegular.name,
    },
});

export default ComingSoonView;
