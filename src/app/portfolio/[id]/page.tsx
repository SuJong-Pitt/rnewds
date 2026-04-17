"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Loader2, Calendar, Tag, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LuxuryKakaoIcon } from "@/components/ui/LuxuryKakaoIcon";

export default function ProjectDetail() {
    const { id } = useParams();
    const router = useRouter();
    const [project, setProject] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const res = await fetch(`/api/projects?id=${id}`);
                if (!res.ok) throw new Error("Fetch failed");
                const data = await res.json();
                if (data && !data.error) {
                    setProject(Array.isArray(data) ? data[0] : data);
                }
            } catch (error) {
                console.error("Fetch project error:", error);
            }
            setLoading(false);
        };

        if (id) fetchProject();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
            </div>
        );
    }

    if (!project) {
        return (
            <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center p-6">
                <h1 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Project Not Found</h1>
                <p className="text-slate-500 mb-8 font-medium">존재하지 않거나 삭제된 프로젝트입니다. 🐟</p>
                <Button
                    onClick={() => router.push("/")}
                    className="rounded-xl px-8 h-12 btn-gradient border-none font-bold"
                >
                    Back to Home
                </Button>
            </div>
        );
    }

    return (
        <main className="relative min-h-screen bg-white text-slate-900 overflow-x-hidden selection:bg-blue-100 selection:text-blue-900">
            <div className="relative z-10">
                {/* Navigation */}
                <nav className="p-8 max-w-7xl mx-auto flex items-center justify-between">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors group"
                    >
                        <ArrowLeft className="group-hover:-translate-x-2 transition-transform" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] font-mono">Close Project</span>
                    </button>

                    <Image src="/images/icons/logo.svg" alt="R:new Logo" width={36} height={36} className="rounded-xl shadow-lg" priority />
                </nav>

                {/* Hero Section */}
                <section className="container mx-auto px-6 pt-10 pb-32 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-20 items-center mb-10">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <span className="px-4 py-1.5 bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-full">
                                    {project.category_name || "Featured Masterpiece"}
                                </span>
                                <span className="text-slate-400 font-bold text-xs">/ {new Date(project.created_at).getFullYear()}</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.1] mb-8 text-slate-900 text-balance">
                                {project.title}
                            </h1>
                            <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium text-balance">
                                {project.description}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="aspect-[4/3] rounded-[48px] overflow-hidden border border-slate-100 bg-slate-50 shadow-[0_40px_100px_rgba(0,0,0,0.05)]">
                                <img
                                    src={project.image_url}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-50/50 rounded-full blur-[80px] -z-10"></div>
                        </motion.div>
                    </div>

                    <div className="h-[1px] w-full bg-slate-100 mb-20 mt-20"></div>

                    {/* Meta Data Grid */}
                    <div className="grid md:grid-cols-2 gap-16 md:gap-32">
                        <div className="space-y-8">
                            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.3em] block">The Brief</span>
                            <div className="space-y-4">
                                <p className="text-slate-600 font-medium leading-[1.6] text-lg md:text-xl font-pretty italic">
                                    "데이터의 설계로 비즈니스의 가치를 증명합니다."
                                </p>
                                <p className="text-slate-500 leading-relaxed">
                                    R:new Design Studio만의 시각적 임팩트를 통해 고객의 브랜드 가치를 재정의하고,
                                    사용자 경험의 최적화를 통해 비즈니스의 실질적인 성장을 이끌어낸 프로젝트입니다.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.3em] block">Core Expertise</span>
                            <ul className="grid grid-cols-1 gap-4">
                                {[
                                    { label: "Visual Strategy", desc: "Brand identity and creative direction" },
                                    { label: "Web Architecture", desc: "Performance-focused development" },
                                    { label: "UX/UI Optimization", desc: "Conversion-centric interface design" }
                                ].map((service, index) => (
                                    <li key={index} className="group cursor-default">
                                        <div className="flex items-start gap-4 p-2 -m-2 rounded-xl hover:bg-slate-50 transition-colors">
                                            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 group-hover:scale-110 transition-transform">
                                                <Tag size={18} />
                                            </div>
                                            <div>
                                                <div className="text-slate-900 font-bold">{service.label}</div>
                                                <div className="text-slate-400 text-xs font-medium uppercase tracking-wider">{service.desc}</div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Full Width Image Display */}
                <section className="py-20 px-6 bg-slate-50">
                    <div className="container mx-auto max-w-7xl">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="rounded-[64px] overflow-hidden border border-slate-200 p-4 bg-white shadow-xl"
                        >
                            <img src={project.image_url} alt="Project High-res View" className="w-full rounded-[48px] object-cover" />
                        </motion.div>
                    </div>
                </section>

                {/* Luxurious Final CTA */}
                <section className="py-24 md:py-32 px-6 relative z-10">
                    <div className="container mx-auto max-w-5xl">
                        <motion.div 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="relative rounded-[40px] md:rounded-[64px] bg-slate-950 overflow-hidden px-6 py-20 md:py-32 text-center shadow-2xl ring-1 ring-slate-900/5 group"
                        >
                            {/* Premium Background Effects */}
                            <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.04] mix-blend-overlay"></div>
                            <div className="absolute top-0 right-0 w-[150%] h-[500px] bg-yellow-400/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none group-hover:bg-yellow-400/15 transition-colors duration-1000"></div>
                            <div className="absolute bottom-0 left-0 w-[150%] h-[400px] bg-blue-600/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none group-hover:bg-blue-600/15 transition-colors duration-1000"></div>

                            <div className="relative z-10 flex flex-col items-center">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
                                    className="mb-10 relative"
                                >
                                    {/* Glowing aura behind icon */}
                                    <div className="absolute inset-0 bg-yellow-400/20 blur-[50px] rounded-full transform scale-150"></div>
                                    <LuxuryKakaoIcon size={100} className="md:w-[130px] md:h-[130px] relative z-10 drop-shadow-[0_20px_40px_rgba(250,204,21,0.2)]" />
                                </motion.div>

                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, duration: 0.8 }}
                                    className="text-3xl md:text-5xl lg:text-6xl font-black mb-12 tracking-tight text-white leading-[1.3] text-balance break-keep"
                                >
                                    당신의 가치를 완성할 <br className="hidden md:block" />
                                    <span className="relative inline-block mt-2">
                                        <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200">
                                            마지막 퍼즐.
                                        </span>
                                        <span className="absolute bottom-1 left-0 w-full h-[30%] bg-yellow-400/20 blur-md -z-10"></span>
                                    </span>
                                </motion.h2>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3, duration: 0.8 }}
                                >
                                    <a
                                        href="https://pf.kakao.com/_xaxgJdX/chat"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/btn relative inline-flex items-center justify-between gap-4 sm:gap-6 md:gap-10 px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 bg-white text-slate-950 rounded-[32px] hover:bg-yellow-400 hover:scale-[1.02] hover:shadow-[0_20px_40px_-10px_rgba(250,204,21,0.4)] transition-all duration-500 overflow-hidden will-change-transform"
                                    >
                                        {/* Sweeping light effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-[150%] skew-x-[-45deg] group-hover/btn:translate-x-[150%] transition-transform duration-1000 ease-in-out"></div>
                                        
                                        <span className="text-[16px] sm:text-[17px] md:text-[22px] font-black tracking-tight relative z-10 whitespace-nowrap">
                                            프로젝트 시작하기
                                        </span>
                                        
                                        <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-slate-100 group-hover/btn:bg-white/20 flex shrink-0 items-center justify-center transition-all duration-300 group-hover/btn:translate-x-2 relative z-10 shadow-inner">
                                            <ArrowRight size={20} strokeWidth={2.5} className="md:w-6 md:h-6 opacity-80 group-hover/btn:opacity-100 transition-opacity" />
                                        </div>
                                    </a>
                                </motion.div>

                                <motion.p 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, duration: 1 }}
                                    className="mt-20 text-slate-400/50 text-[10px] sm:text-xs font-bold tracking-[0.4em] uppercase"
                                >
                                    Consultation available 24/7 via KakaoTalk
                                </motion.p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Simple Footer Overlay */}
                <footer className="py-20 border-t border-slate-100 text-center text-slate-400 text-[10px] tracking-[0.4em] uppercase font-bold bg-white">
                    &copy; 2024 R:new Design Studio. All Rights Reserved.
                </footer>
            </div>
        </main>
    );
}
