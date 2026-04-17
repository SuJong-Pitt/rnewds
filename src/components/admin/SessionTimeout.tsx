"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Timer, LogOut, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSession } from "@/context/SessionContext";

interface SessionTimeoutProps {
    countdownSeconds?: number; // When to show countdown (default 5 minutes)
}

export default function SessionTimeout({
    countdownSeconds = 300,
}: SessionTimeoutProps) {
    const { timeLeft, resetTimer, logout } = useSession();
    const [showCountdown, setShowCountdown] = useState(false);

    useEffect(() => {
        if (timeLeft <= countdownSeconds && timeLeft > 0) {
            setShowCountdown(true);
        } else {
            setShowCountdown(false);
        }
    }, [timeLeft, countdownSeconds]);

    // Format seconds into MM:SS
    const formatTime = (seconds: number) => {
        if (seconds < 0) return "0:00";
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

    return (
        <AnimatePresence>
            {showCountdown && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-6 bg-slate-900/40 backdrop-blur-md">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="bg-white max-w-md w-full rounded-[40px] p-10 border border-slate-200 shadow-2xl relative overflow-hidden"
                    >
                        {/* Background Decor */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-full -mr-16 -mt-16 z-0" />
                        
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-3xl flex items-center justify-center mb-6">
                                <Timer className="w-8 h-8" />
                            </div>

                            <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">
                                세션 만료 경고
                            </h3>
                            <p className="text-slate-500 mb-8 font-medium leading-relaxed">
                                장시간 활동이 없어 보안을 위해 곧 로그아웃됩니다. <br />
                                로그인을 유지하시겠습니까?
                            </p>

                            <div className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl mb-8 border border-slate-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                                    <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">남은 시간</span>
                                </div>
                                <span className={`text-4xl font-black tabular-nums transition-colors ${timeLeft < 60 ? 'text-red-600' : 'text-slate-900'}`}>
                                    {formatTime(timeLeft)}
                                </span>
                            </div>

                            <div className="flex flex-col gap-3">
                                <Button
                                    onClick={resetTimer}
                                    className="w-full py-7 text-lg font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-2xl shadow-lg shadow-blue-600/20 border-none h-auto flex items-center justify-center gap-2"
                                >
                                    <RefreshCcw size={20} />
                                    로그인 유지하기
                                </Button>
                                <Button
                                    variant="outline"
                                    onClick={logout}
                                    className="w-full py-7 text-lg font-bold text-slate-400 hover:text-red-600 hover:bg-red-50 border-slate-100 rounded-2xl h-auto flex items-center justify-center gap-2 transition-all"
                                >
                                    <LogOut size={20} />
                                    지금 로그아웃
                                </Button>
                            </div>
                        </div>

                        {/* Progress Bar at Bottom */}
                        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-slate-50">
                            <motion.div 
                                className={`h-full ${timeLeft < 60 ? 'bg-red-500' : 'bg-amber-500'}`}
                                initial={{ width: "100%" }}
                                animate={{ width: `${(Math.max(0, timeLeft) / countdownSeconds) * 100}%` }}
                                transition={{ duration: 1, ease: "linear" }}
                            />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
