"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    Mail,
    Instagram,
    MessageSquare,
    ExternalLink,
    ShieldCheck,
    Zap,
    Layers,
    Palette,
    PenTool,
    Box,
    Video,
    Code,
    Target
} from "lucide-react";

const skills = [
    { name: "Photoshop", level: "Master", desc: "상상하는 모든 비주얼을 현실로 그려냅니다.", icon: <Palette size={24} /> },
    { name: "Illustrator", level: "Expert", desc: "데이터 기반의 정확한 벡터 설계를 구현합니다.", icon: <PenTool size={24} /> },
    { name: "3D Rendering", level: "Special", desc: "실물보다 더 실물 같은 재질감을 표현합니다.", icon: <Box size={24} /> },
    { name: "Premiere Pro", level: "Advanced", desc: "생동감 넘치는 무빙 상세페이지를 제작합니다.", icon: <Video size={24} /> },
    { name: "Tailwind CSS", level: "Expert", desc: "최신 트렌드의 인터랙티브 웹 디자인을 완성합니다.", icon: <Code size={24} /> },
    { name: "UI/UX Design", level: "Strategic", desc: "구매 동선을 고려한 논리적 배치를 설계합니다.", icon: <Target size={24} /> },
];

export function TechStack() {
    return (
        <section id="skills" className="py-24 md:py-40 px-6 bg-white overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 font-bold text-xs uppercase tracking-widest mb-4"
                        >
                            Professional Tools
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]"
                        >
                            전문가급 도구로 <br /> 명작을 빚어냅니다.
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-500 max-w-sm text-lg font-medium leading-relaxed"
                    >
                        프로젝트의 완성도를 결정짓는 <br className="hidden md:block" />
                        하이엔드 디자인 소프트웨어 스택입니다.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-10 rounded-[40px] bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-[0_30px_60px_rgba(37,99,235,0.08)] transition-all group"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <div className="text-blue-600 bg-white p-4 rounded-2xl shadow-sm border border-slate-50 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                    {skill.icon}
                                </div>
                                <div className="text-[10px] font-black text-slate-300 tracking-[0.2em] uppercase">{skill.level}</div>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-slate-900 tracking-tight">{skill.name}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed font-medium">
                                {skill.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function StrategySection() {
    return (
        <section id="strategy" className="py-24 md:py-48 px-6 bg-slate-950 text-white relative overflow-hidden rounded-[60px] mx-4 md:mx-10 my-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.15),transparent_50%)]"></div>

            <div className="container mx-auto max-w-5xl relative z-10">
                <div className="text-center space-y-16">
                    <header className="space-y-6">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-blue-400 font-bold tracking-[0.4em] uppercase text-xs md:text-sm block"
                        >
                            Strategic Approach
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-8xl font-bold leading-[1.1] tracking-tight"
                        >
                            단순한 디자인이 <br /> 아닙니다.
                        </motion.h2>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-8xl font-bold leading-[1.1] tracking-tight text-blue-500"
                        >
                            설계된 비주얼입니다.
                        </motion.h2>
                    </header>

                    <p className="text-slate-400 text-lg md:text-2xl leading-relaxed font-medium max-w-3xl mx-auto">
                        Adobe 툴 마스터와 UI/UX 논리로, <br className="hidden md:block" />
                        <span className="text-white border-b border-blue-500/50 pb-1">스크롤을 멈추게 하는 압도적 결과물을 만듭니다.</span>
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 pt-12">
                        {[
                            { step: "01", title: "사용자 심리", desc: "고객이 반응하는 최적의 동선을 설계하여 구매 전환율을 극대화합니다." },
                            { step: "02", title: "브랜드 강화", desc: "제품의 독보적인 강점을 시각적 언어로 번역해 신뢰도를 높입니다." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + i * 0.1 }}
                                className="p-10 rounded-[40px] bg-white/5 border border-white/10 text-left hover:bg-white/10 transition-colors group"
                            >
                                <div className="text-blue-500 font-black text-4xl mb-6">{item.step}.</div>
                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium">
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
        <section id="contact" className="py-24 md:py-48 px-6 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                <div className="bg-white rounded-[60px] p-12 md:p-24 border border-slate-200 shadow-2xl shadow-slate-200/50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_100%_0%,rgba(37,99,235,0.05),transparent_70%)] -z-0" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="text-left space-y-10">
                            <div className="space-y-6">
                                <span className="text-blue-600 font-bold tracking-[0.4em] uppercase text-xs md:text-sm block">Premium Project Inquiry</span>
                                <h2 className="text-4xl md:text-7xl font-bold text-slate-900 leading-[1.0] tracking-tight">
                                    당신의 가치가 <br />
                                    <span className="text-blue-600">명적으로 완성되는 순간.</span>
                                </h2>
                                <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed pt-4">
                                    일회성 디자인이 아닌 비즈니스의 지속 가능한 성장을 설계합니다. <br className="hidden md:block" />
                                    지금 바로 전문가와 전략을 논의해 보세요.
                                </p>
                            </div>

                            <div className="space-y-4 pt-4">
                                <div className="flex items-center gap-4 text-slate-900 font-bold">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600"><ShieldCheck size={20} /></div>
                                    <span>비즈니스 맞춤형 정밀 기획 제공</span>
                                </div>
                                <div className="flex items-center gap-4 text-slate-900 font-bold">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600"><Zap size={20} /></div>
                                    <span>24시간 이내 빠른 답변 보장</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center lg:items-end gap-12">
                            <Button size="lg" className="rounded-3xl px-12 py-10 text-xl md:text-3xl font-bold btn-gradient border-none h-auto group w-full shadow-[0_20px_50px_rgba(37,99,235,0.2)]">
                                프로젝트 문의하기
                                <ArrowRight size={28} className="ml-4 transition-transform group-hover:translate-x-2" />
                            </Button>

                            <div className="w-full h-[1px] bg-slate-100" />

                            <div className="flex flex-wrap justify-center lg:justify-end gap-8 md:gap-12 text-slate-400 text-xs font-bold uppercase tracking-widest">
                                <a href="#" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                                    <Instagram size={18} /> Instagram
                                </a>
                                <a href="#" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                                    <MessageSquare size={18} /> KakaoTalk
                                </a>
                                <a href="mailto:hello@rnew.studio" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                                    <Mail size={18} /> Email
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
