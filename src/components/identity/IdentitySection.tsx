"use client";

import { motion } from "framer-motion";
import { CheckCircle2, UserCheck, Zap, Heart } from "lucide-react";

const steps = [
    {
        icon: <UserCheck size={24} />,
        title: "사용자 심리 분석",
        desc: "단순히 예쁜 디자인을 넘어 구매로 이어지는 설득의 논리를 설계합니다.",
    },
    {
        icon: <Zap size={24} />,
        title: "압도적 시각 임팩트",
        desc: "스크롤을 멈추게 하는 강력한 첫인상과 고해상도 그래픽을 구현합니다.",
    },
    {
        icon: <Heart size={24} />,
        title: "브랜드 서사 구축",
        desc: "당신의 핵심 가치를 가장 매력적인 방식으로 전달합니다.",
    },
];

export function IdentitySection() {
    return (
        <section id="about" className="py-24 md:py-40 px-6 bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent -z-10" />

            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 font-bold text-xs uppercase tracking-widest mb-6"
                        >
                            Our Strategy
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-8"
                        >
                            데이터로 설계하고, <br />
                            감각으로 완성합니다.
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium mb-12 max-w-xl"
                        >
                            R:new Design Studio는 시장 데이터와 사용자 심리 분석에 기반하여 시각적 정점에 도달한 상세페이지를 제안합니다. 우리가 만드는 모든 디자인에는 이유가 있습니다.
                        </motion.p>

                        <div className="space-y-8">
                            {steps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-blue-600 shrink-0">
                                        {step.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                                        <p className="text-slate-500 leading-relaxed font-medium">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Mock Graphical Element (Inbox-Zero like side graphic) */}
                        <div className="relative aspect-square rounded-[40px] bg-gradient-to-br from-blue-600 to-indigo-600 p-8 flex items-center justify-center shadow-[0_40px_100px_rgba(37,99,235,0.2)]">
                            <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl rounded-[40px] border border-white/20"></div>
                            <div className="relative flex flex-col items-center justify-center text-white p-12 text-center">
                                <span className="text-7xl font-black mb-6 drop-shadow-2xl">R:new</span>
                                <div className="h-1 w-24 bg-white/50 rounded-full mb-8"></div>
                                <p className="text-xl font-bold opacity-90 leading-relaxed italic">
                                    "Detail is not just a part of design, <br /> it is the core of persuasion."
                                </p>
                            </div>

                            {/* Floating decorative elements */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
