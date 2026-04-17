"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";

interface SessionContextType {
    timeLeft: number;
    resetTimer: () => void;
    logout: () => void;
    timeoutSeconds: number;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export function SessionProvider({ 
    children, 
    timeoutSeconds = 3600 
}: { 
    children: React.ReactNode;
    timeoutSeconds?: number;
}) {
    const [timeLeft, setTimeLeft] = useState(timeoutSeconds);
    const timeLeftRef = useRef(timeoutSeconds);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const router = useRouter();

    const logout = useCallback(async () => {
        try {
            await fetch("/api/auth/logout", { method: "POST" });
            router.push("/admin/login");
        } catch (error) {
            console.error("Logout error:", error);
            router.push("/admin/login");
        }
    }, [router]);

    const resetTimer = useCallback(() => {
        setTimeLeft(timeoutSeconds);
        timeLeftRef.current = timeoutSeconds;
    }, [timeoutSeconds]);

    useEffect(() => {
        const events = ["mousemove", "mousedown", "keydown", "scroll", "touchstart"];
        
        if (typeof window !== "undefined" && window.location.pathname === "/admin/login") {
            return;
        }

        const handleActivity = () => {
            // Only reset if we are not in the last 5 minutes (optional, but usually fine to reset anytime)
            resetTimer();
        };

        events.forEach(event => window.addEventListener(event, handleActivity));

        timerRef.current = setInterval(() => {
            timeLeftRef.current -= 1;
            setTimeLeft(timeLeftRef.current);

            if (timeLeftRef.current <= 0) {
                if (timerRef.current) clearInterval(timerRef.current);
                logout();
            }
        }, 1000);

        return () => {
            events.forEach(event => window.removeEventListener(event, handleActivity));
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [timeoutSeconds, resetTimer, logout]);

    return (
        <SessionContext.Provider value={{ timeLeft, resetTimer, logout, timeoutSeconds }}>
            {children}
        </SessionContext.Provider>
    );
}

export function useSession() {
    const context = useContext(SessionContext);
    if (context === undefined) {
        throw new Error("useSession must be used within a SessionProvider");
    }
    return context;
}
