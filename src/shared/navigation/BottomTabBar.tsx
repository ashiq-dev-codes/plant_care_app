import AppColors from "@/src/shared/theme/appColors";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { TabTrigger, TabTriggerSlotProps } from "expo-router/ui";
import { forwardRef } from "react";
import { Pressable, View } from "react-native";
import bottomTabBarStyles from "./bottomTabBar.styles";

type IoniconName = React.ComponentProps<typeof Ionicons>["name"];

const iconColor = (isFocused?: boolean) =>
  isFocused
    ? AppColors.whiteColor
    : AppColors.withOpacity(AppColors.whiteColor, 0.5);

const IonTabButton = forwardRef<
  View,
  TabTriggerSlotProps & { icon: IoniconName }
>(({ icon, isFocused, children, ...pressableProps }, ref) => (
  <Pressable ref={ref} {...pressableProps} style={bottomTabBarStyles.tabButton}>
    <Ionicons name={icon} size={22} color={iconColor(isFocused)} />
    {isFocused ? <View style={bottomTabBarStyles.activeDot} /> : null}
  </Pressable>
));
IonTabButton.displayName = "IonTabButton";

const PlantsTabButton = forwardRef<View, TabTriggerSlotProps>(
  ({ isFocused, children, ...pressableProps }, ref) => (
    <Pressable
      ref={ref}
      {...pressableProps}
      style={bottomTabBarStyles.tabButton}
    >
      <MaterialCommunityIcons
        name="pine-tree"
        size={22}
        color={iconColor(isFocused)}
      />
      {isFocused ? <View style={bottomTabBarStyles.activeDot} /> : null}
    </Pressable>
  ),
);
PlantsTabButton.displayName = "PlantsTabButton";

const BottomTabBar = () => {
  const router = useRouter();

  return (
    <View style={bottomTabBarStyles.wrapper} pointerEvents="box-none">
      <View style={bottomTabBarStyles.bar}>
        <TabTrigger name="home" asChild>
          <IonTabButton icon="home" />
        </TabTrigger>
        <TabTrigger name="community" asChild>
          <IonTabButton icon="people" />
        </TabTrigger>
        <TabTrigger name="plants" asChild>
          <PlantsTabButton />
        </TabTrigger>
        <TabTrigger name="profile" asChild>
          <IonTabButton icon="person" />
        </TabTrigger>
      </View>

      <Pressable
        style={bottomTabBarStyles.scanButton}
        onPress={() => router.push("/diagnose")}
      >
        <Ionicons name="scan-outline" size={26} color={AppColors.whiteColor} />
      </Pressable>
    </View>
  );
};

export default BottomTabBar;
