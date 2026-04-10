"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle, Zap, Layers, Target, Clock, FileText, PenTool, CheckCircle2, Sparkles, Layout, MousePointer2, Palette, Shield, BarChart3, Search } from "lucide-react";

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
                                <span className="text-xl md:text-3xl font-heading font-light text-slate-400 italic">상세페이지가 고민이신가요?</span>
                                <h2 className="text-4xl md:text-7xl lg:text-8xl font-heading font-black leading-[1] tracking-tighter text-balance">
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
                        <span className="text-slate-400 italic mt-3 block">당신의 제품은 결과로 증명될 것입니다.</span>
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 relative z-10 px-4">
                    {[
                        {
                            num: "01",
                            label: "IMPRESSION",
                            title: "처음부터 시선을 끄는 디자인",
                            desc: "고객의 스크롤을 멈추게 만드는 압도적 첫인상을 설계합니다.",
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
                            desc: "이탈 없이 끝까지 읽히는 치밀한 서사 구조를 완성합니다.",
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
                            desc: "고민 없이 선택하게 만드는 논리적 설득 레이아웃을 제공합니다.",
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
                            desc: "제품의 소구점을 한 번에 이해되게 전달하는 강력한 언어를 제안합니다.",
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

                                <div className="bg-slate-950 p-8 md:p-9 relative overflow-hidden group-hover:bg-slate-900 transition-colors">
                                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color}`}></div>
                                    <p className="text-white text-base md:text-[1.1rem] font-bold leading-tight tracking-tight relative z-10">
                                        {item.subDesc.split('\n').map((line, idx) => (
                                            <span key={idx} className={idx === 1 ? `text-transparent bg-clip-text bg-gradient-to-r ${item.color} block mt-1.5` : "block opacity-80"}>
                                                {line}
                                            </span>
                                        ))}
                                    </p>
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
        { icon: <PenTool />, title: "상세페이지 기획(피그마)", desc: "피그마 시안 제작 및 전략적 서사 설계", color: "text-rose-400", bg: "bg-rose-600", shadow: "shadow-rose-500/20", glow: "from-rose-600/20" },
        { icon: <Palette />, title: "디자인 시안 전달 및 수정", desc: "고퀄리티 디자인 시안 공유 및 피드백 반영", color: "text-purple-400", bg: "bg-purple-600", shadow: "shadow-purple-500/20", glow: "from-purple-600/20" },
        { icon: <CheckCircle2 />, title: "최종 파일 전달", desc: "피그마 원본 및 최적화된 최종 파일 패키지 전달", color: "text-emerald-400", bg: "bg-emerald-600", shadow: "shadow-emerald-500/20", glow: "from-emerald-600/20" }
    ];

    return (
        <section className="section-padding bg-slate-950 text-white overflow-hidden relative">
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

            <div className="container mx-auto max-w-7xl relative z-10">
                <motion.div {...fadeInUp} className="text-center mb-16 md:mb-24">
                    <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                        <h2 className="text-3xl md:text-5xl lg:text-7xl font-heading font-black text-white tracking-tighter leading-[1.1] text-balance">
                            복잡한 과정 대신,<br />
                            <span className="text-blue-500">필요한 단계만 정리해 설계합니다.</span>
                        </h2>
                        <div className="h-4 md:h-8" />
                        <p className="text-lg md:text-3xl text-slate-400 font-light tracking-tight break-keep">
                            R:new의 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 italic font-black border-b-2 border-blue-500/30 pb-1">6단계 제작 흐름</span>을 확인해보세요.
                        </p>
                    </div>
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
                            <div className="bg-white/[0.03] backdrop-blur-3xl p-8 md:p-12 rounded-[40px] border border-white/5 group-hover:border-white/20 transition-all duration-700 relative overflow-hidden h-full shadow-[0_4px_30px_rgba(0,0,0,0.1)] group-hover:shadow-[0_40px_100px_rgba(0,0,0,0.3)]">
                                <div className={`absolute inset-0 bg-gradient-to-br ${step.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

                                <div className="flex justify-between items-start mb-10 relative z-10">
                                    <div className="relative">
                                        <div className={`absolute inset-0 rounded-2xl blur-xl ${step.bg} opacity-20 group-hover:opacity-40 transition-opacity duration-700`}></div>
                                        <div className={`relative w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center ${step.color} group-hover:bg-slate-950 group-hover:text-white transition-all duration-500 shadow-sm`}>
                                            {step.icon}
                                        </div>
                                    </div>
                                    <div className="text-4xl font-heading font-black text-white/5 tracking-tighter italic">
                                        STEP {String(i + 1).padStart(2, '0')}
                                    </div>
                                </div>

                                <div className="relative z-10 space-y-4">
                                    <h3 className="text-xl md:text-2xl font-black text-white tracking-tighter leading-tight group-hover:text-blue-400 transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed tracking-tight group-hover:text-slate-200 transition-colors break-keep">
                                        {step.desc}
                                    </p>
                                </div>

                                <div className={`mt-8 h-[1px] w-0 group-hover:w-full transition-all duration-1000 origin-left ${step.bg} bg-opacity-30`}></div>
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
                    <h2 className="text-3xl md:text-[4rem] font-heading font-black text-slate-950 tracking-tighter leading-tight relative text-balance">
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
