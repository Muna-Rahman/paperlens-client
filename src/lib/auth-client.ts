import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    // Explicitly target the full path where your Express server mounts the handler
    baseURL: `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/auth`
});

// Cleanly export the hooks from the correct React wrapper
export const { useSession, signIn, signUp, signOut } = authClient;