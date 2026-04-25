"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Clock, RotateCcw, Layout, ArrowRight, Star, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LuxuryKakaoIcon } from "@/components/ui/LuxuryKakaoIcon";

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
            "2000px 내외",
            "1섹션 고밀도 구성",
            "이벤트, 배너 페이지",
            "간단 홍보 페이지"
        ],
        price: "45,000",
        period: "2 DAYS",
        revisions: "1회",
        drafts: "1개",
        draftsLabel: "Drafts",
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
            "6~7섹션 구성",
            "구매까지 이어지는 흐름 설계",
            "기획 + 디자인 포함",
            "가장 많이 선택"
        ],
        price: "249,000",
        period: "7 DAYS",
        revisions: "2회",
        drafts: "1개",
        draftsLabel: "Drafts",
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
            "10섹션 이상",
            "매출 극대화 타겟 맞춤 기획",
            "기획 + 연출 + 디자인 포함",
            "브랜드/매출 집중용"
        ],
        price: "590,000",
        period: "10 DAYS",
        revisions: "3회",
        drafts: "1개",
        draftsLabel: "Drafts",
        color: "from-fuchsia-600 to-purple-700",
        accent: "bg-fuchsia-600",
        theme: "light",
        popular: false
    }
];

const aiPlans = [
    {
        name: "STANDARD",
        level: "AI VISUAL",
        title: "빠른 반응 확인용",
        subtitle: "기본 연출",
        description: [
            "기본 배경/조명 연출",
            "행동 연출 미포함",
            "리터칭 미포함"
        ],
        price: "19,900",
        period: "1 DAY",
        revisions: "1회",
        drafts: "1장",
        draftsLabel: "Images",
        color: "from-slate-400 to-slate-500",
        accent: "bg-slate-400",
        theme: "light",
        popular: false
    },
    {
        name: "DELUXE",
        level: "AI VISUAL",
        title: "판매용 전환 이미지",
        subtitle: "구매유도 연출",
        description: [
            "제품 맞춤형 구매유도 연출",
            "행동 연출 포함",
            "기본 리터칭 포함"
        ],
        price: "59,000",
        period: "2 DAYS",
        revisions: "1회",
        drafts: "3장",
        draftsLabel: "Images",
        color: "from-blue-600 to-indigo-600",
        accent: "bg-blue-600",
        theme: "dark",
        popular: true
    },
    {
        name: "PREMIUM",
        level: "AI VISUAL",
        title: "상세페이지 완성형",
        subtitle: "고급 연출",
        description: [
            "프리미엄 퀄리티 고급 연출",
            "행동 연출 포함",
            "디테일 강화 리터칭 적용"
        ],
        price: "119,000",
        period: "3 DAYS",
        revisions: "2회",
        drafts: "5장",
        draftsLabel: "Images",
        color: "from-purple-600 to-fuchsia-600",
        accent: "bg-purple-600",
        theme: "light",
        popular: false
    }
];

const additionalOptions = [
    { name: "이미지 추가 (1장)", price: "15,000" },
    { name: "빠른 작업 (우선순위 배정)", price: "20,000" },
    { name: "추가 수정 (1회)", price: "10,000" },
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
                            <h2 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-heading font-black text-slate-950 tracking-tighter leading-[1.1] mb-4 flex flex-col gap-1 sm:gap-2 break-keep">
                                <span className="text-sm md:text-2xl font-medium text-slate-700 tracking-normal mb-1">불필요한 비용없이</span>
                                <span className="text-slate-950">
                                    현실적인 <span className="text-indigo-600 italic">설계.</span>
                                </span>
                            </h2>
                        </div>
                        <div className="max-w-md pb-2">
                            <p className="text-slate-500 text-base md:text-lg font-light leading-relaxed break-keep">
                                예산과 목적에 맞는 <br className="hidden md:block" />
                                <span className="text-slate-900 font-medium whitespace-nowrap">최적의 플랜을</span> 선택하세요.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Section 01: Detail Pages */}
                <motion.div {...fadeInUp} className="mb-8">
                    <div className="inline-flex items-center gap-3 mb-6">
                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                        <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">상세페이지 기획/디자인</h3>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-end">
                        {plans.map((plan, i) => (
                            <PricingCard key={plan.name} plan={plan} index={i} />
                        ))}
                    </div>
                </motion.div>

                {/* Section 02: AI Directed Images */}
                <motion.div {...fadeInUp} className="mt-24 mb-8">
                    <div className="inline-flex items-center gap-3 mb-6">
                        <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                        <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">AI 연출 이미지</h3>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-end mb-8">
                        {aiPlans.map((plan, i) => (
                            <PricingCard key={plan.name} plan={plan} index={i} />
                        ))}
                    </div>

                    {/* Additional Options */}
                    <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 flex flex-col lg:flex-row gap-6 lg:items-center justify-between shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full blur-[60px] opacity-50 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-4 lg:shrink-0">
                            <div className="flex items-center gap-2 shrink-0">
                                <Plus size={18} className="text-purple-600 shrink-0" />
                                <span className="font-black text-lg text-slate-900 whitespace-nowrap">추가 옵션</span>
                            </div>
                            <div className="hidden sm:block w-px h-6 bg-slate-200 shrink-0"></div>
                            <p className="text-sm text-slate-500 font-light break-keep">상황에 맞게 옵션을 추가하여 작업 효율을 높여보세요.</p>
                        </div>
                        <div className="relative z-10 flex flex-wrap gap-3 lg:justify-end">
                            {additionalOptions.map((opt, i) => (
                                <div key={i} className="flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-full px-4 py-2 text-sm whitespace-nowrap">
                                    <span className="font-medium text-slate-700">{opt.name}</span>
                                    <span className="text-slate-300">|</span>
                                    <span className="font-bold text-slate-900">+{opt.price}원</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

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

function PricingCard({ plan, index }: { plan: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
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
                {plan.description.map((desc: string, idx: number) => (
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
                    <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">{plan.draftsLabel}</p>
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
                    className={`relative w-full py-8 rounded-xl text-base font-black tracking-tight overflow-hidden transition-all duration-500 hover:scale-[1.03] active:scale-95 shadow-xl ${plan.theme === "dark"
                        ? "bg-white text-slate-950 hover:bg-slate-100"
                        : "bg-slate-950 text-white hover:bg-slate-900"
                        }`}
                >
                    <a href="https://pf.kakao.com/_xaxgJdX/chat" target="_blank" rel="noopener noreferrer">
                        <span className="relative z-10 flex items-center justify-center gap-4">
                            <LuxuryKakaoIcon size={24} glow={false} />
                            상담 및 프로젝트 시작
                        </span>
                    </a>
                </Button>
            </div>
        </motion.div>
    );
}
