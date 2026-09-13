import { create } from "zustand";
import { SnackbarState, SnackbarType } from "./snackbar.types";

export const useSnackbarStore = create<SnackbarState>((set) => ({
    visible: false,
    message: "",
    type: SnackbarType.Message,
    duration: 3000,
    requestId: 0,

    show: (message, type, duration) =>
        set((state) => ({
            visible: true,
            message,
            type,
            duration,
            requestId: state.requestId + 1,
        })),

    hide: () => set({ visible: false }),
}));
