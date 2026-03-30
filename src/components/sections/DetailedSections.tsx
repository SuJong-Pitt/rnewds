"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle, HelpCircle, UserCheck, Zap, Layers, Target, Clock, FileText, CreditCard, PenTool, CheckCircle2, ArrowRight, Sparkles, Box, Layout, MousePointer2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};


export function ExpertiseSection() {
    return (
        <section className="py-20 md:py-40 px-6 bg-slate-950 text-white relative overflow-hidden">
            {/* Studio Overlay - Minimalist */}
            <div className="absolute inset-0 opacity-[0.05] select-none pointer-events-none">
                {/* Simplified background for clarity */}
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 md:gap-32 items-center">
                    <motion.div {...fadeInUp} className="space-y-12 md:space-y-20">
                        <div className="space-y-6 md:space-y-8">
                            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-[10px] uppercase tracking-[0.3em]">
                                <Sparkles size={12} />
                                Expertise Pedigree
                            </div>
                            <h2 className="text-3xl md:text-6xl font-heading font-black leading-[1.1] tracking-tighter">
                                MD 디자이너 <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 animate-gradient-x bg-[length:200%_auto]">실무 15년.</span>
                            </h2>
                            <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed tracking-tight">
                                "단순한 제작이 아닌 <span className="text-white font-medium">매출의 설계</span>를 합니다. <br className="hidden md:block" />
                                15년간 시장에서 쌓아온 실전 감각으로 <br className="hidden md:block" />
                                당신의 제품을 시장의 압도적 주인공으로 만듭니다."
                            </p>
                        </div>

                        <div className="grid gap-4">
                            {[
                                "구매 전환을 일으키는 시각적 심리 설계",
                                "제품의 본질을 꿰뚫는 전략적 카피라이팅"
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-4 text-base md:text-lg font-light text-slate-300">
                                    <div className="w-1 h-1 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
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
        <section className="py-20 md:py-40 px-6 bg-slate-50 overflow-hidden relative">
            {/* Studio Overlay - Minimalist */}
            <div className="absolute top-20 right-0 opacity-[0.02] text-[200px] font-black select-none pointer-events-none"></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <motion.div {...fadeInUp} className="text-center mb-16 md:mb-24">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-blue-600 font-bold text-[10px] uppercase tracking-[0.3em] mb-8">
                        The Core Logic
                    </div>
                    <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-900 tracking-tighter leading-[1.2]">
                        매출을 완성하는 <br />
                        <span className="text-blue-600 italic">4가지 본질.</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {points.map((point, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="p-10 md:p-14 rounded-[50px] bg-slate-50/50 border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-3xl hover:shadow-blue-500/5 transition-all duration-500 group"
                        >
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 mb-10 md:mb-14 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500">
                                {point.icon}
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black mb-6 text-slate-900 leading-tight tracking-tighter">{point.title}</h3>
                            <p className="text-slate-500 text-base md:text-lg font-light leading-relaxed tracking-tight group-hover:text-slate-600">{point.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function ProcessSection() {
    const steps = [
        { icon: <MessageCircle />, title: "심층 상담 및 진단", desc: "제품 소구점 파악 & 마케팅 방향 진단" },
        { icon: <FileText />, title: "전략적 기획안 설계", desc: "논리적 설득 구조 & 기회 제안 (피그마)" },
        { icon: <Zap />, title: "압도적 크리에이션", desc: "시선을 사로잡는 고퀄리티 디자인 착수" },
        { icon: <CheckCircle2 />, title: "정밀 피드백 및 보정", desc: "고객 지향적 수정을 통한 완성도 극대화" },
        { icon: <Layers />, title: "마스터피스 전달", desc: "최적화된 최종 파일 패키지 전달" },
        { icon: <Clock />, title: "전환율 성과 팔로업", desc: "릴리즈 후 성과 모니터링 및 추가 제안" }
    ];

    return (
        <section className="py-24 md:py-48 px-6 bg-slate-950 text-white overflow-hidden relative">
            {/* Studio Technical Background */}
            <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #2563eb 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <motion.div {...fadeInUp} className="text-center mb-24 md:mb-32">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-[10px] uppercase tracking-[0.4em] mb-8">
                        Architecture Flow
                    </div>
                    <h2 className="text-4xl md:text-[4rem] font-heading font-black text-white tracking-tighter leading-tight relative inline-block">
                        명작이 탄생하는 <br />
                        <span className="text-blue-400 italic">6단계의 치밀한 공정.</span>
                        <div className="absolute -right-12 -top-6 text-[100px] font-black text-white/5 -z-10 select-none">06</div>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="group relative"
                        >
                            {/* Connection Indicator (Mobile Hidden) */}
                            {i < steps.length - 1 && (
                                <div className="hidden lg:block absolute -right-7 top-1/2 -translate-y-1/2 w-10 h-[1px] bg-white/5 z-0"></div>
                            )}

                            <div className="bg-white/5 backdrop-blur-xl p-12 md:p-14 rounded-[32px] border border-white/10 group-hover:border-blue-500/30 transition-all duration-700 relative overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.02)] group-hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] group-hover:-translate-y-2">
                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.05),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                
                                <div className="flex justify-between items-start mb-14 relative z-10">
                                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-blue-500/20 group-hover:-rotate-6">
                                        {step.icon}
                                    </div>
                                    <div className="text-5xl md:text-7xl font-black text-white/10 group-hover:text-blue-500/20 transition-colors tracking-tighter italic">
                                        {String(i + 1).padStart(2, '0')}
                                    </div>
                                </div>
                                
                                <div className="relative z-10">
                                    <h3 className="text-2xl md:text-3xl font-black mb-4 text-white tracking-tighter leading-tight group-hover:text-blue-400 transition-colors">{step.title}</h3>
                                    <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed tracking-tight group-hover:text-slate-300 transition-colors">{step.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
