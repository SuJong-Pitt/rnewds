"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRightIcon, CheckCircle2Icon, BarChart3Icon, LayersIcon, LightbulbIcon, ZapIcon } from "lucide-react";
import Image from "next/image";

export function AboutHero() {
    return (
        <section className="relative min-h-[70vh] md:min-h-[90vh] w-full flex flex-col items-center justify-center pt-32 pb-20 md:pt-40 md:pb-24 px-6 overflow-hidden bg-white">
            {/* Visual Ambiance Layer */}
            <div className="absolute inset-0 z-0 opacity-[0.6] pointer-events-none overflow-hidden h-full w-full">
                <Image
                    src="/images/vibrant_studio_workspace.png"
                    alt="Premium Studio Workspace"
                    fill
                    className="object-cover opacity-50 select-none pointer-events-none scale-105"
                    priority
                />
            </div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(circle_at_50%_20%,rgba(37,99,235,0.05),transparent_70%)] -z-10" />

            <div className="relative z-10 text-center max-w-6xl mx-auto space-y-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-blue-100 bg-blue-50/30 text-blue-600 shadow-sm mb-4"
                >
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></div>
                    <span className="text-[10px] md:text-xs font-black tracking-[0.15em] md:tracking-[0.4em] uppercase opacity-70 whitespace-nowrap">Structure of Strategic Design</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black leading-[1.05] tracking-tight text-slate-950 text-balance"
                >
                    예쁘게만 만드는 <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 italic px-1">디자인은 하지 않습니다.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-lg md:text-2xl text-slate-500 max-w-4xl mx-auto font-light leading-relaxed tracking-tight break-keep text-balance"
                >
                    Rnew Design Studio는 상품이 더 잘 보이고, 더 쉽게 이해되고, <br className="hidden md:block" />
                    <span className="text-slate-950 font-medium tracking-tight">더 잘 팔리도록 상세페이지를 만듭니다.</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="pt-8"
                >
                    <a href="https://pf.kakao.com/_xaxgJdX/chat" target="_blank" rel="noopener noreferrer">
                        <Button className="rounded-full px-10 py-6 md:py-8 text-sm md:text-lg font-bold bg-slate-950 text-white hover:bg-blue-600 transition-all shadow-xl">
                            프로젝트 문의하기
                        </Button>
                    </a>
                </motion.div>

            </div>
        </section>
    );
}

export function PhilosophySection() {
    return (
        <section className="section-padding-large bg-white overflow-hidden relative">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 md:gap-32 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-12"
                    >
                        <div className="space-y-8">
                            <h2 className="text-blue-600 text-[10px] md:text-xs font-black tracking-[0.5em] opacity-60">Core Philosophy</h2>
                            <h3 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black text-slate-950 leading-[1.1] tracking-tight break-keep text-balance">
                                기획부터 연출, <br />
                                <span className="text-blue-600 italic px-1">디자인까지 한 번에.</span>
                            </h3>
                            <div className="space-y-6 pt-2">
                                <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-light tracking-tight break-keep text-balance">
                                    우리는 단순히 화면을 꾸미지 않습니다.<br />
                                    상품의 장점을 정리하고, 고객이 궁금한 내용을 설계하고, <span className="text-slate-950 font-medium">구매로 이어지는 흐름까지 함께 만듭니다.</span>
                                </p>
                                <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-light tracking-tight break-keep text-balance">
                                    자료가 완벽하지 않아도 괜찮습니다.<br />
                                    팔기 위한 페이지가 필요할 때, Rnew Design Studio가 <span className="text-slate-950 font-medium underline decoration-blue-200 underline-offset-4">가장 먼저 구조부터 다시 봅니다.</span>
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 py-4">
                            <div className="w-20 h-1 bg-blue-600/20 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-blue-600 w-1/2"
                                    animate={{ x: ["-100%", "200%"] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                />
                            </div>
                            <span className="text-xl md:text-2xl font-heading font-black text-slate-950 tracking-tighter italic px-1">"Design follows Logic."</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="relative group h-[500px] md:h-[700px]"
                    >
                        <div className="absolute inset-0 bg-blue-600/5 rounded-[40px] md:rounded-[60px] blur-3xl -z-10 group-hover:bg-blue-600/10 transition-colors duration-1000"></div>
                        <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-full h-full border border-slate-100 rounded-[40px] md:rounded-[60px] -z-10 bg-slate-50 opacity-50"></div>

                        <div className="w-full h-full rounded-[40px] md:rounded-[60px] relative overflow-hidden border border-slate-200 shadow-3xl shadow-slate-100 bg-white">
                            <Image
                                src="/images/philosophy_masterpiece_visual.png"
                                alt="Philosophy Masterpiece Visual"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105 select-none pointer-events-none"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                priority
                            />
                            {/* Sophisticated Overlay */}
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent flex flex-col justify-end p-8 md:p-16">
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="text-2xl md:text-4xl font-heading font-black text-white italic px-1 drop-shadow-2xl leading-tight text-balance"
                                >
                                    "모든 픽셀에는 <br /> 팔아야 할 이유가 담겨야 합니다."
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export function StrengthSection() {
    const strengths = [
        { icon: <ZapIcon size={24} />, title: "시선을 끄는 디자인", label: "01", desc: "시각적 매력을 더해 트렌디하고 고퀄리티에 빛나는 그래픽 디자인을 선사합니다." },
        { icon: <LayersIcon size={24} />, title: "계속 보게 만드는 흐름", label: "02", desc: "고객이 이탈하지 않고 끝까지 흥미를 잃지 않는 몰입감 있는 레이아웃을 구축합니다." },
        { icon: <CheckCircle2Icon size={24} />, title: "구매하고 싶게 만드는 구성", label: "03", desc: "고객의 니즈와 심리를 치밀하게 파악해 구매 버튼을 누르게 만드는 전략을 세웁니다." },
        { icon: <LightbulbIcon size={24} />, title: "이해를 돕는 카피", label: "04", desc: "아무리 복잡한 제품이라도 직관적이고 매력적으로 전달하는 세일즈 카피라이팅을 곁들입니다." }
    ];

    return (
        <section className="relative px-4 py-8 md:px-8">
            <div className="relative section-padding-large bg-slate-950 text-white rounded-[40px] md:rounded-[80px] overflow-hidden">
                {/* Visual Texture */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none"></div>

                <div className="container mx-auto max-w-7xl relative z-10 px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 md:gap-32 items-center">
                        <div className="space-y-12">
                            <div className="space-y-8">
                                <h2 className="text-blue-400 text-[10px] md:text-xs font-black tracking-[0.5em] opacity-60">All-in-One Solution</h2>
                                <h3 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black text-white leading-[1.1] tracking-tighter text-balance">
                                    기획부터 연출, <br /> <span className="text-blue-400 italic px-1">디자인까지 한 번에</span>
                                </h3>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
                            {strengths.map((str, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                    className="group relative"
                                >
                                    <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-[32px] md:rounded-[40px] hover:bg-white/10 transition-all duration-500 h-full flex flex-col justify-between shadow-sm group-hover:shadow-blue-500/10 group-hover:-translate-y-2">
                                        <div className="flex justify-between items-start mb-10 md:mb-12">
                                            <div className="text-blue-400 w-12 h-12 flex items-center justify-center bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
                                                {str.icon}
                                            </div>
                                            <span className="text-4xl font-black text-white/10 italic group-hover:text-blue-500/20 transition-colors">{str.label}</span>
                                        </div>
                                        <div className="space-y-4 relative z-10">
                                            <h4 className="text-xl md:text-xl font-black tracking-tight">{str.title}</h4>
                                            <p className="text-sm text-slate-400 leading-relaxed font-light tracking-tight text-balance">{str.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

import { LuxuryKakaoIcon } from "@/components/ui/LuxuryKakaoIcon";

export function TrustSection() {
    return (
        <section className="relative py-32 md:py-48 text-center bg-slate-50 overflow-hidden">
            {/* 1. Atmospheric Branding Layer (Watermark & Grid) */}
            <div className="absolute inset-0 z-0 opacity-[0.03] select-none pointer-events-none flex items-center justify-center overflow-hidden">
                <span className="text-[35vw] md:text-[25vw] font-black text-slate-900 tracking-tighter leading-none italic">R:new</span>
            </div>

            {/* Architectural Grid - Strategic texture */}
            <div className="absolute inset-0 opacity-[0.04] select-none pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#2563eb 0.5px, transparent 0.5px), linear-gradient(90deg, #2563eb 0.5px, transparent 0.5px)', backgroundSize: '120px 120px' }}></div>
            <div className="absolute top-0 left-0 w-full h-[500px] bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.04),transparent_70%)] pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10 px-8">
                <div className="max-w-6xl mx-auto space-y-24 md:space-y-32">
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-950 text-white font-bold text-[10px] uppercase tracking-[0.1em] md:tracking-[0.5em] mb-4 shadow-xl"
                        >
                            The Ultimate Authority
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            className="text-4xl md:text-6xl lg:text-8xl font-heading font-black text-slate-950 tracking-tighter leading-[0.95] text-balance"
                        >
                            이제 상품에만 <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 italic px-2">집중하세요</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 1 }}
                            className="text-lg md:text-2xl text-slate-500 font-light max-w-2xl mx-auto tracking-tight break-keep border-t border-slate-200 pt-10 text-balance"
                        >
                            매출을 이끄는 <span className="text-slate-950 font-medium italic">상세페이지 제작</span>은 <br className="hidden md:block" />
                            Rnew Design Studio가 함께합니다.
                        </motion.p>
                    </div>

                    <div className="flex flex-col items-center justify-center pt-10">
                        {/* Magnetic Luxury Hub */}
                        <a 
                            href="https://pf.kakao.com/_xaxgJdX/chat" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-full max-w-2xl relative group/hub"
                        >
                            <motion.div 
                                whileHover={{ scale: 1.02 }}
                                className="flex flex-col items-center gap-10 group/item relative z-20"
                            >
                                <div className="absolute -inset-20 bg-blue-500/5 blur-[120px] rounded-full opacity-0 group-hover/hub:opacity-100 transition-opacity duration-1000 -z-10"></div>
                                
                                <div className="relative">
                                    <div className="absolute inset-0 bg-yellow-400 opacity-20 blur-[50px] rounded-full scale-150 animate-pulse"></div>
                                    <LuxuryKakaoIcon size={140} className="md:w-[180px] md:h-[180px]" />
                                </div>

                                <div className="w-full py-8 md:py-14 px-10 md:px-20 rounded-[35px] md:rounded-[60px] bg-slate-950 text-white flex items-center justify-between group-hover/item:bg-yellow-400 group-hover/item:text-slate-950 transition-all duration-700 shadow-[0_40px_100px_-20px_rgba(250,204,21,0.2)]">
                                    <span className="text-[1.1rem] sm:text-2xl md:text-5xl font-black tracking-tighter italic whitespace-nowrap">프로젝트 상담 신청하기</span>
                                    <ArrowRightIcon size={24} className="md:w-12 md:h-12 group-hover/item:translate-x-4 transition-transform duration-700 shrink-0 ml-4" />
                                </div>
                            </motion.div>
                        </a>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col items-center text-center space-y-6 pt-10 group/mail"
                        >
                            <span className="text-[10px] font-black text-blue-500 tracking-[0.5em] uppercase block">Signature Collaboration</span>
                            
                            <a href="mailto:admin@rnewds.com" className="relative group/text">
                                <div className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-slate-950 tracking-tighter transition-all duration-700 prism-text group-hover/text:scale-[1.02] whitespace-nowrap">
                                    admin@rnewds.com
                                </div>
                                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600 scale-x-0 group-hover/text:scale-x-100 transition-transform duration-700 origin-left"></div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-6 opacity-0 group-hover/mail:opacity-100 transition-all duration-500 translate-y-2 group-hover/mail:translate-y-0">Click to start official briefing</p>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Decorative bottom lines - Architectural finishing */}
            <div className="absolute bottom-0 left-0 w-full flex justify-center gap-2 mb-8 opacity-20">
                <div className="w-32 h-[1px] bg-blue-400"></div>
                <div className="w-2 h-[1px] bg-blue-400"></div>
                <div className="w-2 h-[1px] bg-blue-400"></div>
            </div>
        </section>
    );
}
