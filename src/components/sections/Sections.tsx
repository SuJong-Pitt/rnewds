"use client";

import { motion } from "framer-motion";

const skills = [
    { name: "Photoshop", level: "Master", desc: "상상하는 모든 비주얼을 현실로." },
    { name: "Illustrator", level: "Expert", desc: "데이터 기반의 정확한 벡터 설계." },
    { name: "3D Rendering", level: "Special", desc: "실물보다 더 실물 같은 재질감." },
    { name: "Premiere Pro", level: "Advanced", desc: "생동감 넘치는 무빙 상세페이지." },
    { name: "Tailwind CSS", level: "Expert", desc: "최신 트렌드의 인터랙티브 웹." },
    { name: "UI/UX Design", level: "Strategic", desc: "구매 동선을 고려한 논리적 배치." },
];

export function TechStack() {
    return (
        <section id="skills" className="py-32 px-6">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6">
                    <div>
                        <span className="text-secondary font-bold tracking-[0.3em] uppercase block mb-4">Professional Tools</span>
                        <h2 className="text-4xl md:text-7xl font-bold text-white">Software Stack.</h2>
                    </div>
                    <p className="text-gray-500 max-w-sm text-left md:text-right text-sm md:text-base">
                        프로젝트의 완성도를 결정짓는 <br />
                        감각적이고 전문적인 디자인 도구들
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ borderColor: "rgba(167, 139, 250, 0.5)" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-[30px] glass-morphism border-white/5 group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-all"></div>
                            <div className="text-sm font-mono text-primary mb-4">[ {skill.level} ]</div>
                            <h3 className="text-2xl font-bold mb-3 text-white">{skill.name}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {skill.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import { StrategyBackground } from "@/components/3d/StrategyBackground";
import { ContactVisual } from "@/components/3d/ContactVisual";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export function StrategySection() {
    return (
        <section id="strategy" className="py-24 md:py-48 px-6 relative min-h-screen flex items-center overflow-hidden">
            {/* 3D Layered Background */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
                <Canvas shadows dpr={[1, 2]}>
                    <Suspense fallback={null}>
                        <StrategyBackground />
                    </Suspense>
                </Canvas>
            </div>

            <div className="container mx-auto max-w-5xl relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-12"
                >
                    <header className="space-y-4">
                        <span className="text-muted font-bold tracking-[0.4em] uppercase text-xs md:text-sm block">Strategic Approach</span>
                        <h2 className="text-4xl md:text-7xl font-black text-white leading-[1.2] tracking-tight">
                            단순한 디자인이 아닙니다. <br />
                            <span className="text-secondary neon-text drop-shadow-[0_0_25px_rgba(62,216,255,0.4)]">고객의 심리를 꿰뚫는</span> <br />
                            비주얼 전략입니다.
                        </h2>
                    </header>

                    <p className="text-gray-400 text-lg md:text-2xl leading-relaxed font-semibold max-w-3xl mx-auto">
                        Adobe 툴 마스터리(Ps, Ai, Pr)와 UI/UX 논리로, <br className="hidden md:block" />
                        <span className="text-white border-b border-primary/30 pb-1">스크롤이 멈추지 않는 설득의 여정을 설계합니다.</span>
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 pt-12">
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="p-10 rounded-[40px] glass-morphism border-white/5 text-left group"
                        >
                            <div className="text-primary font-black text-4xl mb-6">01.</div>
                            <h3 className="text-2xl font-bold mb-4 text-white">심리 기반 설계</h3>
                            <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                                고객이 반응하는 색채와 레이아웃을 데이터로 <br /> 배치하여 구매 전환율을 극대화합니다.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -10 }}
                            className="p-10 rounded-[40px] glass-morphism border-white/5 text-left group"
                        >
                            <div className="text-secondary font-black text-4xl mb-6">02.</div>
                            <h3 className="text-2xl font-bold mb-4 text-white">도구적 통찰</h3>
                            <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                                최신 그래픽 툴을 활용해 압도적인 시각적 임팩트로 <br /> 브랜드의 신뢰도를 즉각적으로 상승시킵니다.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export function ContactSection() {
    return (
        <section id="contact" className="py-24 md:py-40 px-6 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[160px]"></div>
            </div>

            <div className="container mx-auto max-w-5xl relative z-10">
                <div className="text-center space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs md:text-sm block">Get in Touch</span>
                        <h2 className="text-4xl md:text-7xl font-black text-white leading-[1.1] tracking-tight">
                            당신의 제품도 <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">완판템이 될 수 있습니다.</span>
                        </h2>
                    </motion.div>

                    {/* 3D Visual Area */}
                    <div className="h-[300px] md:h-[450px] w-full flex items-center justify-center">
                        <Canvas shadows camera={{ position: [0, 2, 8], fov: 35 }} dpr={[1, 2]}>
                            <Suspense fallback={null}>
                                <ContactVisual />
                            </Suspense>
                        </Canvas>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-12"
                    >
                        <div className="space-y-4">
                            <p className="text-gray-400 text-lg md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
                                20년 경력 전문가의 시선으로 <br />
                                제품의 잠재력을 최대로 끌어올려 드립니다.
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-8">
                            <a
                                href="https://open.kakao.com/..." // 실제 링크로 대체 가능
                                className="group relative px-12 py-8 md:px-20 md:py-10 bg-primary hover:bg-primary/90 text-white rounded-2xl md:rounded-[30px] transition-all duration-500 hover:scale-105 shadow-[0_30px_60px_-15px_rgba(162,89,255,0.4)] active:scale-95 flex flex-col items-center gap-2"
                            >
                                <span className="text-xl md:text-3xl font-black tracking-tight">프리미엄 상세페이지 전략 상담받기</span>
                                <span className="text-primary-foreground/60 text-xs md:text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Let&apos;s Build Your Masterpiece →</span>
                            </a>

                            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-gray-600 text-[10px] md:text-xs font-black tracking-[0.3em] uppercase">
                                <a href="#" className="hover:text-primary transition-colors border-b border-transparent hover:border-primary/30 pb-1">Instagram</a>
                                <a href="#" className="hover:text-primary transition-colors border-b border-transparent hover:border-primary/30 pb-1">Naver Blog</a>
                                <a href="#" className="hover:text-primary transition-colors border-b border-transparent hover:border-primary/30 pb-1">Behance</a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
