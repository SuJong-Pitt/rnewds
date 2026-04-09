"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Clock, RotateCcw, Layout, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const plans = [
    {
        name: "CORE",
        level: "STANDARD",
        title: "기본형 상세페이지",
        subtitle: "Essential Sales Strategy",
        description: [
            "3~4섹션 고밀도 구성",
            "구매 전환 핵심 트리거 설계",
            "기획 + 디자인 원스톱 진행",
            "스타트업 / 1인 기업 추천"
        ],
        price: "99,000",
        period: "3 DAYS",
        revisions: "1회",
        drafts: "1개",
        color: "from-cyan-500 to-emerald-500",
        accent: "bg-cyan-500",
        theme: "light",
        popular: false
    },
    {
        name: "ELITE",
        level: "DELUXE",
        title: "구성 강화 상세페이지",
        subtitle: "High-Conversion Flow",
        description: [
            "6~7섹션 풀 패키지 구성",
            "심리학 기반 구매 흐름 설계",
            "고급 그래픽 리터칭 포함",
            "가장 높은 재주문율"
        ],
        price: "249,000",
        period: "7 DAYS",
        revisions: "2회",
        drafts: "1개",
        color: "from-blue-600 to-indigo-600",
        accent: "bg-blue-600",
        theme: "dark",
        popular: true
    },
    {
        name: "ULTIMATE",
        level: "PREMIUM",
        title: "브랜드형 상세페이지",
        subtitle: "Premium Brand Legacy",
        description: [
            "10섹션 이상 무제한 구성",
            "브랜드 아이덴티티 전용 수립",
            "매출 극대화 타겟 맞춤 기획",
            "프리미엄 브랜드 전용"
        ],
        price: "590,000",
        period: "10 DAYS",
        revisions: "3회",
        drafts: "1개",
        color: "from-fuchsia-600 to-purple-700",
        accent: "bg-fuchsia-600",
        theme: "light",
        popular: false
    }
];

export function PricingSection() {
    return (
        <section id="pricing" className="py-16 md:py-24 bg-[#FAFAFA] relative overflow-hidden">
            {/* Background Ornaments */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_80%_20%,#f0f0f0_0%,transparent_50%)]"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-full bg-[radial-gradient(circle_at_20%_80%,#f0f0f0_0%,transparent_50%)]"></div>

            <div className="container mx-auto max-w-7xl relative z-10 px-6">
                <motion.div {...fadeInUp} className="mb-12 md:mb-16">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="max-w-3xl">
                            <span className="text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase mb-4 block">Pricing Architecture</span>
                            <h2 className="text-4xl md:text-7xl lg:text-8xl font-heading font-black text-slate-950 tracking-tighter leading-[0.9] mb-4">
                                압도적 성과를 <br />
                                위한 <span className="text-slate-300">합리적 설계.</span>
                            </h2>
                        </div>
                        <div className="max-w-md pb-2">
                            <p className="text-slate-500 text-base md:text-lg font-light leading-relaxed break-keep">
                                단순한 페이지 제작을 넘어, 브랜드의 가치를 증명하고 실제 매출로 이어지는 가장 강력한 전술을 제안합니다.
                            </p>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-end">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className={`relative group flex flex-col h-full rounded-[2rem] md:rounded-[2.5rem] p-8 transition-all duration-700 ${plan.theme === "dark"
                                    ? "bg-slate-950 text-white shadow-[0_40px_80px_-15px_rgba(0,0,0,0.4)] z-20 scale-105"
                                    : "bg-white text-slate-950 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] z-10"
                                }`}
                        >
                            {/* Card Decoration */}
                            <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${plan.color} rounded-t-full`}></div>

                            {/* Badge for Popular */}
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[9px] font-black tracking-widest px-4 py-1.5 rounded-full shadow-lg flex items-center gap-2 z-30">
                                    <Star size={9} fill="currentColor" />
                                    MOST SELECTED
                                </div>
                            )}

                            {/* Header */}
                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className={`text-[10px] font-black tracking-[0.3em] uppercase mb-1 ${plan.theme === "dark" ? "text-slate-400" : "text-slate-400"}`}>
                                            {plan.name} / {plan.level}
                                        </p>
                                        <h3 className="text-xl md:text-3xl font-black tracking-tighter mb-1">
                                            {plan.title}
                                        </h3>
                                        <p className={`text-xs font-medium ${plan.theme === "dark" ? "text-indigo-400" : "text-blue-500"}`}>
                                            {plan.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className={`w-full h-px mb-8 ${plan.theme === "dark" ? "bg-slate-800" : "bg-slate-100"}`}></div>

                            {/* Bullet Points */}
                            <ul className="space-y-4 mb-10 flex-grow">
                                {plan.description.map((desc, idx) => (
                                    <li key={idx} className="flex items-start gap-3 group/item">
                                        <div className={`mt-1 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${plan.theme === "dark" ? "bg-white/10 text-white" : "bg-slate-950 text-white"}`}>
                                            <Check size={10} strokeWidth={4} />
                                        </div>
                                        <span className={`text-sm md:text-base font-medium leading-tight break-keep ${plan.theme === "dark" ? "text-slate-300" : "text-slate-600"}`}>
                                            {desc}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* Specs Row */}
                            <div className={`grid grid-cols-3 gap-2 py-6 border-t border-b mb-8 ${plan.theme === "dark" ? "border-slate-800" : "border-slate-50"}`}>
                                <div className="text-center">
                                    <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">Duration</p>
                                    <p className="text-xs md:text-sm font-black tracking-tight">{plan.period}</p>
                                </div>
                                <div className="text-center border-x border-inherit">
                                    <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">Revision</p>
                                    <p className="text-xs md:text-sm font-black tracking-tight">{plan.revisions}</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">Drafts</p>
                                    <p className="text-xs md:text-sm font-black tracking-tight">{plan.drafts}</p>
                                </div>
                            </div>

                            {/* Price Section */}
                            <div className="space-y-6">
                                <div className="flex flex-col items-center">
                                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest italic mb-1">VAT Included</span>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl md:text-6xl font-black tracking-tighter">
                                            {plan.price}
                                        </span>
                                        <span className="text-sm font-bold">KRW</span>
                                    </div>
                                </div>

                                <Button
                                    size="lg"
                                    asChild
                                    className={`relative w-full py-7 rounded-xl text-base font-black tracking-tight overflow-hidden transition-all duration-500 hover:scale-[1.03] active:scale-95 ${plan.theme === "dark"
                                            ? "bg-white text-slate-950 hover:bg-slate-100"
                                            : "bg-slate-950 text-white hover:bg-slate-900 shadow-lg"
                                        }`}
                                >
                                    <a href="https://pf.kakao.com/_xaxgJdX" target="_blank" rel="noopener noreferrer">
                                        <span className="relative z-10 flex items-center gap-3">
                                            상담 및 프로젝트 시작
                                            <ArrowRight size={18} />
                                        </span>
                                    </a>
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-16 pt-12 border-t border-slate-200 flex flex-wrap items-center justify-center gap-x-12 gap-y-6"
                >
                    <div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity">
                        <Star className="text-slate-950" size={18} fill="currentColor" />
                        <span className="text-base font-black tracking-tighter">PREMIUM QUALITY</span>
                    </div>
                    <div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity">
                        <Clock className="text-slate-950" size={18} />
                        <span className="text-base font-black tracking-tighter">ACCURATE DELIVERY</span>
                    </div>
                    <div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity">
                        <Sparkles className="text-slate-950" size={18} />
                        <span className="text-base font-black tracking-tighter">STRATEGIC DESIGN</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
