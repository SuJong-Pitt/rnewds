"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle, Zap, Layers, Target, Clock, FileText, PenTool, CheckCircle2, Sparkles, Layout, MousePointer2, Palette } from "lucide-react";

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

export function ExpertiseSection() {
    return (
        <section className="section-padding bg-slate-950 text-white relative overflow-hidden">
            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
                    <motion.div {...fadeInUp} className="space-y-8 md:space-y-12">
                        <div className="space-y-6 md:space-y-8">
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-blue-400 shadow-2xl">
                                <span className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                                    <span className="font-bold text-[9px] uppercase tracking-[0.2em] opacity-70">Expertise</span>
                                </span>
                                <div className="w-px h-3 bg-white/10"></div>
                                <span className="font-bold text-[10px] uppercase tracking-widest md:tracking-[0.4em] text-white/90">Pedigree Archive</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-heading font-black leading-[1.1] tracking-tighter text-balance">
                                MD 디자이너 <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 animate-gradient-x bg-[length:200%_auto]">실무 15년.</span>
                            </h2>
                            <p className="text-base md:text-xl text-slate-400 font-light leading-relaxed tracking-tight text-balance">
                                "단순한 제작이 아닌 <span className="text-white font-medium">매출의 설계</span>를 합니다. <br className="hidden md:block" />
                                15년간 비즈니스 현장에서 쌓아온 실전 감각으로 <br className="hidden md:block" />
                                당신의 제품을 해당 분야의 압도적 주인공으로 만듭니다."
                            </p>
                        </div>

                        <div className="grid gap-4">
                            {[
                                "구매 전환을 일으키는 시각적 심리 설계",
                                "제품의 본질을 꿰뚫는 전략적 카피라이팅"
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-4 text-base md:text-lg font-light text-slate-300">
                                    <div className="w-1 h-1 rounded-full bg-blue-50 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
                                    <span>{text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="relative"
                    >
                        <div className="relative aspect-square md:aspect-[4/3] rounded-[24px] md:rounded-[40px] border border-white/10 overflow-hidden shadow-2xl">
                            <Image
                                src="/images/rnew_identity.png"
                                alt="Rnew Design Studio Identity"
                                fill
                                className="object-cover transition-transform duration-1000 hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export function ValuePointsSection() {
    const points = [
        {
            icon: <MousePointer2 size={32} />,
            title: "압도적 시각 임팩트",
            desc: "0.1초 만에 고객의 스크롤을 멈추게 하는 강력한 첫인상을 구현합니다."
        },
        {
            icon: <Layout size={32} />,
            title: "논리적 서사 설계",
            desc: "치밀하게 계산된 흐름으로 고객을 구매 버튼까지 매끄럽게 인도합니다."
        },
        {
            icon: <Target size={32} />,
            title: "심리적 확신 구축",
            desc: "데이터와 심리 분석을 결합하여 제품에 대한 절대적 신뢰를 완성합니다."
        },
        {
            icon: <PenTool size={32} />,
            title: "결과를 만드는 카피",
            desc: "제품의 소구점을 매출로 연결하는 가장 직관적이고 강력한 언어를 제안합니다."
        }
    ];

    return (
        <section className="section-padding-large bg-slate-50 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_20%,rgba(37,99,235,0.03),transparent_70%)] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-full bg-[radial-gradient(circle_at_30%_80%,rgba(37,99,235,0.02),transparent_70%)] pointer-events-none"></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <motion.div {...fadeInUp} className="text-center mb-12 md:mb-20">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50/50 backdrop-blur-md border border-blue-100 text-blue-600 shadow-sm mb-10 mx-auto whitespace-nowrap">
                        <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse shadow-[0_0_8px_rgba(37,99,235,0.4)]"></span>
                            <span className="font-bold text-[9px] uppercase tracking-[0.2em] opacity-70">Logic</span>
                        </span>
                        <div className="w-px h-3 bg-blue-200"></div>
                        <span className="font-bold text-[10px] uppercase tracking-widest md:tracking-[0.4em]">The Core Essence</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black text-slate-950 tracking-tighter leading-[1.1] mb-10 text-balance">
                        매출을 완성하는 <br />
                        <span className="text-blue-600 italic px-1">4가지 본질.</span>
                    </h2>
                    <div className="w-20 h-[1px] bg-blue-200 mx-auto opacity-50"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-14">
                    {points.map((point, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="p-8 md:p-14 rounded-[60px] bg-white/40 backdrop-blur-xl border border-white shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(37,99,235,0.06)] hover:border-blue-100 transition-all duration-700 group relative overflow-hidden flex flex-col h-full"
                        >
                            <div className="absolute -right-4 top-0 text-[100px] md:text-[160px] font-black text-slate-900/[0.03] select-none pointer-events-none font-heading italic leading-none group-hover:text-blue-500/[0.05] transition-colors duration-700">
                                {String(i + 1).padStart(2, '0')}
                            </div>

                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 mb-8 md:mb-16 group-hover:bg-slate-950 group-hover:text-white transition-all duration-700 relative z-10 transform group-hover:scale-110 group-hover:rotate-6">
                                {point.icon}
                            </div>

                            <div className="relative z-10 flex-grow">
                                <h3 className="text-xl md:text-3xl font-black mb-4 md:mb-6 text-slate-900 leading-[1.1] tracking-tighter group-hover:text-blue-600 transition-colors">
                                    {point.title}
                                </h3>
                                <p className="text-sm md:text-xl text-slate-400 font-light leading-relaxed tracking-tight group-hover:text-slate-500 transition-colors break-keep text-balance">
                                    {point.desc}
                                </p>
                            </div>

                            <div className="mt-12 w-0 group-hover:w-full h-[1px] bg-blue-100 transition-all duration-1000 origin-left"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function ProcessSection() {
    const steps = [
        { icon: <MessageCircle />, title: "심층 상담 및 진단", desc: "제품 소구점 파악 & 마케팅 방향 진단", color: "text-blue-400", bg: "bg-blue-600", shadow: "shadow-blue-500/20", glow: "from-blue-600/20" },
        { icon: <FileText />, title: "전략적 기획안 설계", desc: "논리적 설득 구조 & 기회 제안 (피그마)", color: "text-indigo-400", bg: "bg-indigo-600", shadow: "shadow-indigo-500/20", glow: "from-indigo-600/20" },
        { icon: <Zap />, title: "압도적 크리에이션", desc: "시선을 사로잡는 고퀄리티 디자인 착수", color: "text-purple-400", bg: "bg-purple-600", shadow: "shadow-purple-500/20", glow: "from-purple-600/20" },
        { icon: <CheckCircle2 />, title: "정밀 피드백 및 보정", desc: "고객 지향적 수정을 통한 완성도 극대화", color: "text-rose-400", bg: "bg-rose-600", shadow: "shadow-rose-500/20", glow: "from-rose-600/20" },
        { icon: <Layers />, title: "마스터피스 전달", desc: "최적화된 최종 파일 패키지 전달", color: "text-orange-400", bg: "bg-orange-600", shadow: "shadow-orange-500/20", glow: "from-orange-600/20" },
        { icon: <Clock />, title: "전환율 성과 팔로업", desc: "릴리즈 후 성과 모니터링 및 추가 제안", color: "text-cyan-400", bg: "bg-cyan-600", shadow: "shadow-cyan-500/20", glow: "from-cyan-600/20" }
    ];

    return (
        <section className="section-padding bg-slate-950 text-white overflow-hidden relative">
            {/* 1. Atmospheric Volumetric Lighting (Luxury Background Deep Space) */}
            <motion.div
                animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 -left-20 w-[600px] h-[600px] bg-blue-600/5 blur-[140px] rounded-full pointer-events-none"
            />
            <motion.div
                animate={{ x: [0, -100, 0], y: [0, 100, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-0 -right-20 w-[700px] h-[700px] bg-purple-600/5 blur-[160px] rounded-full pointer-events-none"
            />
            <motion.div
                animate={{ x: [0, 50, 0], y: [0, -50, 0], scale: [1, 1.3, 1] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber-600/[0.03] blur-[110px] rounded-full pointer-events-none"
            />

            {/* Architectural Flow Grid */}
            <div className="absolute inset-0 opacity-[0.05] select-none pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#2563eb 0.5px, transparent 0.5px), linear-gradient(90deg, #2563eb 0.5px, transparent 0.5px)', backgroundSize: '60px 60px' }}></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <motion.div {...fadeInUp} className="text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-blue-400 shadow-2xl mb-8 mx-auto whitespace-nowrap">
                        <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                            <span className="font-bold text-[9px] uppercase tracking-[0.2em] opacity-70">Flow</span>
                        </span>
                        <div className="w-px h-3 bg-white/10"></div>
                        <span className="font-bold text-[10px] uppercase tracking-widest md:tracking-[0.4em] text-white/90">Architectural Process</span>
                    </div>
                    <h2 className="text-3xl md:text-[3.5rem] font-heading font-black text-white tracking-tighter leading-tight relative inline-block text-balance">
                        명작이 탄생하는 <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 italic px-1 animate-gradient-x bg-[length:200%_auto]">6단계의 세부적인 설계.</span>
                        <div className="absolute -right-12 -top-6 text-[80px] md:text-[100px] font-black text-white/5 -z-10 select-none">06</div>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="group relative"
                        >
                            {/* Animated Spectral Connectors (Horizontal on LG) */}
                            {i % 3 !== 2 && (
                                <div className="hidden lg:block absolute -right-7 top-1/2 -translate-y-1/2 w-10 h-[1.5px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0 overflow-hidden">
                                    <motion.div
                                        animate={{ x: ["-100%", "200%"] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.3 }}
                                        className={`w-full h-full bg-gradient-to-r from-transparent via-${step.color.split('-')[1]}-400 to-transparent`}
                                    />
                                </div>
                            )}

                            <div className="bg-white/[0.03] backdrop-blur-3xl p-7 md:p-14 rounded-[40px] md:rounded-[48px] border border-white/5 group-hover:border-white/20 transition-all duration-700 relative overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.1)] group-hover:shadow-[0_40px_100px_rgba(0,0,0,0.3)]">
                                {/* Gradient Hover Background (Spectral) */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${step.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

                                <div className="flex justify-between items-start mb-10 md:mb-16 relative z-10">
                                    {/* Orbital Icon Glow */}
                                    <div className="relative">
                                        <div className={`absolute inset-0 rounded-2xl blur-2xl ${step.bg} opacity-0 group-hover:opacity-40 transition-opacity duration-700 scale-150`}></div>
                                        <div className={`relative w-14 h-14 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center ${step.color} group-hover:bg-slate-950 group-hover:text-white transition-all duration-500 shadow-sm group-hover:-rotate-6`}>
                                            {step.icon}
                                        </div>
                                    </div>
                                    <div className={`text-6xl md:text-8xl font-black text-white/[0.03] ${step.color} opacity-0 group-hover:opacity-20 transition-all duration-1000 tracking-tighter italic px-2 transform group-hover:scale-110`}>
                                        {String(i + 1).padStart(2, '0')}
                                    </div>
                                </div>
                                <div className="relative z-10 space-y-4 md:space-y-6">
                                    <h3 className="text-xl md:text-4xl font-black text-white tracking-tighter leading-tight group-hover:translate-x-2 transition-transform duration-500 text-balance">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm md:text-xl text-slate-400 font-light leading-relaxed tracking-tight group-hover:text-slate-200 transition-colors break-keep text-balance">
                                        {step.desc}
                                    </p>
                                </div>

                                {/* Flow Progress Line (Spectral) */}
                                <div className={`mt-10 h-[1.5px] w-0 group-hover:w-full transition-all duration-1000 origin-left ${step.bg} bg-opacity-30`}></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function PricingSection() {
    const plans = [
        {
            name: "STANDARD",
            price: "30,000",
            target: "배너, 이벤트페이지 디자인",
            specs: "(가로 1000픽셀 이하, 세로 1,000픽셀 이하 기준)",
            features: [
                "클릭 유도 인트로/이벤트 배너",
                "카피라이팅 진단 서비스 포함",
                "작업일 최대 2일",
                "수정 횟수 2회"
            ],
            color: "from-slate-400 to-slate-600",
            glow: "bg-slate-400/10",
            isPopular: false
        },
        {
            name: "DELUXE",
            price: "150,000",
            target: "기획안이 있고 디자인만 필요하신 경우",
            specs: "(가로 860픽셀, 세로 1만 픽셀/5섹션 기준)",
            features: [
                "제품 핵심 소구점 시각화",
                "레퍼런스 최적화 디자인",
                "작업일 최대 5일",
                "수정 횟수 무제한"
            ],
            color: "from-blue-500 to-indigo-600",
            glow: "bg-blue-500/20",
            isPopular: true
        },
        {
            name: "PREMIUM",
            price: "300,000",
            target: "기획 + 디자인",
            specs: "(가로 860픽셀, 세로 1만 4천 픽셀/7섹션 기준)",
            features: [
                "기획부터 디자인까지 올인원",
                "전통적 맥락의 서사 설계",
                "작업일 최대 7일",
                "수정 횟수 무제한"
            ],
            color: "from-purple-500 to-indigo-700",
            glow: "bg-purple-500/20",
            isPopular: false
        }
    ];

    return (
        <section id="pricing" className="section-padding bg-slate-50 relative overflow-hidden">
            {/* Architectural Background */}
            <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none flex items-center justify-center -z-10">
                <span className="text-[15vw] font-black text-slate-900 tracking-tighter leading-none italic uppercase">ELITE_PRICING</span>
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <motion.div {...fadeInUp} className="text-center mb-24 md:mb-32">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold text-[10px] uppercase tracking-widest md:tracking-[0.4em] mb-8 mx-auto whitespace-nowrap shadow-sm">
                        Strategic Investment
                    </div>
                    <h2 className="text-3xl md:text-[4rem] font-heading font-black text-slate-950 tracking-tighter leading-tight relative text-balance">
                        옵션별 <span className="text-blue-600 italic px-1 underline decoration-blue-100 decoration-8 underline-offset-4">가격 안내.</span>
                    </h2>
                    <p className="text-slate-500 mt-6 md:mt-8 text-base md:text-xl font-light max-w-2xl mx-auto break-keep text-balance">
                        압도적인 결과물로 비즈니스의 지위를 격상시킵니다. <br className="hidden md:block" />
                        당신의 한계를 넘어설 세 가지 하이엔드 솔루션입니다.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className={`relative p-7 md:p-14 rounded-[50px] md:rounded-[60px] bg-white border ${plan.isPopular ? "border-blue-200 shadow-[0_40px_100px_rgba(37,99,235,0.1)] ring-1 ring-blue-500/10" : "border-slate-100 shadow-[0_30px_70px_rgba(0,0,0,0.03)]"} group overflow-hidden transition-all duration-700 hover:-translate-y-4`}
                        >
                            {/* Decorative Label for Popular */}
                            {plan.isPopular && (
                                <div className="absolute top-10 right-10 flex items-center gap-2 px-3 py-1 bg-blue-600 text-white rounded-full text-[9px] font-black tracking-widest italic z-20 shadow-lg">
                                    <Sparkles size={10} className="text-blue-200" />
                                    BEST VALUE
                                </div>
                            )}

                            {/* Volumetric Glow */}
                            <div className={`absolute -top-20 -right-20 w-64 h-64 ${plan.glow} blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000`}></div>

                            <div className="relative z-10 space-y-12">
                                <div className="space-y-4">
                                    <h3 className={`text-sm font-black tracking-[0.4em] text-transparent bg-clip-text bg-gradient-to-r ${plan.color}`}>{plan.name}</h3>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">{plan.price}</span>
                                        <span className="text-lg font-bold text-slate-400 tracking-tighter">원</span>
                                    </div>
                                    <div className="pt-4 border-t border-slate-100">
                                        <p className="text-lg md:text-xl font-bold text-slate-900 leading-tight break-keep mb-2">{plan.target}</p>
                                        <p className="text-xs md:text-sm font-light text-slate-400 break-keep">{plan.specs}</p>
                                    </div>
                                </div>

                                <ul className="space-y-6 pt-6">
                                    {plan.features.map((feature, j) => (
                                        <li key={j} className="flex items-start gap-4 text-slate-600 group/item">
                                            <div className="mt-2 w-2 h-2 rounded-full bg-blue-500/20 group-hover/item:bg-blue-600 transition-all shadow-[0_0_10px_rgba(37,99,235,0)] group-hover/item:shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
                                            <span className="text-base md:text-xl font-light tracking-tight break-keep group-hover/item:text-slate-950 transition-colors">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Sophisticated Bottom Accent */}
                                <div className="pt-10 flex justify-between items-center opacity-30 group-hover:opacity-100 transition-opacity duration-1000">
                                    <div className="w-12 h-px bg-slate-200 group-hover:w-20 group-hover:bg-blue-300 transition-all duration-700"></div>
                                    <Sparkles size={14} className="text-blue-500" />
                                    <div className="w-12 h-px bg-slate-200 group-hover:w-20 group-hover:bg-blue-300 transition-all duration-700"></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
