export enum AuthStatus {
    Idle = "idle",
    Loading = "loading",
    Success = "success",
    Failure = "failure",
}

export interface AuthState {
    status: AuthStatus;
    errorMessage: string | null;
    signInWithGoogle: () => Promise<void>;
    signOut: () => Promise<void>;
}
