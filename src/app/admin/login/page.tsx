"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { SceneCanvas } from "@/components/3d/SceneCanvas";

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
        <main className="relative min-h-screen w-full bg-background flex items-center justify-center p-6">
            {/* Background 3D */}
            <SceneCanvas />

            <div className="relative z-10 w-full max-w-md">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-morphism rounded-[40px] p-10 border-white/10 shadow-2xl"
                >
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-black tracking-tighter mb-2">
                            <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-500">
                                Admin
                            </span>
                            <span className="text-primary ml-2">Login</span>
                        </h1>
                        <p className="text-gray-500 text-sm uppercase tracking-widest font-bold">
                            R:new Design Studio
                        </p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1">
                                Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-primary transition-all text-white"
                                placeholder="admin@rnew.design"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1">
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-primary transition-all text-white"
                                placeholder="••••••••"
                            />
                        </div>

                        {error && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-red-400 text-sm text-center font-medium"
                            >
                                {error}
                            </motion.p>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-5 bg-white text-black font-black rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:hover:scale-100"
                        >
                            {loading ? "Authenticating..." : "Enter Studio"}
                        </button>
                    </form>
                </motion.div>

                <div className="mt-8 text-center">
                    <button
                        onClick={() => router.push("/")}
                        className="text-gray-500 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        </main>
    );
}
