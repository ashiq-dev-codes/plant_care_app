import BottomTabBar from "@/src/shared/navigation/BottomTabBar";
import AppColors from "@/src/shared/theme/appColors";
import { Tabs, TabList, TabSlot, TabTrigger } from "expo-router/ui";
import { View } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs style={{ flex: 1 }}>
      <View
        style={{ flex: 1, height: "100%", backgroundColor: AppColors.backgroundColor }}
      >
        <TabSlot style={{ flex: 1 }} />
        <BottomTabBar />
      </View>

      <TabList style={{ display: "none" }}>
        <TabTrigger name="home" href="/home" />
        <TabTrigger name="community" href="/community" />
        <TabTrigger name="plants" href="/plants" />
        <TabTrigger name="profile" href="/profile" />
      </TabList>
    </Tabs>
  );
}
