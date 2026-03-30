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
    { name: "Figma", level: "Master", desc: "기획부터 디자인까지 기틀이 되는 정밀한 상세페이지를 설계합니다.", icon: <Layers size={24} /> },
    { name: "UI/UX Design", level: "Strategic", desc: "구매 동선을 고려한 논리적 배치를 설계합니다.", icon: <Target size={24} /> },
];

export function TechStack() {
    return (
        <section id="skills" className="py-20 md:py-32 px-6 bg-slate-50 overflow-hidden relative">
            {/* Studio Overlay - Minimalist */}
            <div className="absolute inset-0 opacity-[0.02] select-none pointer-events-none">
                {/* Simplified background for clarity */}
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-10">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-blue-600 font-bold text-[10px] uppercase tracking-[0.3em] mb-6"
                        >
                            Advanced Stacks
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl lg:text-6xl font-heading font-black tracking-tighter text-slate-900 leading-[1.2]"
                        >
                            결과를 만드는 <br />
                            <span className="text-blue-600 italic">정교한 도구.</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 max-w-sm text-xl font-light leading-relaxed tracking-tight"
                    >
                        프로젝트의 한계를 규정짓지 않는 <br className="hidden md:block" />
                        R:new만의 하이엔드 <br className="hidden md:block" />
                        디자인 소프트웨어 아키텍처입니다.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-12 md:p-14 rounded-[50px] bg-slate-50/50 border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-3xl hover:shadow-blue-500/5 transition-all duration-500 group"
                        >
                            <div className="flex items-center justify-between mb-12">
                                <div className="text-blue-600 bg-white p-5 rounded-2xl shadow-sm border border-slate-50 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 transform group-hover:rotate-12">
                                    {skill.icon}
                                </div>
                                <div className="text-[10px] font-black text-slate-300 tracking-[0.3em] uppercase opacity-50 group-hover:opacity-100 transition-opacity">{skill.level}</div>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black mb-6 text-slate-900 tracking-tighter">{skill.name}</h3>
                            <p className="text-slate-500 text-base md:text-lg leading-relaxed font-light tracking-tight group-hover:text-slate-600 transition-colors">
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
        <section id="strategy" className="py-20 md:py-32 px-6 bg-slate-950 text-white relative overflow-hidden rounded-[40px] md:rounded-[60px] mx-4 md:mx-10 my-20">
            {/* Studio Overlay - Minimalist */}
            <div className="absolute inset-0 opacity-[0.05] select-none pointer-events-none">
                {/* Simplified background for clarity */}
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="text-center space-y-16 md:space-y-24">
                    <header className="space-y-8">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-blue-400 font-bold tracking-[0.5em] uppercase text-[10px] md:text-xs block opacity-70"
                        >
                            Aesthetic Architecture
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl lg:text-6xl font-heading font-black leading-[1.2] tracking-tighter"
                        >
                            시장의 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 animate-gradient-x bg-[length:200%_auto] italic">기준</span>이 되는 <br /> 
                            유일한 전략, R:new입니다.
                        </motion.h2>
                    </header>

                    <p className="text-slate-400 text-xl md:text-3xl leading-[1.6] font-light max-w-4xl mx-auto tracking-tight">
                        압도적인 툴 전문성과 UI/UX 최우선 논리를 결합하여 <br className="hidden md:block" />
                        <span className="text-white font-medium border-b-2 border-blue-500/30 pb-1 italic">고객의 스크롤을 멈추고 지갑을 열게</span> 만듭니다.
                    </p>

                    <div className="grid md:grid-cols-2 gap-10 pt-16">
                        {[
                            { step: "01", title: "구매 심리 아키텍처", desc: "사용자가 반응하는 최적의 시각적 동선을 설계하여 구매 전환까지의 저항을 제로화합니다." },
                            { step: "02", title: "브랜드 권위 구축", desc: "제품이 가진 독보적 가치를 상위 1%의 시각적 언어로 번역해 브랜드의 지위를 격상시킵니다." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
                                className="p-12 md:p-16 rounded-[60px] bg-white/5 border border-white/10 text-left hover:bg-white/10 transition-all duration-700 group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                                <div className="text-blue-500 font-black text-5xl mb-10 tracking-tighter">{item.step}.</div>
                                <h3 className="text-3xl md:text-4xl font-black mb-6 tracking-tighter">{item.title}</h3>
                                <p className="text-slate-400 text-base md:text-lg leading-relaxed font-light tracking-tight group-hover:text-slate-300 transition-colors">
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
        <section id="contact" className="py-20 md:py-40 px-6 bg-white relative overflow-hidden">
            {/* Studio Overlay - Minimalist */}
            <div className="absolute inset-0 opacity-[0.02] select-none pointer-events-none">
                {/* Simplified background for clarity */}
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="bg-slate-50/50 rounded-[40px] md:rounded-[80px] p-10 md:p-24 border border-slate-100 shadow-3xl shadow-slate-200/50 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at:100%_0%,rgba(37,99,235,0.06),transparent_70%)] -z-0" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
                        <div className="text-left space-y-10 md:space-y-12">
                            <div className="space-y-8 md:space-y-10">
                                <span className="text-blue-600 font-bold tracking-[0.5em] uppercase text-[10px] md:text-xs block opacity-70">Elevate Your Performance</span>
                                <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black text-slate-900 leading-[1.2] tracking-tighter">
                                    매출의 벽을 <br />
                                    함께 <span className="text-blue-600 italic">넘으시겠습니까?</span>
                                </h2>
                                <p className="text-slate-500 text-lg md:text-xl font-light leading-[1.6] tracking-tight">
                                    일회성 디자인이 아닌, <br className="hidden md:block" />
                                    <span className="text-slate-900 font-medium">비즈니스의 지속 가능한 성공</span>을 설계합니다. <br className="hidden md:block" />
                                    지금 바로 상위 1%의 전략을 논의해 보세요.
                                </p>
                            </div>

                            <div className="space-y-6 pt-6">
                                {[
                                    { icon: <ShieldCheck size={22} />, label: "비즈니스 맞춤형 정밀 기획 제공" },
                                    { icon: <Zap size={22} />, label: "24시간 이내 전략적 답변 보장" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-6 text-slate-900 text-lg md:text-xl font-light tracking-tight">
                                        <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-blue-600">{item.icon}</div>
                                        <span>{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col items-center lg:items-end gap-12 md:gap-16">
                            <Button size="lg" className="rounded-[30px] md:rounded-[40px] px-10 py-8 md:px-12 md:py-10 text-xl md:text-3xl font-black btn-gradient border-none h-auto group w-full shadow-[0_30px_70px_rgba(37,99,235,0.2)] transition-transform group-hover:scale-[1.02] duration-500">
                                프로젝트 문의하기
                                <ArrowRight size={32} className="ml-5 transition-transform group-hover:translate-x-3 duration-500" />
                            </Button>

                            <div className="w-full h-[1px] bg-slate-200/50" />

                            <div className="flex flex-wrap justify-center lg:justify-end gap-12 md:gap-16 text-slate-400 text-xs font-bold uppercase tracking-[0.3em]">
                                <a href="#" className="flex items-center gap-3 hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1">
                                    <Instagram size={20} /> Instagram
                                </a>
                                <a href="#" className="flex items-center gap-3 hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1">
                                    <MessageSquare size={20} /> KakaoTalk
                                </a>
                                <a href="mailto:hello@rnew.studio" className="flex items-center gap-3 hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1">
                                    <Mail size={20} /> Email
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
