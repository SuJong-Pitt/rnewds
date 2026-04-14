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
    ProcessSection
} from "@/components/sections/DetailedSections";
import { ProjectShowcase } from "@/components/projects/ProjectShowcase";
import { TechStack, ContactSection } from "@/components/sections/Sections";
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
                                        예쁘기만 한 페이지로는 <br className="md:hidden" /> 고객은 구매하지 않습니다.
                                    </span>

                                    <div className="mt-5 md:mt-6 px-1">
                                        <span className="text-[1.6rem] md:text-4xl lg:text-5xl text-slate-900 font-black relative group inline-block tracking-tighter leading-tight text-balance break-keep">
                                            <span className="whitespace-nowrap">이제는 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 italic">"팔리는 페이지"</span> 가</span> <br className="md:hidden" /> 필요합니다.
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col items-center gap-6 mb-16 relative"
                        >
                            {/* Stylish Speech Bubbles (Pain Points) */}
                            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 max-w-7xl px-1 w-full relative">
                                {[
                                    { text: "만들 줄 모르겠다", delay: 0.8, rotate: -3 },
                                    { text: "만들었는데 안 팔린다", delay: 1.0, rotate: 2 },
                                    { text: "어디 맡겨야 할지 모르겠다", delay: 1.2, rotate: -2 }
                                ].map((point, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.8, y: 20, x: i % 2 === 0 ? -10 : 10 }}
                                        whileInView={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                                        transition={{
                                            duration: 0.8,
                                            delay: point.delay,
                                            type: "spring",
                                            stiffness: 100
                                        }}
                                        whileHover={{ y: -10, scale: 1.05, transition: { duration: 0.2 } }}
                                        className={`relative w-full md:w-auto flex ${i === 0 ? 'justify-start md:justify-center' : i === 1 ? 'justify-end md:justify-center' : 'justify-start md:justify-center'} px-1 md:px-0`}
                                        style={{ rotate: `${point.rotate}deg` }}
                                    >
                                        <div className="bg-white px-10 py-6 md:px-12 md:py-8 rounded-[2.5rem] md:rounded-[3rem] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center justify-center relative max-w-[98vw] md:max-w-none hover:shadow-[0_30px_70px_-30px_rgba(0,0,0,0.12)] transition-shadow">
                                            <span 
                                                className="speech-bubble text-slate-500 font-normal md:text-3xl whitespace-nowrap tracking-tight"
                                            >
                                                "{point.text}"
                                            </span>
                                            {/* Dynamic Bubble Tail */}
                                            <div className={`absolute -bottom-2 ${i % 2 === 0 ? 'left-[30%] md:left-1/2' : 'right-[30%] md:right-1/2'} -translate-x-1/2 w-4 h-4 md:w-5 md:h-5 bg-white border-b border-r border-slate-100 rotate-45 shadow-[5px_5px_10px_-5px_rgba(0,0,0,0.03)]`}></div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
                            className="relative"
                        >


                            <div className="absolute -inset-10 bg-blue-600/5 blur-[80px] -z-10 opacity-20 pointer-events-none"></div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="relative w-full flex flex-col items-center px-4"
                        >
                            <h4 className="text-xl md:text-2xl lg:text-3xl font-normal text-slate-900 mb-8 md:mb-12 tracking-tight text-center">
                                <span className="font-black">Rnew Design</span> 에서 해결해 드리겠습니다.
                            </h4>

                            <Link href="/#projects" className="w-full sm:w-auto">
                                <Button size="lg" className="w-auto h-9 md:h-16 py-2 md:py-8 mt-10 md:mt-20 px-4 md:px-16 rounded-lg md:rounded-2xl text-xs md:text-xl font-black bg-slate-950 text-white shadow-md md:shadow-2xl hover:bg-blue-600 hover:scale-[1.03] transition-all duration-500 group">
                                    <span className="relative z-10 flex items-center justify-center gap-2 md:gap-4">
                                        포트폴리오 확인
                                        <ArrowRight size={14} className="md:size-24 group-hover:translate-x-3 transition-transform duration-500" />
                                    </span>
                                </Button>
                            </Link>

                            <div className="absolute -left-40 top-0 text-[8px] font-mono text-slate-300 uppercase tracking-[0.5em] hidden lg:block leading-none h-full flex items-center">
                                RDS_ARCHITEC_26
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-12 md:mt-24 relative w-[calc(100%+2rem)] -ml-4 md:w-full md:ml-auto max-w-5xl mx-auto px-0 md:px-10"
                    >
                        <PortfolioAuraSlider />
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
                                    <Image src="/images/icons/logo.svg" alt="R:new Logo" width={48} height={48} className="rounded-2xl shadow-lg" />
                                    <span className="font-heading font-black tracking-tight text-2xl md:text-3xl italic px-1">R:new Design Studio</span>
                                </div>
                                <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-md">
                                    이해되고 선택되는 디자인 <br />
                                    <span className="text-white">상세페이지</span> 제작 스튜디오입니다.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-row gap-16 md:gap-32 lg:pr-10">
                            <div className="space-y-8">
                                <h5 className="font-bold text-slate-500 uppercase tracking-widest text-xs">Explore</h5>
                                <ul className="space-y-4 text-base font-medium">
                                    <li><a href="/about" className="text-slate-400 hover:text-blue-400 transition-all">About Studio</a></li>
                                    <li><Link href="/#projects" className="text-slate-400 hover:text-blue-400 transition-all">Work Portfolio</Link></li>
                                    <li><Link href="/admin/login" className="text-slate-400 hover:text-blue-400 transition-all">Admin System</Link></li>
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
