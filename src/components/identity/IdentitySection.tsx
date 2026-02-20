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
        <section ref={containerRef} id="about" className="relative min-h-screen py-24 md:py-40 px-6">
            <div className="container mx-auto max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <span className="text-primary font-bold tracking-[0.4em] uppercase block mb-4 italic text-xs md:text-sm">Hero Journey</span>
                    <h2 className="text-5xl md:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-600 leading-tight">
                        디자인의 가치, <br /> 브랜드의 서사.
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Centered Timeline Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/50 via-gray-800 to-transparent -translate-x-1/2 hidden md:block"></div>

                    <div className="space-y-16 md:space-y-32">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className={`relative flex flex-col ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'} w-full`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-1/2 top-0 w-4 h-4 bg-primary rounded-full -translate-x-1/2 shadow-[0_0_20px_#a259ff] z-20 hidden md:block"></div>

                                <div className={`w-full md:w-[45%] glass-morphism p-8 md:p-12 rounded-[40px] border-white/10 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                    {/* Ambient Glow */}
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all"></div>

                                    <span className="text-xs font-mono text-primary mb-3 block tracking-widest font-bold">{exp.phase}</span>
                                    <h3 className="text-3xl md:text-4xl font-black mb-3 text-white tracking-tight">{exp.title}</h3>
                                    <h4 className="text-lg md:text-xl text-gray-400 mb-8 font-semibold italic opacity-80">{exp.subtitle}</h4>

                                    <p className="text-gray-400 leading-relaxed font-medium text-sm md:text-base">
                                        {exp.desc}
                                    </p>

                                    <div className={`flex flex-wrap gap-2 mt-10 ${index % 2 === 0 ? 'justify-start' : 'md:justify-end'}`}>
                                        {exp.tags.map(tag => (
                                            <span key={tag} className="px-4 py-1.5 bg-white/5 rounded-full text-[10px] md:text-xs uppercase font-bold text-gray-500 tracking-wider border border-white/5 hover:border-primary/20 transition-colors">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
