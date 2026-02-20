"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { ArchitecturalGrid, DataLayers, LogicVisual } from "@/components/3d/AboutVisuals";
import { IdentityVisual } from "@/components/3d/IdentityVisual";
import { DesignerAmbient } from "@/components/3d/BackgroundParticles";

export function AboutHero() {
    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center pt-32 pb-20 px-6">
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                    <Suspense fallback={null}>
                        <DesignerAmbient />
                        <ArchitecturalGrid />
                    </Suspense>
                </Canvas>
            </div>
            <div className="relative z-10 text-center max-w-5xl">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-primary text-xs md:text-sm font-black tracking-[0.6em] uppercase mb-6 block"
                >
                    The Structure of Choice
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tighter mb-8"
                >
                    <span className="block text-white">선택받는 디자인은</span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-secondary">
                        구조에서 시작됩니다
                    </span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.6 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto font-medium"
                >
                    단순한 아름다움을 넘어, 건축적인 정교함과 체계적인 기획으로 <br className="hidden md:block" />
                    당신의 비즈니스를 위한 최적의 설계를 제안합니다.
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 flex flex-col items-center gap-4"
            >
                <div className="w-[1px] h-20 bg-gradient-to-b from-primary to-transparent"></div>
                <span className="text-[10px] text-gray-500 tracking-[0.4em] uppercase font-bold">Scroll to Explore</span>
            </motion.div>
        </section>
    );
}

export function PerformanceSection() {
    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center py-32 px-6 overflow-hidden bg-[#030014]">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="order-2 lg:order-1 relative h-[500px] w-full">
                    <Canvas camera={{ position: [0, 0, 10], fov: 35 }}>
                        <Suspense fallback={null}>
                            <DataLayers />
                        </Suspense>
                        <Environment preset="studio" />
                    </Canvas>
                </div>
                <div className="order-1 lg:order-2">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-primary text-sm font-black tracking-[0.4em] uppercase">Data-Driven Design</h2>
                        <h3 className="text-3xl md:text-5xl font-black text-white leading-tight">
                            약 15년간 축적된 <br />
                            디자인 실무 경험을 바탕으로 <br />
                            <span className="text-secondary">성과로 이어지는 구조</span>를 설계합니다
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            우연에 기댄 감각이 아닙니다. 수많은 프로젝트를 통해 증명된
                            데이터와 시장의 반응을 분석하여, 소비자가 선택할 수밖에 없는
                            논리적인 흐름을 구축합니다.
                        </p>
                        <div className="pt-8 grid grid-cols-2 gap-8">
                            <div>
                                <div className="text-4xl font-black text-white mb-2">15yr+</div>
                                <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">Experience</div>
                            </div>
                            <div>
                                <div className="text-4xl font-black text-white mb-2">500+</div>
                                <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">Projects</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export function PhilosophySection() {
    const containerRef = useRef(null);
    return (
        <section ref={containerRef} className="relative min-h-screen w-full py-32 px-6 flex flex-col items-center justify-center">
            <div className="text-center mb-20">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-primary text-sm font-black tracking-[0.4em] uppercase mb-4"
                >
                    Logic over Aesthetics
                </motion.h2>
                <h3 className="text-3xl md:text-6xl font-black text-white tracking-tighter">
                    보기 좋은 디자인이 아닌, <br />
                    선택받는 이유가 분명한 디자인
                </h3>
            </div>

            <div className="w-full max-w-6xl mx-auto h-[600px] relative">
                <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
                    <Suspense fallback={null}>
                        <LogicVisual />
                    </Suspense>
                    <Environment preset="city" />
                </Canvas>
            </div>
        </section>
    );
}

export function ProcessSection() {
    const steps = [
        { title: "Analysis", desc: "시장 조사 및 소비자 심리 분석" },
        { title: "Architecture", desc: "논리적 정보 흐름 및 구조 설계" },
        { title: "Visualizing", desc: "성과 중심의 고해상도 시각화" },
        { title: "Optimization", desc: "데이터 기반의 지속적 고도화" }
    ];

    return (
        <section className="relative min-h-screen w-full py-32 px-6 bg-[#05001a]">
            <div className="container mx-auto">
                <div className="mb-20">
                    <h2 className="text-primary text-sm font-black tracking-[0.4em] uppercase mb-4 text-center lg:text-left">Transparent Process</h2>
                    <h3 className="text-3xl md:text-5xl font-black text-white text-center lg:text-left">투명한 과정, 확실한 결과</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="p-10 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-3xl hover:border-primary/50 transition-all group"
                        >
                            <div className="text-primary text-4xl font-black mb-6 opacity-20 group-hover:opacity-100 transition-opacity">0{index + 1}</div>
                            <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter">{step.title}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function TrustSection() {
    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center py-32 px-6">
            <div className="absolute inset-0 z-0 opacity-40">
                <IdentityVisual progress={1} />
            </div>
            <div className="relative z-10 text-center space-y-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="space-y-4"
                >
                    <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-white tracking-tighter leading-none">
                        디자인은 감각이 아니라 <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-600">신뢰의 문제입니다</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col items-center gap-6"
                >
                    <div className="text-2xl md:text-4xl font-black tracking-[0.3em] uppercase">
                        Create. Renew. <span className="text-primary">R:NEW.</span>
                    </div>
                    <div className="h-[1px] w-24 bg-white/20"></div>
                    <p className="text-gray-500 text-sm md:text-base tracking-[0.5em] uppercase font-bold">
                        과정은 투명하게, 결과는 책임감 있게
                    </p>
                </motion.div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-12 px-12 py-5 bg-white text-black font-black rounded-full hover:bg-primary hover:text-white transition-all shadow-[0_20px_50px_rgba(255,255,255,0.1)] uppercase tracking-[0.2em]"
                    onClick={() => window.location.href = '#contact'}
                >
                    Get in touch
                </motion.button>
            </div>
        </section>
    );
}
