import { useAuthStore } from "@/src/feature/auth/presentation/store/useAuth.store";
import AppColors from "@/src/shared/theme/appColors";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import editProfilePageStyles from "../style/editProfilePage.styles";

const EditProfilePage = () => {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const [fullName, setFullName] = useState(user?.displayName ?? "");

  return (
    <SafeAreaView
      style={editProfilePageStyles.container}
      edges={["top", "bottom"]}
    >
      <View style={editProfilePageStyles.headerRow}>
        <Pressable onPress={() => router.back()} hitSlop={10}>
          <Ionicons
            name="chevron-back"
            size={22}
            color={AppColors.primaryColor}
          />
        </Pressable>
        <Text style={editProfilePageStyles.headerTitle}>Edit Profile</Text>
        <View style={editProfilePageStyles.headerSideSlot} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={editProfilePageStyles.content}
        keyboardShouldPersistTaps="handled"
      >
        <View style={editProfilePageStyles.avatarWrapper}>
          {user?.photoURL ? (
            <Image
              source={{ uri: user.photoURL }}
              style={editProfilePageStyles.avatar}
            />
          ) : (
            <View
              style={[
                editProfilePageStyles.avatar,
                editProfilePageStyles.avatarPlaceholder,
              ]}
            >
              <Ionicons name="person" size={40} color={AppColors.grayColor} />
            </View>
          )}
          <Pressable style={editProfilePageStyles.avatarEditBadge}>
            <Ionicons name="camera" size={14} color={AppColors.whiteColor} />
          </Pressable>
        </View>

        <Text style={editProfilePageStyles.fieldLabel}>Full Name</Text>
        <View style={editProfilePageStyles.inputWrapper}>
          <TextInput
            value={fullName}
            onChangeText={setFullName}
            placeholder="Enter your name"
            placeholderTextColor={AppColors.grayColor}
            style={editProfilePageStyles.input}
          />
        </View>

        <Text style={editProfilePageStyles.fieldLabel}>Email Address</Text>
        <View
          style={[
            editProfilePageStyles.inputWrapper,
            editProfilePageStyles.inputWrapperDisabled,
          ]}
        >
          <TextInput
            value={user?.email ?? ""}
            editable={false}
            style={[editProfilePageStyles.input, editProfilePageStyles.inputDisabled]}
          />
        </View>

        <Pressable
          style={editProfilePageStyles.saveButton}
          onPress={() => router.back()}
        >
          <Text style={editProfilePageStyles.saveButtonText}>Save Changes</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfilePage;
