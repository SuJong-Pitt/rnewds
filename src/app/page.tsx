"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/ui/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import {
    ExpertiseSection,
    ValuePointsSection,
    ProcessSection
} from "@/components/sections/DetailedSections";
import { ProjectShowcase } from "@/components/projects/ProjectShowcase";
import { TechStack, ContactSection } from "@/components/sections/Sections";

import { PortfolioMockup } from "@/components/ui/PortfolioMockup";

export default function Home() {
    return (
        <main className="relative w-full bg-white selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
            <Navbar />

            {/* Hero Section - Elite Strategic Design */}
            <section className="relative pt-28 pb-20 md:pt-48 md:pb-40 overflow-hidden px-6">
                {/* Minimalist Premium Background */}
                <div className="absolute inset-0 z-0 bg-white pointer-events-none">
                    {/* Brand Abstract Background Layer */}
                    <div className="absolute inset-0 opacity-[0.6] pointer-events-none overflow-hidden h-full w-full">
                        <Image 
                            src="/images/premium_abstract_bg.png" 
                            alt="Premium Brand Background" 
                            fill 
                            className="object-cover opacity-40 select-none pointer-events-none"
                            priority
                        />
                    </div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-full pb-20 opacity-20 blur-3xl -z-10 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08),transparent_70%)]"></div>
                    <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px]"></div>
                    <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px]"></div>
                </div>

                <div className="container mx-auto max-w-7xl relative z-10">
                    <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-900/5 border border-slate-900/10 mb-10"
                        >
                            <span className="w-1 h-1 bg-blue-600 rounded-full animate-pulse"></span>
                            <span className="text-[10px] md:text-xs font-bold text-slate-600 uppercase tracking-[0.1em] md:tracking-[0.2em] whitespace-nowrap">
                                Strategy + Aesthetic Elite
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black tracking-tight text-slate-950 mb-12 leading-[1.1] md:leading-[1.05]"
                        >
                            가치를 기획하고 <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-[length:200%_auto] animate-gradient-x italic px-1">매출</span>로 증명합니다.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-lg md:text-2xl text-slate-500 font-light leading-relaxed mb-16 max-w-3xl break-keep tracking-tight px-4"
                        >
                            압도적인 분석적 기획과 독보적인 비주얼 설계로 <br className="hidden md:block" />
                            브랜드의 지위를 격상시키고 실질적인 성장을 견인합니다.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center gap-8 mb-32 md:mb-48"
                        >
                            <Button size="lg" className="rounded-full px-12 py-8 text-lg font-bold bg-slate-950 text-white hover:scale-105 active:scale-95 transition-all shadow-xl shadow-slate-950/20">
                                전체 포트폴리오
                                <ArrowRight size={20} className="ml-3" />
                            </Button>
                            <button className="text-slate-900 font-bold text-lg hover:text-blue-600 transition-colors flex items-center gap-3 group underline-offset-8 hover:underline decoration-blue-200">
                                <span className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-blue-200 transition-all">
                                    <Sparkles size={16} className="text-blue-500 group-hover:scale-110 transition-transform" />
                                </span>
                                프로젝트 문의하기
                            </button>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full max-w-6xl mx-auto"
                    >
                        {/* Decorative Tag */}
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex items-center gap-4 text-slate-300 pointer-events-none mb-4 whitespace-nowrap opacity-50 font-black tracking-[1em] text-[10px] md:text-xs">
                            <div className="w-10 h-[1px] bg-slate-200"></div>
                            STUDIO SHOWCASE
                            <div className="w-10 h-[1px] bg-slate-200"></div>
                        </div>

                        <div className="relative z-10">
                            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/5 to-indigo-600/5 rounded-[50px] blur-3xl -z-10 group-hover:opacity-100 transition duration-1000"></div>
                            <PortfolioMockup />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Storytelling Sections */}
            <ExpertiseSection />
            <ValuePointsSection />
            <ProcessSection />

            {/* Evidence & Portfolio */}
            <ProjectShowcase />
            <TechStack />

            {/* Conversion */}
            <ContactSection />

            {/* Final Footer */}
            {/* Redesigned Premium Footer */}
            <footer className="pt-32 pb-16 bg-slate-950 text-white rounded-t-[40px] md:rounded-t-[80px] relative overflow-hidden">
                {/* Visual Depth Elements */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none"></div>
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="container mx-auto px-8 max-w-7xl relative z-10">
                    <div className="flex flex-col lg:flex-row justify-between gap-20 mb-32 items-start lg:items-center">
                        <div className="max-w-xl space-y-10">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-xl font-black shadow-[0_10px_30px_rgba(37,99,235,0.3)] ring-1 ring-white/10 group-hover:scale-110 transition-transform">R</div>
                                    <span className="font-heading font-black tracking-tight text-2xl md:text-3xl italic px-1">R:new Design Studio</span>
                                </div>
                                <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-md">
                                    데이터로 설계하고 비주얼로 압도하는 <br />
                                    <span className="text-white">프리미엄 상세페이지</span> 전문 스튜디오입니다.
                                </p>
                            </div>
                            
                            <div className="space-y-4">
                                <h6 className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em] flex items-center gap-2 mb-2">
                                    <span className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></span>
                                    OUR CORE EXPERTISE
                                </h6>
                                <div className="flex flex-wrap gap-3">
                                    {["Data-Driven Strategy", "Elite Visual Design", "Conversion Focus"].map((tag) => (
                                        <span key={tag} className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-blue-400 hover:border-blue-500/30 transition-all cursor-default">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row gap-16 md:gap-32 lg:pr-10">
                            <div className="space-y-8">
                                <h5 className="font-bold text-slate-500 uppercase tracking-widest text-xs flex items-center gap-2">
                                    <div className="w-4 h-[1px] bg-blue-500/50"></div>
                                    Explore
                                </h5>
                                <ul className="space-y-5 text-base font-medium">
                                    <li><a href="/about" className="text-slate-400 hover:text-blue-400 transition-all hover:translate-x-1 inline-block">About Studio</a></li>
                                    <li><a href="#projects" className="text-slate-400 hover:text-blue-400 transition-all hover:translate-x-1 inline-block">Work Portfolio</a></li>
                                </ul>
                            </div>
                            <div className="space-y-8">
                                <h5 className="font-bold text-slate-500 uppercase tracking-widest text-xs flex items-center gap-2">
                                    <div className="w-4 h-[1px] bg-blue-500/50"></div>
                                    Support
                                </h5>
                                <ul className="space-y-5 text-base font-medium">
                                    <li><a href="/admin/login" className="text-slate-400 hover:text-blue-400 transition-all hover:translate-x-1 inline-block">Admin System</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                        <div className="flex flex-col items-center md:items-start gap-2">
                            <p className="text-slate-600 text-[10px] font-bold tracking-widest italic">
                                &copy; 2026 r:new design studio. all rights reserved.
                            </p>
                        </div>
                        <div className="flex items-center gap-10">
                            <a href="#" className="group flex flex-col items-center gap-1">
                                <span className="text-[10px] font-black text-slate-600 group-hover:text-yellow-500 tracking-[0.2em] transition-colors italic">kakao</span>
                                <div className="h-[2px] w-0 bg-yellow-500 group-hover:w-full transition-all duration-300"></div>
                            </a>
                            <a href="#" className="group flex flex-col items-center gap-1">
                                <span className="text-[10px] font-black text-slate-600 group-hover:text-pink-500 tracking-[0.2em] transition-colors italic">instagram</span>
                                <div className="h-[2px] w-0 bg-pink-500 group-hover:w-full transition-all duration-300"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
