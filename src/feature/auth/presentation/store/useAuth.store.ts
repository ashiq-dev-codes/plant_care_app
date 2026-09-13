import { getFirebaseAuth } from "@/src/shared/config/firebase";
import ErrorHandler from "@/src/shared/utils/errorHandler";
import {
    GoogleSignin,
    isSuccessResponse,
} from "@react-native-google-signin/google-signin";
// Imported from "@firebase/auth" directly, not the "firebase/auth" umbrella
// re-export — see the comment in src/shared/config/firebase.ts for why.
import {
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithCredential,
    signOut as firebaseSignOut,
} from "@firebase/auth";
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

let isAuthListenerAttached = false;

export const useAuthStore = create<AuthState>((set) => ({
    status: AuthStatus.Idle,
    errorMessage: null,
    user: null,
    isInitializing: true,

    initialize: () => {
        if (isAuthListenerAttached) return () => {};
        isAuthListenerAttached = true;
        return onAuthStateChanged(getFirebaseAuth(), (user) => {
            set({
                user,
                isInitializing: false,
                status: user ? AuthStatus.Success : AuthStatus.Idle,
            });
        });
    },

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
                errorMessage: ErrorHandler.handleError(error, "Google sign-in failed"),
            });
        }
    },

    signOut: async () => {
        try {
            try {
                await GoogleSignin.signOut();
            } catch {
                // best-effort — there may be no active Google session to clear
            }
            await firebaseSignOut(getFirebaseAuth());
            set({ status: AuthStatus.Idle, errorMessage: null });
        } catch (error) {
            set({ errorMessage: ErrorHandler.handleError(error, "Sign-out failed") });
        }
    },
}));
