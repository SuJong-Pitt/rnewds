"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/ui/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Layers, MousePointer2, Zap, Trophy, Shield } from "lucide-react";
import {
    ExpertiseSection,
    ValuePointsSection,
    ProcessSection,
    ReliefSection
} from "@/components/sections/DetailedSections";
import { TechStack, ContactSection } from "@/components/sections/Sections";
import { Footer } from "@/components/ui/Footer";
import { PricingSection } from "@/components/sections/PricingSection";
import { PortfolioAuraSlider } from "@/components/ui/PortfolioAuraSlider";

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
};

export default function Home() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 800], [0, 300]);

    return (
        <main className="relative w-full bg-white selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
            <Navbar />

            {/* Architectural Blueprint Hero Section */}
            <section className="relative min-h-screen flex flex-col justify-center section-padding-large overflow-hidden bg-white">
                {/* Very Subtle Premium Image Background (Watermark Style) */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.12]">
                    <img
                        src="/images/premium_abstract_bg.png"
                        alt="Premium Hero Background"
                        className="w-full h-full object-cover blur-[60px] scale-110"
                    />
                </div>
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
                        <div className="flex flex-col items-center gap-1 md:gap-2 mb-12 md:mb-16">
                            {/* Line 01: Value Planning */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="relative group"
                            >
                                <h2 className="text-[1.25rem] xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-medium text-slate-800 tracking-tight px-4 pb-1 break-keep text-balance">
                                    상세페이지 만들었는데,
                                </h2>
                            </motion.div>

                            {/* Line 02: Result Proven */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                className="relative py-2 md:py-4 mt-2 md:mt-0"
                            >
                                <h1 className="text-[2.2rem] xs:text-[2.8rem] sm:text-6xl md:text-8xl lg:text-9xl font-heading font-black tracking-tighter leading-none px-4 prism-text whitespace-nowrap">
                                    왜 안팔릴까요?
                                </h1>
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="absolute bottom-0 left-0 h-[2px] md:h-[3px] bg-blue-600/60"
                                />
                            </motion.div>

                            {/* Impact Statement */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="mt-12 md:mt-14 text-center px-6 flex flex-col items-center"
                            >
                                <div className="flex flex-col items-center">
                                    <span className="text-[1.15rem] md:text-2xl lg:text-3xl text-slate-400 font-medium tracking-tight leading-snug px-1 text-balance break-keep">
                                        예쁘기만 한 디자인이 아니라
                                    </span>

                                    <div className="mt-5 md:mt-6 px-1">
                                        <span className="text-[1.6rem] md:text-4xl lg:text-5xl text-slate-900 font-black relative group inline-block tracking-tighter leading-tight text-balance break-keep">
                                            <span className="whitespace-nowrap">구매까지 이어지게 만듭니다.</span>
                                        </span>
                                    </div>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                                    viewport={{ once: true }}
                                    className="mt-10 md:mt-12"
                                >
                                    <Link href="https://pf.kakao.com/_xaxgJdX/chat" target="_blank" rel="noopener noreferrer">
                                        <Button className="h-14 md:h-18 px-8 md:px-12 rounded-full bg-slate-950 text-white text-lg md:text-xl font-bold shadow-2xl hover:bg-slate-900 active:bg-[#FAE100] active:text-slate-900 active:scale-95 transition-all duration-300 group">
                                            <span className="flex items-center gap-3">
                                                지금 상담 받아보기
                                                <Sparkles size={20} className="text-yellow-400 group-hover:rotate-12 transition-transform" />
                                            </span>
                                        </Button>
                                    </Link>
                                </motion.div>

                                {/* CEO Identity Section */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    viewport={{ once: true }}
                                    className="mt-16 md:mt-24 mb-6"
                                >
                                    <div className="relative w-80 aspect-[3/4] md:w-[720px] md:aspect-square mx-auto group">
                                        <div className="absolute inset-0 bg-blue-600/5 rounded-[3rem] md:rounded-[6rem] blur-[100px] group-hover:bg-blue-600/10 transition-colors duration-1000"></div>
                                        <div className="relative w-full h-full rounded-[3rem] md:rounded-[6rem] overflow-hidden border-[12px] md:border-[20px] border-white shadow-[0_60px_120px_-20px_rgba(0,0,0,0.15)] bg-white">
                                            <div className="relative w-full h-full overflow-hidden bg-slate-50">
                                                {/* Web Version Image */}
                                                <Image
                                                    src="/images/ceo_image_w.png"
                                                    alt="R:new Design Studio CEO"
                                                    fill
                                                    priority
                                                    className="hidden md:block object-cover scale-105 group-hover:scale-100 transition-transform duration-[2.5s] ease-out"
                                                />
                                                {/* Mobile Version Image */}
                                                <Image
                                                    src="/images/ceo_image_m.png"
                                                    alt="R:new Design Studio CEO"
                                                    fill
                                                    priority
                                                    className="block md:hidden object-cover scale-105 group-hover:scale-100 transition-transform duration-[2.5s] ease-out"
                                                />
                                            </div>
                                        </div>

                                        {/* Minimal Logo Badge (Option 3) */}
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 1.5, duration: 0.8 }}
                                            className="absolute -right-4 md:-right-10 bottom-10 md:bottom-16 bg-slate-950 text-white px-6 py-3 md:px-10 md:py-5 rounded-full shadow-2xl border border-white/20 backdrop-blur-sm z-30 flex items-center gap-3"
                                        >
                                            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-blue-500 animate-pulse"></div>
                                            <span className="text-[10px] md:text-2xl font-black tracking-[0.3em] uppercase italic leading-none translate-y-[1px]">
                                                R:NEW STUDIO
                                            </span>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>

                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-12 md:mt-24 relative w-[calc(100%+2rem)] -ml-4 md:w-full md:ml-auto max-w-5xl mx-auto px-0 md:px-10"
                    >
                        <PortfolioAuraSlider />
                    </motion.div>

                    {/* Moved Button to Bottom for better flow */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex justify-center mt-24 md:mt-40 relative z-20 px-6"
                    >
                        <Link href="/portfolio" className="w-full sm:w-auto flex justify-center">
                            <Button size="lg" className="w-full sm:w-auto h-16 md:h-24 px-10 md:px-20 rounded-2xl md:rounded-[2rem] text-base md:text-2xl font-black bg-slate-950 text-white shadow-2xl hover:bg-blue-600 hover:scale-[1.05] active:scale-95 transition-all duration-500 group">
                                <span className="flex items-center gap-4 md:gap-6">
                                    포트폴리오 확인
                                    <ArrowRight className="size-5 md:size-8 group-hover:translate-x-3 transition-transform duration-500" />
                                </span>
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            <ExpertiseSection />
            <ReliefSection />
            <ValuePointsSection />
            <ProcessSection />
            <PricingSection />
            <TechStack />
            <ContactSection />
            <Footer />
        </main>
    );
}
