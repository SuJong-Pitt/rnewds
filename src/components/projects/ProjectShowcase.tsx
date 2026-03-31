"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Sparkles, ArrowUpRight, ShieldCheck, Box } from "lucide-react";
import { useRouter } from "next/navigation";

export function ProjectShowcase() {
    const [projects, setProjects] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch("/api/projects");
                const data = await res.json();
                if (Array.isArray(data)) {
                    setProjects(data);
                }
            } catch (error) {
                console.error("Fetch projects error:", error);
            }
            setLoading(false);
        };

        fetchProjects();
    }, []);

    return (
        <section
            id="projects"
            className="py-32 md:py-64 px-6 bg-slate-50 overflow-hidden relative antialiased"
        >
            {/* 1. Atmospheric Branding Layer (Watermark & Grid) */}
            <div className="absolute inset-x-0 -top-20 -bottom-20 z-0 opacity-[0.03] select-none pointer-events-none flex items-center justify-center">
                <span className="text-[20vw] font-black text-slate-900 tracking-tighter leading-none italic uppercase">PORTFOLIO</span>
            </div>

            {/* Static Premium Depth (Replaced dynamic glow for performance) */}
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none z-0" />
            
            {/* Architectural Grid Texturing */}
            <div className="absolute inset-0 opacity-[0.05] select-none pointer-events-none antialiased"
                style={{ backgroundImage: 'linear-gradient(#2563eb 0.5px, transparent 0.5px), linear-gradient(90deg, #2563eb 0.5px, transparent 0.5px)', backgroundSize: '120px 120px' }}></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 md:mb-40 gap-12">
                    <div className="max-w-3xl space-y-12">
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/50 backdrop-blur-xl border border-blue-100/50 text-blue-600 shadow-[0_10px_30px_rgba(37,99,235,0.05)]"
                            >
                                <Sparkles size={16} className="text-blue-500" />
                                <span className="font-bold text-[11px] md:text-xs uppercase tracking-[0.5em] pl-1">Case Study Hub</span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="text-3xl md:text-5xl lg:text-[3.6rem] font-heading font-black text-slate-950 tracking-[-0.05em] leading-[1.1] antialiased"
                            >
                                <span className="block mb-2 text-transparent bg-clip-text bg-gradient-to-br from-slate-950 via-slate-800 to-slate-950">최상의 결과물로</span>
                                <span className="relative inline-block italic">
                                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-700 bg-[length:200%_auto] animate-gradient-x px-1">가치를 증명</span>
                                    {/* Sophisticated Architectural Underglow */}
                                    <div className="absolute -bottom-3 left-0 w-full h-[10px] bg-blue-500/10 blur-[4px] rounded-full" />
                                    <div className="absolute -bottom-3 left-0 w-full h-[4px] bg-gradient-to-r from-blue-400 via-indigo-400 to-transparent rounded-full" />
                                </span>
                                <span className="ml-2">합니다.</span>
                            </motion.h2>
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-slate-500 max-w-sm text-lg md:text-xl font-light leading-relaxed tracking-tight break-keep border-l-4 border-blue-500/20 pl-10 mb-6"
                    >
                        단순한 포트폴리오를 넘어 <span className="text-slate-900 font-medium">비즈니스 성장을 견인</span>한 <br className="hidden md:block" />
                        R:new Design Studio의 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-bold italic">마스터피스</span>입니다.
                    </motion.div>
                </div>

                {loading ? (
                    <div className="flex justify-center py-40">
                        <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
                        <AnimatePresence>
                            {projects.length > 0 ? (
                                projects.map((project, index) => (
                                    <motion.div
                                        key={project.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.05 }}
                                        viewport={{ once: true }}
                                        onClick={() => router.push(`/projects/${project.id}`)}
                                        className="group cursor-pointer"
                                    >
                                        <div className="relative aspect-square md:aspect-[3/4] overflow-hidden rounded-[50px] bg-slate-100 border border-slate-200/50 transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.02)] group-hover:shadow-[0_40px_120px_rgba(37,99,235,0.15)]">
                                            <img
                                                src={project.image_url}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-700"></div>

                                            <div className="absolute bottom-12 left-12 right-12 z-10 transform group-hover:-translate-y-2 transition-transform duration-700">
                                                <div className="flex items-center justify-between mb-8">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-2.5 h-2.5 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
                                                        <span className="text-[11px] font-black text-blue-400 tracking-[0.5em] uppercase">
                                                            Premium Archive
                                                        </span>
                                                    </div>
                                                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-700 shadow-xl">
                                                        <ArrowUpRight className="text-white" size={28} />
                                                    </div>
                                                </div>
                                                <h3 className="text-4xl font-black text-white mb-4 tracking-tighter leading-tight">
                                                    {project.title}
                                                </h3>
                                                <p className="text-lg text-slate-300 line-clamp-2 leading-relaxed font-light tracking-tight opacity-0 group-hover:opacity-100 transition-all duration-700 break-keep">
                                                    {project.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            ) : (
                                <div className="col-span-full p-20 md:p-40 rounded-[80px] md:rounded-[100px] border border-slate-200/50 bg-white/40 backdrop-blur-3xl flex flex-col items-center justify-center text-center relative overflow-hidden shadow-[0_60px_150px_rgba(0,0,0,0.04)]">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] via-transparent to-indigo-500/[0.02]"></div>

                                    {/* Architectural Markers */}
                                    <div className="absolute top-12 left-1/2 -translate-x-1/2 flex items-center gap-8 opacity-20 pointer-events-none select-none">
                                        <span className="text-[10px] font-mono tracking-[1em] uppercase">GALLERY_01</span>
                                        <div className="w-20 h-px bg-slate-900"></div>
                                        <span className="text-[10px] font-mono tracking-[1em] uppercase">ARCHITECTURE_VAULT</span>
                                    </div>

                                    <div className="relative mb-16">
                                        <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-[60px] scale-150"></div>
                                        <div className="relative w-32 h-32 md:w-48 md:h-48 bg-slate-950 rounded-[50px] flex items-center justify-center shadow-[0_40px_80px_rgba(0,0,0,0.5)] ring-1 ring-white/20">
                                            <Box className="text-blue-500 w-16 h-16 md:w-24 md:h-24" strokeWidth={1} />
                                            <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/20">
                                                <ShieldCheck className="text-blue-400 w-6 h-6" />
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="text-4xl md:text-7xl font-black mb-10 text-slate-950 tracking-tighter leading-tight relative">
                                        Project Vault <br />
                                        <span className="text-[0.4em] font-mono font-medium tracking-[0.8em] text-blue-600 block mt-4 italic">IN PROGRESS</span>
                                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-blue-600 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.3)]"></div>
                                    </h3>

                                    <p className="text-slate-500 max-w-2xl mx-auto text-xl md:text-3xl font-light leading-relaxed tracking-tight break-keep pt-6 opacity-80">
                                        현재 R:new Studio 만의 <span className="text-slate-950 font-medium">독창적인 마스터피스</span>들을 <br className="hidden md:block" />
                                        정밀하게 보관 및 준비하고 있습니다. 곧 압도적인 결과물로 찾아뵙겠습니다.
                                    </p>

                                    {/* Geometric Finishing */}
                                    <div className="absolute bottom-12 left-12 w-32 h-[1px] bg-slate-200"></div>
                                    <div className="absolute bottom-12 right-12 w-32 h-[1px] bg-slate-200"></div>
                                </div>
                            )}
                        </AnimatePresence>
                    </div>
                )}
            </div>

            {/* Fine Noise Texture Overlay - Static Performance */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </section>
    );
}
