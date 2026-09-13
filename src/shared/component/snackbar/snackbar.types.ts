export enum SnackbarType {
    Message = "message",
    Success = "success",
    Error = "error",
}

export interface SnackbarState {
    visible: boolean;
    message: string;
    type: SnackbarType;
    duration: number;
    requestId: number;
    show: (message: string, type: SnackbarType, duration: number) => void;
    hide: () => void;
}
