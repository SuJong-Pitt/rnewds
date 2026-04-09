"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LuxuryKakaoIcon } from "@/components/ui/LuxuryKakaoIcon";
import {
    ArrowRight,
    CheckCircle2,
    Zap,
    Shield,
    MessageCircle,
    ArrowRightIcon,
    Palette,
    Layers,
    Terminal,
    Shapes,
    Framer,
    Image as ImageIcon
} from "lucide-react";

export function ProjectShowcase() {
    return (
        <section id="projects" className="py-24 md:py-40 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="space-y-6">
                        <Badge text="Selected Works" />
                        <h2 className="text-4xl md:text-7xl font-black text-slate-950 tracking-tight leading-tight">
                            기회는 준비된 자가 아닌 <br />
                            <span className="text-blue-600">준비된 디자인</span>이 잡습니다.
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {[1, 2, 3, 4].map((i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="aspect-[16/10] bg-slate-100 rounded-[40px] mb-8 overflow-hidden relative">
                                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-colors duration-500"></div>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">Luxury Brand Identity {i}</h3>
                            <p className="text-slate-500 font-medium tracking-tight">Strategy / UIUX / Branding</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function TechStack() {
    const tools = [
        { name: "Figma", desc: "고정밀 프로토타이핑 & 기획 시스템", icon: <Shapes /> },
        { name: "Photoshop", desc: "압도적 고해상도 리터칭 & 합성", icon: <ImageIcon /> },
        { name: "Illustrator", desc: "브랜드 아이덴티티 & 벡터 시스템", icon: <Palette /> },
        { name: "After Effects", desc: "역동적 모션 그래픽 & 인터랙션", icon: <Layers /> },
        { name: "Blender", desc: "3D 시각화 및 입체적 배경 설계", icon: <Terminal /> },
        { name: "Framer", desc: "하이엔드 웹 인터랙션 마스터링", icon: <Framer /> }
    ];

    return (
        <section className="py-24 md:py-40 bg-slate-50 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(37,99,235,0.03),transparent_50%)]"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-24">
                    <Badge text="Mastery Toolkit" />
                    <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter mt-10">
                        명작을 완성하는 <br />
                        <span className="text-blue-600">프리미엄 툴킷.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tools.map((tool, i) => (
                        <motion.div
                            key={tool.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-[0_30px_60px_rgba(0,0,0,0.03)] hover:border-blue-100 transition-all duration-500 group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 mb-8">
                                {tool.icon}
                            </div>
                            <h4 className="text-2xl font-black text-slate-900 mb-4">{tool.name}</h4>
                            <p className="text-slate-500 font-medium leading-relaxed break-keep">{tool.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Badge({ text }: { text: string }) {
    return (
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-blue-100 bg-blue-50 text-blue-600 font-black tracking-[0.2em] text-[10px] uppercase shadow-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></div>
            {text}
        </div>
    );
}

export function ContactSection() {
    const benefits = [
        { icon: <Shield size={18} />, bg: "bg-blue-50", color: "text-blue-600", text: "비즈니스 맞춤형 정밀 기획 제공" },
        { icon: <Zap size={18} />, bg: "bg-amber-50", color: "text-amber-600", text: "24시간 이내 전략적 답변 보장" }
    ];

    return (
        <section id="contact" className="relative py-24 md:py-40 bg-white overflow-hidden">
            {/* Minimalist Grid Ornaments */}
            <div className="absolute inset-0 z-0 opacity-[0.03] select-none pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#2563eb 0.5px, transparent 0.5px), linear-gradient(90deg, #2563eb 0.5px, transparent 0.5px)', backgroundSize: '80px 80px' }}></div>
            
            <div className="container mx-auto max-w-7xl relative z-10 px-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="space-y-16">
                            <div className="space-y-8">
                                <span className="text-[10px] font-black tracking-[0.6em] text-blue-600 uppercase italic">Elevate Your Performance</span>

                                <h2 className="text-3xl md:text-6xl lg:text-7xl font-heading font-black text-slate-950 tracking-tighter leading-[1.1] md:leading-[0.95] text-balance break-keep">
                                    가치를 증명하는 <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-[length:200%_auto] animate-gradient-x italic px-1 pb-1">압도적 비주얼의 힘.</span>
                                </h2>

                                <p className="text-lg md:text-2xl text-slate-500 font-light max-w-lg leading-relaxed break-keep tracking-tight text-balance">
                                    당신의 비즈니스를 관통하는 고차원적 설계를 제안합니다. <br className="hidden md:block" />
                                    결과로 증명하는 <span className="text-slate-950 font-medium italic underline decoration-blue-100 underline-offset-4 decoration-4">R:new</span> 가 당신의 가치를 완성합니다.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-8">
                                {benefits.map((benefit, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="p-8 rounded-[32px] bg-white border border-slate-100 flex items-start gap-4 group/item hover:border-blue-200 transition-all duration-500 shadow-sm"
                                    >
                                        <div className={`mt-1 ${benefit.color} ${benefit.bg} w-8 min-w-[32px] h-8 rounded-xl flex items-center justify-center transition-transform group-hover/item:scale-110`}>
                                            {benefit.icon}
                                        </div>
                                        <span className="text-slate-600 text-sm md:text-base font-medium leading-tight tracking-tight break-keep">{benefit.text}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col items-center lg:items-end gap-20 relative">
                            {/* Magnetic Inquiry Suite */}
                            <motion.div 
                                className="w-full relative group/suite"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 100 }}
                            >
                                <div className="absolute -inset-10 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 blur-[100px] opacity-0 group-hover/suite:opacity-100 transition-opacity duration-1000"></div>
                                
                                <a 
                                    href="https://pf.kakao.com/_xaxgJdX" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="relative flex flex-col items-center lg:items-end w-full group/btn"
                                >
                                    <div className="relative mb-12">
                                        <div className="absolute inset-0 bg-yellow-400 opacity-20 blur-[60px] rounded-full scale-150 animate-pulse"></div>
                                        <LuxuryKakaoIcon size={120} className="md:w-[160px] md:h-[160px]" />
                                    </div>
                                    
                                    <div className="w-full h-auto py-8 md:py-14 px-10 md:px-20 rounded-[35px] md:rounded-[60px] bg-slate-950 text-white flex items-center justify-between group-hover/btn:bg-yellow-400 group-hover/btn:text-slate-950 transition-all duration-700 shadow-[0_40px_100px_-20px_rgba(250,204,21,0.2)]">
                                        <span className="text-xl md:text-4xl font-black tracking-tighter whitespace-nowrap">프로젝트 문의하기</span>
                                        <div className="w-10 h-10 md:w-16 md:h-16 rounded-full border border-white/20 group-hover/btn:border-slate-950/20 flex items-center justify-center group-hover/btn:border-slate-950 transition-all shrink-0 ml-4">
                                            <ArrowRight size={20} className="md:w-8 md:h-8 group-hover/btn:translate-x-3 transition-transform duration-500" />
                                        </div>
                                    </div>
                                </a>

                                <div className="mt-16 pt-16 border-t border-slate-100 flex flex-col items-center lg:items-end w-full group/contact">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-[10px] font-black text-blue-600 tracking-[0.5em] uppercase italic">Signature Collaboration</span>
                                    </div>
                                    
                                    <a href="mailto:admin@rnewds.com" className="group/mail">
                                        <div className="text-xl md:text-3xl lg:text-4xl font-black tracking-tight prism-text hover:opacity-70 transition-all duration-300">
                                            admin@rnewds.com
                                        </div>
                                    </a>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-3 opacity-40 group-hover/contact:opacity-100 transition-all duration-300">Click to start official briefing</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
