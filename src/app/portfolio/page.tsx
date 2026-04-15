"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/ui/Navbar";
import { ProjectShowcase } from "@/components/projects/ProjectShowcase";
import { ContactSection } from "@/components/sections/Sections";
import { Footer } from "@/components/ui/Footer";
import { Sparkles, ArrowDown } from "lucide-react";

export default function PortfolioPage() {
    return (
        <main className="relative w-full bg-white selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
            <Navbar variant="dark" />

            {/* Portfolio Hero - Cinematic Premium Header */}
            <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-slate-950">
                {/* Custom Generated Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/portfolio_hero_bg.png"
                        alt="Portfolio Background"
                        className="w-full h-full object-cover opacity-60 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-50/10"></div>
                </div>

                {/* Depth Particles & Ornaments */}
                <div className="absolute inset-0 z-[1] opacity-[0.05] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:60px_60px]"></div>

                <div className="container mx-auto max-w-7xl relative z-10 px-8">
                    <div className="max-w-5xl space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-400 shadow-2xl"
                        >
                            <Sparkles size={16} className="text-blue-400" />
                            <span className="font-bold text-[11px] md:text-sm uppercase tracking-[0.5em] pl-1">Project Masterpieces</span>
                        </motion.div>

                        <div className="space-y-6">
                            <motion.h1
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="text-6xl md:text-9xl lg:text-[10rem] font-heading font-black text-white tracking-tighter leading-[0.9]"
                            >
                                Portfolio <br />
                                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500 italic px-2 drop-shadow-[0_10px_30px_rgba(37,99,235,0.3)] whitespace-pre-wrap pb-4">Work History </span>
                            </motion.h1>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="flex items-center gap-6 text-slate-500 font-mono"
                        >
                            <div className="w-20 h-px bg-slate-800"></div>
                            <span className="text-[11px] md:text-xs tracking-[0.6em] uppercase">Archive Explorer</span>
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <ArrowDown size={18} className="text-blue-500" />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <ProjectShowcase />

            <ContactSection />
            <Footer />
        </main>
    );
}
