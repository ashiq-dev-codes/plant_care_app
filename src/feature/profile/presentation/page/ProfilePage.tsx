import { useAuthStore } from "@/src/feature/auth/presentation/store/useAuth.store";
import AppColors from "@/src/shared/theme/appColors";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ActivityIndicator, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import profilePageStyles from "../style/profilePage.styles";

type IoniconName = React.ComponentProps<typeof Ionicons>["name"];

const ACCOUNT_ROWS: { key: string; label: string; icon: IoniconName }[] = [
  { key: "edit-profile", label: "Edit profile", icon: "person-outline" },
  {
    key: "change-language",
    label: "Change language",
    icon: "language-outline",
  },
  { key: "privacy", label: "Privacy", icon: "shield-checkmark-outline" },
];

const LEGAL_ROWS: { key: string; label: string; icon: IoniconName }[] = [
  {
    key: "terms",
    label: "Terms and Condition",
    icon: "document-text-outline",
  },
  { key: "privacy-policy", label: "Privacy policy", icon: "lock-closed-outline" },
  { key: "help", label: "Help", icon: "help-circle-outline" },
];

const ProfilePage = () => {
  const router = useRouter();
  const signOut = useAuthStore((state) => state.signOut);
  const [isSigningOut, setIsSigningOut] = useState(false);

  const handleLogout = async () => {
    setIsSigningOut(true);
    try {
      await signOut();
      router.replace("/login");
    } finally {
      setIsSigningOut(false);
    }
  };

  return (
    <SafeAreaView style={profilePageStyles.container} edges={["top", "bottom"]}>
      <View style={profilePageStyles.headerRow}>
        <Pressable onPress={() => router.back()} hitSlop={10}>
          <Ionicons
            name="chevron-back"
            size={22}
            color={AppColors.primaryColor}
          />
        </Pressable>
        <Text style={profilePageStyles.headerTitle}>Profile</Text>
        <View style={profilePageStyles.headerSideSlot} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={profilePageStyles.scrollContent}
      >
        <Text style={profilePageStyles.sectionTitle}>Account Setting</Text>
        {ACCOUNT_ROWS.map((row) => (
          <Pressable
            key={row.key}
            style={profilePageStyles.row}
            onPress={
              row.key === "edit-profile"
                ? () => router.push("/edit-profile")
                : undefined
            }
          >
            <Ionicons name={row.icon} size={20} color={AppColors.primaryColor} />
            <Text style={profilePageStyles.rowLabel}>{row.label}</Text>
            <Ionicons
              name="chevron-forward"
              size={18}
              color={AppColors.grayColor}
            />
          </Pressable>
        ))}

        <Text style={profilePageStyles.sectionTitle}>Legal</Text>
        {LEGAL_ROWS.map((row) => (
          <Pressable key={row.key} style={profilePageStyles.row}>
            <Ionicons name={row.icon} size={20} color={AppColors.primaryColor} />
            <Text style={profilePageStyles.rowLabel}>{row.label}</Text>
            <Ionicons
              name="open-outline"
              size={16}
              color={AppColors.grayColor}
            />
          </Pressable>
        ))}

        <Pressable
          style={profilePageStyles.logoutButton}
          onPress={handleLogout}
          disabled={isSigningOut}
        >
          {isSigningOut ? (
            <ActivityIndicator color={AppColors.primaryColor} />
          ) : (
            <Text style={profilePageStyles.logoutText}>Logout</Text>
          )}
        </Pressable>

        <Text style={profilePageStyles.versionText}>Version 1.0.0</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfilePage;
