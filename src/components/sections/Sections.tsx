"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LuxuryKakaoIcon } from "@/components/ui/LuxuryKakaoIcon";
import {
    ArrowRight,
    Mail,
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
import { SiFigma } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";

const skills = [
    {
        name: "Photoshop", level: "Master", value: 95,
        desc: "상상하는 모든 비주얼을 현실로 그려냅니다.",
        icon: <span className="font-black text-[13px] tracking-tight leading-none">Ps</span>,
        color: "text-blue-600",
        bg: "bg-blue-600",
        gradient: "from-blue-400 via-blue-600 to-indigo-600",
        shadow: "shadow-blue-500/20"
    },
    {
        name: "Illustrator", level: "Expert", value: 85,
        desc: "데이터 기반의 정확한 벡터 설계를 구현합니다.",
        icon: <span className="font-black text-[13px] tracking-tight leading-none italic">Ai</span>,
        color: "text-orange-500",
        bg: "bg-orange-500",
        gradient: "from-orange-400 via-orange-500 to-amber-500",
        shadow: "shadow-orange-500/20"
    },
    {
        name: "Figma", level: "Master", value: 98,
        desc: "기획부터 디자인까지 기틀이 되는 정밀한 상세페이지를 설계합니다.",
        icon: <SiFigma size={22} />,
        color: "text-purple-600",
        bg: "bg-purple-600",
        gradient: "from-purple-400 via-purple-600 to-pink-500",
        shadow: "shadow-purple-500/20"
    },
    {
        name: "UI/UX Design", level: "Strategic", value: 92,
        desc: "구매 동선을 고려한 논리적 배치를 설계합니다.",
        icon: <MdDesignServices size={24} />,
        color: "text-cyan-500",
        bg: "bg-cyan-500",
        gradient: "from-cyan-400 via-cyan-500 to-emerald-500",
        shadow: "shadow-cyan-500/20"
    },
];

export function TechStack() {
    return (
        <section id="skills" className="py-16 md:py-24 bg-[#f8f9fc] overflow-hidden relative">
            {/* Atmospheric glow blobs */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-400/[0.04] blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-400/[0.04] blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto max-w-5xl relative z-10 px-6">
                {/* Section Header — Centered */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-10 md:mb-14"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950 text-white text-[10px] font-black uppercase tracking-[0.35em] mb-5 shadow-xl">
                        <Sparkles size={11} className="text-yellow-400 animate-pulse" />
                        사용 툴
                    </div>
                    <h2 className="text-3xl md:text-5xl font-heading font-black text-slate-900 tracking-tighter leading-tight">
                        디자인을 완성하는
                        <br className="block md:hidden" />
                        {" "}<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 italic pr-2">도구들</span>
                    </h2>
                </motion.div>

                {/* Icon Card Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center gap-3 py-8 px-5 rounded-[24px] bg-white border border-slate-100/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(37,99,235,0.1)] hover:-translate-y-1 transition-all duration-400 group relative overflow-hidden"
                        >
                            {/* Hover color glow */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br ${skill.gradient} via-transparent to-transparent opacity-[0.04]`} />

                            {/* Icon */}
                            <div className="relative">
                                <div className={`absolute inset-0 rounded-xl blur-xl scale-150 opacity-0 group-hover:opacity-40 transition-all duration-500 ${skill.bg}`} />
                                <div className={`${skill.color} w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-slate-950 group-hover:text-white group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 relative z-10`}>
                                    {skill.icon}
                                </div>
                            </div>

                            {/* Tool Name */}
                            <span className="text-sm md:text-base font-black text-slate-700 group-hover:text-slate-950 tracking-tight text-center transition-colors duration-300">
                                {skill.name}
                            </span>
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
                            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-[1.2] tracking-tighter text-balance break-keep"
                        >
                            전문분야의 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 animate-gradient-x bg-[length:200%_auto] italic">기준</span>이 되는 <br className="hidden sm:block" />
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
    return (
        <section id="contact" className="py-16 md:py-32 px-4 md:px-10 bg-slate-50 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(37,99,235,0.06)_0%,transparent_60%)]" />
                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.05)_0%,transparent_60%)]" />
            </div>

            <div className="w-full max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-slate-950 rounded-3xl md:rounded-[56px] shadow-[0_40px_100px_rgba(0,0,0,0.3)] relative overflow-hidden"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-32 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />

                    <div className="p-6 sm:p-10 md:p-16 lg:p-20">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="flex items-center gap-2 mb-8 md:mb-14"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse shrink-0" />
                            <span className="text-[9px] md:text-xs font-black tracking-[0.4em] text-blue-400 uppercase">Elevate Your Performance</span>
                        </motion.div>

                        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-end">
                            {/* Left: Copy */}
                            <div>
                                <motion.h2
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, duration: 0.8 }}
                                    className="text-white font-heading font-black tracking-tighter leading-[1.2] text-3xl sm:text-4xl md:text-6xl lg:text-7xl break-keep"
                                >
                                    제품이 꼭<br />팔리길<br />바라는 마음,
                                </motion.h2>

                                <motion.div
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.35, duration: 0.8 }}
                                    className="mt-4 md:mt-8"
                                >
                                    <span className="font-heading font-black tracking-tighter leading-[1.15] text-4xl sm:text-5xl md:text-7xl lg:text-8xl italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 pr-4 inline-block">
                                        결과로<br />보답합니다.
                                    </span>
                                </motion.div>

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 }}
                                    className="mt-6 md:mt-10 text-slate-400 text-sm md:text-base leading-relaxed break-keep"
                                >
                                    <span className="text-white font-semibold">소비자 심리</span>를 기준으로 상품이 팔리게 완벽히 정리합니다.{" "}
                                    복잡한 고민은 내려놓고{" "}
                                    <span className="text-white font-black italic">이제 믿고 맡기시면 됩니다.</span>
                                </motion.p>
                            </div>

                            {/* Right: CTA */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="flex flex-col gap-4"
                            >
                                {/* Kakao CTA */}
                                <a
                                    href="https://pf.kakao.com/_xaxgJdX/chat"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-between gap-3 w-full bg-yellow-400 active:bg-yellow-300 text-slate-950 rounded-2xl px-5 md:px-8 py-5 md:py-7 transition-all duration-300 shadow-[0_20px_60px_rgba(250,204,21,0.2)]"
                                >
                                    <div className="flex items-center gap-3 md:gap-5 min-w-0">
                                        <LuxuryKakaoIcon size={40} className="shrink-0" />
                                        <div className="min-w-0">
                                            <div className="text-[9px] font-bold tracking-[0.3em] uppercase opacity-60 mb-0.5">KakaoTalk</div>
                                            <div className="text-base md:text-xl font-black tracking-tighter whitespace-nowrap">프로젝트 문의하기</div>
                                        </div>
                                    </div>
                                    <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-slate-950/10 flex items-center justify-center shrink-0">
                                        <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                                    </div>
                                </a>

                                {/* Email CTA */}
                                <a
                                    href="mailto:admin@rnewds.com"
                                    className="group flex items-center justify-between gap-3 w-full bg-white/5 border border-white/10 text-white rounded-2xl px-5 md:px-8 py-4 md:py-5 transition-all duration-300"
                                >
                                    <div className="flex items-center gap-3 md:gap-4 min-w-0">
                                        <div className="w-9 h-9 rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0">
                                            <Mail size={16} className="text-blue-400" />
                                        </div>
                                        <div className="min-w-0">
                                            <div className="text-[9px] font-bold tracking-[0.3em] uppercase text-slate-400 mb-0.5">Email</div>
                                            <div className="text-sm md:text-base font-black tracking-tight truncate">admin@rnewds.com</div>
                                        </div>
                                    </div>
                                    <ArrowRight size={14} className="text-slate-500 group-hover:translate-x-0.5 group-hover:text-white transition-all duration-300 shrink-0" />
                                </a>

                                {/* Footnote */}
                                <p className="text-center text-slate-600 text-[9px] md:text-[11px] tracking-widest uppercase pt-1">
                                    R:NEW DESIGN STUDIO &middot; Established for Strategic Partners
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
                </motion.div>
            </div>
        </section>
    );
}

