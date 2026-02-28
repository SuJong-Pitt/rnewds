"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRightIcon, CheckCircle2Icon, BarChart3Icon, LayersIcon, LightbulbIcon, ZapIcon } from "lucide-react";
import Image from "next/image";

export function AboutHero() {
    return (
        <section className="relative min-h-[90vh] w-full flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden bg-white">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_50%_10%,rgba(37,99,235,0.03),transparent_70%)] -z-10" />

            <div className="relative z-10 text-center max-w-5xl mx-auto space-y-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Badge variant="outline" className="px-4 py-1.5 border-blue-200 text-blue-600 bg-blue-50/50 rounded-full text-xs font-bold tracking-widest uppercase">
                        Structure of Choice 🏗️
                    </Badge>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-8xl lg:text-9xl font-bold leading-[0.95] tracking-tight text-slate-900"
                >
                    디자인 데이터로 <br />
                    <span className="text-slate-400">시작하는 설계의 미학.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-2xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed"
                >
                    우리는 데이터와 심리학, 그리고 건축학적 정밀함을 결합하여 <br className="hidden md:block" />
                    압도적인 구매 전환을 이끌어내는 상세페이지를 건축합니다.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
                >
                    <Button size="lg" className="rounded-2xl px-10 py-8 text-lg font-bold btn-gradient border-none h-auto">
                        프로젝트 시작하기 <ArrowRightIcon className="ml-2 w-6 h-6" />
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-2xl px-10 py-8 text-lg font-bold border-slate-200 hover:bg-slate-50 h-auto">
                        포트폴리오 보기
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}

export function PerformanceSection() {
    const metrics = [
        { icon: <ZapIcon className="w-8 h-8 text-blue-500" />, label: "Response Rate", value: "+450%" },
        { icon: <BarChart3Icon className="w-8 h-8 text-indigo-500" />, label: "Conversion", value: "x3.2" },
        { icon: <LayersIcon className="w-8 h-8 text-slate-500" />, label: "Project Count", value: "500+" },
    ];

    return (
        <section className="relative py-24 md:py-40 px-6 bg-slate-50 rounded-[60px] mx-4 md:mx-10 my-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {metrics.map((metric, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="bg-white border border-slate-100 p-10 rounded-[40px] shadow-sm hover:shadow-xl hover:border-blue-100 transition-all group">
                                <div className="space-y-6">
                                    <div className="p-4 w-fit bg-slate-50 rounded-2xl group-hover:scale-110 transition-transform">
                                        {metric.icon}
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">{metric.label}</div>
                                        <div className="text-5xl font-black text-slate-900 tracking-tighter">{metric.value}</div>
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

export function PhilosophySection() {
    return (
        <section className="py-24 md:py-40 px-6 bg-white overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <h2 className="text-blue-600 text-xs font-bold tracking-[0.4em] uppercase">Philosophy</h2>
                        <h3 className="text-4xl md:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                            아름다움 이전에 <br /> 논리가 앞서야 합니다.
                        </h3>
                        <p className="text-xl text-slate-500 leading-relaxed font-medium">
                            장식적인 요소는 본질을 흐립니다. 우리는 사용자의 시선을 추적하고 구매 버튼까지 도달하는 최단 거리를 설계하는 기획적 정밀함을 최우선으로 합니다.
                        </p>
                        <div className="flex items-center gap-4 py-4">
                            <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
                            <span className="text-lg font-bold text-slate-900 italic">"Design follows Logic."</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="aspect-square bg-slate-100 rounded-[50px] relative overflow-hidden border border-slate-200"
                    >
                        <div className="absolute inset-0 bg-blue-600 opacity-5"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-20 text-center">
                            <div className="text-9xl font-black text-blue-500/10 mb-10 select-none">R:NEW</div>
                            <p className="text-2xl font-bold text-slate-400 italic leading-relaxed">
                                "모든 픽셀에는 <br /> 팔아야 할 이유가 담겨야 합니다."
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export function ProcessSection() {
    const steps = [
        { icon: <BarChart3Icon />, title: "Data Analysis", desc: "시장 데이터와 소비자 심리를 심층 분석합니다." },
        { icon: <LayersIcon />, title: "Architecture", desc: "논리적 정보 설계로 최적의 동선을 구축합니다." },
        { icon: <LightbulbIcon />, title: "Visualizing", desc: "압도적 고퀄리티 그래픽으로 가치를 형상화합니다." },
        { icon: <ZapIcon />, title: "Optimization", desc: "상호작용 데이터를 기반으로 끊임없이 개선합니다." }
    ];

    return (
        <section className="relative py-32 md:py-48 px-6 bg-slate-950 text-white rounded-[60px] mx-4 md:mx-10 my-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-10">
                        <h2 className="text-blue-400 text-xs font-bold tracking-[0.4em] uppercase">The Workflow</h2>
                        <h3 className="text-4xl md:text-8xl font-bold text-white leading-[1.0] tracking-tight">
                            투명하고 <br /> 정밀한 프로세스.
                        </h3>
                        <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-lg font-medium">
                            막연한 직감이 아닌, 검증된 시스템을 통해 완성됩니다. 매 단계마다 당신의 비즈니스는 한 단계 더 진화합니다.
                        </p>
                        <Button variant="outline" className="rounded-2xl border-white/20 hover:bg-white/5 px-8 h-12 text-sm font-bold uppercase tracking-widest">Explore our process</Button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="bg-white/5 border border-white/10 p-8 rounded-[40px] hover:bg-white/10 transition-all space-y-6">
                                    <div className="text-blue-500 w-12 h-12 flex items-center justify-center bg-white/5 rounded-2xl">
                                        {step.icon}
                                    </div>
                                    <h4 className="text-xl font-bold tracking-tight">{step.title}</h4>
                                    <p className="text-sm text-slate-400 leading-relaxed font-medium">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export function TrustSection() {
    return (
        <section className="relative py-40 px-6 text-center bg-white">
            <div className="max-w-5xl mx-auto space-y-12">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-8xl lg:text-9xl font-extrabold text-slate-900 tracking-tighter leading-tight"
                >
                    디자인은 감각이 아니라, <br />
                    <span className="text-slate-300">신뢰의 결과물이어야 합니다.</span>
                </motion.h2>

                <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl mx-auto">
                    수많은 명작들이 증명하는 R:new Design Studio의 정체성은 <br className="hidden md:block" />
                    당신의 브랜드 가치를 완성하는 마지막 조각입니다.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-10 pt-10">
                    <Button size="lg" className="rounded-3xl px-14 py-10 text-xl font-bold btn-gradient border-none h-auto shadow-[0_20px_50px_rgba(37,99,235,0.2)]">
                        지금 문의하기
                    </Button>
                    <div className="text-left">
                        <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Collaboration?</div>
                        <div className="text-2xl font-black text-slate-900 tracking-tight">hello@rnew.studio</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
