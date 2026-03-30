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
        <main className="relative w-full bg-white selection:bg-blue-100 selection:text-blue-900">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-24 pb-16 md:pt-40 md:pb-32 overflow-hidden px-4 md:px-6">
                {/* Advanced Background Layers */}
                <div className="absolute inset-0 z-0 h-full w-full bg-white pointer-events-none overflow-hidden">
                    {/* Dotted Grid */}
                    <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
                    
                    {/* Studio Overlays - High-end Minimalist */}
                    <div className="absolute inset-0 opacity-[0.02] select-none pointer-events-none">
                        {/* Simplified background for maximum message clarity */}
                    </div>

                    {/* Glow Orbs */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-100/30 rounded-full blur-[120px] mix-blend-multiply opacity-50"></div>
                    <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-indigo-100/40 rounded-full blur-[100px] mix-blend-multiply opacity-50 animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-50/50 rounded-full blur-[100px] mix-blend-multiply opacity-50 animate-pulse delay-700"></div>
                </div>

                <div className="container mx-auto max-w-7xl text-center relative z-10 px-6">
                    {/* Hook Text */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-8 md:mb-10"
                    >
                        <span className="text-blue-600 font-bold text-[10px] md:text-sm tracking-[0.3em] uppercase opacity-70">
                            Elite Strategic Design
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-[4rem] lg:text-[4.5rem] font-heading font-black tracking-tighter text-slate-900 mb-10 md:mb-14 leading-[1.2] lg:leading-[1.1]"
                    >
                        당신의 제품, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 italic px-2 font-black">매출</span>로 증명하고 있습니까?
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-base md:text-xl text-slate-500 max-w-3xl mx-auto mb-14 md:mb-20 leading-relaxed font-light px-4 tracking-tight"
                    >
                        압도적인 전략적 기획과 감각적인 비주얼로 <br className="hidden md:block" />
                        고객의 망설임을 <span className="text-slate-900 font-medium">구매 확신</span>으로 바꿉니다.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-32 md:mb-48 px-4"
                    >
                        <Button size="lg" className="rounded-2xl px-12 h-16 md:h-20 text-lg md:text-xl font-heading font-bold bg-primary text-primary-foreground hover:opacity-90 shadow-2xl shadow-primary/20 transition-all w-full sm:w-auto">
                            포트폴리오 확인하기
                            <ArrowRight size={22} className="ml-3" />
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-2xl px-12 h-16 md:h-20 text-lg md:text-xl font-heading font-bold border-border hover:bg-muted transition-all w-full sm:w-auto">
                            상담 신청하기
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="relative"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-[50px] blur-2xl -z-10 group-hover:opacity-100 transition duration-1000"></div>
                        <PortfolioMockup />
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
            <footer className="py-20 bg-slate-950 text-white rounded-t-[60px]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 text-center md:text-left">
                        <div className="space-y-6">
                            <div className="flex items-center justify-center md:justify-start gap-2">
                                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-[10px] font-black">R</div>
                                <span className="font-bold tracking-tight text-xl">R:new Design Studio</span>
                            </div>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                데이터로 설계하고 비주얼로 압도하는 <br />
                                프리미엄 상세페이지 전문 스튜디오입니다.
                            </p>
                        </div>
                        <div>
                            <h5 className="font-bold mb-6 text-slate-400 uppercase tracking-widest text-xs">Explore</h5>
                            <ul className="space-y-4 text-sm font-medium text-slate-500">
                                <li><a href="/about" className="hover:text-blue-500 transition-colors">About Us</a></li>
                                <li><a href="#projects" className="hover:text-blue-500 transition-colors">Portfolio</a></li>
                                <li><a href="#strategy" className="hover:text-blue-500 transition-colors">Our Strategy</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-bold mb-6 text-slate-400 uppercase tracking-widest text-xs">Work</h5>
                            <ul className="space-y-4 text-sm font-medium text-slate-500">
                                <li><a href="#" className="hover:text-blue-500 transition-colors">Process</a></li>
                                <li><a href="#" className="hover:text-blue-500 transition-colors">Design System</a></li>
                                <li><a href="#" className="hover:text-blue-500 transition-colors">3D Visualization</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-bold mb-6 text-slate-400 uppercase tracking-widest text-xs">Support</h5>
                            <ul className="space-y-4 text-sm font-medium text-slate-500">
                                <li><a href="/admin/login" className="hover:text-blue-500 transition-colors">Admin Login</a></li>
                                <li><a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-600 text-xs font-bold uppercase tracking-widest">
                        <p>&copy; 2024 R:new Design Studio. All rights reserved.</p>
                        <div className="flex gap-8">
                            <a href="#" className="hover:text-blue-500">Twitter</a>
                            <a href="#" className="hover:text-blue-500">Instagram</a>
                            <a href="#" className="hover:text-blue-500">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
