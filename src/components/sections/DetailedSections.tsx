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
                                <p className="text-base md:text-2xl text-slate-400 font-light leading-relaxed tracking-tight text-balance break-keep">
                                    상품을 잘 보이게 하는 것을 넘어 <br />
                                    <span className="text-white font-medium border-b-2 border-blue-500/30 pb-1">상품이 팔리게 만듭니다.</span> <br />
                                    수만 건의 상품 기획과 판매 경험을 통해 <br className="hidden md:block" />
                                    구매로 이어지는 '필연적 흐름'을 설계합니다.
                                </p>
                            </div>
                        </div>

                        <div className="grid gap-6">
                            {[
                                { title: "구매 전환 시각 심리 설계", desc: "단순 디자인이 아닌 소비자의 심리를 파고드는 동선을 구축합니다." },
                                { title: "전략적 카피라이팅", desc: "제품의 본질을 꿰뚫는 언어로 고객의 구매 결정을 끌어냅니다." },
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
                    <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-slate-950 text-white shadow-[0_20px_40px_rgba(37,99,235,0.2)] border border-white/10 mb-12 mx-auto relative group overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-gradient-x bg-[length:200%_auto]"></div>
                        <span className="flex items-center gap-3 relative z-10">
                            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse shadow-[0_0_12px_rgba(251,191,36,0.6)]"></span>
                            <span className="font-mono font-bold text-[10px] uppercase tracking-[0.3em] text-blue-400">All-in-One</span>
                        </span>
                        <div className="w-px h-4 bg-white/20 relative z-10"></div>
                        <span className="font-bold text-[11px] md:text-sm tracking-[0.2em] text-white/90 relative z-10">
                            기획 <span className="text-blue-400">&</span> 연출 <span className="text-blue-400">&</span> 디자인까지, 완벽한 <span className="italic text-white">일체화.</span>
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black text-slate-950 tracking-tighter leading-[1.1] mb-10 text-balance">
                        매출을 완성하는 <br />
                        <span className="text-blue-600 italic px-1">4가지 필연적 전략.</span>
                    </h2>
                    <p className="text-slate-500 text-base md:text-xl font-light max-w-2xl mx-auto mb-16 break-keep">
                        상품의 장점을 쉽게 보여주고, 궁금한 내용을 정리하며, <br className="hidden md:block" />
                        결국 고객이 사고 싶게 설명합니다.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {[
                        {
                            title: "처음부터 시선을 끄는 디자인",
                            desc: "고객의 스크롤을 멈추게 만드는 압도적 첫인상을 설계합니다.",
                            icon: <MousePointer2 size={24} />,
                            label: "Impression"
                        },
                        {
                            title: "계속 보게 만드는 흐름",
                            desc: "이탈 없이 끝까지 읽히는 치밀한 서사 구조를 완성합니다.",
                            icon: <Layout size={24} />,
                            label: "Narrative"
                        },
                        {
                            title: "구매하고 싶게 만드는 구성",
                            desc: "고민 없이 선택하게 만드는 논리적 설득 레이아웃을 제공합니다.",
                            icon: <Target size={24} />,
                            label: "Logic"
                        },
                        {
                            title: "구매를 부르는 카피",
                            desc: "제품의 소구점을 한 번에 이해되게 전달하는 강력한 언어를 제안합니다.",
                            icon: <PenTool size={24} />,
                            label: "Copywriting"
                        }
                    ].map((point, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative h-full flex flex-col p-8 md:p-12 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(37,99,235,0.06)] hover:border-blue-100 hover:scale-[1.02] transition-all duration-700"
                        >
                            {/* Card Background Index */}
                            <div className="absolute top-10 right-10 text-[80px] font-heading font-black text-slate-900/[0.03] select-none pointer-events-none group-hover:text-blue-500/[0.05] transition-colors duration-700 leading-none">
                                {String(i + 1).padStart(2, '0')}
                            </div>

                            <div className="relative z-10 space-y-8 flex-grow">
                                <div className="flex items-center justify-between">
                                    <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-slate-950 group-hover:text-white transition-all duration-500 shadow-sm">
                                        {point.icon}
                                    </div>
                                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.3em] group-hover:text-blue-400 transition-colors">
                                        {point.label}
                                    </span>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-xl md:text-2xl font-black text-slate-950 leading-[1.2] tracking-tighter break-keep">
                                        {point.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed tracking-tight break-keep">
                                        {point.desc}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-10 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-1000 origin-left"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function ProcessSection() {
    const steps = [
        { icon: <MessageCircle />, title: "심층 매출 진단", desc: "제품 소구점 파악 및 시장 경쟁 우위 분석", color: "text-blue-400", bg: "bg-blue-600", shadow: "shadow-blue-500/20", glow: "from-blue-600/20" },
        { icon: <FileText />, title: "구매 논리 아키텍처", desc: "이탈률 최소화를 위한 서사 구조 및 기획 설계", color: "text-indigo-400", bg: "bg-indigo-600", shadow: "shadow-indigo-500/20", glow: "from-indigo-600/20" },
        { icon: <Zap />, title: "비주얼 컨버전 설계", desc: "0.1초 만에 시선을 유도하는 고밀도 시각화", color: "text-purple-400", bg: "bg-purple-600", shadow: "shadow-purple-500/20", glow: "from-purple-600/20" },
        { icon: <CheckCircle2 />, title: "디테일 정밀 보정", desc: "브랜드 정체성과 마케팅 일관성 극대화", color: "text-rose-400", bg: "bg-rose-600", shadow: "shadow-rose-500/20", glow: "from-rose-600/20" },
        { icon: <Layers />, title: "마스터피스 릴리즈", desc: "모바일 최적화 및 최종 성과형 파일 패키지 전달", color: "text-orange-400", bg: "bg-orange-600", shadow: "shadow-orange-500/20", glow: "from-orange-600/20" },
        { icon: <Clock />, title: "퍼포먼스 인사이트", desc: "릴리즈 후 전환 성과 분석 및 추가 전략 제안", color: "text-cyan-400", bg: "bg-cyan-600", shadow: "shadow-cyan-500/20", glow: "from-cyan-600/20" }
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
                    <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-blue-400 shadow-2xl mb-10 mx-auto whitespace-nowrap">
                        <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                            <span className="font-bold text-[10px] uppercase tracking-[0.2em] opacity-70">Process</span>
                        </span>
                        <div className="w-px h-3 bg-white/10"></div>
                        <span className="font-bold text-[11px] uppercase tracking-widest md:tracking-[0.4em] text-white/90">작업 진행 과정</span>
                    </div>

                    <h2 className="text-3xl md:text-[3.5rem] font-heading font-black text-white tracking-tighter leading-[1.1] mb-8 text-balance">
                        명작은 결코 <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 italic px-1 animate-gradient-x bg-[length:200%_auto]">우연히 탄생하지 않습니다.</span>
                    </h2>

                    <p className="text-slate-400 text-base md:text-xl font-light max-w-2xl mx-auto leading-relaxed tracking-tight break-keep opacity-80">
                        치밀한 시장 분석부터 고도로 설계된 전환 장치까지, <br className="hidden md:block" />
                        R:new만의 고집스러운 <span className="text-white font-medium italic underline underline-offset-8 decoration-blue-500/30">6단계 퍼포먼스 수직 설계</span>를 경험해보세요.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
                    {[
                        {
                            title: "브랜드 맞춤 1:1 상담",
                            desc: "제품 컨셉 설정 및 디자인 방향 제시",
                            icon: <MessageCircle />,
                            color: "text-blue-400", bg: "bg-blue-600", glow: "from-blue-600/20"
                        },
                        {
                            title: "견적서 전달 & 일정 안내",
                            desc: "상세 견적 확정 및 전체 작업 일정 안내",
                            icon: <FileText />,
                            color: "text-indigo-400", bg: "bg-indigo-600", glow: "from-indigo-600/20"
                        },
                        {
                            title: "결제 & 작업 시작",
                            desc: "결제 확인 후 즉시 전문 작업 착수",
                            icon: <Zap />,
                            color: "get-amber-400", bg: "bg-amber-600", glow: "from-amber-600/20"
                        },
                        {
                            title: "상세페이지 기획(피그마)",
                            desc: "피그마 시안 제작 및 전략적 서사 설계",
                            icon: <PenTool />,
                            color: "text-rose-400", bg: "bg-rose-600", glow: "from-rose-600/20"
                        },
                        {
                            title: "디자인 시안 전달 및 수정",
                            desc: "고퀄리티 디자인 시안 공유 및 피드백 반영",
                            icon: <Palette />,
                            color: "text-purple-400", bg: "bg-purple-600", glow: "from-purple-600/20"
                        },
                        {
                            title: "최종 파일 전달",
                            desc: "피그마 원본 및 최적화된 최종 파일 패키지 전달",
                            icon: <CheckCircle2 />,
                            color: "text-emerald-400", bg: "bg-emerald-600", glow: "from-emerald-600/20"
                        }
                    ].map((step, i) => (
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
