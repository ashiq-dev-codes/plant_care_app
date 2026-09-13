import { useAuthStore } from "@/src/feature/auth/presentation/store/useAuth.store";
import AppImages from "@/src/shared/path/appImages";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import splashPageStyles from "../style/splashPage.styles";

const MIN_SPLASH_DURATION = 1000;

const SplashPage = () => {
  const router = useRouter();
  const isInitializing = useAuthStore((state) => state.isInitializing);
  const user = useAuthStore((state) => state.user);
  const [minDurationElapsed, setMinDurationElapsed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(
      () => setMinDurationElapsed(true),
      MIN_SPLASH_DURATION,
    );
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isInitializing || !minDurationElapsed) return;
    router.replace(user ? "/home" : "/login");
  }, [isInitializing, minDurationElapsed, user, router]);

  return (
    <ImageBackground
      style={splashPageStyles.container}
      source={AppImages.splashImg1}
      resizeMode="cover"
    >
      <View style={splashPageStyles.content}>
        {/* This asset already includes the BLOOM wordmark, not just the leaf icon */}
        <Image
          style={splashPageStyles.logo}
          source={AppImages.splashLogo1}
          resizeMode="contain"
        />
      </View>

      <View style={splashPageStyles.footer}>
        <Text style={splashPageStyles.footerText}>By CS 09</Text>
      </View>
    </ImageBackground>
  );
};

export default SplashPage;
