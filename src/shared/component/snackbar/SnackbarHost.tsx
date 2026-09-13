import { TAB_BAR_CLEARANCE } from "@/src/shared/navigation/bottomTabBar.styles";
import AppColors from "@/src/shared/theme/appColors";
import { Ionicons } from "@expo/vector-icons";
import { usePathname } from "expo-router";
import { useEffect, useRef } from "react";
import { Text, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
    runOnJS,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SnackbarType } from "./snackbar.types";
import snackbarHostStyles from "./snackbarHost.styles";
import { useSnackbarStore } from "./useSnackbar.store";

// Routes that render the floating bottom tab bar — the snackbar needs extra
// clearance there so it doesn't sit behind it.
const TAB_ROUTES = new Set(["/home", "/community", "/plants", "/profile"]);
const NEAR_BOTTOM_OFFSET = 20;

const SWIPE_DISMISS_DISTANCE = 80;
const SWIPE_DISMISS_VELOCITY = 800;
const OFF_SCREEN_DISTANCE = 500;

const TYPE_CONFIG: Record<
    SnackbarType,
    { backgroundColor: string; icon: React.ComponentProps<typeof Ionicons>["name"] }
> = {
    [SnackbarType.Success]: {
        backgroundColor: AppColors.successColor,
        icon: "checkmark-circle",
    },
    [SnackbarType.Error]: {
        backgroundColor: AppColors.errorColor,
        icon: "alert-circle",
    },
    [SnackbarType.Message]: {
        backgroundColor: AppColors.primaryColor,
        icon: "information-circle",
    },
};

const SnackbarHost = () => {
    const insets = useSafeAreaInsets();
    const pathname = usePathname();
    const visible = useSnackbarStore((state) => state.visible);
    const message = useSnackbarStore((state) => state.message);
    const type = useSnackbarStore((state) => state.type);
    const duration = useSnackbarStore((state) => state.duration);
    const requestId = useSnackbarStore((state) => state.requestId);
    const hide = useSnackbarStore((state) => state.hide);

    const translateY = useSharedValue(40);
    const translateX = useSharedValue(0);
    const opacity = useSharedValue(0);
    const dismissTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const clearDismissTimer = () => {
        if (dismissTimer.current) {
            clearTimeout(dismissTimer.current);
            dismissTimer.current = null;
        }
    };

    useEffect(() => {
        if (!visible || requestId === 0) return;

        clearDismissTimer();
        translateX.value = 0;
        translateY.value = withTiming(0, { duration: 220 });
        opacity.value = withTiming(1, { duration: 220 });

        dismissTimer.current = setTimeout(() => {
            translateY.value = withTiming(40, { duration: 200 });
            opacity.value = withTiming(0, { duration: 200 }, (finished) => {
                if (finished) runOnJS(hide)();
            });
        }, duration);

        return clearDismissTimer;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [requestId]);

    const panGesture = Gesture.Pan()
        .activeOffsetX([-10, 10])
        .failOffsetY([-20, 20])
        .onUpdate((event) => {
            translateX.value = event.translationX;
        })
        .onEnd((event) => {
            const shouldDismiss =
                Math.abs(event.translationX) > SWIPE_DISMISS_DISTANCE ||
                Math.abs(event.velocityX) > SWIPE_DISMISS_VELOCITY;

            if (shouldDismiss) {
                const direction = event.translationX >= 0 ? 1 : -1;
                translateX.value = withTiming(direction * OFF_SCREEN_DISTANCE, {
                    duration: 200,
                });
                opacity.value = withTiming(0, { duration: 200 }, (finished) => {
                    if (finished) runOnJS(hide)();
                });
                runOnJS(clearDismissTimer)();
            } else {
                translateX.value = withSpring(0);
            }
        });

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
        transform: [
            { translateY: translateY.value },
            { translateX: translateX.value },
        ],
    }));

    if (requestId === 0) return null;

    const config = TYPE_CONFIG[type];
    const isTabScreen = TAB_ROUTES.has(pathname);
    const bottomOffset =
        insets.bottom + (isTabScreen ? TAB_BAR_CLEARANCE : NEAR_BOTTOM_OFFSET);

    return (
        <View
            pointerEvents="box-none"
            style={[snackbarHostStyles.wrapper, { bottom: bottomOffset }]}
        >
            <GestureDetector gesture={panGesture}>
                <Animated.View
                    pointerEvents={visible ? "auto" : "none"}
                    style={[
                        snackbarHostStyles.card,
                        { backgroundColor: config.backgroundColor },
                        animatedStyle,
                    ]}
                >
                    <Ionicons name={config.icon} size={20} color={AppColors.whiteColor} />
                    <Text style={snackbarHostStyles.text} numberOfLines={3}>
                        {message}
                    </Text>
                </Animated.View>
            </GestureDetector>
        </View>
    );
};

export default SnackbarHost;
