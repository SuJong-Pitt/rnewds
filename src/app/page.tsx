"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/ui/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Layers, MousePointer2, Zap, Trophy, Shield } from "lucide-react";
import {
    ExpertiseSection,
    ValuePointsSection,
    ProcessSection
} from "@/components/sections/DetailedSections";
import { ProjectShowcase } from "@/components/projects/ProjectShowcase";
import { TechStack, ContactSection } from "@/components/sections/Sections";
import { PricingSection } from "@/components/sections/PricingSection";
import { PortfolioMockup } from "@/components/ui/PortfolioMockup";

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
};

export default function Home() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 800], [0, 300]);
    const rotateX = useTransform(scrollY, [0, 800], [0, 12]);
    const scale = useTransform(scrollY, [0, 800], [1, 1.05]);

    return (
        <main className="relative w-full bg-white selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
            <Navbar />

            {/* Architectural Blueprint Hero Section */}
            <section className="relative min-h-screen flex flex-col justify-center section-padding-large overflow-hidden bg-[#F8F9FA]">
                {/* Visual Depth Ornaments */}
                <div className="absolute inset-0 z-[1] opacity-[0.02] pointer-events-none bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:40px_40px]"></div>
                
                {/* Atmospheric Studio Lights */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1000px] bg-[radial-gradient(circle_at_50%_40%,rgba(37,99,235,0.03),transparent_60%)] -z-10"></div>

                <div className="container mx-auto max-w-7xl relative z-10 px-6">
                    <div className="flex flex-col items-center text-center">
                        {/* Blueprint Metadata Label */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="flex items-center gap-4 mb-20"
                        >
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-blue-600/60 uppercase">
                                PROJECT_ARCHIVE_2026 / RDS_STUDIO
                            </span>
                        </motion.div>

                        {/* Image Matching Heading Section */}
                        <div className="flex flex-col items-center gap-6 md:gap-8 mb-20 md:mb-28">
                            {/* Line 01: Value Planning */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="relative group"
                            >
                                <h2 className="text-xl md:text-2xl lg:text-3xl font-heading font-medium text-slate-800 tracking-tight px-4 pb-1 md:pb-2">
                                    가치를 기획하고
                                </h2>
                                <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    className="absolute bottom-0 left-0 h-[1.5px] bg-blue-500/40"
                                />
                            </motion.div>
                            
                            {/* Line 02: Result Proven */}
                            <motion.div 
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                className="relative py-2 md:py-4"
                            >
                                <h1 className="text-4xl md:text-6xl lg:text-8xl font-heading font-black tracking-tighter leading-none px-6 prism-text">
                                    매출로 증명합니다.
                                </h1>
                                <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="absolute bottom-0 left-0 h-[2.5px] bg-blue-600/60"
                                />
                            </motion.div>
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5, delay: 1 }}
                            className="text-base md:text-2xl text-slate-500 font-light max-w-3xl leading-relaxed tracking-tight break-keep mb-16 text-balance"
                        >
                            데이터의 도면 위에 감각적인 비주얼을 건축합니다. <br className="hidden md:block" />
                            단순한 디자인이 아닌 <span className="text-slate-950 font-bold border-b border-blue-100">비즈니스의 승리</span>를 완성하는 설계 시스템입니다.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className="relative"
                        >
                            <Link href="/#projects">
                                <Button size="lg" className="h-auto py-8 px-16 rounded-2xl text-xl font-black bg-slate-950 text-white shadow-2xl hover:bg-blue-600 hover:scale-[1.03] transition-all duration-500 group">
                                    <span className="relative z-10 flex items-center gap-4">
                                        포트폴리오 확인
                                        <ArrowRight size={24} className="group-hover:translate-x-3 transition-transform duration-500" />
                                    </span>
                                </Button>
                            </Link>

                            <div className="absolute -left-40 top-0 text-[8px] font-mono text-slate-300 uppercase tracking-[0.5em] hidden lg:block leading-none h-full flex items-center">
                                RDS_ARCHITEC_26
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        style={{ rotateX, scale }}
                        initial={{ opacity: 0, y: 150 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-32 relative w-full max-w-6xl mx-auto"
                    >
                        <div className="absolute -inset-10 bg-blue-600/5 blur-[120px] -z-10 rounded-[100px]"></div>
                        <PortfolioMockup />
                    </motion.div>
                </div>
            </section>

            <ExpertiseSection />
            <ValuePointsSection />
            <ProcessSection />
            <ProjectShowcase />
            <TechStack />
            <PricingSection />
            <ContactSection />

            <footer className="pt-20 md:pt-32 pb-12 bg-slate-950 text-white rounded-t-[40px] md:rounded-t-[80px] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none"></div>
                <div className="container mx-auto px-8 max-w-7xl relative z-10">
                    <div className="flex flex-col lg:flex-row justify-between gap-20 mb-20 items-start lg:items-center">
                        <div className="max-w-xl space-y-10">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-xl font-black shadow-lg">R</div>
                                    <span className="font-heading font-black tracking-tight text-2xl md:text-3xl italic px-1">R:new Design Studio</span>
                                </div>
                                <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-md">
                                    데이터로 설계하고 비주얼로 압도하는 <br />
                                    <span className="text-white">프리미엄 상세페이지</span> 전문 스튜디오입니다.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-row gap-16 md:gap-32 lg:pr-10">
                            <div className="space-y-8">
                                <h5 className="font-bold text-slate-500 uppercase tracking-widest text-xs">Explore</h5>
                                <ul className="space-y-4 text-base font-medium">
                                    <li><a href="/about" className="text-slate-400 hover:text-blue-400 transition-all">About Studio</a></li>
                                    <li><Link href="/#projects" className="text-slate-400 hover:text-blue-400 transition-all">Work Portfolio</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                        <p className="text-slate-600 text-[10px] font-black tracking-widest italic uppercase">
                            &copy; 2026 r:new design studio. all rights reserved.
                        </p>
                        <div className="flex items-center gap-10">
                            <a href="https://pf.kakao.com/_xaxgJdX" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-1">
                                <span className="text-[10px] font-black text-slate-600 group-hover:text-yellow-500 tracking-[0.2em] transition-colors italic">kakao</span>
                                <div className="h-[2px] w-0 bg-yellow-500 group-hover:w-full transition-all duration-300"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
