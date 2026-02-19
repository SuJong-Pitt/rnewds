"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { motion } from "framer-motion";
import { ArrowLeft, Loader2, Calendar, Tag, ExternalLink } from "lucide-react";
import { SceneCanvas } from "@/components/3d/SceneCanvas";

export default function ProjectDetail() {
    const { id } = useParams();
    const router = useRouter();
    const [project, setProject] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProject = async () => {
            const { data, error } = await supabase
                .from("projects")
                .select("*")
                .eq("id", id)
                .single();

            if (!error && data) {
                setProject(data);
            }
            setLoading(false);
        };

        if (id) fetchProject();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <Loader2 className="w-12 h-12 text-primary animate-spin" />
            </div>
        );
    }

    if (!project) {
        return (
            <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center p-6">
                <h1 className="text-4xl font-black mb-4">Project Not Found</h1>
                <p className="text-gray-500 mb-8">존재하지 않거나 삭제된 프로젝트입니다. 🐟</p>
                <button
                    onClick={() => router.push("/")}
                    className="px-8 py-3 bg-primary text-black font-bold rounded-full"
                >
                    Back to Home
                </button>
            </div>
        );
    }

    return (
        <main className="relative min-h-screen bg-background text-white overflow-x-hidden">
            {/* 3D Background - Subtle version */}
            <div className="fixed inset-0 opacity-30 pointer-events-none">
                <SceneCanvas />
            </div>

            <div className="relative z-10">
                {/* Navigation */}
                <nav className="p-8">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                    >
                        <ArrowLeft className="group-hover:-translate-x-2 transition-transform" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em]">Close Project</span>
                    </button>
                </nav>

                {/* Hero Section */}
                <section className="container mx-auto px-6 pt-10 pb-32">
                    <div className="grid lg:grid-cols-2 gap-20 items-end mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <span className="px-4 py-1.5 bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest rounded-full">
                                    Featured Masterpiece
                                </span>
                                <span className="text-gray-600 font-mono text-xs">/ {new Date(project.created_at).getFullYear()}</span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-10">
                                {project.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-xl">
                                {project.description}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative"
                        >
                            <div className="aspect-[4/3] rounded-[60px] overflow-hidden glass-morphism border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
                                <img
                                    src={project.image_url}
                                    alt={project.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2000ms]"
                                />
                            </div>
                            {/* Floating highlight */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px]"></div>
                        </motion.div>
                    </div>

                    <div className="h-[1px] w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent mb-20"></div>

                    {/* Detailed Content Grid (Customizable further) */}
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block">The Brief</span>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                데이터의 설계로 비즈니스의 가치를 증명합니다. <br />
                                R:new Design Studio만의 시각적 임팩트를 통해 고객의 전환율을 극대화한 사례입니다.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block">Services Provided</span>
                            <ul className="text-white text-sm font-bold space-y-2">
                                <li className="flex items-center gap-2"><Tag size={12} className="text-primary" /> Visual Strategy</li>
                                <li className="flex items-center gap-2"><Tag size={12} className="text-primary" /> 3D Rendering</li>
                                <li className="flex items-center gap-2"><Tag size={12} className="text-primary" /> UI/UX Design</li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block">Project Timeline</span>
                            <div className="flex items-center gap-2 text-white font-bold">
                                <Calendar size={16} className="text-gray-500" />
                                <span>Completed in {new Date(project.created_at).toLocaleDateString()}</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* High-res Image Display */}
                <section className="py-20 px-6">
                    <div className="container mx-auto">
                        <div className="rounded-[80px] overflow-hidden glass-morphism border-white/5 p-4">
                            <img src={project.image_url} alt="Detail" className="w-full rounded-[60px]" />
                        </div>
                    </div>
                </section>

                {/* Footer Link */}
                <section className="py-40 text-center">
                    <h2 className="text-4xl font-bold mb-10">당신의 프로젝트도 <br /> 명작으로 바뀔 수 있습니다.</h2>
                    <button
                        onClick={() => router.push("/#contact")}
                        className="px-12 py-5 bg-white text-black font-black rounded-full hover:scale-110 active:scale-95 transition-all flex items-center gap-3 mx-auto"
                    >
                        Start Your Project <ExternalLink size={18} />
                    </button>
                </section>
            </div>
        </main>
    );
}
