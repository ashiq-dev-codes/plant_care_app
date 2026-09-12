import { SnackbarType } from "./snackbar.types";
import { useSnackbarStore } from "./useSnackbar.store";

const DEFAULT_DURATION = 3000;
const MESSAGE_DURATION = 5000;
const ERROR_DURATION = 6000;

// Imperative snackbar API — callable from anywhere (stores, utils, event
// handlers) without needing a React context, unlike Flutter's
// ScaffoldMessenger.of(context) equivalent.
const Snackbar = {
    show: (
        message: string,
        type: SnackbarType = SnackbarType.Message,
        duration: number = DEFAULT_DURATION,
    ) => useSnackbarStore.getState().show(message, type, duration),

    message: (message: string) =>
        useSnackbarStore
            .getState()
            .show(message, SnackbarType.Message, MESSAGE_DURATION),

    success: (message: string) =>
        useSnackbarStore
            .getState()
            .show(message, SnackbarType.Success, DEFAULT_DURATION),

    error: (message: string) =>
        useSnackbarStore
            .getState()
            .show(message, SnackbarType.Error, ERROR_DURATION),
};

export default Snackbar;
