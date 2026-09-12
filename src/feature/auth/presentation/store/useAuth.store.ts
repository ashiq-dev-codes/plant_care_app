import { getFirebaseAuth } from "@/src/shared/config/firebase";
import {
    GoogleSignin,
    isSuccessResponse,
} from "@react-native-google-signin/google-signin";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { create } from "zustand";
import { AuthState, AuthStatus } from "./useAuth.state";

let isGoogleSignInConfigured = false;
const configureGoogleSignIn = () => {
    if (isGoogleSignInConfigured) return;
    GoogleSignin.configure({
        webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
    });
    isGoogleSignInConfigured = true;
};

export const useAuthStore = create<AuthState>((set) => ({
    status: AuthStatus.Idle,
    errorMessage: null,

    signInWithGoogle: async () => {
        set({ status: AuthStatus.Loading, errorMessage: null });
        try {
            configureGoogleSignIn();
            await GoogleSignin.hasPlayServices();
            const response = await GoogleSignin.signIn();

            if (!isSuccessResponse(response)) {
                set({ status: AuthStatus.Idle });
                return;
            }

            const credential = GoogleAuthProvider.credential(response.data.idToken);
            await signInWithCredential(getFirebaseAuth(), credential);

            set({ status: AuthStatus.Success });
        } catch (error) {
            set({
                status: AuthStatus.Failure,
                errorMessage:
                    error instanceof Error ? error.message : "Google sign-in failed",
            });
        }
    },
}));
