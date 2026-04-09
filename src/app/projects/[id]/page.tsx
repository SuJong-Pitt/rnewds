"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Loader2, Calendar, Tag, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
                        <span className="text-xs font-bold uppercase tracking-[0.2em]">Close Project</span>
                    </button>

                    <div className="w-9 h-9 bg-slate-900 rounded-xl flex items-center justify-center text-white text-[12px] font-black">R</div>
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
                                    Featured Masterpiece
                                </span>
                                <span className="text-slate-400 font-bold text-xs">/ {new Date(project.created_at).getFullYear()}</span>
                            </div>
                            <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-[1.0] mb-10 text-slate-900">
                                {project.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium">
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
                                <p className="text-slate-600 font-medium leading-relaxed text-lg italic">
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

                {/* Final CTA */}
                <section className="py-40 text-center container mx-auto px-6 max-w-3xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-7xl font-bold mb-12 tracking-tight text-slate-900 leading-[1.1]"
                    >
                        당신의 가치를 만드는 <br /> 마지막 퍼즐 조각.
                    </motion.h2>
                    <Button
                        asChild
                        size="lg"
                        className="rounded-2xl px-14 py-8 text-xl font-bold btn-gradient border-none h-auto shadow-[0_20px_50px_rgba(37,99,235,0.2)]"
                    >
                        <a href="https://pf.kakao.com/_xaxgJdX" target="_blank" rel="noopener noreferrer">
                            상담 신청하기 <ArrowRight size={20} className="ml-3" />
                        </a>
                    </Button>
                </section>

                {/* Simple Footer Overlay */}
                <footer className="py-20 border-t border-slate-100 text-center text-slate-400 text-[10px] tracking-[0.4em] uppercase font-bold bg-white">
                    &copy; 2024 R:new Design Studio. All Rights Reserved.
                </footer>
            </div>
        </main>
    );
}
