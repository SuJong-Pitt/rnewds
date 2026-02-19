"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { IdentityVisual } from "@/components/3d/IdentityVisual";

const experiences = [
    {
        phase: "Phase 1",
        title: "UI/UX Specialist",
        subtitle: "사용자의 흐름을 설계하는 논리",
        desc: "단순히 예쁜 것이 아니라, 팔리는 디자인을 하기 위해 웹 기획과 사용자 심리를 연구했습니다. 논리적인 레이아웃의 기반이 됩니다.",
        tags: ["User Logic", "Flow", "Strategic"]
    },
    {
        phase: "Phase 2",
        title: "Detail Page Master",
        subtitle: "상세페이지의 정점",
        desc: "실물과 구분이 안 되는 고퀄리티 렌더링과 설계를 통해, 고객의 구매 전환율을 극대화하는 최종 결과물을 만들어냅니다.",
        tags: ["Mastery", "Conversion", "Photorealistic"]
    }
];

export function IdentitySection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    return (
        <section ref={containerRef} id="about" className="relative min-h-screen py-32 px-6">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <span className="text-primary font-bold tracking-[0.3em] uppercase block mb-4 italic">Hero Journey</span>
                    <h2 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-600 drop-shadow-md">
                        브랜드의 서사.
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-24">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="relative pl-12 border-l border-gray-800 p-8"
                            >
                                <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_10px_#a78bfa]"></div>
                                <span className="text-sm font-mono text-primary mb-2 block tracking-widest text-shadow-md">{exp.phase}</span>
                                <h3 className="text-3xl font-bold mb-2 text-white drop-shadow-lg">{exp.title}</h3>
                                <h4 className="text-xl text-gray-400 mb-6 font-semibold italic">{exp.subtitle}</h4>
                                <p className="text-gray-300 leading-relaxed max-w-md font-medium text-shadow-sm">
                                    {exp.desc}
                                </p>
                                <div className="flex gap-2 mt-6">
                                    {exp.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-[10px] uppercase font-bold text-gray-400 tracking-tighter border border-white/5">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="sticky top-1/4 h-[50vh] hidden md:block">
                        <div className="w-full h-full glass-morphism rounded-[40px] flex items-center justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <IdentityVisual progress={scrollYProgress.get()} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
