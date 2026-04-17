"use client";

import { useSession } from "@/context/SessionContext";
import { Timer } from "lucide-react";

export default function SessionTimerBadge() {
    const { timeLeft } = useSession();

    const formatTime = (seconds: number) => {
        if (seconds < 0) return "0:00";
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

    return (
        <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
            <Timer size={14} className={timeLeft < 300 ? "text-red-500 animate-pulse" : "text-slate-400"} />
            <span className={`text-[11px] font-bold tabular-nums ${timeLeft < 300 ? "text-red-500" : "text-slate-500"}`}>
                Session: {formatTime(timeLeft)}
            </span>
        </div>
    );
}
