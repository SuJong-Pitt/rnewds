"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Lock, ArrowLeft, Mail, Key } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError(error.message);
            setLoading(false);
        } else {
            router.push("/admin/dashboard");
        }
    };

    return (
        <main className="relative min-h-screen w-full bg-slate-50 flex items-center justify-center p-6 selection:bg-blue-100">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.08),transparent_70%)] -z-10" />

            <div className="relative z-10 w-full max-w-md">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-[40px] p-10 border border-slate-200 shadow-2xl shadow-slate-200/50"
                >
                    <div className="text-center mb-10">
                        <div className="w-16 h-16 bg-blue-600 rounded-3xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-blue-600/20">
                            <Lock size={32} />
                        </div>
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">
                            Studio Admin
                        </h1>
                        <p className="text-slate-400 text-xs uppercase tracking-widest font-bold">
                            R:new Design Studio
                        </p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
                                Email
                            </label>
                            <div className="relative group">
                                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-500 transition-colors">
                                    <Mail size={20} />
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full pl-14 pr-6 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-900 font-medium"
                                    placeholder="admin@rnew.design"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">
                                Password
                            </label>
                            <div className="relative group">
                                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-500 transition-colors">
                                    <Key size={20} />
                                </div>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full pl-14 pr-6 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all text-slate-900 font-medium"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        {error && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-red-500 text-sm text-center font-bold"
                            >
                                {error}
                            </motion.p>
                        )}

                        <Button
                            type="submit"
                            disabled={loading}
                            className="w-full py-8 btn-gradient text-white font-bold rounded-2xl shadow-lg shadow-blue-600/20 disabled:opacity-50 h-auto text-lg border-none"
                        >
                            {loading ? "Authenticating..." : "Studio 접속하기"}
                        </Button>
                    </form>
                </motion.div>

                <div className="mt-10 text-center">
                    <button
                        onClick={() => router.push("/")}
                        className="flex items-center justify-center gap-2 text-slate-400 text-sm font-bold tracking-tight hover:text-slate-900 transition-colors mx-auto"
                    >
                        <ArrowLeft size={18} /> Back to Home
                    </button>
                </div>
            </div>
        </main>
    );
}
