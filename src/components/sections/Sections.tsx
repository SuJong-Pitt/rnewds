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
        <section id="contact" className="py-32 md:py-48 px-6 bg-slate-50 relative overflow-hidden">
            {/* Cinematic Atmospheric Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.05)_0%,transparent_50%)]"></div>
                <div className="absolute bottom-0 right-0 w-[80%] h-full bg-[radial-gradient(circle_at_100%_100%,rgba(139,92,246,0.03)_0%,transparent_50%)]"></div>

                {/* Subtle Floating Light Leaks */}
                <motion.div
                    animate={{
                        opacity: [0.3, 0.5, 0.3],
                        scale: [1, 1.2, 1],
                        rotate: [0, 45, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-blue-100/30 blur-[150px] rounded-full"
                />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white/40 backdrop-blur-xl rounded-[40px] md:rounded-[100px] border border-slate-100 p-8 md:p-32 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] relative overflow-hidden"
                >
                    {/* Top Lighting Effect */}
                    <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[60%] h-[30%] bg-blue-500/5 blur-[120px] rounded-full"></div>

                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div className="space-y-10 md:space-y-12">
                            <div className="space-y-6 md:space-y-10 text-center lg:text-left">
                                <span className="inline-block text-[10px] font-black tracking-[0.4em] text-blue-600 uppercase italic bg-blue-50/50 px-3 py-1 rounded-full w-fit mx-auto lg:mx-0">Elevate Your Performance</span>

                                <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-7xl font-heading font-black text-slate-950 tracking-tighter leading-[1.3] md:leading-tight text-balance break-keep">
                                    <div className="mb-1 md:mb-4">제품이 <span className="text-slate-950">꼭 팔리길</span></div>
                                    <div className="mb-1 md:mb-4">바라는 마음,</div>
                                    <div className="h-4 md:h-10" />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-[length:200%_auto] animate-gradient-x italic inline-block pb-1 lg:mt-2 text-3xl sm:text-5xl md:text-8xl lg:text-[7rem] leading-[1.2] md:leading-[1.1]">
                                        <div className="md:hidden whitespace-nowrap">결과로 보답합니다.</div>
                                        <div className="hidden md:block">
                                            <div className="mb-2 md:mb-4">결과로</div>
                                            <div>보답합니다.</div>
                                        </div>
                                    </span>
                                </h2>

                                <div className="h-6 md:h-8" />

                                <div className="text-[14px] md:text-xl lg:text-2xl text-slate-500 font-medium max-w-lg mx-auto lg:mx-0 leading-[1.5] md:leading-tight break-keep tracking-tight text-balance">
                                    <div className="mb-1 md:mb-4">
                                        <span className="text-slate-500 font-bold">소비자 심리</span>를 기준으로 상품이 팔리게
                                    </div>
                                    <div className="mb-2 md:mb-5">
                                        완벽히 정리합니다. 복잡한 고민은 내려놓고
                                    </div>
                                    <span className="text-slate-950 font-black italic border-b border-blue-500/30 pb-0.5 md:mt-2 md:inline-block">이제 믿고 맡기시면 됩니다.</span>
                                </div>
                            </div>

                            <div className="flex flex-col items-center lg:items-start gap-3 text-slate-400 font-mono text-[9px] tracking-[0.2em] uppercase opacity-40">
                                <span className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></div>
                                    R:NEW DESIGN STUDIO / OFFICIAL CHANNEL
                                </span>
                                <span className="lg:pl-3.5">ESTABLISHED FOR STRATEGIC PARTNERS</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center lg:items-end w-full relative pt-4 lg:pt-0">
                            {/* Magnetic Luxury Hub */}
                            <motion.div
                                className="w-full max-w-md lg:max-w-xl relative group/suite"
                                whileHover={{ scale: 1.01 }}
                                transition={{ type: "spring", stiffness: 100 }}
                            >
                                <div className="absolute -inset-10 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 blur-[100px] opacity-0 group-hover/suite:opacity-100 transition-opacity duration-1000"></div>

                                <a
                                    href="https://pf.kakao.com/_xaxgJdX/chat"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative flex flex-col items-center lg:items-end w-full group/btn"
                                >
                                    <div className="relative mb-6 md:mb-12">
                                        <div className="absolute inset-0 bg-yellow-400 opacity-10 blur-[50px] rounded-full scale-150 animate-pulse"></div>
                                        <LuxuryKakaoIcon size={100} className="md:w-[140px] md:h-[140px]" />
                                    </div>

                                    <div className="w-full h-auto py-6 md:py-12 px-6 md:px-16 rounded-[2rem] md:rounded-[60px] bg-slate-950 text-white flex items-center justify-between group-hover/btn:bg-yellow-400 group-hover/btn:text-slate-950 transition-all duration-500 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] group-hover/btn:shadow-[0_40px_100px_-20px_rgba(250,204,21,0.3)]">
                                        <span className="text-xl md:text-3xl font-black tracking-tighter whitespace-nowrap">프로젝트 문의하기</span>
                                        <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/20 group-hover/btn:border-slate-950/20 flex items-center justify-center group-hover/btn:border-slate-950 transition-all shrink-0 ml-4">
                                            <ArrowRight size={20} className="md:w-7 md:h-7 group-hover/btn:translate-x-3 transition-transform duration-500" />
                                        </div>
                                    </div>
                                </a>

                                <div className="mt-16 pt-16 border-t border-slate-100 flex flex-col items-center lg:items-end w-full group/contact">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-[10px] font-black text-blue-600 tracking-[0.5em] uppercase italic">Signature Collaboration</span>
                                    </div>

                                    <a href="mailto:admin@rnewds.com" className="group/mail">
                                        <div className="text-xl md:text-3xl lg:text-4xl font-black text-slate-900 tracking-tighter flex items-center gap-4 hover:scale-[1.02] transition-all duration-500 break-all border-b-8 border-blue-50/50 hover:border-blue-100 group-hover/mail:text-blue-600">
                                            admin@rnewds.com
                                        </div>
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
