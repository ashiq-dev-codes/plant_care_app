import Snackbar from "@/src/shared/component/snackbar/Snackbar";
import { isErrorWithCode, statusCodes } from "@react-native-google-signin/google-signin";
import { FirebaseError } from "firebase/app";

const DEFAULT_MESSAGE = "Something went wrong!";

const FIREBASE_AUTH_MESSAGES: Partial<Record<string, string>> = {
    "auth/invalid-credential": "Sign-in failed. Please try again.",
    "auth/network-request-failed":
        "Could not connect to the server. Please check your network.",
    "auth/too-many-requests": "Too many attempts. Please try again later.",
    "auth/user-disabled": "This account has been disabled.",
};

const GOOGLE_SIGN_IN_MESSAGES: Partial<Record<string, string>> = {
    [statusCodes.SIGN_IN_CANCELLED]: "Sign-in was cancelled.",
    [statusCodes.IN_PROGRESS]: "Sign-in is already in progress.",
    [statusCodes.PLAY_SERVICES_NOT_AVAILABLE]:
        "Google Play Services is not available on this device.",
};

const getErrorMessage = (
    error: unknown,
    defaultMessage: string = DEFAULT_MESSAGE,
): string => {
    if (error instanceof FirebaseError) {
        return FIREBASE_AUTH_MESSAGES[error.code] ?? error.message;
    }
    if (isErrorWithCode(error)) {
        return GOOGLE_SIGN_IN_MESSAGES[error.code] ?? error.message ?? defaultMessage;
    }
    if (error instanceof Error) {
        return error.message;
    }
    if (typeof error === "string") {
        return error;
    }
    return defaultMessage;
};

const handleError = (error: unknown, defaultMessage?: string): string => {
    const message = getErrorMessage(error, defaultMessage);
    Snackbar.error(message);
    return message;
};

const ErrorHandler = { getErrorMessage, handleError };

export default ErrorHandler;
