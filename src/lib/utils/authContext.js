"use client";
import { useContext, createContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const calgaryToken = process.env.NEXT_PUBLIC_CALGARY_TOKEN;
    const parksUrl = process.env.NEXT_PUBLIC_PARKS_URL;

    return (
        <AuthContext.Provider value={{ calgaryToken, parksUrl }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext);
}