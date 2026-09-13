import type { User } from "@firebase/auth";

export enum AuthStatus {
    Idle = "idle",
    Loading = "loading",
    Success = "success",
    Failure = "failure",
}

export interface AuthState {
    status: AuthStatus;
    errorMessage: string | null;
    user: User | null;
    // True until Firebase resolves whether a session was persisted from a
    // previous launch — the splash screen waits on this before deciding
    // whether to route to /home or /login.
    isInitializing: boolean;
    signInWithGoogle: () => Promise<void>;
    signOut: () => Promise<void>;
    // Starts the auth-state listener (safe to call more than once — only the
    // first call attaches it) and returns an unsubscribe function.
    initialize: () => () => void;
}
