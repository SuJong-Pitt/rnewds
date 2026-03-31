"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    Mail,
    Instagram,
    MessageSquare,
    ExternalLink,
    ShieldCheck,
    Zap,
    Layers,
    Palette,
    PenTool,
    CheckCircle2,
    MessageCircle,
    Box,
    Video,
    Code,
    Target,
    Sparkles
} from "lucide-react";

const skills = [
    {
        name: "Photoshop", level: "Master", value: 95,
        desc: "상상하는 모든 비주얼을 현실로 그려냅니다.",
        icon: <Palette size={24} />,
        color: "text-blue-600",
        bg: "bg-blue-600",
        gradient: "from-blue-400 via-blue-600 to-indigo-600",
        shadow: "shadow-blue-500/20"
    },
    {
        name: "Illustrator", level: "Expert", value: 85,
        desc: "데이터 기반의 정확한 벡터 설계를 구현합니다.",
        icon: <PenTool size={24} />,
        color: "text-orange-500",
        bg: "bg-orange-500",
        gradient: "from-orange-400 via-orange-500 to-amber-500",
        shadow: "shadow-orange-500/20"
    },
    {
        name: "Figma", level: "Master", value: 98,
        desc: "기획부터 디자인까지 기틀이 되는 정밀한 상세페이지를 설계합니다.",
        icon: <Layers size={24} />,
        color: "text-purple-600",
        bg: "bg-purple-600",
        gradient: "from-purple-400 via-purple-600 to-pink-500",
        shadow: "shadow-purple-500/20"
    },
    {
        name: "UI/UX Design", level: "Strategic", value: 92,
        desc: "구매 동선을 고려한 논리적 배치를 설계합니다.",
        icon: <Target size={24} />,
        color: "text-cyan-500",
        bg: "bg-cyan-500",
        gradient: "from-cyan-400 via-cyan-500 to-emerald-500",
        shadow: "shadow-cyan-500/20"
    },
];

export function TechStack() {
    return (
        <section id="skills" className="section-padding bg-[#fcfdfe] overflow-hidden relative">
            {/* 1. Atmospheric Glowing Blobs (Fill the spatial void with luxury multi-color lighting) */}
            <motion.div
                animate={{
                    x: [0, 60, 0],
                    y: [0, 40, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[5%] -left-20 w-[500px] h-[500px] bg-blue-400/5 blur-[130px] rounded-full pointer-events-none"
            />
            <motion.div
                animate={{
                    x: [0, -60, 0],
                    y: [0, 60, 0],
                    scale: [1, 1.1, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[10%] -right-20 w-[600px] h-[600px] bg-purple-400/5 blur-[160px] rounded-full pointer-events-none"
            />
            <motion.div
                animate={{
                    x: [0, 30, 0],
                    y: [0, -30, 0],
                    scale: [1, 1.3, 1]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-[30%] w-[350px] h-[350px] bg-amber-400/[0.03] blur-[110px] rounded-full pointer-events-none"
            />

            {/* Architectural Grid Texture */}
            <div className="absolute inset-0 opacity-[0.05] select-none pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#2563eb 0.5px, transparent 0.5px), linear-gradient(90deg, #2563eb 0.5px, transparent 0.5px)', backgroundSize: '100px 100px' }}></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-x-12 gap-y-10">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-950 text-white font-bold text-[10px] uppercase tracking-widest md:tracking-[0.4em] mb-8 shadow-2xl"
                        >
                            <Sparkles size={12} className="text-yellow-400 animate-pulse" />
                            Elite Design Architecture
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[2.25rem] md:text-5xl lg:text-6xl font-heading font-black tracking-tighter text-slate-900 leading-[1.05] text-balance"
                        >
                            시선을 사로잡는 <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 italic px-1 underline decoration-blue-100 decoration-8 underline-offset-4">압도적 결과물.</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-500/90 max-w-sm text-base md:text-xl font-medium leading-relaxed tracking-tight break-keep border-l-2 border-slate-200 pl-8"
                    >
                        단순한 제작을 넘어 <br className="hidden md:block" />
                        브랜드의 지위를 격상시키는 <br className="hidden md:block" />
                        r:new만의 하이엔드 솔루션입니다.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            className="p-5 md:p-14 rounded-[40px] md:rounded-[48px] bg-white/70 backdrop-blur-3xl border border-white shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_45px_90px_rgba(37,99,235,0.15)] hover:border-slate-200 transition-all duration-700 group relative overflow-hidden flex flex-col"
                        >
                            {/* colored orbital glow effect */}
                            <div className={`absolute -right-20 -top-20 w-52 h-52 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-[100px] ${skill.bg} opacity-10`}></div>
                            <div className={`absolute -left-10 -bottom-10 w-40 h-40 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-[80px] ${skill.bg} opacity-[0.05]`}></div>

                            <div className="flex items-start justify-between mb-12 relative z-10">
                                {/* Orbital Icon Design - Unique Palette */}
                                <div className="relative">
                                    <div className={`absolute inset-0 rounded-3xl scale-150 blur-2xl opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-700 ${skill.bg} opacity-10`}></div>
                                    <div className={`${skill.color} bg-white w-20 h-20 rounded-3xl shadow-2xl border border-slate-50 flex items-center justify-center group-hover:bg-slate-950 group-hover:text-white transition-all duration-700 relative z-10 transform group-hover:scale-110 group-hover:-rotate-6`}>
                                        {skill.icon}
                                    </div>
                                    {/* Rotating Ring - Unique Palette */}
                                    <div className={`absolute inset-0 border-2 rounded-3xl scale-125 opacity-0 group-hover:opacity-100 group-hover:animate-[spin_6s_linear_infinite] transition-all duration-700 ${skill.color} opacity-20`}></div>
                                </div>

                                <div className="px-5 py-1.5 rounded-full bg-slate-950 text-white text-[9px] font-black tracking-[0.3em] uppercase group-hover:bg-blue-600 transition-colors shadow-xl italic">
                                    {skill.level}
                                </div>
                            </div>

                            <div className="flex-grow space-y-4 md:space-y-5 relative z-10">
                                <h3 className="text-2xl md:text-5xl font-black text-slate-950 tracking-tighter group-hover:translate-x-3 transition-transform duration-500">{skill.name}</h3>
                                <p className="text-sm md:text-xl text-slate-500 font-light leading-relaxed tracking-tight group-hover:text-slate-800 transition-colors break-keep text-balance">
                                    {skill.desc}
                                </p>
                            </div>

                            {/* Luxury mastery bar (Multi-Color Gradient) */}
                            <div className="mt-14 pt-10 border-t border-slate-100/80">
                                <div className="flex justify-between items-center mb-5">
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-slate-900 transition-colors">Digital Mastery</span>
                                    <span className={`text-sm font-black ${skill.color}`}>{skill.value}%</span>
                                </div>
                                <div className="h-[4px] w-full bg-slate-100/50 rounded-full overflow-hidden relative">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.value}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                        className={`h-full bg-gradient-to-r ${skill.gradient} relative`}
                                    >
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full blur-[6px] shadow-[0_0_15px_white]"></div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function StrategySection() {
    return (
        <section id="strategy" className="py-16 md:py-32 px-6 bg-slate-950 text-white relative overflow-hidden rounded-[32px] md:rounded-[60px] mx-4 md:mx-10 my-16 md:my-20">
            {/* Studio Overlay - Minimalist */}
            <div className="absolute inset-0 opacity-[0.05] select-none pointer-events-none">
                {/* Simplified background for clarity */}
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="text-center space-y-16 md:space-y-24">
                    <header className="space-y-8">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-blue-400 font-bold tracking-widest md:tracking-[0.5em] uppercase text-[10px] md:text-xs block opacity-70"
                        >
                            Aesthetic Architecture
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-5xl lg:text-6xl font-heading font-black leading-[1.2] tracking-tighter text-balance"
                        >
                            전문분야의 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 animate-gradient-x bg-[length:200%_auto] italic">기준</span>이 되는 <br />
                            유일한 전략, R:new입니다.
                        </motion.h2>
                    </header>

                    <p className="text-slate-400 text-lg md:text-3xl leading-[1.6] font-light max-w-4xl mx-auto tracking-tight text-balance">
                        압도적인 툴 전문성과 UI/UX 최우선 논리를 결합하여 <br className="hidden md:block" />
                        <span className="text-white font-medium border-b-2 border-blue-500/30 pb-1 italic px-1">고객의 스크롤을 멈추고 지갑을 열게</span> 만듭니다.
                    </p>

                    <div className="grid md:grid-cols-2 gap-10 pt-16">
                        {[
                            { step: "01", title: "구매 심리 아키텍처", desc: "사용자가 반응하는 최적의 시각적 동선을 설계하여 구매 전환까지의 저항을 제로화합니다." },
                            { step: "02", title: "브랜드 권위 구축", desc: "제품이 가진 독보적 가치를 상위 1%의 시각적 언어로 번역해 브랜드의 지위를 격상시킵니다." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
                                className="p-6 md:p-16 rounded-[40px] md:rounded-[60px] bg-white/5 border border-white/10 text-left hover:bg-white/10 transition-all duration-700 group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                                <div className="text-blue-500 font-black text-4xl md:text-5xl mb-6 md:mb-10 tracking-tighter">{item.step}.</div>
                                <h3 className="text-2xl md:text-4xl font-black mb-4 md:mb-6 tracking-tighter">{item.title}</h3>
                                <p className="text-sm md:text-lg text-slate-400 font-light leading-relaxed tracking-tight group-hover:text-slate-300 transition-colors text-balance">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export function ContactSection() {
    const benefits = [
        { icon: <CheckCircle2 size={18} />, text: "비즈니스 맞춤형 정밀 기획 제공", color: "text-blue-500", bg: "bg-blue-50" },
        { icon: <Zap size={18} />, text: "24시간 이내 전략적 답변 보장", color: "text-indigo-500", bg: "bg-indigo-50" }
    ];

    return (
        <section id="contact" className="section-padding bg-white overflow-hidden relative">
            <div className="container mx-auto max-w-7xl relative">
                {/* 1. Atmospheric Volumetric Light & Watermark (Fill the empty space with luxury context) */}
                <div className="absolute inset-x-0 -top-20 -bottom-20 z-0 opacity-[0.03] select-none pointer-events-none flex items-center justify-center">
                    <span className="text-[12vw] md:text-[20vw] font-black text-slate-900 tracking-tighter leading-none italic uppercase">CONTACT</span>
                </div>

                {/* Multi-Color Atmospheric Blobs */}
                <motion.div
                    animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 -left-20 w-[400px] h-[400px] bg-blue-400/5 blur-[100px] rounded-full pointer-events-none"
                />
                <motion.div
                    animate={{ x: [0, -60, 0], y: [0, 60, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-purple-400/5 blur-[120px] rounded-full pointer-events-none"
                />

                {/* 2. Elite Studio Card Container (Luxury Floating Feel) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-10 p-6 md:p-24 lg:p-32 rounded-[40px] md:rounded-[80px] bg-slate-50 border border-slate-100 shadow-[0_40px_100px_rgba(0,0,0,0.03)] group"
                >
                    {/* Architectural Coordinate Labels */}
                    <div className="absolute top-10 left-10 text-[9px] font-mono text-slate-300 tracking-[0.4em] uppercase select-none hidden md:block">ARCHITECTURE_FLOW / 00,00_CONTACT</div>
                    <div className="absolute bottom-10 right-10 text-[9px] font-mono text-slate-300 tracking-[0.4em] uppercase select-none hidden md:block">R:NEW_DESIGN_STUDIO / R2026</div>

                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-12">
                            <div className="space-y-8">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold text-[10px] uppercase tracking-widest md:tracking-[0.4em]"
                                >
                                    Elevate Your Performance
                                </motion.div>

                                <h2 className="text-[1.75rem] md:text-5xl lg:text-6xl font-heading font-black text-slate-950 tracking-tighter leading-[1.1] text-balance">
                                    가치를 증명하는 <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-[length:200%_auto] animate-gradient-x italic px-1">압도적 비주얼의 힘.</span>
                                </h2>

                                <p className="text-base md:text-2xl text-slate-500 font-light max-w-lg leading-relaxed break-keep tracking-tight text-balance">
                                    해당 전문분야를 관통하는 기획을 제안합니다. <br className="hidden md:block" />
                                    결과로 증명하는 <span className="text-slate-950 font-medium italic underline decoration-blue-100 underline-offset-4 decoration-4">R:new</span> 와 함께하세요.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                {benefits.map((benefit, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="p-6 md:p-8 rounded-[24px] md:rounded-[32px] bg-white shadow-[0_10px_40px_rgba(37,99,235,0.02)] border border-slate-100 flex items-start gap-4 group/item hover:border-blue-100 transition-all duration-500"
                                    >
                                        <div className={`mt-1 ${benefit.color} ${benefit.bg} w-7 min-w-[28px] md:w-8 md:min-w-[32px] h-7 md:h-8 rounded-lg md:rounded-xl flex items-center justify-center transition-transform group-hover/item:scale-110`}>
                                            {benefit.icon}
                                        </div>
                                        <span className="text-slate-600 text-sm md:text-lg font-medium leading-tight tracking-tight break-keep">{benefit.text}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col items-center lg:items-end gap-16 md:gap-24 relative">
                            {/* Colorful Glow Aura behind button */}
                            <div className="absolute -inset-10 bg-blue-500/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                            <div className="w-full space-y-12">
                                <Button size="lg" className="rounded-full px-6 py-6 md:px-16 md:py-12 text-lg md:text-3xl font-black bg-slate-950 hover:bg-blue-600 text-white border-none h-auto group/btn w-full shadow-[0_30px_70px_rgba(37,99,235,0.15)] relative overflow-hidden transition-all duration-500">
                                    <span className="relative z-10 flex items-center justify-center gap-4 md:gap-6">
                                        프로젝트 문의하기
                                        <ArrowRight size={24} className="md:w-8 md:h-8 transition-transform group-hover/btn:translate-x-4 duration-500" />
                                    </span>
                                    {/* Colorful Hover Background */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-1000"></div>
                                </Button>

                                <div className="space-y-10">
                                    <div className="flex items-center justify-center lg:justify-end gap-10 md:gap-14">
                                        <a href="#" className="flex flex-col items-center gap-3 group/social">
                                            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 group-hover/social:bg-pink-500 group-hover/social:text-white transition-all duration-500 shadow-sm group-hover/social:shadow-pink-500/20 group-hover/social:-translate-y-2">
                                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                            </div>
                                            <span className="text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase italic group-hover/social:text-pink-600 transition-colors">instagram</span>
                                        </a>
                                        <a href="#" className="flex flex-col items-center gap-3 group/social">
                                            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 group-hover/social:bg-yellow-400 group-hover/social:text-slate-900 transition-all duration-500 shadow-sm group-hover/social:shadow-yellow-500/20 group-hover/social:-translate-y-2">
                                                <MessageCircle size={24} />
                                            </div>
                                            <span className="text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase italic group-hover/social:text-yellow-600 transition-colors">kakaotalk</span>
                                        </a>
                                    </div>

                                    <div className="pt-10 border-t border-slate-200 flex flex-col items-center lg:items-end gap-3">
                                        <span className="text-[10px] font-black text-blue-500 tracking-[0.4em] uppercase italic">Direct Collaboration</span>
                                        <div className="text-xl md:text-3xl lg:text-4xl font-black text-slate-900 tracking-tighter flex items-center gap-4 hover:scale-[1.02] transition-transform duration-500 cursor-pointer select-all select-none underline decoration-slate-100 underline-offset-8 decoration-8 break-all">
                                            mihail777@naver.com
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
