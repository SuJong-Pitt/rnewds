"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle, Zap, Layers, Target, Clock, FileText, PenTool, CheckCircle2, Sparkles, Layout, MousePointer2, Palette, Shield, BarChart3, Search, ShieldCheck } from "lucide-react";

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
                                    <span className="font-bold text-[9px] uppercase tracking-[0.2em] opacity-70">Pedigree</span>
                                </span>
                                <div className="w-px h-3 bg-white/10"></div>
                                <span className="font-bold text-[10px] uppercase tracking-widest md:tracking-[0.4em] text-white/90">Professional Logic</span>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-[2.6rem] md:text-7xl lg:text-8xl font-heading font-black leading-[1] tracking-tighter text-balance">
                                    MD 디자이너 <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 animate-gradient-x bg-[length:200%_auto]">실무 15년.</span>
                                </h2>
                            </div>

                            <div className="space-y-6">
                                <p className="text-lg md:text-3xl font-black text-white italic tracking-tight">
                                    WHY?!
                                </p>
                                <p className="text-base md:text-2xl text-slate-400 font-light leading-[1.8] md:leading-[1.75] tracking-tight text-balance break-keep">
                                    상품을 잘 보이게 <br />
                                    <span className="text-white font-medium border-b-2 border-blue-500/30 pb-1">상품이 팔리게 만듭니다.</span> <br />
                                    상품 기획과 판매 경험을 통해 <br className="hidden md:block" />
                                    구매로 이어지게 만듭니다.
                                </p>
                            </div>
                        </div>

                        <div className="grid gap-6">
                            {[
                                { title: "구매를 고려한 시각 흐름 설계", desc: "디자인을 넘어서, 고객이 자연스럽게 이해하고 선택하도록 구성합니다." },
                                { title: "구매를 고려한 카피 설계", desc: "제품의 강점을 정리해, 고객이 이해하기 쉽게 전달합니다." },
                                { title: "15년 실전 데이터", desc: "어떤 상품이 관심을 끌고 어떤 설명에서 구매가 일어나는지 직접 배웠습니다." }
                            ].map((item, i) => (
                                <div key={i} className="space-y-2 group/item">
                                    <div className="flex items-center gap-4 text-lg md:text-2xl font-black text-white group-hover/item:text-blue-400 transition-colors">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover/item:scale-125 transition-transform"></div>
                                        <span>{item.title}</span>
                                    </div>
                                    <p className="pl-5.5 text-sm md:text-lg text-slate-500 font-light tracking-tight">{item.desc}</p>
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

export function ReliefSection() {
    const features = [
        {
            num: "01",
            title: "자료가 없어도\n함께 정리해드립니다",
            desc: "제품 정보가 없어도 걱정 마세요. 처음부터 함께 구조화합니다.",
            icon: <FileText strokeWidth={1.5} size={20} />,
            glow: "rgba(59,130,246,0.3)",
            accent: "from-blue-500 to-blue-700",
        },
        {
            num: "02",
            title: "하나씩 안내드리며\n진행합니다",
            desc: "복잡한 과정 없이, 각 단계를 쉽게 이해할 수 있도록 안내드립니다.",
            icon: <MessageCircle strokeWidth={1.5} size={20} />,
            glow: "rgba(99,102,241,0.3)",
            accent: "from-indigo-500 to-indigo-700",
        },
        {
            num: "03",
            title: "방향부터 함께\n잡아드립니다",
            desc: "어디서 시작해야 할지 모르셔도 됩니다. 전략부터 함께 설계합니다.",
            icon: <Target strokeWidth={1.5} size={20} />,
            glow: "rgba(139,92,246,0.3)",
            accent: "from-violet-500 to-violet-700",
        }
    ];

    return (
        <section className="relative overflow-hidden py-16 md:py-24" style={{ background: "linear-gradient(135deg, #f0f4ff 0%, #e8edf8 40%, #eef2fb 70%, #f5f0ff 100%)" }}>
            {/* — Ambient Glow Orbs — */}
            <motion.div
                animate={{ x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.15, 1] }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-blue-400/15 blur-[120px]"
            />
            <motion.div
                animate={{ x: [0, -80, 0], y: [0, 60, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-indigo-300/15 blur-[100px]"
            />

            {/* — Dot Grid Texture — */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:radial-gradient(rgba(99,102,241,0.5)_1px,transparent_1px)] [background-size:24px_24px]" />

            <div className="container relative z-10 mx-auto max-w-6xl px-4 md:px-6">

                {/* — Section Header — */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-12 md:mb-16 flex flex-col items-center text-center"
                >
                    {/* Badge */}
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-4 py-1.5 shadow-sm backdrop-blur-sm">
                        <ShieldCheck className="h-3.5 w-3.5 text-blue-600" strokeWidth={2} />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">For Beginners</span>
                    </div>

                    {/* Main Heading */}
                    <h2 className="mb-4 text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tighter text-slate-900">
                        처음이셔도
                        <span className="relative inline-block ml-3">
                            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
                                괜찮습니다.
                            </span>
                        </span>
                    </h2>

                    <p className="max-w-xl text-sm md:text-lg font-light leading-relaxed tracking-tight text-slate-500 break-keep">
                        단순한 제작을 넘어 <span className="font-semibold text-slate-800">사업의 시작과 방향</span>을
                        <br className="hidden md:block" /> 함께 고민합니다.
                    </p>
                </motion.div>

                {/* — Feature Cards — */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6 max-w-5xl mx-auto">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative h-full"
                        >
                            {/* Card body */}
                            <div className="relative h-full rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(37,99,235,0.08)] transition-all duration-500 px-6 py-8 md:px-8 md:py-10 flex flex-col gap-5 md:gap-6 overflow-hidden">
                                
                                {/* Inner gradient hover effect */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${f.accent} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500`} />

                                {/* Number + Icon Row */}
                                <div className="flex items-center justify-between relative z-10">
                                    <div className="text-3xl font-black font-mono text-slate-100 tracking-tighter italic group-hover:text-blue-50 transition-colors duration-500">
                                        {f.num}
                                    </div>
                                    <div className={`relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${f.accent} text-white shadow-lg transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-110`}>
                                        {f.icon}
                                    </div>
                                </div>

                                {/* Text */}
                                <div className="relative z-10 flex flex-col gap-3">
                                    <h3 className="text-xl md:text-2xl font-black leading-tight tracking-tighter text-slate-900 break-keep whitespace-pre-line">
                                        {f.title}
                                    </h3>
                                    <p className="text-xs md:text-sm font-light leading-relaxed tracking-tight text-slate-500 break-keep">
                                        {f.desc}
                                    </p>
                                </div>

                                {/* Bottom accent line */}
                                <div className={`mt-auto h-[2px] w-0 rounded-full bg-gradient-to-r ${f.accent} group-hover:w-full transition-all duration-700 origin-left`} />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* — Bottom CTA — */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-12 md:mt-16 flex flex-col items-center gap-4 text-center"
                >
                    <p className="text-slate-500 text-sm md:text-base font-light break-keep">
                        어디서 시작해야 할지 모르겠다면, 지금 바로 연락주세요.
                    </p>
                    <a
                        href="https://pf.kakao.com/_xaxgJdX/chat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2.5 rounded-full bg-slate-950 px-6 py-3 text-white font-black text-sm md:text-base shadow-lg hover:bg-blue-600 transition-all duration-300 hover:scale-105"
                    >
                        <Sparkles className="h-4 w-4 text-yellow-400" />
                        무료 상담 시작하기
                        <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </motion.div>

            </div>
        </section>
    );
}

export function ValuePointsSection() {
    return (
        <section className="section-padding bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <motion.div {...fadeInUp} className="text-center mb-12 md:mb-20">
                    <div className="inline-flex items-center gap-2 md:gap-4 px-4 md:px-6 py-2 rounded-full bg-slate-950 text-white shadow-[0_20px_40px_rgba(37,99,235,0.2)] border border-white/10 mb-8 md:mb-12 mx-auto relative group overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-gradient-x bg-[length:200%_auto]"></div>
                        <span className="flex items-center gap-2 md:gap-3 relative z-10 shrink-0">
                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-amber-400 rounded-full animate-pulse shadow-[0_0_12px_rgba(251,191,36,0.6)]"></span>
                            <span className="font-mono font-bold text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-blue-400">All-in-One</span>
                        </span>
                        <div className="w-px h-3 md:h-4 bg-white/20 relative z-10"></div>
                        <span className="font-bold text-[10px] md:text-sm tracking-tight md:tracking-[0.2em] text-white/90 relative z-10 whitespace-nowrap">
                            기획 <span className="text-blue-400">&</span> 연출 <span className="text-blue-400">&</span> 디자인까지 <span className="hidden xs:inline">일체화.</span>
                        </span>
                    </div>
                    <h2 className="text-xl md:text-4xl lg:text-5xl font-heading font-black text-slate-950 tracking-tighter leading-[1.1] mb-10 md:mb-12 text-balance">
                        매출을 완성하는 <br />
                        <span className="text-3xl md:text-8xl lg:text-[5rem] text-blue-600 italic block mt-3 md:mt-4">4가지 필연적 전략.</span>
                    </h2>
                    <p className="text-slate-500 text-base md:text-2xl font-light max-w-3xl mx-auto mb-16 break-keep leading-[1.8] md:leading-[1.75]">
                        제품이 잘 팔리길 바라는 <span className="text-slate-950 font-medium">대표님의 진심</span>을, <br className="hidden md:block" />
                        <span className="text-blue-600 font-bold border-b-2 border-blue-500/20 pb-0.5 whitespace-nowrap">소비자 심리</span>를 기준으로 가장 완벽하게 정리합니다. <br />

                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 relative z-10 px-4">
                    {[
                        {
                            num: "01",
                            label: "IMPRESSION",
                            title: "처음부터 시선을 끄는 디자인",
                            desc: "스크롤을 멈추게 만듭니다.",
                            subDesc: "처음부터 시선을 끄는 디자인\n스크롤을 멈추게 만듭니다",
                            icon: <MousePointer2 size={28} />,
                            color: "from-blue-500 to-indigo-600",
                            glow: "bg-blue-500/10",
                            accent: "text-blue-500"
                        },
                        {
                            num: "02",
                            label: "NARRATIVE",
                            title: "계속 보게 만드는 흐름",
                            desc: "끝까지 읽히게 만듭니다.",
                            subDesc: "계속 보게 만드는 흐름\n끝까지 읽히게 만듭니다",
                            icon: <Layers size={28} />,
                            color: "from-purple-500 to-fuchsia-600",
                            glow: "bg-purple-500/10",
                            accent: "text-purple-500"
                        },
                        {
                            num: "03",
                            label: "LOGIC",
                            title: "구매하고 싶게 만드는 구성",
                            desc: "고민 없이 선택하게 만듭니다",
                            subDesc: "구매하고 싶게 만드는 구성\n고민 없이 선택하게 만듭니다",
                            icon: <Target size={28} />,
                            color: "from-emerald-500 to-teal-600",
                            glow: "bg-emerald-500/10",
                            accent: "text-emerald-500"
                        },
                        {
                            num: "04",
                            label: "COPYWRITING",
                            title: "구매를 부르는 카피",
                            desc: "한 번에 이해되게 전달합니다.",
                            subDesc: "구매를 부르는 카피\n한 번에 이해되게 전달합니다",
                            icon: <PenTool size={28} />,
                            color: "from-rose-500 to-orange-600",
                            glow: "bg-rose-500/10",
                            accent: "text-rose-500"
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="relative group h-full"
                        >
                            {/* Colorful Luxury Glow Background */}
                            <div className={`absolute -inset-4 rounded-[50px] ${item.glow} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000`}></div>

                            <div className="relative h-full bg-white/70 backdrop-blur-3xl rounded-[48px] border border-white/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.03)] group-hover:shadow-[0_45px_100px_-20px_rgba(37,99,235,0.1)] transition-all duration-700 flex flex-col overflow-hidden ring-1 ring-slate-100/50 group-hover:ring-blue-500/20">
                                <div className="p-8 md:p-11 flex-grow">
                                    <div className="flex justify-between items-start mb-14">
                                        <div className="relative">
                                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} blur-xl opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                                            <div className={`relative w-16 h-16 rounded-2xl bg-slate-950 text-white flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500`}>
                                                {item.icon}
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className={`text-[10px] font-black tracking-[0.4em] ${item.accent} mb-1 opacity-90`}>{item.label}</div>
                                            <div className="text-5xl font-heading font-black text-slate-100/80 italic leading-none tracking-tighter group-hover:text-slate-200 transition-colors">{item.num}</div>
                                        </div>
                                    </div>

                                    <div className="space-y-5">
                                        <h3 className="text-2xl md:text-[1.85rem] font-black text-slate-950 tracking-tighter leading-[1.15] break-keep group-hover:translate-x-1 transition-transform">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-500 font-light leading-relaxed text-base md:text-xl break-keep opacity-80 group-hover:opacity-100 transition-opacity">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>


                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function ProcessSection() {
    const steps = [
        { icon: <MessageCircle />, title: "브랜드 맞춤 1:1 상담", desc: "제품 컨셉 설정 및 디자인 방향 제시", color: "text-blue-400", bg: "bg-blue-600", shadow: "shadow-blue-500/20", glow: "from-blue-600/20" },
        { icon: <FileText />, title: "견적서 전달 & 일정 안내", desc: "상세 견적 확정 및 전체 작업 일정 안내", color: "text-indigo-400", bg: "bg-indigo-600", shadow: "shadow-indigo-500/20", glow: "from-indigo-600/20" },
        { icon: <Zap />, title: "결제 & 작업 시작", desc: "결제 확인 후 즉시 전문 작업 착수", color: "get-amber-400", bg: "bg-amber-600", shadow: "shadow-amber-500/20", glow: "from-amber-600/20" },
        { icon: <PenTool />, title: "상세페이지 기획(피그마)", desc: "피그마 시안 제작", color: "text-rose-400", bg: "bg-rose-600", shadow: "shadow-rose-500/20", glow: "from-rose-600/20" },
        { icon: <Palette />, title: "디자인 시안 전달 및 수정", desc: "디자인 시안 공유 및 피드백 반영", color: "text-purple-400", bg: "bg-purple-600", shadow: "shadow-purple-500/20", glow: "from-purple-600/20" },
        { icon: <CheckCircle2 />, title: "최종 파일 전달", desc: "피그마 파일 전달", color: "text-emerald-400", bg: "bg-emerald-600", shadow: "shadow-emerald-500/20", glow: "from-emerald-600/20" }
    ];

    return (
        <section className="py-16 md:py-24 bg-slate-950 text-white overflow-hidden relative">
            <div className="absolute top-0 -left-20 w-[500px] h-[500px] bg-blue-600/5 blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-purple-600/5 blur-[140px] rounded-full pointer-events-none" />

            <div className="container mx-auto max-w-5xl relative z-10 px-6">
                <motion.div {...fadeInUp} className="text-center mb-10 md:mb-14">
                    <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-heading font-black text-white tracking-tighter leading-tight">
                            <span className="text-blue-500">작업 진행 과정</span>
                        </h2>
                        <div className="h-3 md:h-5" />
                        <p className="text-base md:text-xl text-slate-400 font-light tracking-tight break-keep">
                            R:new의 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 italic font-black">6단계 제작 흐름</span>을 확인해보세요.
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.6 }}
                            className="group relative"
                        >
                            <div className="bg-white/[0.04] p-5 md:p-6 rounded-[20px] border border-white/5 group-hover:border-white/15 transition-all duration-500 relative overflow-hidden h-full">
                                <div className={`absolute inset-0 bg-gradient-to-br ${step.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                <div className="flex items-center justify-between mb-4 relative z-10">
                                    <div className="relative">
                                        <div className={`absolute inset-0 rounded-xl blur-lg ${step.bg} opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                                        <div className={`relative w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${step.color} group-hover:bg-white/10 transition-all duration-300`}>
                                            <span className="w-4 h-4">{step.icon}</span>
                                        </div>
                                    </div>
                                    <span className="text-[11px] font-black text-white/10 tracking-widest italic">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-sm md:text-base font-black text-white tracking-tight leading-snug group-hover:text-blue-400 transition-colors mb-1.5 break-keep">
                                        {step.title}
                                    </h3>
                                    <p className="text-xs text-slate-500 font-light leading-relaxed group-hover:text-slate-300 transition-colors break-keep">
                                        {step.desc}
                                    </p>
                                </div>

                                <div className={`mt-4 h-[1px] w-0 group-hover:w-full transition-all duration-700 origin-left ${step.bg} opacity-30`}></div>
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
            <div className="container mx-auto max-w-7xl relative z-10">
                <motion.div {...fadeInUp} className="text-center mb-24 md:mb-32">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold text-[10px] uppercase tracking-widest md:tracking-[0.4em] mb-8 mx-auto whitespace-nowrap shadow-sm">
                        Strategic Investment
                    </div>
                    <h2 className="text-[2.5rem] md:text-[4rem] font-heading font-black text-slate-950 tracking-tighter leading-[1.1] relative text-balance">
                        옵션별 <span className="text-blue-600 italic px-1 underline decoration-blue-100 decoration-8 underline-offset-4">가격 안내.</span>
                    </h2>
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
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
