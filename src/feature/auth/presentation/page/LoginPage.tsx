import AppImages from "@/src/shared/path/appImages";
import AppColors from "@/src/shared/theme/appColors";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
    Image,
    Pressable,
    ScrollView,
    Text,
    TextInput,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import loginPageStyles from "../style/loginPage.styles";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <SafeAreaView style={loginPageStyles.container} edges={["top", "bottom"]}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={loginPageStyles.scrollContent}
            >
                <Text style={loginPageStyles.heading}>Hello Again!</Text>
                <Text style={loginPageStyles.subHeading}>
                    Welcome Back You&apos;ve Been Missed!
                </Text>

                <View style={loginPageStyles.form}>
                    <Text style={loginPageStyles.fieldLabel}>Email Address</Text>
                    <View style={loginPageStyles.inputWrapper}>
                        <TextInput
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Enter your email"
                            placeholderTextColor={AppColors.grayColor}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            style={loginPageStyles.input}
                        />
                    </View>

                    <View style={loginPageStyles.passwordField}>
                        <Text style={loginPageStyles.fieldLabel}>Password</Text>
                        <View style={loginPageStyles.inputWrapper}>
                            <TextInput
                                value={password}
                                onChangeText={setPassword}
                                placeholder="Enter your password"
                                placeholderTextColor={AppColors.grayColor}
                                secureTextEntry={!isPasswordVisible}
                                style={loginPageStyles.input}
                            />
                            <Pressable
                                onPress={() => setIsPasswordVisible((prev) => !prev)}
                                hitSlop={10}
                            >
                                <Ionicons
                                    name={isPasswordVisible ? "eye-outline" : "eye-off-outline"}
                                    size={20}
                                    color={AppColors.grayColor}
                                />
                            </Pressable>
                        </View>
                    </View>

                    <Text style={loginPageStyles.recoveryPassword}>Recovery Password</Text>

                    <Pressable style={loginPageStyles.signInButton}>
                        <Text style={loginPageStyles.signInButtonText}>Sign In</Text>
                    </Pressable>

                    <Pressable style={loginPageStyles.googleButton}>
                        <Image source={AppImages.googleLogo} style={loginPageStyles.googleIcon} />
                        <Text style={loginPageStyles.googleButtonText}>
                            Sign in with google
                        </Text>
                    </Pressable>
                </View>

                <View style={loginPageStyles.footer}>
                    <Text style={loginPageStyles.footerText}>
                        Don&apos;t Have An Account?{" "}
                        <Text style={loginPageStyles.footerLink}>Sign Up For Free</Text>
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default LoginPage;
