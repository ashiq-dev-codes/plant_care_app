import AppFonts from "@/src/shared/path/appFonts";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    // Poppins
    [AppFonts.poppinsThin.name]: AppFonts.poppinsThin.path,
    [AppFonts.poppinsExtraLight.name]: AppFonts.poppinsExtraLight.path,
    [AppFonts.poppinsLight.name]: AppFonts.poppinsLight.path,
    [AppFonts.poppinsRegular.name]: AppFonts.poppinsRegular.path,
    [AppFonts.poppinsMedium.name]: AppFonts.poppinsMedium.path,
    [AppFonts.poppinsSemiBold.name]: AppFonts.poppinsSemiBold.path,
    [AppFonts.poppinsBold.name]: AppFonts.poppinsBold.path,
    [AppFonts.poppinsExtraBold.name]: AppFonts.poppinsExtraBold.path,
    [AppFonts.poppinsBlack.name]: AppFonts.poppinsBlack.path,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }} />
    </GestureHandlerRootView>
  );
}
