"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRightIcon, CheckCircle2Icon, BarChart3Icon, LayersIcon, LightbulbIcon, ZapIcon } from "lucide-react";
import Image from "next/image";

export function AboutHero() {
    return (
        <section className="relative min-h-[70vh] md:min-h-[90vh] w-full flex flex-col items-center justify-center pt-32 pb-20 md:pt-40 md:pb-24 px-6 overflow-hidden bg-white">
            {/* Visual Ambiance Layer */}
            <div className="absolute inset-0 z-0 opacity-[0.6] pointer-events-none overflow-hidden h-full w-full">
                <Image 
                    src="/images/vibrant_studio_workspace.png" 
                    alt="Premium Studio Workspace" 
                    fill 
                    className="object-cover opacity-50 select-none pointer-events-none scale-105"
                    priority
                />
            </div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(circle_at_50%_20%,rgba(37,99,235,0.05),transparent_70%)] -z-10" />

            <div className="relative z-10 text-center max-w-6xl mx-auto space-y-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-blue-100 bg-blue-50/30 text-blue-600 shadow-sm mb-4"
                >
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></div>
                    <span className="text-[10px] md:text-xs font-black tracking-[0.15em] md:tracking-[0.4em] uppercase opacity-70 whitespace-nowrap">Structure of Strategic Design</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black leading-[1.05] tracking-tight text-slate-950 text-balance"
                >
                    데이터로 기획하는 <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 italic px-1">설계의 미학.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-lg md:text-2xl text-slate-500 max-w-4xl mx-auto font-light leading-relaxed tracking-tight break-keep text-balance"
                >
                    우리는 데이터의 심리와 건축학적 정밀함을 결합하여 <br className="hidden md:block" />
                    압도적인 <span className="text-slate-950 font-medium">구매 전환</span>을 이끌어내는 마스터피스를 건축합니다.
                </motion.p>

            </div>
        </section>
    );
}

export function PhilosophySection() {
    return (
        <section className="section-padding-large bg-white overflow-hidden relative">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 md:gap-32 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-12"
                    >
                        <div className="space-y-8">
                            <h2 className="text-blue-600 text-[10px] md:text-xs font-black tracking-[0.5em] opacity-60">Core Philosophy</h2>
                            <h3 className="text-3xl md:text-6xl font-heading font-black text-slate-950 leading-[1.1] tracking-tight break-keep text-balance">
                                아름다움 이전에 <br />
                                <span className="text-blue-600 italic px-1">논리가 앞서야</span> 합니다.
                            </h3>
                            <p className="text-lg md:text-2xl text-slate-500 leading-relaxed font-light tracking-tight break-keep text-balance">
                                장식적인 요소는 본질을 흐립니다. 우리는 사용자의 시선을 추적하고 <span className="text-slate-950 font-medium">구매 버튼까지 도달하는 최단 거리</span>를 설계하는 기획적 정밀함을 최우선으로 합니다.
                            </p>
                        </div>
                        <div className="flex items-center gap-6 py-4">
                            <div className="w-20 h-1 bg-blue-600/20 rounded-full overflow-hidden">
                                <motion.div 
                                    className="h-full bg-blue-600 w-1/2"
                                    animate={{ x: ["-100%", "200%"] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                />
                            </div>
                            <span className="text-xl md:text-2xl font-heading font-black text-slate-950 tracking-tighter italic px-1">"Design follows Logic."</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="relative group h-[500px] md:h-[700px]"
                    >
                        <div className="absolute inset-0 bg-blue-600/5 rounded-[40px] md:rounded-[60px] blur-3xl -z-10 group-hover:bg-blue-600/10 transition-colors duration-1000"></div>
                        <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-full h-full border border-slate-100 rounded-[40px] md:rounded-[60px] -z-10 bg-slate-50 opacity-50"></div>
                        
                        <div className="w-full h-full rounded-[40px] md:rounded-[60px] relative overflow-hidden border border-slate-200 shadow-3xl shadow-slate-100 bg-white">
                            <Image 
                                src="/images/philosophy_masterpiece_visual.png" 
                                alt="Philosophy Masterpiece Visual" 
                                fill 
                                className="object-cover transition-transform duration-1000 group-hover:scale-105 select-none pointer-events-none"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                priority
                            />
                            {/* Sophisticated Overlay */}
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent flex flex-col justify-end p-8 md:p-16">
                                <motion.p 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="text-2xl md:text-4xl font-heading font-black text-white italic px-1 drop-shadow-2xl leading-tight text-balance"
                                >
                                    "모든 픽셀에는 <br /> 팔아야 할 이유가 담겨야 합니다."
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export function ProcessSection() {
    const steps = [
        { icon: <BarChart3Icon size={24} />, title: "Data Analysis", label: "01", desc: "비즈니스 데이터와 소비자 심리를 심층 분석합니다." },
        { icon: <LayersIcon size={24} />, title: "Architecture", label: "02", desc: "논리적 정보 설계로 최적의 동선을 구축합니다." },
        { icon: <LightbulbIcon size={24} />, title: "Visualizing", label: "03", desc: "압도적 고퀄리티 그래픽으로 가치를 형상화합니다." },
        { icon: <ZapIcon size={24} />, title: "Optimization", label: "04", desc: "상호작용 데이터를 기반으로 끊임없이 개선합니다." }
    ];

    return (
        <section className="relative section-padding-large bg-slate-950 text-white rounded-t-[40px] md:rounded-t-[100px] overflow-hidden">
            {/* Visual Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none"></div>
            
            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 md:gap-32 items-center">
                    <div className="space-y-12">
                        <div className="space-y-8">
                            <h2 className="text-blue-400 text-[10px] md:text-xs font-black tracking-[0.5em] opacity-60">Systematic Workflow</h2>
                             <h3 className="text-3xl md:text-5xl lg:text-[4rem] font-heading font-black text-white leading-[1.05] tracking-tighter text-balance">
                                투명하고 <br /> <span className="text-blue-400 italic px-1">정밀한</span> 프로세스.
                            </h3>
                            <p className="text-lg md:text-2xl text-slate-400 leading-relaxed max-w-lg font-light tracking-tight break-keep text-balance">
                                막연한 직감이 아닌, <span className="text-white font-medium">검증된 데이터 시스템</span>을 통해 완성됩니다. 매 단계마다 당신의 비즈니스는 한 단계 더 진화합니다.
                            </p>
                        </div>
                        <Button className="rounded-full px-10 py-7 text-sm font-bold bg-white text-slate-950 hover:bg-blue-400 hover:text-white transition-all shadow-xl shadow-white/5">
                            EXPLORE PROCESS
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="group relative"
                            >
                                <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[32px] md:rounded-[48px] hover:bg-white/10 transition-all duration-500 h-full flex flex-col justify-between shadow-sm group-hover:shadow-blue-500/10 group-hover:-translate-y-2">
                                    <div className="flex justify-between items-start mb-10 md:mb-12">
                                        <div className="text-blue-400 w-12 h-12 flex items-center justify-center bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
                                            {step.icon}
                                        </div>
                                        <span className="text-4xl font-black text-white/10 italic group-hover:text-blue-500/20 transition-colors">{step.label}</span>
                                    </div>
                                    <div className="space-y-4 relative z-10">
                                        <h4 className="text-xl md:text-2xl font-black tracking-tight">{step.title}</h4>
                                        <p className="text-sm md:text-base text-slate-400 leading-relaxed font-light tracking-tight text-balance">{step.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export function TrustSection() {
    return (
        <section className="relative section-padding-large text-center bg-slate-50 overflow-hidden">
            {/* 1. Atmospheric Branding Layer (Watermark & Grid) */}
            <div className="absolute inset-0 z-0 opacity-[0.03] select-none pointer-events-none flex items-center justify-center overflow-hidden">
                <span className="text-[35vw] md:text-[25vw] font-black text-slate-900 tracking-tighter leading-none italic">R:new</span>
            </div>
            
            {/* Architectural Grid - Strategic texture */}
            <div className="absolute inset-0 opacity-[0.04] select-none pointer-events-none" 
                 style={{ backgroundImage: 'linear-gradient(#2563eb 0.5px, transparent 0.5px), linear-gradient(90deg, #2563eb 0.5px, transparent 0.5px)', backgroundSize: '120px 120px' }}></div>
            <div className="absolute top-0 left-0 w-full h-[500px] bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.04),transparent_70%)] pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="max-w-6xl mx-auto space-y-20 md:space-y-32">
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-950 text-white font-bold text-[10px] uppercase tracking-[0.1em] md:tracking-[0.5em] mb-4 shadow-xl"
                        >
                            The Ultimate Authority
                        </motion.div>
                        
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            className="text-4xl md:text-6xl lg:text-[5rem] font-heading font-black text-slate-950 tracking-tighter leading-[1.05] text-balance"
                        >
                            디자인은 감각이 아니라, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 italic px-2 underline decoration-blue-100 decoration-8 underline-offset-4">신뢰의 결과물</span>이어야 합니다.
                        </motion.h2>

                        <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 1 }}
                            className="text-lg md:text-2xl text-slate-500 font-light max-w-2xl mx-auto tracking-tight break-keep border-t border-slate-200 pt-10 text-balance"
                        >
                            수많은 명작들이 증명하는 R:new Design Studio의 정체성은 <br className="hidden md:block" />
                            당신의 비즈니스 가치를 완성하는 <span className="text-slate-950 font-medium italic">마지막 결정적 조각</span>입니다.
                        </motion.p>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-10 md:gap-16 pt-10">
                        {/* 2. Elite Contact Card (Glassmorphism) */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="p-8 md:p-12 rounded-[40px] bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col md:flex-row items-center gap-10 group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[50px] group-hover:opacity-100 transition-opacity"></div>
                            
                            <div className="text-left space-y-2 relative z-10 w-full overflow-hidden">
                                <span className="text-[10px] font-black text-blue-500 tracking-[0.4em] uppercase block mb-1">Direct Collaboration</span>
                                <div className="text-xl sm:text-2xl md:text-4xl font-black text-slate-950 tracking-tighter flex items-center gap-4 transition-transform group-hover:scale-[1.02] duration-500 select-all underline decoration-slate-100 underline-offset-8 decoration-4 truncate">
                                    mihail777@naver.com
                                </div>
                            </div>
                            
                            <div className="w-px h-16 bg-slate-100 hidden md:block"></div>
                            
                            <a href="mailto:mihail777@naver.com" className="w-16 h-16 rounded-3xl bg-slate-950 text-white flex items-center justify-center hover:bg-blue-600 hover:scale-110 active:scale-95 transition-all shadow-xl group/btn">
                                <ArrowRightIcon size={24} className="group-hover/btn:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>

                        <div className="flex flex-col sm:flex-row items-center gap-8 w-full max-w-xl mx-auto">
                            <Button size="lg" className="rounded-full px-16 py-10 text-xl font-bold bg-slate-950 hover:bg-blue-600 text-white transition-all shadow-[0_30px_70px_rgba(37,99,235,0.15)] w-full h-auto relative overflow-hidden group">
                                <span className="relative z-10">지금 문의하기</span>
                                {/* Colorful Hover Background */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Decorative bottom lines - Architectural finishing */}
            <div className="absolute bottom-0 left-0 w-full flex justify-center gap-2 mb-8 opacity-20">
                <div className="w-32 h-[1px] bg-blue-400"></div>
                <div className="w-2 h-[1px] bg-blue-400"></div>
                <div className="w-2 h-[1px] bg-blue-400"></div>
            </div>
        </section>
    );
}
