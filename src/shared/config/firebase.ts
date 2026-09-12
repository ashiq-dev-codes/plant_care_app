import AsyncStorage from "@react-native-async-storage/async-storage";
import { FirebaseApp, getApp, getApps, initializeApp } from "firebase/app";
// firebase/auth's package.json resolves "types" ahead of its "react-native"
// condition, so getReactNativePersistence is invisible to tsc even though it
// exists at runtime (confirmed in node_modules/@firebase/auth/dist/rn/index.js).
/* eslint-disable import/no-duplicates */
import { Auth, getAuth, initializeAuth } from "firebase/auth";
// @ts-expect-error — see comment above
import { getReactNativePersistence } from "firebase/auth";
/* eslint-enable import/no-duplicates */

const firebaseConfig = {
    apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
};

// Lazy on purpose: constructing Auth throws immediately (auth/invalid-api-key)
// when EXPO_PUBLIC_FIREBASE_* env vars aren't set yet, which would otherwise
// crash the whole app at import time — before any screen even needs auth.
let firebaseApp: FirebaseApp | undefined;
let firebaseAuth: Auth | undefined;

const getFirebaseApp = (): FirebaseApp => {
    if (!firebaseApp) {
        firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
    }
    return firebaseApp;
};

export const getFirebaseAuth = (): Auth => {
    if (!firebaseAuth) {
        const app = getFirebaseApp();
        try {
            firebaseAuth = initializeAuth(app, {
                persistence: getReactNativePersistence(AsyncStorage),
            });
        } catch {
            // initializeAuth may only be called once per app — Fast Refresh
            // re-evaluates this module, so fall back to the existing instance.
            firebaseAuth = getAuth(app);
        }
    }
    return firebaseAuth;
};
