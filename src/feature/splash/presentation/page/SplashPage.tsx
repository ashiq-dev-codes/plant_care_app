import AppImages from "@/src/shared/path/appImages";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import splashPageStyles from "../style/splashPage.styles";

const SplashPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.replace("/login"), 1000);
    return () => clearTimeout(timer);
  }, [router]);

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
