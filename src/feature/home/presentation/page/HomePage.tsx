import AppColors from "@/src/shared/theme/appColors";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import homePageStyles from "../style/homePage.styles";

type IoniconName = React.ComponentProps<typeof Ionicons>["name"];

const CATEGORIES: { key: string; icon: IoniconName }[] = [
  { key: "succulent", icon: "leaf-outline" },
  { key: "berries", icon: "nutrition-outline" },
  { key: "cactus", icon: "flower-outline" },
  { key: "sapling", icon: "sunny-outline" },
];

const FEATURES: {
  key: string;
  title: string;
  subtitle: string;
  icon: IoniconName;
}[] = [
  {
    key: "diagnose",
    title: "Diagnose",
    subtitle: "Check your plant's health",
    icon: "pulse-outline",
  },
  {
    key: "identify",
    title: "Identify",
    subtitle: "Recognize a plant",
    icon: "camera-outline",
  },
  {
    key: "iot-watering",
    title: "IOT Watering",
    subtitle: "Optimize watering for your plant",
    icon: "water-outline",
  },
  {
    key: "reminders",
    title: "Reminders",
    subtitle: "Stay on top of your plant care",
    icon: "alarm-outline",
  },
];

const HomePage = () => {
  const router = useRouter();

  return (
    <View style={homePageStyles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={homePageStyles.scrollContent}
      >
        <View style={homePageStyles.header}>
          <SafeAreaView edges={["top"]}>
            <View style={homePageStyles.headerTopRow}>
              <Pressable style={homePageStyles.iconButton}>
                <Ionicons
                  name="apps-outline"
                  size={20}
                  color={AppColors.primaryColor}
                />
              </Pressable>

              <View style={homePageStyles.locationBlock}>
                <Text style={homePageStyles.locationLabel}>Your location</Text>
                <View style={homePageStyles.locationRow}>
                  <Ionicons
                    name="location-sharp"
                    size={13}
                    color={AppColors.errorColor}
                  />
                  <Text style={homePageStyles.locationValue}>
                    Gampaha, Sri Lanka
                  </Text>
                </View>
              </View>

              <Pressable style={homePageStyles.iconButton}>
                <Ionicons
                  name="notifications-outline"
                  size={20}
                  color={AppColors.primaryColor}
                />
                <View style={homePageStyles.badge} />
              </Pressable>
            </View>

            <View style={homePageStyles.searchBar}>
              <Ionicons
                name="search-outline"
                size={18}
                color={AppColors.grayColor}
              />
              <TextInput
                placeholder="Search plants & Flowers"
                placeholderTextColor={AppColors.grayColor}
                style={homePageStyles.searchInput}
              />
            </View>
          </SafeAreaView>
        </View>

        <View style={homePageStyles.weatherCard}>
          <View>
            <Text style={homePageStyles.weatherTemp}>23°C</Text>
            <Text style={homePageStyles.weatherLocation}>
              Gampaha ,Sri Lanka
            </Text>
          </View>
          <Ionicons
            name="thunderstorm-outline"
            size={38}
            color={AppColors.primaryColor}
          />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={homePageStyles.categoryRow}
          contentContainerStyle={homePageStyles.categoryRowContent}
        >
          <View style={homePageStyles.categoryChipActive}>
            <View style={homePageStyles.categoryChipIcon}>
              <Ionicons name="flower" size={14} color={AppColors.primaryColor} />
            </View>
            <Text style={homePageStyles.categoryChipActiveText}>Orchid</Text>
          </View>

          {CATEGORIES.map((category) => (
            <Pressable
              key={category.key}
              style={homePageStyles.categoryIconButton}
            >
              <Ionicons
                name={category.icon}
                size={18}
                color={AppColors.primaryColor}
              />
            </Pressable>
          ))}
        </ScrollView>

        <View style={homePageStyles.checkPlantCard}>
          <View style={homePageStyles.checkPlantImage}>
            <Ionicons name="leaf" size={34} color={AppColors.primaryColor} />
          </View>
          <View style={homePageStyles.checkPlantContent}>
            <Text style={homePageStyles.checkPlantTitle}>
              Check your plant
            </Text>
            <Text style={homePageStyles.checkPlantSubtitle}>
              Take photos, start diagnose diseases & get plant care tips
            </Text>
            <Pressable
              style={homePageStyles.diagnoseButton}
              onPress={() => router.push("/diagnose")}
            >
              <Text style={homePageStyles.diagnoseButtonText}>Diagnose</Text>
            </Pressable>
          </View>
        </View>

        <Text style={homePageStyles.sectionTitle}>All Features</Text>

        <View style={homePageStyles.featureGrid}>
          {FEATURES.map((feature) => (
            <Pressable
              key={feature.key}
              style={homePageStyles.featureCard}
              onPress={() => router.push("/diagnose")}
            >
              <View style={homePageStyles.featureCardInner}>
                <Text style={homePageStyles.featureTitle}>
                  {feature.title}
                </Text>
                <Text style={homePageStyles.featureSubtitle}>
                  {feature.subtitle}
                </Text>
                <View style={homePageStyles.featureImage}>
                  <Ionicons
                    name={feature.icon}
                    size={30}
                    color={AppColors.primaryColor}
                  />
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomePage;
