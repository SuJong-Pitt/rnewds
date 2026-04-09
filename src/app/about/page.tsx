"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/ui/Navbar";
import {
    AboutHero,
    PhilosophySection,
    ProcessSection,
    TrustSection
} from "@/components/sections/AboutSections";

export default function AboutPage() {
    return (
        <main className="relative w-full bg-white scroll-smooth selection:bg-blue-100 selection:text-blue-900">
            <Navbar />

            {/* UI Layer */}
            <div className="relative z-10 w-full overflow-x-hidden">
                {/* Section 1: Main Hero - The Structure of Choice */}
                <AboutHero />


                {/* Section 3: Philosophy - Logic over Aesthetics */}
                <PhilosophySection />

                {/* Section 4: Process - Transparent Workflow */}
                <ProcessSection />

                {/* Section 5: Trust - R:NEW Identity */}
                <TrustSection />

                {/* Footer - Unified Dark Style */}
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
                                        <li><a href="/#projects" className="text-slate-400 hover:text-blue-400 transition-all">Work Portfolio</a></li>
                                        <li><a href="/admin/login" className="text-slate-400 hover:text-blue-400 transition-all">Admin System</a></li>
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
            </div>
        </main>
    );
}
