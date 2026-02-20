"use client";

import { motion } from "framer-motion";
import { SceneCanvas } from "@/components/3d/SceneCanvas";
import { Navbar } from "@/components/ui/Navbar";
import { IdentitySection } from "@/components/identity/IdentitySection";
import { ProjectShowcase } from "@/components/projects/ProjectShowcase";
import { TechStack, ContactSection } from "@/components/sections/Sections";

export default function Home() {
    return (
        <main className="relative w-full bg-background scroll-smooth">
            {/* 3D Core Layer */}
            <SceneCanvas />

            {/* UI Layer */}
            <div className="relative z-10 w-full overflow-x-hidden">
                <Navbar />

                {/* Section 1: Hero */}
                <section className="min-h-screen w-full flex flex-col items-center justify-center relative px-4 md:px-6 py-20 text-white text-center">
                    <div className="p-4 md:p-24 max-w-6xl mx-auto">
                        <header className="flex flex-col items-center tracking-tighter">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mb-4"
                            >
                                <span className="text-primary text-[10px] md:text-sm font-black tracking-[0.4em] md:tracking-[0.6em] uppercase opacity-60 block">
                                    Premium Detail Page Expert
                                </span>
                            </motion.div>

                            <h2 className="text-gray-500 text-base md:text-2xl font-bold mb-4 md:mb-6 opacity-70 tracking-tight">
                                상세 페이지 디자이너
                            </h2>

                            <h1 className="text-4xl sm:text-5xl md:text-[8.5rem] font-black leading-[1.1] md:leading-[0.85] mb-8 md:mb-12 drop-shadow-[0_10px_30px_rgba(162,89,255,0.3)]">
                                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-400">
                                    R:new
                                </span>
                                <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-[#b195ff] to-secondary">
                                    Design Studio
                                </span>
                            </h1>
                        </header>

                        <p className="text-sm md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10 md:mb-16 font-medium px-4">
                            데이터로 설계된 압도적 시각적 임팩트, <br className="hidden md:block" />
                            <span className="text-white font-bold underline decoration-primary/30 underline-offset-4 md:underline-offset-8">비즈니스의 가치를 증명하는 상세페이지를 만듭니다.</span>
                        </p>

                        <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center">
                            <a href="#projects" className="w-full md:w-auto group relative px-10 md:px-14 py-4 md:py-6 bg-white text-black font-black rounded-full overflow-hidden transition-all hover:pr-16 md:hover:pr-20 hover:scale-105 shadow-[0_20px_40px_rgba(255,255,255,0.1)] active:scale-95">
                                <span className="relative z-10 text-base md:text-lg">작업물 보기</span>
                                <span className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all text-xl md:text-2xl">→</span>
                            </a>
                            <a href="#contact" className="w-full md:w-auto px-10 md:px-14 py-4 md:py-6 border border-white/10 hover:border-primary/50 rounded-full font-bold transition-all text-white bg-white/5 active:scale-95 hover:text-primary">
                                상담 문의하기
                            </a>
                        </div>
                    </div>

                    {/* Floating Footer Info */}
                    <div className="absolute bottom-12 left-12 hidden lg:block opacity-30">
                        <div className="flex items-center gap-4 text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase">
                            <div className="w-12 h-[1px] bg-gray-800"></div>
                            <span>R:new Design Studio &copy; 2024</span>
                        </div>
                    </div>
                </section>

                {/* Section 2: Identity */}
                <IdentitySection />

                {/* Section 3: Project Showcase */}
                <ProjectShowcase />

                {/* Section 4: Tech Stack */}
                <TechStack />

                {/* Section 5: Contact */}
                <ContactSection />

                {/* Footer */}
                <footer className="py-20 border-t border-white/5 text-center text-gray-700 text-[10px] tracking-[0.4em] uppercase font-bold">
                    &copy; 2024 R:new Design Studio. All Rights Reserved.
                </footer>
            </div>
        </main>
    );
}
